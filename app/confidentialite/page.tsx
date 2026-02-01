"use client";

import Image from "next/image";
import { Mail, ArrowLeft, Shield, Lock, Eye, UserCheck, Database, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";

export default function Confidentialite() {
  const { t, messages } = useTranslation();
  
  // Get arrays from messages
  const identificationItems = messages.privacy.sections.collected.identificationItems as string[];
  const technicalItems = messages.privacy.sections.collected.technicalItems as string[];
  const purposeItems = messages.privacy.sections.purposes.items as Array<{ title: string; content: string }>;
  const sharingItems = messages.privacy.sections.sharing.items as Array<{ title: string; content: string }>;
  const retentionItems = messages.privacy.sections.retention.items as Array<{ label: string; value: string }>;
  const securityItems = messages.privacy.sections.security.items as Array<{ title: string; subtitle: string }>;
  const rightsItems = messages.privacy.sections.rights.items as Array<{ title: string; content: string }>;
  
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-6">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Astrale"
              width={180}
              height={45}
              priority
            />
          </a>
          <a href="/">
            <Button variant="ghost" className="text-slate-600 hover:text-blue-600">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("legal.backToHome")}
            </Button>
          </a>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">{t("privacy.title")}</h1>
          </div>
          <p className="mt-4 text-slate-500">
            {t("privacy.lastUpdated")}
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <p className="text-slate-700">
            {t("privacy.intro")}
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1: Renseignements collectés */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Database className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-slate-900">{t("privacy.sections.collected.title")}</h2>
            </div>
            <p className="text-slate-600">
              {t("privacy.sections.collected.intro")}
            </p>
            
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">{t("privacy.sections.collected.identification")}</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  {identificationItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">{t("privacy.sections.collected.technical")}</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  {technicalItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Finalités de la collecte */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Eye className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-slate-900">{t("privacy.sections.purposes.title")}</h2>
            </div>
            <p className="text-slate-600">
              {t("privacy.sections.purposes.intro")}
            </p>
            <ul className="mt-4 space-y-3 text-slate-600">
              {purposeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">{index + 1}</span>
                  <span><strong>{item.title}</strong> — {item.content}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3: Base légale (Consentement) */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <UserCheck className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-slate-900">{t("privacy.sections.consent.title")}</h2>
            </div>
            <p className="text-slate-600">
              {t("privacy.sections.consent.content")}
            </p>
            <div className="mt-4 rounded-lg border border-green-100 bg-green-50 p-4">
              <p className="text-sm text-green-800">
                <strong>{t("privacy.sections.consent.notice")}</strong>
              </p>
            </div>
          </section>

          {/* Section 4: Partage avec des tiers */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">{t("privacy.sections.sharing.title")}</h2>
            <p className="mt-4 text-slate-600">
              {t("privacy.sections.sharing.intro")}
            </p>
            <p className="mt-4 text-slate-600">
              {t("privacy.sections.sharing.content")}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              {sharingItems.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}</strong> — {item.content}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5: Durée de conservation */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Clock className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-slate-900">{t("privacy.sections.retention.title")}</h2>
            </div>
            <p className="text-slate-600">
              {t("privacy.sections.retention.intro")}
            </p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6">
              <ul className="space-y-3 text-slate-600">
                {retentionItems.map((item, index) => (
                  <li key={index} className={`flex items-center justify-between ${index < retentionItems.length - 1 ? "border-b border-slate-100 pb-3" : ""}`}>
                    <span>{item.label}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-slate-600">
              {t("privacy.sections.retention.outro")}
            </p>
          </section>

          {/* Section 6: Mesures de sécurité */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Lock className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-slate-900">{t("privacy.sections.security.title")}</h2>
            </div>
            <p className="text-slate-600">
              {t("privacy.sections.security.intro")}
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {securityItems.map((item, index) => (
                <div key={index} className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    {index === 0 && <Lock className="h-5 w-5 text-blue-600" />}
                    {index === 1 && <Shield className="h-5 w-5 text-blue-600" />}
                    {index === 2 && <Database className="h-5 w-5 text-blue-600" />}
                  </div>
                  <p className="text-sm font-medium text-slate-900">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Vos droits (Loi 25) */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">{t("privacy.sections.rights.title")}</h2>
            <p className="mt-4 text-slate-600">
              {t("privacy.sections.rights.intro")}
            </p>
            <div className="mt-6 space-y-4">
              {rightsItems.map((item, index) => (
                <div key={index} className="rounded-lg border border-slate-200 bg-white p-4">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-600">
              {t("privacy.sections.rights.outro", { email: "" })}
              <a href="mailto:contact@astrale.ca" className="text-blue-600 hover:underline">
                contact@astrale.ca
              </a>
              .
            </p>
          </section>

          {/* Section 8: Témoins (Cookies) */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">{t("privacy.sections.cookies.title")}</h2>
            <p className="mt-4 text-slate-600">
              {t("privacy.sections.cookies.intro")}
            </p>
            
            <h3 className="mt-6 text-lg font-semibold text-slate-900">{t("privacy.sections.cookies.typesTitle")}</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-green-100 bg-green-50 p-4">
                <h4 className="font-semibold text-green-900">{t("privacy.sections.cookies.necessary.title")}</h4>
                <p className="mt-1 text-sm text-green-800">
                  {t("privacy.sections.cookies.necessary.content")}
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h4 className="font-semibold text-slate-900">{t("privacy.sections.cookies.analytics.title")}</h4>
                <p className="mt-1 text-sm text-slate-600">
                  {t("privacy.sections.cookies.analytics.content")}
                </p>
              </div>
            </div>
            <p className="mt-4 text-slate-600">
              {t("privacy.sections.cookies.outro")}
            </p>
          </section>

          {/* Section 9: Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">{t("privacy.sections.modifications.title")}</h2>
            <p className="mt-4 text-slate-600">
              {t("privacy.sections.modifications.content1")}
            </p>
            <p className="mt-4 text-slate-600">
              {t("privacy.sections.modifications.content2")}
            </p>
          </section>

          {/* Section 10: Contact */}
          <section className="rounded-xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold text-slate-900">{t("privacy.sections.contact.title")}</h2>
            <p className="mt-4 text-slate-600">
              {t("privacy.sections.contact.intro")}
            </p>
            <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-6">
              <p className="font-semibold text-slate-900">Astrale</p>
              <p className="mt-2 text-slate-600">
                {t("privacy.sections.contact.role")}
              </p>
              <a
                href="mailto:contact@astrale.ca"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-medium text-white transition-all hover:from-blue-500 hover:to-blue-600"
              >
                <Mail className="h-5 w-5" />
                contact@astrale.ca
              </a>
            </div>

            <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-600">
                <strong>{t("privacy.sections.contact.cai.title")}</strong><br />
                {t("privacy.sections.contact.cai.content")}{" "}
                <a 
                  href="https://www.cai.gouv.qc.ca" 
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cai.gouv.qc.ca
                </a>
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          {t("legal.copyright", { year: new Date().getFullYear() })}
        </div>
      </footer>
    </main>
  );
}
