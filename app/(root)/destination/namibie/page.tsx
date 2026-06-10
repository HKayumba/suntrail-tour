import Link from "next/link";
import Image from "next/image";

const info = [
  { label: "Superficie", value: "825,615 km2" },
  { label: "Population", value: "Environ 3 millions" },
  { label: "Animal emblematique", value: "Oryx gemsbok" },
  { label: "Territoire protege", value: "Environ 40%" },
];

const reasons = [
  "Admirer les dunes rouges de Sossusvlei et les paysages du Namib.",
  "Vivre un safari accessible et riche dans le parc national d'Etosha.",
  "Parcourir de grands espaces parfaits pour un autotour ou un circuit guide.",
];

export default function NamibiePage() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 py-28 text-white md:py-40">
        <Image
          src="/assets/images/destination/11.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="container-x relative">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
            Destination
          </p>
          <h1 className="mt-3 text-4xl font-bold uppercase md:text-6xl">
            Namibie
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            Une terre de contrastes, entre deserts anciens, canyons, ocean
            Atlantique et safaris dans des paysages ouverts.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container-x grid gap-4 md:grid-cols-4">
          {info.map((item) => (
            <div key={item.label} className="rounded-lg border bg-card p-6">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="mt-2 text-xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              A propos
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Pourquoi la Namibie</h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            La Namibie est ideale pour les voyageurs qui aiment la liberte, la
            photographie et les paysages puissants. Son reseau de routes, ses
            lodges et sa securite relative en font une destination tres
            adaptable aux voyages sur mesure.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container-x">
          <h2 className="text-3xl font-semibold">Raisons de visiter</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-lg border bg-card p-6">
                <p className="leading-7 text-muted-foreground">{reason}</p>
              </div>
            ))}
          </div>
          <Link href="/demande-devis" className="rts-btn btn-primary mt-10">
            Demande de devis
          </Link>
        </div>
      </section>
    </main>
  );
}
