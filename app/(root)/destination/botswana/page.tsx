import Link from "next/link";

const info = [
  { label: "Superficie", value: "581,730 km2" },
  { label: "Population", value: "Environ 2.7 millions" },
  { label: "Animal emblematique", value: "Elephant d'Afrique" },
  { label: "Territoire protege", value: "Environ 38%" },
];

const reasons = [
  "Explorer le delta de l'Okavango en mokoro ou en safari prive.",
  "Observer de grands troupeaux d'elephants dans le parc national de Chobe.",
  "Combiner lodges intimistes, concessions privees et nature tres preservee.",
];

export default function BotswanaPage() {
  return (
    <main>
      <section className="bg-muted px-6 py-24 md:py-32">
        <div className="container-x">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Destination
          </p>
          <h1 className="mt-3 text-4xl font-bold uppercase md:text-6xl">
            Botswana
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Un sanctuaire sauvage d'Afrique australe, celebre pour ses safaris
            exclusifs, ses paysages d'eau et de savane, et sa faune
            spectaculaire.
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
            <h2 className="mt-3 text-3xl font-semibold">Pourquoi le Botswana</h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            Le Botswana est une destination de safari haut de gamme ou la
            conservation occupe une place centrale. Entre le delta de
            l'Okavango, Chobe, Moremi et les pans du Makgadikgadi, le pays
            offre une diversite rare dans une ambiance confidentielle.
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
