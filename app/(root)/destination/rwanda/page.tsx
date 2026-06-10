import Link from "next/link";

const info = [
  { label: "Superficie", value: "26,338 km2" },
  { label: "Population", value: "Environ 14 millions" },
  { label: "Animal emblematique", value: "Gorille de montagne" },
  { label: "Territoire protege", value: "Environ 9%" },
];

const reasons = [
  "Rencontrer les gorilles de montagne dans le parc national des Volcans.",
  "Combiner forets, collines, lacs et culture dans un itineraire compact.",
  "Profiter d'une destination propre, organisee et facile a integrer a un safari regional.",
];

export default function RwandaPage() {
  return (
    <main>
      <section className="bg-muted px-6 py-24 md:py-32">
        <div className="container-x">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Destination
          </p>
          <h1 className="mt-3 text-4xl font-bold uppercase md:text-6xl">
            Rwanda
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Le pays des mille collines, connu pour ses gorilles de montagne,
            ses forets luxuriantes et son sens remarquable de l'accueil.
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
            <h2 className="mt-3 text-3xl font-semibold">Pourquoi le Rwanda</h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            Le Rwanda est une destination emouvante et tres differente des
            safaris classiques. Son format compact permet de vivre des
            experiences fortes en peu de temps, notamment le trekking des
            gorilles et les paysages du lac Kivu.
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
