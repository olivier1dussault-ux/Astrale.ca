"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  DollarSign,
  Calendar,
  Users,
  BadgePercent,
  Handshake,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";

const PROGRAM_KEYS = ["essor", "iria", "scaleai", "partenaria", "iq"] as const;

export default function Subventions() {
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
            <Button
              variant="ghost"
              className="text-slate-600 hover:text-blue-600"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("subsidiesPage.backToHome")}
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-4 flex justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              <BadgePercent className="h-4 w-4" />
              {t("subsidies.badge")}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900">
            {t("subsidiesPage.title")}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            {t("subsidiesPage.intro")}
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-6">
          {PROGRAM_KEYS.map((key) => (
            <article
              key={key}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Card header */}
              <div className="border-b border-slate-100 bg-slate-50/50 px-6 py-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-xl font-bold text-slate-900">
                    {t(`subsidiesPage.programs.${key}.name`)}
                  </h2>
                  <span className="text-sm font-medium text-blue-600">
                    {t(`subsidiesPage.programs.${key}.org`)}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="px-6 py-5">
                <p className="text-base leading-relaxed text-slate-600">
                  {t(`subsidiesPage.programs.${key}.description`)}
                </p>

                {/* Details grid */}
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-lg bg-blue-50/60 p-3">
                    <DollarSign className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        {t("subsidiesPage.fundingLabel")}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-slate-900">
                        {t(`subsidiesPage.programs.${key}.funding`)}
                      </p>
                      <p className="text-xs text-slate-500">
                        {t(`subsidiesPage.programs.${key}.fundingType`)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">
                    <Users className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-500" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        {t("subsidiesPage.eligibilityLabel")}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-700">
                        {t(`subsidiesPage.programs.${key}.eligibility`)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">
                    <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-500" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        {t("subsidiesPage.periodLabel")}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-700">
                        {t(`subsidiesPage.programs.${key}.period`)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end p-3">
                    <a
                      href={t(`subsidiesPage.programs.${key}.link`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="gap-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                      >
                        {t("subsidiesPage.visitWebsite")}
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Accompagnement section */}
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
              <Handshake className="h-7 w-7 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              {t("subsidiesPage.accompagnement.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
              {t("subsidiesPage.accompagnement.content")}
            </p>
            <div className="mt-8">
              <a href="/#contact">
                <Button className="h-12 bg-gradient-to-r from-blue-600 to-cyan-600 px-8 font-semibold shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30">
                  {t("subsidiesPage.accompagnement.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 border-t border-slate-700 pt-6">
            <div className="flex items-start justify-center gap-2.5">
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" />
              <p className="max-w-2xl text-xs leading-relaxed text-slate-400">
                {t("subsidiesPage.disclaimer")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
