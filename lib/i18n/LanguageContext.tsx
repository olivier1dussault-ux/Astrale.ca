"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import fr from "@/messages/fr.json";
import en from "@/messages/en.json";

// Types
export type Locale = "fr" | "en";

type Messages = typeof fr;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  messages: Messages;
}

// Messages map
const messages: Record<Locale, Messages> = { fr, en };

// Cookie helpers
const COOKIE_NAME = "locale";

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return undefined;
}

function setCookie(name: string, value: string, days: number = 365): void {
  if (typeof document === "undefined") return;
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

// Detect locale from browser
function detectLocale(): Locale {
  // 1. Check cookie first
  const cookieLocale = getCookie(COOKIE_NAME);
  if (cookieLocale === "fr" || cookieLocale === "en") {
    return cookieLocale;
  }

  // 2. Check browser language
  if (typeof navigator !== "undefined") {
    const browserLang = navigator.language.split("-")[0].toLowerCase();
    if (browserLang === "en") {
      return "en";
    }
  }

  // 3. Default to French
  return "fr";
}

// Get nested value from object using dot notation
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path; // Return the key if not found
    }
  }

  return typeof current === "string" ? current : path;
}

// Context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [isHydrated, setIsHydrated] = useState(false);

  // Detect locale on client side only
  useEffect(() => {
    const detectedLocale = detectLocale();
    setLocaleState(detectedLocale);
    setIsHydrated(true);
  }, []);

  // Set locale and persist to cookie
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setCookie(COOKIE_NAME, newLocale);
    // Update html lang attribute
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLocale;
    }
  }, []);

  // Translation function
  const t = useCallback(
    (key: string): string => {
      return getNestedValue(messages[locale] as Record<string, unknown>, key);
    },
    [locale]
  );

  // Update html lang attribute when locale changes
  useEffect(() => {
    if (isHydrated && typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale, isHydrated]);

  const value: LanguageContextType = {
    locale,
    setLocale,
    t,
    messages: messages[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use the language context
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Export messages type for type safety
export type { Messages };
