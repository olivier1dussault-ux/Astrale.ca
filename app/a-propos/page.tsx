"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";

export default function APropos() {
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
              {t("about.backToHome")}
            </Button>
          </a>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900">{t("about.title")}</h1>
        </div>

        <div className="prose prose-slate max-w-none space-y-8">
          {/* Mission */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">{t("about.mission.title")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {t("about.mission.content")}
            </p>
          </section>

          {/* Valeurs */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">{t("about.values.title")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {t("about.values.content")}
            </p>
          </section>

          {/* Localisation */}
          <section>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold text-slate-900">{t("about.location.title")}</h2>
              <Image
                src="/Flag_of_Quebec.svg.png"
                alt="Drapeau du Québec"
                width={24}
                height={16}
                className="rounded-sm"
              />
            </div>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {t("about.location.content")}
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
