import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nasroulahi Holding SARL | Transport, Logistique et Commerce",
  description: "Nasroulahi Holding SARL, votre partenaire de confiance entre la Chine et le Sénégal pour le transport international, l'achat sécurisé de produits, les pièces automobiles et l'assurance.",
  keywords: "transport international, logistique, Chine, Sénégal, Guangzhou, Dakar, conteneurs, transit, pièces détachées, assurance auto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
