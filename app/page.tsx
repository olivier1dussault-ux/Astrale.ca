"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Cpu,
  FileSpreadsheet,
  MessageCircle,
  Zap,
  X,
  Check,
  Clock,
  ArrowRight,
  ArrowDown,
  Mail,
  Send,
  Building2,
  User,
  DollarSign,
  TrendingUp,
  Truck,
  Play,
  Sparkles,
  Hand,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { useTranslation } from "@/lib/i18n";

// ============================================
// ANIMATION VARIANTS
// ============================================
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// ============================================
// NAVBAR
// ============================================
function Navbar() {
  const { t, locale, setLocale } = useTranslation();
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-8">
        {/* Logo - Left */}
        <a href="/" className="flex w-60 items-center">
          <Image
            src="/logo.svg"
            alt="Astrale"
            width={240}
            height={60}
            priority
          />
        </a>

        {/* Navigation - Centered */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          <a
            href="#fonctionnement"
            className="text-base font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            {t("nav.howItWorks")}
          </a>
          <a
            href="#ecosysteme"
            className="text-base font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            {t("nav.ecosystem")}
          </a>
          <a
            href="#roi"
            className="text-base font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            {t("nav.impact")}
          </a>
        </div>

        {/* CTA - Right */}
        <div className="ml-auto flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
            className="text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>
          
          <a href="#contact">
            <Button className="h-11 bg-gradient-to-r from-blue-600 to-blue-700 px-6 text-base font-medium text-white shadow-md shadow-blue-500/20 transition-all hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/30">
              {t("nav.contact")}
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============================================
// HERO VISUAL COMPONENT
// ============================================
function HeroVisual() {
  const { t } = useTranslation();
  
  return (
    <motion.div
      variants={fadeInRight}
      className="relative hidden lg:block"
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Main card - SMS Conversation */}
        <div className="relative rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-2xl shadow-slate-300/50 backdrop-blur-sm">
          {/* Phone header */}
          <div className="mb-4 flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <MessageCircle className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-base font-medium text-slate-900">Astrale</p>
              <p className="text-sm text-slate-500">{t("heroVisual.via")}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-4">
            {/* User's message (outgoing - right) - you sent the POD first */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="flex justify-end"
            >
              <div className="rounded-2xl rounded-tr-sm bg-gradient-to-r from-blue-600 to-blue-700 p-3">
                <div className="relative h-44 w-64 overflow-hidden rounded-lg bg-white/20">
                  <Image
                    src="/POD.png"
                    alt="Proof of delivery example"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Astrale response (incoming - left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.4 }}
              className="flex gap-2"
            >
              <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Sparkles className="h-4 w-4 text-blue-500" />
                  <span>Astrale</span>
                </div>
                <p className="mt-1.5 text-base text-slate-700">{t("heroVisual.extractionSuccess")}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
      </motion.div>
    </motion.div>
  );
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section className="relative overflow-hidden pb-16 pt-10 lg:pb-20 lg:pt-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/HeroBackground.jpg"
          alt="Proof of delivery signature"
          className="h-full w-full object-cover object-center"
        />
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-blue-50/80" />
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
        {/* Bottom fade - transitions to slate-50 for processus section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 via-white/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-3"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-sm font-medium text-blue-700 backdrop-blur-sm">
                <Truck className="h-4 w-4" />
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              {t("hero.titlePart1")}
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {t("hero.titleHighlight")}
              </span>
              <br />
              {t("hero.titlePart2")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="mb-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a href="#contact">
                <Button
                  size="lg"
                  className="group h-14 w-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 text-base font-semibold shadow-xl shadow-blue-500/25 transition-all hover:from-blue-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-blue-500/30 sm:w-auto"
                >
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#fonctionnement">
                <Button
                  size="lg"
                  variant="outline"
                  className="group h-14 w-full border-slate-300 bg-white/90 px-8 text-base font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-blue-300 hover:bg-white hover:text-blue-600 sm:w-auto"
                >
                  <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  {t("hero.ctaSecondary")}
                </Button>
              </a>
            </motion.div>

            {/* Social Proof Bar */}
            <motion.div
              variants={fadeInUp}
              className="mt-6 flex flex-wrap items-center gap-6 border-t border-slate-200/60 pt-6 sm:gap-8"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t("hero.stats.days")}</p>
                  <p className="text-xs text-slate-500">{t("hero.stats.daysLabel")}</p>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-slate-200 sm:block" />
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100">
                  <Zap className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t("hero.stats.automation")}</p>
                  <p className="text-xs text-slate-500">{t("hero.stats.automationLabel")}</p>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-slate-200 sm:block" />
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-100">
                  <Check className="h-4 w-4 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t("hero.stats.instant")}</p>
                  <p className="text-xs text-slate-500">{t("hero.stats.instantLabel")}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-2"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// REALITY VS ASTRALE SECTION
