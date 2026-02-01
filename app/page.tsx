"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Cpu,
  FileSpreadsheet,
  MessageCircle,
  Zap,
  X,
  Check,
  Clock,
  Calculator,
  ArrowRight,
  Mail,
  Send,
  Building2,
  User,
  DollarSign,
  TrendingUp,
  Truck,
  Play,
  Sparkles,
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
  const { t } = useTranslation();
  
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
            href="#solution"
            className="text-base font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            {t("nav.solution")}
          </a>
          <a
            href="#fonctionnement"
            className="text-base font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            {t("nav.howItWorks")}
          </a>
          <a
            href="#impact"
            className="text-base font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            {t("nav.impact")}
          </a>
        </div>

        {/* CTA - Right */}
        <a href="#contact" className="ml-auto flex w-48 justify-end">
          <Button className="h-11 bg-gradient-to-r from-blue-600 to-blue-700 px-6 text-base font-medium text-white shadow-md shadow-blue-500/20 transition-all hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/30">
            {t("nav.contact")}
          </Button>
        </a>
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
        <div className="relative rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-2xl shadow-slate-300/50 backdrop-blur-sm">
          {/* Phone header */}
          <div className="mb-3 flex items-center gap-2 border-b border-slate-100 pb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
              <MessageCircle className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">Astrale</p>
              <p className="text-xs text-slate-500">{t("heroVisual.via")}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-3">
            {/* User's message (outgoing - right) - you sent the POD first */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="flex justify-end"
            >
              <div className="rounded-2xl rounded-tr-sm bg-gradient-to-r from-blue-600 to-blue-700 p-2">
                <div className="relative h-32 w-48 overflow-hidden rounded-lg bg-white/20 sm:h-40 sm:w-56">
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
              <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <Sparkles className="h-3 w-3 text-blue-500" />
                  <span>Astrale</span>
                </div>
                <p className="mt-1 text-sm text-slate-700">{t("heroVisual.extractionSuccess")}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
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
    <section className="relative overflow-hidden pb-32 pt-16 lg:pb-40 lg:pt-24">
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
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/95 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-3"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-sm font-medium text-blue-700 backdrop-blur-sm">
                <Truck className="h-4 w-4" />
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              {t("hero.titlePart1")}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {t("hero.titleHighlight")}
              </span>
              <br />
              {t("hero.titlePart2")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600"
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
              className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-200/60 pt-8 sm:gap-8"
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
                  <Cpu className="h-4 w-4 text-cyan-600" />
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
  const beforeItems = messages.comparison.beforeItems as string[];
  const afterItems = messages.comparison.afterItems as string[];
  
  return (
    <section id="solution" className="relative bg-white py-24">
      {/* Gradient transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-50" />
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

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* AVANT */}
          <Card className="border-red-100 bg-gradient-to-br from-red-50 to-orange-50/50">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                  <X className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t("comparison.before")}</h3>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <X className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* AVEC ASTRALE */}
          <Card className="border-green-100 bg-gradient-to-br from-green-50 to-emerald-50/50">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {t("comparison.after")}
                </h3>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
    <section id="fonctionnement" className="relative bg-gradient-to-b from-slate-50 to-white py-24">
      {/* Gradient transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-50" />
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

        {/* Flow Diagram */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-0">
          {/* Step 1: POD Received */}
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
              <FileText className="h-10 w-10 text-slate-700" />
            </div>
            <span className="mt-4 text-sm font-semibold text-slate-900">
              {t("process.step1")}
            </span>
            <span className="text-xs text-slate-500">{t("process.step1Sub")}</span>
          </div>

          {/* Connector */}
          <div className="flex h-16 w-28 items-center justify-center md:h-auto">
            <div className="h-16 w-px border-l-2 border-dashed border-blue-300 md:h-px md:w-full md:border-l-0 md:border-t-2" />
            <ArrowRight className="hidden h-5 w-5 text-blue-400 md:block" />
          </div>

          {/* Step 2: Extraction */}
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30">
              <Cpu className="h-10 w-10 text-white" />
            </div>
            <span className="mt-4 text-sm font-semibold text-slate-900">
              {t("process.step2")}
            </span>
            <span className="text-xs text-slate-500">
              {t("process.step2Sub")}
            </span>
          </div>

          {/* Connector */}
          <div className="flex h-16 w-28 items-center justify-center md:h-auto">
            <div className="h-16 w-px border-l-2 border-dashed border-blue-300 md:h-px md:w-full md:border-l-0 md:border-t-2" />
            <ArrowRight className="hidden h-5 w-5 text-blue-400 md:block" />
          </div>

          {/* Step 3: ERP/Invoice */}
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
              <FileSpreadsheet className="h-10 w-10 text-slate-700" />
            </div>
            <span className="mt-4 text-sm font-semibold text-slate-900">
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
  // Accélération du cycle de facturation (estimation: de 15 jours à ~2 jours)
  const billingAcceleration = 13;

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50/50 py-24">
      {/* Gradient transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
      <div className="relative mx-auto max-w-4xl px-6">
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
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Inputs */}
            <div className="flex flex-col">
              <h3 className="mb-6 text-lg font-semibold text-slate-900">{t("roi.yourData")}</h3>
              
              <div className="flex flex-1 flex-col justify-between space-y-5">
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
            <div className="flex flex-col rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
              <h3 className="mb-6 text-lg font-semibold">{t("roi.results")}</h3>
              
              <div className="flex flex-1 flex-col justify-between space-y-4">
                <div className="rounded-lg bg-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 flex-shrink-0 text-blue-400" />
                      <span className="text-sm text-slate-300">{t("roi.hoursPerMonth")}</span>
                    </div>
                    <span className="text-2xl font-bold">{Math.round(hoursPerMonth)} h</span>
                  </div>
                </div>

                <div className="rounded-lg bg-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-sm text-slate-300">{t("roi.hoursPerYear")}</span>
                    </div>
                    <span className="text-2xl font-bold">{formatNumber(hoursPerYear)} h</span>
                  </div>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 flex-shrink-0 text-cyan-400" />
                      <span className="text-sm text-slate-300">{t("roi.savingsPerYear")}</span>
                    </div>
                    <span className="text-2xl font-bold text-cyan-400">{formatNumber(savingsPerYear)} $</span>
                  </div>
                </div>

                <div className="rounded-lg bg-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                      <span className="text-sm text-slate-300">{t("roi.billingCycle")}</span>
                    </div>
                    <span className="text-2xl font-bold">-{billingAcceleration} {locale === "fr" ? "jours" : "days"}</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-slate-400">
                {t("roi.disclaimer")}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <a href="#contact">
              <Button className="h-12 bg-gradient-to-r from-blue-600 to-blue-700 px-8 font-semibold shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-blue-600">
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
// METRICS SECTION
// ============================================
function MetricsSection() {
  const { t, messages } = useTranslation();
  const metricsData = messages.metrics.items as Array<{ value: string; label: string; description: string }>;
  
  const metrics = [
    {
      icon: Clock,
      value: metricsData[0].value,
      label: metricsData[0].label,
      description: metricsData[0].description,
      color: "blue",
    },
    {
      icon: Calculator,
      value: metricsData[1].value,
      label: metricsData[1].label,
      description: metricsData[1].description,
      color: "green",
    },
    {
      icon: Zap,
      value: metricsData[2].value,
      label: metricsData[2].label,
      description: metricsData[2].description,
      color: "cyan",
    },
  ];

  return (
    <section id="impact" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            {t("metrics.badge")}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {t("metrics.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            {t("metrics.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-slate-100 bg-gradient-to-b from-white to-slate-50/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20">
                  <metric.icon className="h-7 w-7 text-white" />
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-4xl font-bold text-transparent">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  {metric.label}
                </div>
                <p className="mt-3 text-sm text-slate-500">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION
// ============================================
function ContactSection() {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-900 py-24">
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
            <form className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white">
                  {t("contact.formTitle")}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {t("contact.formSubtitle")}
                </p>
              </div>

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
                        placeholder={t("contact.namePlaceholder")}
                        className="w-full rounded-lg border border-slate-600/50 bg-slate-700/50 py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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
                        placeholder={t("contact.companyPlaceholder")}
                        className="w-full rounded-lg border border-slate-600/50 bg-slate-700/50 py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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
                      placeholder={t("contact.emailPlaceholder")}
                      className="w-full rounded-lg border border-slate-600/50 bg-slate-700/50 py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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
                    <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-slate-500 transition-colors group-focus-within:text-blue-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={t("contact.messagePlaceholder")}
                      className="w-full resize-none rounded-lg border border-slate-600/50 bg-slate-700/50 py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 w-full bg-gradient-to-r from-blue-600 to-cyan-600 py-6 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30"
                >
                  {t("contact.submit")}
                  <Send className="ml-2 h-4 w-4" />
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
// FOOTER
// ============================================
function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
            <Image
              src="/logo.svg"
              alt="Astrale"
              width={240}
              height={60}
            />
            <div className="hidden h-6 w-px bg-slate-300 md:block" />
            <span className="text-center text-sm text-slate-500 md:text-left">
              {t("footer.tagline")}
            </span>
          </div>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a href="mailto:contact@astrale.ca" className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600">
              <Mail className="h-4 w-4" />
              contact@astrale.ca
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 md:flex-row">
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="/mentions-legales" className="transition-colors hover:text-blue-600">
              {t("footer.legalLinks.legal")}
            </a>
            <a href="/confidentialite" className="transition-colors hover:text-blue-600">
              {t("footer.legalLinks.privacy")}
            </a>
            <a href="#contact" className="transition-colors hover:text-blue-600">
              {t("footer.legalLinks.contact")}
            </a>
          </div>
          <div className="text-sm text-slate-400">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </div>
        </div>
      </div>
    </footer>
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
      <RealityVsAstraleSection />
      <DataFlowSection />
      <IntegrationsSection />
      <ROICalculatorSection />
      <MetricsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
