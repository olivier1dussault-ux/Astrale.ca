"use client";

import { useLanguage, type Locale, type Messages } from "./LanguageContext";

interface UseTranslationReturn {
  t: (key: string, params?: Record<string, string | number>) => string;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
}

/**
 * Hook for accessing translations and language settings.
 * 
 * @example
 * ```tsx
 * const { t, locale, setLocale } = useTranslation();
 * 
 * // Simple translation
 * <h1>{t("hero.title")}</h1>
 * 
 * // With parameters (e.g., "© {year} Astrale")
 * <p>{t("footer.copyright", { year: 2024 })}</p>
 * 
 * // Switch language
 * <button onClick={() => setLocale("en")}>English</button>
 * ```
 */
export function useTranslation(): UseTranslationReturn {
  const { t: baseT, locale, setLocale, messages } = useLanguage();

  // Enhanced translation function with parameter interpolation
  const t = (key: string, params?: Record<string, string | number>): string => {
    let translation = baseT(key);
    
    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        translation = translation.replace(`{${paramKey}}`, String(value));
      });
    }
    
    return translation;
  };

  return {
    t,
    locale,
    setLocale,
    messages,
  };
}

export default useTranslation;