// ============================================
function RealityVsAstraleSection() {
  const { t, messages } = useTranslation();
  const beforeItems = messages.comparison.beforeItems as Array<{ title: string; description: string }>;
  const afterItems = messages.comparison.afterItems as Array<{ title: string; description: string; metric?: string }>;

  const beforeIcons = [Clock, FileText, X];
  const afterIcons = [Zap, TrendingUp, Check];
  
  return (
    <section id="solution" className="relative bg-white py-24">
      {/* Gradient transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            {t("comparison.badge")}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {t("comparison.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            {t("comparison.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* PROCESSUS MANUEL */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-200">
                <Hand className="h-7 w-7 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{t("comparison.before")}</h3>
            </div>
            <div className="space-y-6">
              {beforeItems.map((item, index) => {
                const Icon = beforeIcons[index];
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-200/80">
                      <Icon className="h-5 w-5 text-slate-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AVEC ASTRALE */}
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-cyan-50/50 p-6 lg:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/20">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{t("comparison.after")}</h3>
            </div>
            <div className="space-y-6">
              {afterItems.map((item, index) => {
                const Icon = afterIcons[index];
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <p className="font-semibold text-slate-800">{item.title}</p>
                        {item.metric && (
                          <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-bold text-white">
                            {item.metric}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// DATA FLOW SECTION
// ============================================
function DataFlowSection() {
  const { t, messages } = useTranslation();
  const howItWorksSteps = messages.process.howItWorksSteps as string[];
  
  return (
    <section id="fonctionnement" className="relative bg-gradient-to-b from-slate-50 via-white to-white py-24">
      {/* Gradient transition to next section (Comparaison) */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-white to-white" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            {t("process.badge")}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {t("process.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            {t("process.subtitle")}
          </p>
        </div>

        {/* Flow Diagram - Desktop */}
        <div className="mt-16 hidden md:block">
          {/* Icons row with centered arrows */}
          <div className="flex items-center justify-center">
            {/* Step 1: POD Received */}
            <div className="flex w-32 items-center justify-center lg:w-36">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
                <FileText className="h-10 w-10 text-slate-700" />
              </div>
            </div>

            {/* Connector 1 - Centered arrow */}
            <div className="flex w-16 items-center justify-center lg:w-20">
              <div className="h-px w-4 bg-gradient-to-r from-slate-200 to-blue-300 lg:w-6" />
              <ArrowRight className="mx-1 h-5 w-5 text-blue-500" />
              <div className="h-px w-4 bg-gradient-to-r from-blue-300 to-slate-200 lg:w-6" />
            </div>

            {/* Step 2: Extraction */}
            <div className="flex w-32 items-center justify-center lg:w-36">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30">
                <Cpu className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Connector 2 - Centered arrow */}
            <div className="flex w-16 items-center justify-center lg:w-20">
              <div className="h-px w-4 bg-gradient-to-r from-slate-200 to-blue-300 lg:w-6" />
              <ArrowRight className="mx-1 h-5 w-5 text-blue-500" />
              <div className="h-px w-4 bg-gradient-to-r from-blue-300 to-slate-200 lg:w-6" />
            </div>

            {/* Step 3: ERP/Invoice */}
            <div className="flex w-32 items-center justify-center lg:w-36">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
                <FileSpreadsheet className="h-10 w-10 text-slate-700" />
              </div>
            </div>
          </div>

          {/* Labels row */}
          <div className="mt-4 flex items-start justify-center">
            {/* Label 1 */}
            <div className="flex w-32 flex-col items-center text-center lg:w-36">
              <span className="text-sm font-semibold text-slate-900">
                {t("process.step1")}
              </span>
              <span className="mt-1 text-xs leading-tight text-slate-500">{t("process.step1Sub")}</span>
            </div>

            {/* Spacer for connector */}
            <div className="w-16 lg:w-20" />

            {/* Label 2 */}
            <div className="flex w-32 flex-col items-center text-center lg:w-36">
              <span className="text-sm font-semibold text-slate-900">
                {t("process.step2")}
              </span>
              <span className="mt-1 text-xs leading-tight text-slate-500">{t("process.step2Sub")}</span>
            </div>

            {/* Spacer for connector */}
            <div className="w-16 lg:w-20" />

            {/* Label 3 */}
            <div className="flex w-32 flex-col items-center text-center lg:w-36">
              <span className="text-sm font-semibold text-slate-900">
                {t("process.step3")}
              </span>
              <span className="mt-1 text-xs leading-tight text-slate-500">{t("process.step3Sub")}</span>
            </div>
          </div>
        </div>

        {/* Flow Diagram - Mobile */}
        <div className="mt-16 flex flex-col items-center gap-2 md:hidden">
          {/* Step 1: POD Received */}
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
              <FileText className="h-10 w-10 text-slate-700" />
            </div>
            <span className="mt-3 text-sm font-semibold text-slate-900">
              {t("process.step1")}
            </span>
            <span className="text-xs text-slate-500">{t("process.step1Sub")}</span>
          </div>

          {/* Connector - Vertical arrow */}
          <div className="flex items-center justify-center py-2">
            <ArrowDown className="h-5 w-5 text-blue-500" />
          </div>

          {/* Step 2: Extraction */}
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30">
              <Cpu className="h-10 w-10 text-white" />
            </div>
            <span className="mt-3 text-sm font-semibold text-slate-900">
              {t("process.step2")}
            </span>
            <span className="text-xs text-slate-500">{t("process.step2Sub")}</span>
          </div>

          {/* Connector - Vertical arrow */}
          <div className="flex items-center justify-center py-2">
            <ArrowDown className="h-5 w-5 text-blue-500" />
          </div>

          {/* Step 3: ERP/Invoice */}
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
              <FileSpreadsheet className="h-10 w-10 text-slate-700" />
            </div>
            <span className="mt-3 text-sm font-semibold text-slate-900">
              {t("process.step3")}
            </span>
            <span className="text-xs text-slate-500">{t("process.step3Sub")}</span>
          </div>
        </div>

        {/* Technical details */}
        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            {t("process.howItWorksTitle")}
          </h3>
          <div className="mt-6 space-y-4 text-slate-600">
            {howItWorksSteps.map((step, index) => (
              <p key={index} className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">{index + 1}</span>
                {step}
              </p>
            ))}
          </div>
        </div>

        {/* Callout */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-center shadow-xl">
          <p className="text-base font-semibold text-white">
            {t("process.callout")}
          </p>
          <p className="mt-2 text-sm text-slate-400">
            {t("process.calloutSub")}
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// ROI CALCULATOR SECTION
// ============================================
function ROICalculatorSection() {
  const { t, locale } = useTranslation();
  const [documents, setDocuments] = useState(500);
  const [timePerDoc, setTimePerDoc] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(25);

  // Format number with spaces (consistent across server/client)
  const formatNumber = (num: number) => {
    return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, locale === "fr" ? " " : ",");
  };

  // Calculations
  // Temps total manuel par mois (en heures)
  const totalManualHoursPerMonth = (documents * timePerDoc) / 60;
  // Temps économisé avec 90% d'automatisation
  const hoursPerMonth = totalManualHoursPerMonth * 0.90;
  const hoursPerYear = hoursPerMonth * 12;
  const savingsPerYear = hoursPerYear * hourlyRate;
  // Accélération du cycle de facturation (dynamique selon la charge de travail)
  // Plus de travail manuel = plus de délai actuel = plus d'accélération avec Astrale
  // Échelle: 5-20 jours selon les heures manuelles (0-100+ heures)
  const billingAcceleration = Math.min(20, Math.max(5, Math.round(5 + (totalManualHoursPerMonth / 100) * 15)));

  return (
    <section id="roi" className="relative bg-gradient-to-b from-white to-blue-50/50 py-16 md:py-24">
      {/* Gradient transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            {t("roi.badge")}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {t("roi.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            {t("roi.subtitle")}
          </p>
        </div>

        {/* Calculator Panel - Always visible */}
        <div className="mt-8 sm:mt-10 md:mt-12 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:p-6 md:p-8">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {/* Inputs */}
            <div className="flex flex-col">
              <h3 className="mb-4 sm:mb-6 text-lg font-semibold text-slate-900">{t("roi.yourData")}</h3>
              
              <div className="flex flex-1 flex-col justify-between space-y-4 sm:space-y-5">
                {/* Documents per month */}
                <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-4">
                  <label className="mb-3 flex items-center justify-between text-sm font-medium text-slate-700">
                    <span>{t("roi.documentsPerMonth")}</span>
                    <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">{formatNumber(documents)}</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="5000"
                    step="10"
                    value={documents}
                    onChange={(e) => setDocuments(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
                  />
                  <p className="mt-2 text-xs text-slate-500">{t("roi.documentsHint")}</p>
                </div>

                {/* Time per document */}
                <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-4">
                  <label className="mb-3 flex items-center justify-between text-sm font-medium text-slate-700">
                    <span>{t("roi.timePerDoc")}</span>
                    <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">{timePerDoc} min</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={timePerDoc}
                    onChange={(e) => setTimePerDoc(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
                  />
                  <p className="mt-2 text-xs text-slate-500">{t("roi.timeHint")}</p>
                </div>

                {/* Hourly rate */}
                <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-4">
                  <label className="mb-3 flex items-center justify-between text-sm font-medium text-slate-700">
                    <span>{t("roi.hourlyRate")}</span>
                    <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">{hourlyRate} $/h</span>
                  </label>
                  <input
                    type="range"
                    min="15"
                    max="75"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
                  />
                  <p className="mt-2 text-xs text-slate-500">{t("roi.hourlyHint")}</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 sm:p-6 text-white">
              <h3 className="mb-4 sm:mb-6 text-lg font-semibold">{t("roi.results")}</h3>
              
              <div className="flex flex-1 flex-col justify-between space-y-4 sm:space-y-5">
                <div className="rounded-lg bg-white/10 p-3 sm:p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 flex-shrink-0 text-blue-400" />
                      <span className="text-sm text-slate-300">{t("roi.hoursPerMonth")}</span>
                    </div>
                    <span className="text-xl font-bold sm:text-2xl">{Math.round(hoursPerMonth)} h</span>
                  </div>
                </div>

                <div className="rounded-lg bg-white/10 p-3 sm:p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-sm text-slate-300">{t("roi.hoursPerYear")}</span>
                    </div>
                    <span className="text-xl font-bold sm:text-2xl">{formatNumber(hoursPerYear)} h</span>
                  </div>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-3 sm:p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 flex-shrink-0 text-cyan-400" />
                      <span className="text-sm text-slate-300">{t("roi.savingsPerYear")}</span>
                    </div>
                    <span className="text-xl font-bold text-cyan-400 sm:text-2xl">{formatNumber(savingsPerYear)} $</span>
                  </div>
                </div>

                <div className="rounded-lg bg-white/10 p-3 sm:p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                      <span className="text-sm text-slate-300">{t("roi.billingCycle")}</span>
                    </div>
                    <span className="text-xl font-bold sm:text-2xl">-{billingAcceleration} {locale === "fr" ? "jours/mois" : "days/month"}</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-slate-400">
                {t("roi.disclaimer")}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center md:mt-8">
            <a href="#contact">
              <Button className="h-12 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 px-8 font-semibold shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-blue-600">
                {t("roi.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION
// ============================================
function ContactSection() {
  const { t, locale } = useTranslation();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'already_submitted'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, locale }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', email: '', message: '' });
      } else if (response.status === 429) {
        // Email has already submitted a form
        const data = await response.json();
        if (data.error === 'already_submitted') {
          setSubmitStatus('already_submitted');
        } else {
          setSubmitStatus('error');
        }
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-900 pt-24 pb-8">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-600/10 via-transparent to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left Column - Info */}
          <motion.div variants={fadeInUp} className="flex flex-col justify-center">
            <span className="mb-4 inline-block w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
              {t("contact.badge")}
            </span>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t("contact.titlePart1")}
              <br />
              {t("contact.titlePart2")}
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t("contact.titleHighlight")}
              </span>
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-slate-400">
              {t("contact.subtitle")}
            </p>

            {/* Contact Info */}
            <div className="mt-8 flex items-center gap-3 text-slate-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <a href="mailto:contact@astrale.ca" className="text-lg font-medium hover:text-blue-400 transition-colors">
                contact@astrale.ca
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div variants={fadeInUp}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white">
                  {t("contact.formTitle")}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {t("contact.formSubtitle")}
                </p>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 flex items-center gap-3 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-400">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <p>{t("contact.success")}</p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p>{t("contact.error")}</p>
                </div>
              )}

              {/* Already Submitted Message */}
              {submitStatus === 'already_submitted' && (
                <div className="mb-6 flex items-center gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-amber-400">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p>{t("contact.alreadySubmitted")}</p>
                </div>
              )}

              <div className="space-y-5">
                {/* Name & Company Row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="group relative">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      {t("contact.nameLabel")}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-blue-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength={2}
                        maxLength={100}
                        placeholder={t("contact.namePlaceholder")}
                        className="w-full rounded-lg border border-slate-600/50 bg-slate-700/50 py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="group relative">
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      {t("contact.companyLabel")}
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-blue-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        maxLength={100}
                        placeholder={t("contact.companyPlaceholder")}
                        className="w-full rounded-lg border border-slate-600/50 bg-slate-700/50 py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group relative">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    {t("contact.emailLabel")}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-blue-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={254}
                      placeholder={t("contact.emailPlaceholder")}
                      className="w-full rounded-lg border border-slate-600/50 bg-slate-700/50 py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="group relative">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    {t("contact.messageLabel")}
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-[0.85rem] h-4 w-4 text-slate-500 transition-colors group-focus-within:text-blue-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={5000}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.messagePlaceholder")}
                      className="w-full resize-none rounded-lg border border-slate-600/50 bg-slate-700/50 py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="mt-2 w-full bg-gradient-to-r from-blue-600 to-cyan-600 py-6 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      {t("contact.sending")}
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      {t("contact.submit")}
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>

              <p className="mt-4 text-center text-xs text-slate-500">
                {t("contact.privacyNotice")}{" "}
                <a href="/confidentialite" className="text-blue-400 hover:underline">
                  {t("contact.privacyLink")}
                </a>
                .
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DataFlowSection />
      <RealityVsAstraleSection />
      <IntegrationsSection />
      <ROICalculatorSection />
      <ContactSection />
    </main>
  );
}
