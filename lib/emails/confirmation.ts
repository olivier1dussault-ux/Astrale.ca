type Locale = 'fr' | 'en';

interface ConfirmationEmailParams {
  name: string;
  locale: Locale;
}

interface ConfirmationEmailResult {
  subject: string;
  html: string;
}

const content = {
  fr: {
    subject: 'Merci de nous avoir contactés — Astrale',
    greeting: (name: string) => `Bonjour ${name},`,
    thankYou: 'Merci de nous avoir contactés!',
    body: 'Nous avons bien reçu votre demande et un membre de notre équipe vous répondra dans les plus brefs délais.',
    meantime: 'En attendant, n\'hésitez pas à visiter notre site pour en apprendre davantage sur nos solutions.',
    visitSite: 'Visiter astrale.ca',
    signature: 'L\'équipe Astrale',
    footer: 'Ce courriel a été envoyé automatiquement suite à votre demande de contact sur astrale.ca. Veuillez ne pas y répondre.',
  },
  en: {
    subject: 'Thank you for contacting us — Astrale',
    greeting: (name: string) => `Hello ${name},`,
    thankYou: 'Thank you for contacting us!',
    body: 'We have received your request and a member of our team will get back to you shortly.',
    meantime: 'In the meantime, feel free to visit our website to learn more about our solutions.',
    visitSite: 'Visit astrale.ca',
    signature: 'The Astrale Team',
    footer: 'This email was sent automatically following your contact request on astrale.ca. Please do not reply to this email.',
  },
};

/** Escape HTML special characters to prevent XSS in email content */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function generateConfirmationEmail({ name, locale }: ConfirmationEmailParams): ConfirmationEmailResult {
  const t = content[locale];
  const safeName = escapeHtml(name);

  const html = `
<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${t.subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb, #06b6d4); border-radius: 12px 12px 0 0; padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">Astrale</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color: #ffffff; padding: 40px;">
              <p style="margin: 0 0 8px; font-size: 16px; color: #334155; line-height: 1.6;">
                ${t.greeting(safeName)}
              </p>
              <h2 style="margin: 16px 0 12px; font-size: 22px; font-weight: 700; color: #0f172a;">
                ${t.thankYou}
              </h2>
              <p style="margin: 0 0 20px; font-size: 16px; color: #475569; line-height: 1.7;">
                ${t.body}
              </p>
              <p style="margin: 0 0 28px; font-size: 16px; color: #475569; line-height: 1.7;">
                ${t.meantime}
              </p>

              <!-- CTA Button -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td style="border-radius: 8px; background: linear-gradient(135deg, #2563eb, #06b6d4);">
                    <a href="https://astrale.ca" target="_blank" style="display: inline-block; padding: 14px 32px; font-size: 15px; font-weight: 600; color: #ffffff; text-decoration: none;">
                      ${t.visitSite} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Signature -->
              <p style="margin: 32px 0 0; font-size: 16px; color: #334155; line-height: 1.6;">
                ${t.signature}
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; border-radius: 0 0 12px 12px; padding: 24px 40px; text-align: center;">
              <p style="margin: 0; font-size: 13px; color: #94a3b8; line-height: 1.5;">
                ${t.footer}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  return { subject: t.subject, html };
}
