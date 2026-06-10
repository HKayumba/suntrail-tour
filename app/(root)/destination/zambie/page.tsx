import Link from "next/link";

const info = [
  { label: "Superficie", value: "752,612 km2" },
  { label: "Population", value: "Environ 21 millions" },
  { label: "Animal emblematique", value: "Leopard" },
  { label: "Territoire protege", value: "Environ 30%" },
];

const reasons = [
  "Vivre des safaris a pied dans South Luangwa, l'une des grandes references du continent.",
  "Explorer le Lower Zambezi entre safaris, canoe et observation de la faune.",
  "Associer une nature brute aux chutes Victoria cote zambien.",
];

export default function ZambiePage() {
  return (
    <main>
      <section className="bg-muted px-6 py-24 md:py-32">
        <div className="container-x">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Destination
          </p>
          <h1 className="mt-3 text-4xl font-bold uppercase md:text-6xl">
            Zambie
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Une destination safari authentique pour les amoureux de nature
            brute, de guides passionnes et d'experiences loin des foules.
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
            <h2 className="mt-3 text-3xl font-semibold">Pourquoi la Zambie</h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            La Zambie seduit les voyageurs qui veulent une experience safari
            plus intime et plus aventuriere. Les parcs y sont vastes, les
            guides excellents, et l'observation de la faune peut se vivre a
            pied, en bateau ou en vehicule.
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
