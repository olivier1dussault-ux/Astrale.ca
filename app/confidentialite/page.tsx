import Image from "next/image";
import { Mail, ArrowLeft, Shield, Lock, Eye, UserCheck, Database, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Politique de Confidentialité | Astrale",
  description: "Politique de confidentialité et protection des renseignements personnels d'Astrale, conforme à la Loi 25 du Québec.",
};

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-6">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Astrale"
              width={140}
              height={35}
              priority
            />
          </a>
          <a href="/">
            <Button variant="ghost" className="text-slate-600 hover:text-blue-600">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l&apos;accueil
            </Button>
          </a>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Politique de Confidentialité</h1>
          </div>
          <p className="mt-4 text-slate-500">
            Dernière mise à jour : 26 janvier 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <p className="text-slate-700">
            Chez Astrale, nous prenons la protection de vos renseignements personnels très au sérieux. 
            Cette politique de confidentialité décrit comment nous collectons, utilisons, divulguons 
            et protégeons vos renseignements personnels, conformément à la <strong>Loi 25</strong> du 
            Québec (Loi modernisant des dispositions législatives en matière de protection des 
            renseignements personnels) et aux lois fédérales canadiennes applicables.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1: Renseignements collectés */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Database className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-slate-900">1. Renseignements personnels collectés</h2>
            </div>
            <p className="text-slate-600">
              Nous collectons les renseignements personnels suivants lorsque vous utilisez notre site 
              ou nos services :
            </p>
            
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">Informations d&apos;identification</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li>• Nom complet</li>
                  <li>• Adresse courriel professionnelle</li>
                  <li>• Numéro de téléphone</li>
                  <li>• Nom de l&apos;entreprise</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">Informations techniques</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li>• Adresse IP</li>
                  <li>• Type de navigateur</li>
                  <li>• Pages visitées</li>
                  <li>• Date et heure de visite</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Finalités de la collecte */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Eye className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-slate-900">2. Finalités de la collecte</h2>
            </div>
            <p className="text-slate-600">
              Nous collectons et utilisons vos renseignements personnels uniquement pour les 
              finalités suivantes :
            </p>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">1</span>
                <span><strong>Répondre à vos demandes</strong> — Traiter et répondre à vos questions, demandes de démonstration ou demandes d&apos;information.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">2</span>
                <span><strong>Fournir nos services</strong> — Vous permettre d&apos;utiliser notre plateforme d&apos;automatisation de traitement de documents.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">3</span>
                <span><strong>Améliorer nos services</strong> — Analyser l&apos;utilisation du site pour améliorer l&apos;expérience utilisateur.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">4</span>
                <span><strong>Communications</strong> — Vous envoyer des informations relatives à nos services (avec votre consentement).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">5</span>
                <span><strong>Conformité légale</strong> — Respecter nos obligations légales et réglementaires.</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Base légale (Consentement) */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <UserCheck className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-slate-900">3. Base légale et consentement</h2>
            </div>
            <p className="text-slate-600">
              Conformément à la <strong>Loi 25</strong>, nous recueillons vos renseignements personnels 
              uniquement avec votre <strong>consentement explicite</strong>, sauf dans les cas où la 
              loi nous autorise à les collecter sans consentement.
            </p>
            <div className="mt-4 rounded-lg border border-green-100 bg-green-50 p-4">
              <p className="text-sm text-green-800">
                <strong>Votre consentement est libre, éclairé et donné à des fins spécifiques.</strong> 
                Vous pouvez retirer votre consentement à tout moment en nous contactant.
              </p>
            </div>
          </section>

          {/* Section 4: Partage avec des tiers */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">4. Partage avec des tiers</h2>
            <p className="mt-4 text-slate-600">
              Nous ne vendons, ne louons et ne partageons pas vos renseignements personnels avec des 
              tiers à des fins de marketing.
            </p>
            <p className="mt-4 text-slate-600">
              Nous pouvons partager vos renseignements uniquement dans les cas suivants :
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li>
                <strong>Fournisseurs de services</strong> — Avec des prestataires qui nous aident à 
                fournir nos services (hébergement, analyse), sous réserve de clauses de 
                confidentialité strictes.
              </li>
              <li>
                <strong>Obligations légales</strong> — Lorsque la loi l&apos;exige ou en réponse à une 
                demande valide des autorités compétentes.
              </li>
              <li>
                <strong>Protection des droits</strong> — Pour protéger nos droits, notre sécurité 
                ou celle de tiers.
              </li>
            </ul>
          </section>

          {/* Section 5: Durée de conservation */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Clock className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-slate-900">5. Durée de conservation</h2>
            </div>
            <p className="text-slate-600">
              Nous conservons vos renseignements personnels uniquement pendant la durée nécessaire 
              aux fins pour lesquelles ils ont été collectés :
            </p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6">
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span>Demandes de contact</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium">2 ans</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span>Données clients (compte actif)</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium">Durée du contrat</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span>Données clients (après résiliation)</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium">3 ans</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Données techniques (logs)</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium">12 mois</span>
                </li>
              </ul>
            </div>
            <p className="mt-4 text-slate-600">
              À l&apos;expiration de ces délais, vos renseignements sont supprimés de façon sécurisée 
              ou anonymisés.
            </p>
          </section>

          {/* Section 6: Mesures de sécurité */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Lock className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-slate-900">6. Mesures de sécurité</h2>
            </div>
            <p className="text-slate-600">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
              appropriées pour protéger vos renseignements personnels contre :
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Lock className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">Chiffrement SSL/TLS</p>
                <p className="mt-1 text-xs text-slate-500">Données en transit</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">Accès restreint</p>
                <p className="mt-1 text-xs text-slate-500">Personnel autorisé</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Database className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">Sauvegardes</p>
                <p className="mt-1 text-xs text-slate-500">Régulières et sécurisées</p>
              </div>
            </div>
          </section>

          {/* Section 7: Vos droits (Loi 25) */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">7. Vos droits (Loi 25)</h2>
            <p className="mt-4 text-slate-600">
              Conformément à la Loi 25 et aux lois applicables, vous disposez des droits suivants 
              concernant vos renseignements personnels :
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">Droit d&apos;accès</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Vous pouvez demander l&apos;accès aux renseignements personnels que nous détenons à votre sujet.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">Droit de rectification</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Vous pouvez demander la correction de renseignements inexacts ou incomplets.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">Droit à l&apos;effacement</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Vous pouvez demander la suppression de vos renseignements personnels, sous réserve 
                  de nos obligations légales de conservation.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">Droit à la portabilité</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Vous pouvez demander à recevoir vos renseignements dans un format structuré et 
                  couramment utilisé (en vigueur depuis septembre 2024).
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h3 className="font-semibold text-slate-900">Droit de retirer votre consentement</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Vous pouvez retirer votre consentement à tout moment pour le traitement futur 
                  de vos renseignements.
                </p>
              </div>
            </div>
            <p className="mt-6 text-slate-600">
              Pour exercer vos droits, veuillez nous contacter à{" "}
              <a href="mailto:contact@astrale.ca" className="text-blue-600 hover:underline">
                contact@astrale.ca
              </a>
              . Nous répondrons à votre demande dans un délai de 30 jours.
            </p>
          </section>

          {/* Section 8: Témoins (Cookies) */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">8. Témoins (Cookies)</h2>
            <p className="mt-4 text-slate-600">
              Conformément à la <strong>Loi 25</strong>, les témoins et technologies de suivi sont 
              <strong> désactivés par défaut</strong> sur notre site.
            </p>
            
            <h3 className="mt-6 text-lg font-semibold text-slate-900">Types de témoins utilisés :</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-green-100 bg-green-50 p-4">
                <h4 className="font-semibold text-green-900">Témoins strictement nécessaires</h4>
                <p className="mt-1 text-sm text-green-800">
                  Essentiels au fonctionnement du site. Ne nécessitent pas de consentement.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <h4 className="font-semibold text-slate-900">Témoins analytiques (optionnels)</h4>
                <p className="mt-1 text-sm text-slate-600">
                  Nous aident à comprendre comment les visiteurs utilisent le site. 
                  Activés uniquement avec votre consentement explicite.
                </p>
              </div>
            </div>
            <p className="mt-4 text-slate-600">
              Vous pouvez gérer vos préférences de témoins à tout moment via les paramètres de 
              votre navigateur.
            </p>
          </section>

          {/* Section 9: Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">9. Modifications de cette politique</h2>
            <p className="mt-4 text-slate-600">
              Nous pouvons mettre à jour cette politique de confidentialité périodiquement. 
              La date de la dernière mise à jour est indiquée en haut de cette page.
            </p>
            <p className="mt-4 text-slate-600">
              En cas de modifications importantes, nous vous en informerons par courriel ou par 
              un avis visible sur notre site.
            </p>
          </section>

          {/* Section 10: Contact */}
          <section className="rounded-xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold text-slate-900">10. Nous contacter</h2>
            <p className="mt-4 text-slate-600">
              Pour toute question concernant cette politique de confidentialité, pour exercer 
              vos droits ou pour déposer une plainte, veuillez contacter notre responsable de 
              la protection des renseignements personnels :
            </p>
            <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-6">
              <p className="font-semibold text-slate-900">Astrale</p>
              <p className="mt-2 text-slate-600">
                Responsable de la protection des renseignements personnels
              </p>
              <a
                href="mailto:contact@astrale.ca"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-medium text-white transition-all hover:from-blue-500 hover:to-blue-600"
              >
                <Mail className="h-5 w-5" />
                contact@astrale.ca
              </a>
            </div>

            <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-600">
                <strong>Commission d&apos;accès à l&apos;information du Québec (CAI)</strong><br />
                Si vous n&apos;êtes pas satisfait de notre réponse, vous pouvez déposer une plainte 
                auprès de la CAI :{" "}
                <a 
                  href="https://www.cai.gouv.qc.ca" 
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cai.gouv.qc.ca
                </a>
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Astrale. Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}
