"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

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
  scale?: number; // Scale factor for logo (1 = default, 1.5 = 150%, etc.)
}

interface IntegrationCategory {
  titleKey: "channels" | "accounting" | "financing";
  items: Integration[];
}

const integrationCategories: IntegrationCategory[] = [
  {
    titleKey: "channels",
    items: [
      { name: "Messenger", logo: "/Messenger.svg.png" },
      { name: "SMS", logo: "/SMS.png" },
      { name: "WhatsApp", logo: "/WhatsApp_icon.png" },
      { name: "Telegram", logo: "/Telegram_logo.svg.png" },
      { name: "Microsoft Teams", logo: "/Microsoft-Teams-Logo.png" },
      { name: "Slack", logo: "/Slack-logo.png" },
    ],
  },
  {
    titleKey: "accounting",
    items: [
      { name: "QuickBooks Online", logo: "/Intuit_QuickBooks.png" },
      { name: "Acomba", logo: "/Acomba.svg", scale: 1.4 },
      { name: "Sage 50", logo: "/Sage-NA-logo.png" },
      { name: "Maestro Technologies", logo: "/maestro-technologies-logo.png" },
    ],
  },
  {
    titleKey: "financing",
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
  const scale = integration.scale || 1;
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-14 w-28 sm:h-16 sm:w-36 items-center justify-center rounded-xl bg-white p-2 sm:p-3 shadow-sm transition-all duration-300 hover:shadow-md md:h-24 md:w-52 md:p-5">
        <div 
          className="relative h-8 sm:h-10 w-full md:h-14"
          style={{ transform: `scale(${scale})` }}
        >
          <Image
            src={integration.logo}
            alt={integration.name}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <span className="mt-1.5 sm:mt-2 text-center text-xs sm:text-sm font-medium text-slate-600 transition-colors duration-300">
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
// MARQUEE ROW COMPONENT
// ============================================
interface MarqueeRowProps {
  items: Integration[];
  direction: "left" | "right";
  label: string;
  labelPosition: "left" | "right";
  speed?: number; // seconds per cycle
}

function MarqueeRow({
  items,
  direction,
  label,
  labelPosition,
  speed = 35,
}: MarqueeRowProps) {
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  const labelElement = (
    <div className="flex w-full shrink-0 items-center justify-center md:w-44">
      <span className="text-base font-extrabold uppercase tracking-widest text-slate-800 md:text-lg">
        {label}
      </span>
    </div>
  );

  const marqueeElement = (
    <div className="group relative w-full flex-1 overflow-hidden md:max-w-3xl">
      {/* Gradient mask - left side */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-slate-100 to-transparent md:w-20" />
      {/* Gradient mask - right side */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-slate-100 to-transparent md:w-20" />

      <div
        className="marquee-animate flex w-max"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {/* Render 2 copies for seamless infinite scroll */}
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-3 pr-3 sm:gap-4 sm:pr-4 md:gap-8 md:pr-8">
            {items.map((integration) => (
              <IntegrationLogo
                key={`${integration.name}-${setIndex}`}
                integration={integration}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`flex items-center justify-center gap-3 md:flex-row md:gap-4 ${labelPosition === "right" ? "flex-col-reverse" : "flex-col"}`}>
      {labelPosition === "left" ? (
        <>
          {labelElement}
          {marqueeElement}
        </>
      ) : (
        <>
          {marqueeElement}
          {labelElement}
        </>
      )}
    </div>
  );
}

// ============================================
// INTEGRATIONS SECTION
// ============================================
export function IntegrationsSection() {
  const { t } = useTranslation();
  
  return (
    <section id="ecosysteme" className="relative bg-slate-100 py-14 sm:py-18 md:py-24">
      {/* Gradient transition from previous section */}
      <div className="absolute inset-x-0 top-0 h-24 sm:h-32 md:h-48 bg-gradient-to-b from-slate-50 via-slate-50/50 to-transparent" />
      {/* Gradient transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              {t("integrations.badge")}
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              {t("integrations.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              {t("integrations.subtitle")}
            </p>
          </motion.div>

          {/* Categories Marquee Rows */}
          <div className="mt-10 md:mt-16 space-y-6 md:space-y-12">
            {/* Canaux: label left, icons scroll left toward label */}
            <motion.div variants={fadeInUp}>
              <MarqueeRow
                items={integrationCategories[0].items}
                direction="left"
                label={t(`integrations.categories.${integrationCategories[0].titleKey}`)}
                labelPosition="left"
                speed={35}
              />
            </motion.div>

            {/* Comptabilité: label right, icons scroll right toward label */}
            <motion.div variants={fadeInUp}>
              <MarqueeRow
                items={integrationCategories[1].items}
                direction="right"
                label={t(`integrations.categories.${integrationCategories[1].titleKey}`)}
                labelPosition="right"
                speed={35}
              />
            </motion.div>

            {/* Financement: label left, icons scroll left toward label */}
            <motion.div variants={fadeInUp}>
              <MarqueeRow
                items={integrationCategories[2].items}
                direction="left"
                label={t(`integrations.categories.${integrationCategories[2].titleKey}`)}
                labelPosition="left"
                speed={35}
              />
            </motion.div>
          </div>

          {/* Legal Disclaimer */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-10 md:mt-16 max-w-3xl text-center text-xs text-slate-400"
          >
            {t("integrations.disclaimer")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default IntegrationsSection;
