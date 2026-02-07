import { Resend } from 'resend';
import { z } from 'zod';
import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';
import { generateConfirmationEmail } from '@/lib/emails/confirmation';

// Lazy init Resend client to avoid build-time env var crash
let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

// Emails allowed to submit multiple times (for testing)
const WHITELISTED_EMAILS = ['olivier.dussault@astrale.ca'];

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  company: z.string().optional(),
  email: z.string().email('Adresse email invalide'),
  message: z.string().optional(),
  locale: z.enum(['fr', 'en']).default('fr'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, company, email, message, locale } = result.data;
    const normalizedEmail = email.toLowerCase().trim();

    // Check if email has already submitted (unless whitelisted)
    if (!WHITELISTED_EMAILS.includes(normalizedEmail)) {
      const { data: existingSubmission } = await getSupabase()
        .from('contact_submissions')
        .select('id')
        .eq('email', normalizedEmail)
        .single();

      if (existingSubmission) {
        return NextResponse.json(
          { error: 'already_submitted' },
          { status: 429 }
        );
      }
    }

    // Build email content
    const emailContent = `
Nouveau message de contact depuis le site Astrale

---
Nom: ${name}
${company ? `Entreprise: ${company}` : ''}
Email: ${email}
---

Message:
${message}
    `.trim();

    // Send email via Resend
    const { data, error } = await getResend().emails.send({
      from: `Astrale Contact <noreply@${process.env.CONTACT_EMAIL?.split('@')[1] || 'astrale.ca'}>`,
      to: [process.env.CONTACT_EMAIL || 'contact@astrale.ca'],
      replyTo: email,
      subject: `Nouveau message de ${name}${company ? ` (${company})` : ''}`,
      text: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Store submission in database (for ALL emails, including whitelisted)
    const { error: insertError } = await getSupabase()
      .from('contact_submissions')
      .insert({
        email: normalizedEmail,
        name,
        company: company || null,
        message: message || null,
        locale,
      });

    if (insertError) {
      console.error('Supabase insert error:', JSON.stringify(insertError));
      // Don't fail the request if insert fails - email was already sent
    }

    // Send confirmation email to the user (best-effort, don't fail the request)
    try {
      const confirmation = generateConfirmationEmail({ name, locale });
      const { error: confirmationError } = await getResend().emails.send({
        from: `Astrale <noreply@${process.env.CONTACT_EMAIL?.split('@')[1] || 'astrale.ca'}>`,
        to: [email],
        subject: confirmation.subject,
        html: confirmation.html,
      });

      if (confirmationError) {
        console.error('Confirmation email error:', confirmationError);
      }
    } catch (confirmationErr) {
      console.error('Failed to send confirmation email:', confirmationErr);
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
