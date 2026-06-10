import { Compass, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    name: "Namibie",
    href: "/destination/namibie",
    image: "/assets/images/destination/11.webp",
    summary:
      "Des dunes du Namib a Etosha, une destination spectaculaire pour les grands espaces.",
  },
  {
    name: "Botswana",
    href: "/destination/botswana",
    image: "/assets/images/destination/15.webp",
    summary:
      "Le delta de l'Okavango, Chobe et des safaris confidentiels au coeur de la nature.",
  },
  {
    name: "Zimbabwe",
    href: "/destination/zimbabwe",
    image: "/assets/images/destination/27.webp",
    summary:
      "Les chutes Victoria, Hwange et des paysages puissants pour un voyage intense.",
  },
  {
    name: "Rwanda",
    href: "/destination/rwanda",
    image: "/assets/images/destination/23.webp",
    summary:
      "Forets de montagne, gorilles, lacs et une experience africaine tres singuliere.",
  },
  {
    name: "Mozambique",
    href: "/destination/mozambique",
    image: "/assets/images/destination/19.webp",
    summary:
      "Iles, plages sauvages et parcs naturels pour prolonger le safari vers l'ocean Indien.",
  },
  {
    name: "Zambie",
    href: "/destination/zambie",
    image: "/assets/images/destination/31.webp",
    summary:
      "Safaris authentiques, marches guidees et grands parcs pour voyageurs passionnes.",
  },
];

export default function DestinationPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-forest px-6 pb-24 pt-40 text-ivory lg:pb-32 lg:pt-52">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/images/destination/48.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/70 to-forest" />
        <div className="container-x relative">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold transition hover:text-ivory"
          >
            <span aria-hidden="true" className="opacity-60">
              &larr;
            </span>
            Accueil
          </Link>
          <p className="eyebrow mt-6 text-gold">Nos destinations</p>
          <h1 className="mt-3 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            L'Afrique en <span className="italic text-gold">six chapitres</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/80">
            De l'infini mineral namibien aux eaux turquoise du Mozambique,
            chaque destination est un univers a part, compose sur mesure par
            nos specialistes du continent.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-ivory/70">
            <span className="flex items-center gap-2">
              <Compass className="size-4 text-gold" /> 6 pays signature
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-gold" /> +120 lodges selectionnes
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination) => (
              <Link
                key={destination.href}
                href={destination.href}
                className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold">{destination.name}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {destination.summary}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Decouvrir
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
