import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité d'Astrale. Découvrez comment nous collectons, utilisons et protégeons vos renseignements personnels.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
