"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

// ============================================
// ANIMATION VARIANTS
// ============================================
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ============================================
// INTEGRATIONS DATA
// ============================================
interface Integration {
  name: string;
  logo: string;
  badge?: string;
}

interface IntegrationCategory {
  title: string;
  items: Integration[];
}

const integrationCategories: IntegrationCategory[] = [
  {
    title: "Canaux",
    items: [
      { name: "Messenger", logo: "/Messenger.svg.png" },
      { name: "SMS", logo: "/SMS.png" },
      { name: "WhatsApp", logo: "/WhatsApp_icon.png" },
      { name: "Telegram", logo: "/Telegram_logo.svg.png" },
    ],
  },
  {
    title: "Comptabilité",
    items: [
      { name: "QuickBooks Online", logo: "/Intuit_QuickBooks.png" },
      { name: "Acomba", logo: "/Acomba.svg" },
      { name: "Sage 50", logo: "/Sage-NA-logo.png" },
      { name: "Maestro Technologies", logo: "/maestro-technologies-logo.png" },
    ],
  },
  {
    title: "Financement",
    items: [
      { name: "LendCare", logo: "/LendCare.webp" },
      { name: "Fairstone", logo: "/Fairstone.png" },
      { name: "JD Factor", logo: "/JDfactor.png" },
      { name: "Desjardins", logo: "/Desjardins.svg.png" },
      { name: "eCapital", logo: "/ecapital.png" },
    ],
  },
];

// ============================================
// INTEGRATION LOGO COMPONENT
// ============================================
function IntegrationLogo({ integration }: { integration: Integration }) {
  return (
    <div className="group relative flex flex-col items-center">
      <div className="flex h-20 w-full items-center justify-center rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="relative h-12 w-full">
          <Image
            src={integration.logo}
            alt={integration.name}
            fill
            className="object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
          />
        </div>
      </div>
      <span className="mt-2 text-center text-xs font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-700">
        {integration.name}
      </span>
      {integration.badge && (
        <span className="mt-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600">
          {integration.badge}
        </span>
      )}
    </div>
  );
}

// ============================================
// INTEGRATIONS SECTION
// ============================================
export function IntegrationsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              Écosystème
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Compatible avec votre infrastructure.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Nous connectons le terrain à vos systèmes comptables et bancaires
              existants. Aucune migration requise.
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="mt-16 space-y-12">
            {integrationCategories.map((category) => (
              <motion.div key={category.title} variants={fadeInUp}>
                {/* Category Label */}
                <h3 className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {category.title}
                </h3>

                {/* Logos Grid */}
                <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {category.items.map((integration) => (
                    <IntegrationLogo
                      key={integration.name}
                      integration={integration}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legal Disclaimer */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-16 max-w-3xl text-center text-xs text-slate-400"
          >
            Tous les noms de produits, logos et marques sont la propriété de
            leurs détenteurs respectifs. Astrale est une solution indépendante
            d&apos;automatisation et n&apos;est pas affiliée directement à ces
            entités, sauf mention contraire.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default IntegrationsSection;
