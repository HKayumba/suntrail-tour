import Link from "next/link";
import Image from "next/image";

const info = [
  { label: "Superficie", value: "801,590 km2" },
  { label: "Population", value: "Environ 34 millions" },
  { label: "Animal emblematique", value: "Dugong et elephant" },
  { label: "Territoire protege", value: "Environ 17%" },
];

const reasons = [
  "Prolonger un safari par un sejour balneaire sur l'ocean Indien.",
  "Explorer les archipels de Bazaruto ou des Quirimbas.",
  "Decouvrir une culture cotiere riche, entre influences africaines, arabes et portugaises.",
];

export default function MozambiquePage() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 py-28 text-white md:py-40">
        <Image
          src="/assets/images/destination/19.webp"
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
            Mozambique
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            Une destination ocean Indien pour les plages sauvages, les iles
            preservees et les sejours post-safari.
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
            <h2 className="mt-3 text-3xl font-semibold">
              Pourquoi le Mozambique
            </h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            Le Mozambique complete parfaitement un voyage en Afrique australe.
            Ses archipels, ses plages et ses eaux chaudes offrent une pause
            elegante apres un safari, avec de belles possibilites de plongee,
            voile et repos en lodge.
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
