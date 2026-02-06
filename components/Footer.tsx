"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="relative pt-8 pb-10">
      {/* Seamless background - mirrored from contact section */}
      <div className="absolute inset-0 bg-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-900" />
      {/* Radial accents mirrored from contact section */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-600/8 via-transparent to-transparent" />
      {/* Subtle vignette at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Subtle glowing separator */}
        <div className="mx-auto mb-8 h-px w-32 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        
        {/* Logo centré */}
        <div className="flex justify-center">
          <a href="/" className="transition-opacity hover:opacity-80">
            <Image
              src="/White_Logo_1_cropped.svg"
              alt="Astrale"
              width={240}
              height={60}
            />
          </a>
        </div>
        
        {/* Tagline centré */}
        <p className="mx-auto mt-1 max-w-md text-center text-xs text-slate-400">
          {t("footer.tagline")}
        </p>
        
        {/* Liens légaux - horizontal centré avec séparateurs */}
        <div className="mt-3 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-2">
          <a 
            href="/mentions-legales" 
            className="text-xs text-slate-400 transition-colors hover:text-blue-400"
          >
            {t("footer.legalLinks.legal")}
          </a>
          <span className="hidden text-slate-600 sm:inline">•</span>
          <a 
            href="/confidentialite" 
            className="text-xs text-slate-400 transition-colors hover:text-blue-400"
          >
            {t("footer.legalLinks.privacy")}
          </a>
          <span className="hidden text-slate-600 sm:inline">•</span>
          <a 
            href="/a-propos" 
            className="text-xs text-slate-400 transition-colors hover:text-blue-400"
          >
            {t("footer.legalLinks.about")}
          </a>
        </div>
        
        {/* Copyright */}
        <div className="mt-4 border-t border-slate-700/30 pt-4">
          <p className="text-xs text-slate-500">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
