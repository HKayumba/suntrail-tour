import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import ChunkLoadRecovery from "@/components/layout/ChunkLoadRecovery";
import LegacyScripts from "@/components/layout/LegacyScripts";
import PageChrome from "@/components/layout/PageChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.suntrailtours.com"),
  title: "Suntrail Tours & Safaris | Voyages sur mesure en Afrique",
  description:
    "Suntrail Tours & Safaris organise des voyages privés sur mesure en Namibie, Botswana, Mozambique, Rwanda, Zimbabwe et Zambie. Safaris, circuits guidés, autotours — découvrez l'Afrique dans toute sa splendeur.",
  keywords: [
    "safari Namibie",
    "voyage Botswana",
    "circuit Rwanda",
    "gorilles Rwanda",
    "chutes Victoria Zimbabwe",
    "delta Okavango",
    "safari Zambie",
    "voyage Mozambique",
    "agence de voyage Afrique australe",
    "tour operator Namibie",
    "Suntrail Tours",
  ],
  authors: [{ name: "Suntrail Tours & Safaris" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.suntrailtours.com/fr/",
  },
  openGraph: {
    type: "website",
    title: "Suntrail Tours & Safaris | Voyages Privés en Afrique Australe",
    description:
      "Safaris et voyages sur mesure en Namibie, Botswana, Rwanda, Zimbabwe, Zambie & Mozambique. Une expertise locale pour des expériences inoubliables.",
    url: "https://www.suntrailtours.com/fr/",
    images: ["/assets/images/banner/leopard.webp"],
    locale: "fr_FR",
    siteName: "Suntrail Tours & Safaris",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suntrail Tours & Safaris | Voyages Privés en Afrique Australe",
    description:
      "Safaris sur mesure en Namibie, Botswana, Rwanda, Zimbabwe, Zambie & Mozambique.",
    images: ["/assets/images/banner/leopard.webp"],
  },
  other: {
    "geo.region": "NA",
    "geo.placename": "Windhoek, Namibie",
  },
};

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Suntrail Tours & Safaris",
  description:
    "Agence spécialisée dans les voyages privés sur mesure en Afrique australe : Namibie, Botswana, Mozambique, Rwanda, Zimbabwe et Zambie.",
  url: "https://www.suntrailtours.com/fr/",
  logo: "/assets/images/logo/suntrail_logo.png",
  telephone: "+264813266654",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NA",
    addressLocality: "Windhoek",
  },
  areaServed: [
    "Namibie",
    "Botswana",
    "Mozambique",
    "Rwanda",
    "Zimbabwe",
    "Zambie",
  ],
  sameAs: [
    "https://www.facebook.com/suntrailtours",
    "https://www.linkedin.com/company/suntrailtours",
    "https://www.youtube.com/@suntrailtours",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/assets/fonts/custom-font.css" />
        <link rel="stylesheet" href="/assets/css/plugins/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/plugins/metismenu.css" />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/animate.css" />
        <link rel="stylesheet" href="/assets/css/plugins/odometer.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
        />
      </head>
      <body className="carcamping" suppressHydrationWarning>
        <ChunkLoadRecovery />
        <Header />
        {children}
        <PageChrome />
        <LegacyScripts />
      </body>
    </html>
  );
}
