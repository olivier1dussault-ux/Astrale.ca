import Image from "next/image";
import { Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Mentions Légales | Astrale",
  description: "Mentions légales et informations juridiques du site Astrale.",
};

export default function MentionsLegales() {
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
          <h1 className="text-4xl font-bold text-slate-900">Mentions Légales</h1>
          <p className="mt-4 text-slate-500">
            Dernière mise à jour : 26 janvier 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          {/* Identification */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900">1. Identification de l&apos;éditeur</h2>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-slate-600">
                <strong className="text-slate-900">Raison sociale :</strong> Astrale
              </p>
              <p className="mt-2 text-slate-600">
                <strong className="text-slate-900">Courriel :</strong>{" "}
                <a href="mailto:contact@astrale.ca" className="text-blue-600 hover:underline">
                  contact@astrale.ca
                </a>
              </p>
              <p className="mt-2 text-slate-600">
                <strong className="text-slate-900">Site web :</strong>{" "}
                <a href="https://astrale.ca" className="text-blue-600 hover:underline">
                  astrale.ca
                </a>
              </p>
            </div>
          </section>

          {/* Responsable protection des renseignements */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Responsable de la protection des renseignements personnels
            </h2>
            <p className="mt-4 text-slate-600">
              Conformément à la <strong>Loi 25</strong> (Loi modernisant des dispositions législatives en 
              matière de protection des renseignements personnels), Astrale a désigné une personne 
              responsable de la protection des renseignements personnels.
            </p>
            <p className="mt-4 text-slate-600">
              Pour toute question concernant la collecte, l&apos;utilisation ou la divulgation de vos 
              renseignements personnels, ou pour exercer vos droits en vertu de la Loi 25, veuillez 
              nous contacter à :
            </p>
            <div className="mt-4 flex items-center gap-3 rounded-lg border border-blue-100 bg-blue-50 p-4">
              <Mail className="h-5 w-5 text-blue-600" />
              <a href="mailto:contact@astrale.ca" className="font-medium text-blue-600 hover:underline">
                contact@astrale.ca
              </a>
            </div>
          </section>

          {/* Hébergement */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900">3. Hébergement</h2>
            <p className="mt-4 text-slate-600">
              Ce site est hébergé par :
            </p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6">
              <p className="text-slate-600">
                <strong className="text-slate-900">Vercel Inc.</strong>
              </p>
              <p className="mt-2 text-slate-600">
                440 N Barranca Ave #4133<br />
                Covina, CA 91723<br />
                États-Unis
              </p>
              <p className="mt-2 text-slate-600">
                Site web :{" "}
                <a href="https://vercel.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900">4. Propriété intellectuelle</h2>
            <p className="mt-4 text-slate-600">
              L&apos;ensemble du contenu de ce site (textes, images, logos, graphiques, icônes, 
              logiciels, bases de données, etc.) est protégé par les lois canadiennes et 
              internationales relatives à la propriété intellectuelle.
            </p>
            <p className="mt-4 text-slate-600">
              Toute reproduction, représentation, modification, publication, adaptation ou 
              exploitation de tout ou partie des éléments du site, quel que soit le moyen ou 
              le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable d&apos;Astrale.
            </p>
            <p className="mt-4 text-slate-600">
              Les marques, logos et noms de domaine associés à Astrale sont la propriété 
              exclusive d&apos;Astrale. Toute utilisation non autorisée constitue une contrefaçon.
            </p>
          </section>

          {/* Témoins (Cookies) */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900">5. Témoins (Cookies)</h2>
            <p className="mt-4 text-slate-600">
              Conformément à la <strong>Loi 25 du Québec</strong>, les témoins (cookies) et autres 
              technologies de suivi sont <strong>désactivés par défaut</strong> sur notre site.
            </p>
            <p className="mt-4 text-slate-600">
              Nous utilisons uniquement des témoins strictement nécessaires au fonctionnement 
              du site. Aucun témoin de suivi publicitaire ou analytique n&apos;est installé sans 
              votre consentement explicite.
            </p>
            <p className="mt-4 text-slate-600">
              Pour plus d&apos;informations sur notre utilisation des témoins, consultez notre{" "}
              <a href="/confidentialite" className="text-blue-600 hover:underline">
                politique de confidentialité
              </a>
              .
            </p>
          </section>

          {/* Liens externes */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900">6. Liens externes</h2>
            <p className="mt-4 text-slate-600">
              Ce site peut contenir des liens vers des sites web tiers. Ces liens sont fournis 
              uniquement pour votre commodité.
            </p>
            <p className="mt-4 text-slate-600">
              Astrale n&apos;exerce aucun contrôle sur le contenu de ces sites tiers et décline 
              toute responsabilité quant à leur contenu, leurs pratiques de confidentialité 
              ou leur disponibilité.
            </p>
            <p className="mt-4 text-slate-600">
              L&apos;inclusion de liens vers des sites tiers n&apos;implique pas l&apos;approbation de 
              leur contenu par Astrale.
            </p>
          </section>

          {/* Limitation de responsabilité */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900">7. Limitation de responsabilité</h2>
            <p className="mt-4 text-slate-600">
              Les informations contenues sur ce site sont fournies à titre informatif 
              uniquement. Astrale s&apos;efforce de maintenir ces informations exactes et à jour, 
              mais ne peut garantir leur exactitude, leur exhaustivité ou leur pertinence.
            </p>
            <p className="mt-4 text-slate-600">
              Astrale ne pourra être tenue responsable des dommages directs ou indirects 
              résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser ce site, y compris 
              les dommages liés à la perte de données, de profits ou d&apos;opportunités commerciales.
            </p>
          </section>

          {/* Droit applicable */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900">8. Droit applicable et juridiction</h2>
            <p className="mt-4 text-slate-600">
              Les présentes mentions légales sont régies par les lois en vigueur au 
              <strong> Québec, Canada</strong>.
            </p>
            <p className="mt-4 text-slate-600">
              Tout litige relatif à l&apos;utilisation de ce site sera soumis à la compétence 
              exclusive des tribunaux du Québec.
            </p>
            <p className="mt-4 text-slate-600">
              Les lois applicables incluent notamment :
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
              <li>
                <strong>Loi sur la protection des renseignements personnels dans le secteur privé</strong> (LPRPSP)
              </li>
              <li>
                <strong>Loi 25</strong> - Loi modernisant des dispositions législatives en matière de 
                protection des renseignements personnels
              </li>
              <li>
                <strong>Loi sur la protection du consommateur</strong> du Québec
              </li>
              <li>
                <strong>Loi sur la protection des renseignements personnels et les documents électroniques</strong> (LPRPDE) - niveau fédéral
              </li>
            </ul>
          </section>

          {/* Modification */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900">9. Modification des mentions légales</h2>
            <p className="mt-4 text-slate-600">
              Astrale se réserve le droit de modifier les présentes mentions légales à tout 
              moment. Les modifications entrent en vigueur dès leur publication sur cette page.
            </p>
            <p className="mt-4 text-slate-600">
              Nous vous invitons à consulter régulièrement cette page pour prendre connaissance 
              des éventuelles modifications.
            </p>
          </section>

          {/* Contact */}
          <section className="rounded-lg border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
            <p className="mt-4 text-slate-600">
              Pour toute question concernant ces mentions légales ou le site web, 
              veuillez nous contacter :
            </p>
            <div className="mt-6">
              <a
                href="mailto:contact@astrale.ca"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-medium text-white transition-all hover:from-blue-500 hover:to-blue-600"
              >
                <Mail className="h-5 w-5" />
                contact@astrale.ca
              </a>
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
