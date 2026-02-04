"use client";

import Image from "next/image";
import { Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/lib/i18n";

export default function MentionsLegales() {
  const { t } = useTranslation();
  
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
          <h1 className="text-4xl font-bold text-slate-900">{t("legal.title")}</h1>
          <p className="mt-4 text-slate-500">
            {t("legal.lastUpdated")}
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          {/* Identification */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900">{t("legal.sections.editor.title")}</h2>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-slate-600">
                <strong className="text-slate-900">{t("legal.sections.editor.companyName")}</strong> Astrale
              </p>
              <p className="mt-2 text-slate-600">
                <strong className="text-slate-900">{t("legal.sections.editor.email")}</strong>{" "}
                <a href="mailto:contact@astrale.ca" className="text-blue-600 hover:underline">
                  contact@astrale.ca
                </a>
              </p>
              <p className="mt-2 text-slate-600">
                <strong className="text-slate-900">{t("legal.sections.editor.website")}</strong>{" "}
                <a href="https://astrale.ca" className="text-blue-600 hover:underline">
                  astrale.ca
                </a>
              </p>
            </div>
          </section>

          {/* Responsable protection des renseignements (Loi 25) */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900">
              {t("legal.sections.privacy.title")}
            </h2>
            <p className="mt-4 text-slate-600">
              {t("legal.sections.privacy.content")}
            </p>
            <p className="mt-4 text-slate-600">
              {t("legal.sections.privacy.contact")}
            </p>
            <div className="mt-4 flex items-center gap-3 rounded-lg border border-blue-100 bg-blue-50 p-4">
              <Mail className="h-5 w-5 text-blue-600" />
              <a href="mailto:contact@astrale.ca" className="font-medium text-blue-600 hover:underline">
                contact@astrale.ca
              </a>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-lg border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold text-slate-900">{t("legal.sections.contact.title")}</h2>
            <p className="mt-4 text-slate-600">
              {t("legal.sections.contact.content")}
            </p>
            <div className="mt-6">
              <a
                href="mailto:contact@astrale.ca"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-medium text-white transition-all hover:from-blue-500 hover:to-blue-600"
              >
                <Mail className="h-5 w-5" />
                contact@astrale.ca
              </a>
            </div>
          </section>
        </div>
      </article>

      {/* Footer */}
      <Footer />
    </main>
  );
}
