"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="relative bg-slate-900 pt-8 pb-6">
      {/* Gradient fade to darker */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-slate-950/30 via-40% to-slate-950/80 to-100%" />
      
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Logo centré */}
        <div className="flex justify-center">
          <Image
            src="/White_Logo_1_cropped.svg"
            alt="Astrale"
            width={240}
            height={60}
          />
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
            href="#contact" 
            className="text-xs text-slate-400 transition-colors hover:text-blue-400"
          >
            {t("footer.legalLinks.contact")}
          </a>
        </div>
        
        {/* Copyright + Email */}
        <div className="mt-3 border-t border-slate-800 pt-3">
          <div className="flex flex-col items-center justify-center gap-1 text-xs text-slate-500 sm:flex-row sm:gap-1">
            <span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>
            <span className="hidden sm:inline">•</span>
            <a 
              href="mailto:contact@astrale.ca" 
              className="flex items-center gap-1 transition-colors hover:text-blue-400"
            >
              <Mail className="h-3 w-3" />
              contact@astrale.ca
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
