import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subventions et financement | Astrale",
  description:
    "Découvrez les programmes de subventions et de financement disponibles au Québec et au Canada pour vos projets d'automatisation et d'intelligence artificielle en transport et logistique.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
