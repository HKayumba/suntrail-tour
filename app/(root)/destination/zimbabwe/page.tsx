import Link from "next/link";

const info = [
  { label: "Superficie", value: "390,757 km2" },
  { label: "Population", value: "Environ 16.7 millions" },
  { label: "Animal emblematique", value: "Elephant et lion" },
  { label: "Territoire protege", value: "Environ 27%" },
];

const reasons = [
  "Decouvrir les chutes Victoria, l'un des grands spectacles naturels du continent.",
  "Faire un safari dans Hwange, connu pour ses elephants et ses predateurs.",
  "Associer patrimoine, fleuve Zambeze et grands espaces sauvages.",
];

export default function ZimbabwePage() {
  return (
    <main>
      <section className="bg-muted px-6 py-24 md:py-32">
        <div className="container-x">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Destination
          </p>
          <h1 className="mt-3 text-4xl font-bold uppercase md:text-6xl">
            Zimbabwe
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Une destination puissante pour combiner chutes Victoria, safaris et
            culture dans un format intense et authentique.
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
            <h2 className="mt-3 text-3xl font-semibold">Pourquoi le Zimbabwe</h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            Le Zimbabwe offre des safaris de grande qualite, une hospitalite
            reconnue et des sites naturels majeurs. C'est un excellent choix
            pour les voyageurs qui veulent vivre les chutes Victoria tout en
            ajoutant une vraie dimension safari.
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
