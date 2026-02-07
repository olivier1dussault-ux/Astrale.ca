import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site astrale.ca. Informations sur l'éditeur, l'hébergeur et la protection des renseignements personnels.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
