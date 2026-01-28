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
} from "lucide-react";
import { IntegrationsSection } from "@/components/IntegrationsSection";

// ============================================
// ANIMATION VARIANTS
// ============================================
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

// ============================================
// NAVBAR
// ============================================
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60">
      <div className="relative mx-auto flex h-20 max-w-6xl items-center px-6">
        {/* Logo - Left */}
        <a href="/" className="flex w-48 items-center">
          <Image
            src="/logo.svg"
            alt="Astrale"
            width={180}
            height={45}
            priority
          />
        </a>

        {/* Navigation - Centered */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          <a
            href="#solution"
            className="text-base font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            Solution
          </a>
          <a
            href="#fonctionnement"
            className="text-base font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            Fonctionnement
          </a>
          <a
            href="#impact"
            className="text-base font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            Impact
          </a>
        </div>

        {/* CTA - Right */}
        <a href="#contact" className="ml-auto flex w-48 justify-end">
          <Button className="h-11 bg-gradient-to-r from-blue-600 to-blue-700 px-6 text-base font-medium text-white shadow-md shadow-blue-500/20 transition-all hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/30">
            Contact
          </Button>
        </a>
      </div>
    </nav>
  );
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-48 pt-20 lg:pt-28">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/HeroBackground.jpg"
          alt="Signature de preuve de livraison"
          className="h-full w-full object-cover object-center"
        />
        {/* Modern gradient overlay with blue tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-blue-50/60" />
        {/* Bottom fade to white - seamless transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-white via-white/90 via-50% to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            Vos PODs traités.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Vos factures payées.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600"
          >
            Vos preuves de livraison passent du terrain à votre système de
            facturation en quelques secondes. Chaque POD est extrait, validé et
            prêt à facturer — sans intervention manuelle.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="h-14 bg-gradient-to-r from-blue-600 to-blue-700 px-8 text-base font-semibold shadow-xl shadow-blue-500/25 transition-all hover:from-blue-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              Découvrir Astrale
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 border-slate-300 bg-white/90 px-8 text-base font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-blue-300 hover:bg-white hover:text-blue-600"
            >
              Voir la Démo (1 min)
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// REALITY VS ASTRALE SECTION
// ============================================
function RealityVsAstraleSection() {
  return (
    <section id="solution" className="relative bg-white py-24">
      {/* Gradient transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Comparaison
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Saisie manuelle vs Extraction automatique
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Comparez votre processus actuel de traitement des PODs.
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
                <h3 className="text-xl font-bold text-slate-900">Avant</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                    <X className="h-3 w-3 text-red-600" />
                  </div>
                  <span className="text-slate-600">
                    PODs empilés sur le bureau en fin de semaine
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                    <X className="h-3 w-3 text-red-600" />
                  </div>
                  <span className="text-slate-600">
                    Saisie de données manuelle, chronophage et source d&apos;erreurs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                    <X className="h-3 w-3 text-red-600" />
                  </div>
                  <span className="text-slate-600">
                    Retard de facturation de 5 à 15 jours
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                    <X className="h-3 w-3 text-red-600" />
                  </div>
                  <span className="text-slate-600">
                    Trésorerie bloquée par les délais administratifs
                  </span>
                </li>
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
                  Avec Astrale
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-slate-600">
                    Extraction automatique dès réception du POD
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-slate-600">
                    Données structurées prêtes pour votre ERP
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-slate-600">
                    Accélération du cycle de facturation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-slate-600">
                    Intégration via SMS, WhatsApp ou Messenger
                  </span>
                </li>
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
  return (
    <section id="fonctionnement" className="relative bg-gradient-to-b from-slate-50 to-white py-24">
      {/* Gradient transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Processus
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Du POD à la facture. Automatiquement.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Astrale est le tuyau invisible entre vos livreurs et votre ERP.
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
              POD reçu
            </span>
            <span className="text-xs text-slate-500">SMS / WhatsApp / Messenger</span>
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
              Extraction
            </span>
            <span className="text-xs text-slate-500">
              Astrale traite les données
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
              ERP / Facturation
            </span>
            <span className="text-xs text-slate-500">Données prêtes</span>
          </div>
        </div>

        {/* Technical details */}
        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Comment ça marche
          </h3>
          <div className="mt-6 space-y-4 text-slate-600">
            <p className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">1</span>
              Le chauffeur envoie le POD par SMS, WhatsApp ou Messenger.
            </p>
            <p className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">2</span>
              Astrale extrait et structure les données instantanément.
            </p>
            <p className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">3</span>
              Les informations sont synchronisées vers votre ERP, prêtes pour facturation.
            </p>
          </div>
        </div>

        {/* Callout */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-center shadow-xl">
          <p className="text-base font-semibold text-white">
            Fonctionne en arrière-plan. Zéro adaptation requise.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Vos équipes continuent comme avant. Astrale fait le reste.
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
  const [documents, setDocuments] = useState(500);
  const [timePerDoc, setTimePerDoc] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(25);

  // Format number with spaces (consistent across server/client)
  const formatNumber = (num: number) => {
    return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
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
            Calculateur ROI
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Calculez vos économies potentielles
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Estimez le temps et l&apos;argent que vous pourriez économiser avec Astrale.
          </p>
        </div>

        {/* Calculator Panel - Always visible */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Inputs */}
            <div className="flex flex-col">
              <h3 className="mb-6 text-lg font-semibold text-slate-900">Vos données</h3>
              
              <div className="flex flex-1 flex-col justify-between space-y-5">
                {/* Documents per month */}
                <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-4">
                  <label className="mb-3 flex items-center justify-between text-sm font-medium text-slate-700">
                    <span>Documents par mois</span>
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
                  <p className="mt-2 text-xs text-slate-500">PODs, factures, bons de livraison...</p>
                </div>

                {/* Time per document */}
                <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-4">
                  <label className="mb-3 flex items-center justify-between text-sm font-medium text-slate-700">
                    <span>Temps par document</span>
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
                  <p className="mt-2 text-xs text-slate-500">Saisie, vérification, classement...</p>
                </div>

                {/* Hourly rate */}
                <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-4">
                  <label className="mb-3 flex items-center justify-between text-sm font-medium text-slate-700">
                    <span>Taux horaire</span>
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
                  <p className="mt-2 text-xs text-slate-500">Coût employé incluant charges</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white">
              <h3 className="mb-6 text-lg font-semibold">Vos économies estimées</h3>
              
              <div className="flex flex-1 flex-col justify-between space-y-4">
                <div className="rounded-lg bg-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 flex-shrink-0 text-blue-400" />
                      <span className="text-sm text-slate-300">Heures / mois</span>
                    </div>
                    <span className="text-2xl font-bold">{Math.round(hoursPerMonth)} h</span>
                  </div>
                </div>

                <div className="rounded-lg bg-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-sm text-slate-300">Heures / année</span>
                    </div>
                    <span className="text-2xl font-bold">{formatNumber(hoursPerYear)} h</span>
                  </div>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 flex-shrink-0 text-cyan-400" />
                      <span className="text-sm text-slate-300">Économies / année</span>
                    </div>
                    <span className="text-2xl font-bold text-cyan-400">{formatNumber(savingsPerYear)} $</span>
                  </div>
                </div>

                <div className="rounded-lg bg-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                      <span className="text-sm text-slate-300">Cycle facturation</span>
                    </div>
                    <span className="text-2xl font-bold">-{billingAcceleration} jours</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-slate-400">
                *Estimation basée sur 90% d&apos;automatisation
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <a href="#contact">
              <Button className="h-12 bg-gradient-to-r from-blue-600 to-blue-700 px-8 font-semibold shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-blue-600">
                Découvrir la solution
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
  const metrics = [
    {
      icon: Clock,
      value: "-15 jours",
      label: "Cycle de facturation",
      description: "Accélération moyenne entre livraison et paiement",
      color: "blue",
    },
    {
      icon: Calculator,
      value: "-90%",
      label: "Saisie de données",
      description: "Élimination des tâches administratives répétitives",
      color: "green",
    },
    {
      icon: Zap,
      value: "Instantané",
      label: "Extraction POD",
      description: "Données structurées en quelques secondes",
      color: "cyan",
    },
  ];

  return (
    <section id="impact" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Résultats
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Accélération mesurable
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Résultats observés chez nos clients pilotes.
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
              Contact
            </span>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Automatisez le processus
              <br />
              administratif des PODs
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                en toute simplicité
              </span>
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-slate-400">
              Découvrez comment Astrale peut automatiser votre processus de traitement des preuves de livraison.
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
                  Contactez-nous
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Remplissez le formulaire et nous vous contacterons rapidement.
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
                      Nom complet
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-blue-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Votre Nom"
                        className="w-full rounded-lg border border-slate-600/50 bg-slate-700/50 py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>
                  <div className="group relative">
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Entreprise
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-blue-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Votre Entreprise"
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
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-blue-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="votre@email.com"
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
                    Message (facultatif)
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-slate-500 transition-colors group-focus-within:text-blue-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Décrivez brièvement vos besoins..."
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
                  Envoyer la demande
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <p className="mt-4 text-center text-xs text-slate-500">
                En soumettant ce formulaire, vous acceptez notre{" "}
                <a href="/confidentialite" className="text-blue-400 hover:underline">
                  politique de confidentialité
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
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
            <Image
              src="/logo.svg"
              alt="Astrale"
              width={120}
              height={30}
            />
            <div className="hidden h-6 w-px bg-slate-300 md:block" />
            <span className="text-center text-sm text-slate-500 md:text-left">
              L&apos;automatisation invisible entre vos livreurs et votre ERP
            </span>
          </div>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a href="mailto:contact@astrale.ca" className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-600">
              <Mail className="h-4 w-4" />
              contact@astrale.ca
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="/mentions-legales" className="transition-colors hover:text-blue-600">
              Mentions légales
            </a>
            <a href="/confidentialite" className="transition-colors hover:text-blue-600">
              Confidentialité
            </a>
            <a href="#contact" className="transition-colors hover:text-blue-600">
              Contact
            </a>
          </div>
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Astrale. Tous droits réservés.
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
