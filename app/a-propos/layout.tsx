import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Astrale : notre mission, nos valeurs et notre engagement envers l'industrie du transport au Québec.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
