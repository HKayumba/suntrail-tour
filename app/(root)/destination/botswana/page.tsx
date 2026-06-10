import Image from "next/image";
import Link from "next/link";

const info = [
  { label: "Superficie", value: "581,730 km2" },
  { label: "Population", value: "Environ 2.7 millions" },
  { label: "Animal emblematique", value: "Elephant d'Afrique" },
  { label: "Territoire protege", value: "Environ 38%" },
];

const sites = [
  {
    title: "Delta de l'Okavango",
    text: "Un labyrinthe d'eau, de roseaux et d'iles sauvages, ideal pour les safaris en mokoro, en bateau et en 4x4.",
  },
  {
    title: "Parc national de Chobe",
    text: "L'une des plus fortes concentrations d'elephants d'Afrique, avec de superbes safaris en bateau sur la riviere Chobe.",
  },
  {
    title: "Moremi Game Reserve",
    text: "Une reserve riche et variee au coeur de l'Okavango, connue pour ses predateurs, ses plaines inondees et ses paysages contrastes.",
  },
  {
    title: "Makgadikgadi Pans",
    text: "D'immenses pans sales, des couchers de soleil surrealistes et une atmosphere minerale totalement differente du delta.",
  },
  {
    title: "Desert du Kalahari",
    text: "Un territoire profond, silencieux et puissant, parfait pour comprendre les grands espaces du Botswana.",
  },
  {
    title: "Savuti",
    text: "Une region mythique pour les lions, les hyenes, les elephants et les scenes de vie sauvage intenses.",
  },
];

const uniqueness = [
  {
    title: "Safari en mokoro dans l'Okavango",
    text: "Glissez silencieusement sur les eaux du delta a bord d'une pirogue traditionnelle guidee par un poler local. Une immersion douce et intime au coeur de la nature, au plus pres des hippopotames, des crocodiles et des oiseaux rares.",
    tags: ["Okavango", "Toute l'annee", "Tous niveaux"],
  },
  {
    title: "Safari en bateau sur la riviere Chobe",
    text: "Une experience emblematique pour observer elephants, hippopotames et crocodiles au plus pres, dans une lumiere magnifique de fin de journee. Les troupeaux d'elephants traversant la riviere au coucher du soleil sont un spectacle inoubliable.",
    tags: ["Chobe", "Saison seche recommandee"],
  },
  {
    title: "Safari a pied avec guide expert",
    text: "Explorez la brousse autrement, a un rythme lent et sensoriel. Un guide naturaliste expert vous conduit a travers le bush pour decouvrir les traces, les plantes medicinales et les subtilites d'un ecosysteme que les vehicules ne peuvent pas reveler.",
    tags: ["Moremi", "Okavango", "Kalahari"],
  },
  {
    title: "Nuits en camps exclusifs",
    text: "Dormez dans des lodges raffines ou des camps de charme au coeur de la nature, ou luxe discret et immersion totale se rencontrent parfaitement. Certains camps accueillent moins de 12 personnes pour une exclusivite absolue.",
    tags: ["Okavango", "Chobe", "Kalahari"],
  },
  {
    title: "Observation des etoiles",
    text: "Grace a l'absence quasi totale de pollution lumineuse, le Botswana offre certains des plus beaux ciels etoiles d'Afrique. A Makgadikgadi ou en plein coeur du Kalahari, les nuits etoilees sont une experience contemplative rare et bouleversante.",
    tags: ["Makgadikgadi", "Kalahari", "Toute l'annee"],
  },
  {
    title: "Safari en avion-charter (fly-in)",
    text: "Le Botswana est la destination fly-in par excellence. De petits avions relient les camps recules au-dessus des marais et du delta, offrant des vues aeriennes spectaculaires sur les troupeaux d'elephants et les meandres de l'Okavango.",
    tags: ["Okavango", "Chobe", "Savuti"],
  },
];

const chooseReasons = [
  {
    title: "Safaris exclusifs et intimistes",
    text: "Ici, les safaris se vivent dans des concessions privees ou des reserves d'exception, loin des foules. Le Botswana privilegie la qualite sur la quantite: moins de visiteurs, plus d'emotion, davantage de rencontres authentiques avec la faune sauvage.",
  },
  {
    title: "Photographe ou passionne de nature",
    text: "Delta de l'Okavango au lever du soleil, meute de lycaons dans Moremi, grands troupeaux d'elephants sur la riviere Chobe, zebres en migration a Makgadikgadi: chaque instant est une image inoubliable.",
  },
  {
    title: "Un safari romantique d'exception",
    text: "Diner prive sous les etoiles, lodge de charme au coeur du delta, coucher de soleil sur la riviere Chobe: le Botswana est l'une des destinations les plus romantiques d'Afrique pour les couples en quete de raffinement et d'emotion.",
  },
  {
    title: "Conservation exemplaire",
    text: "Pionnier en matiere de tourisme responsable, le Botswana a mise sur le tourisme a faible impact. Chaque safari contribue directement a la protection de l'un des derniers grands ecosystemes intacts d'Afrique australe.",
  },
];

const circuits = [
  {
    title: "Botswana Essentiel",
    duration: "8 a 10 jours",
    text: "Chobe, Moremi et Okavango pour une premiere approche concentree sur les grands safaris.",
  },
  {
    title: "Okavango & Kalahari",
    duration: "10 a 12 jours",
    text: "Un voyage plus contraste entre zones humides, concessions privees et desert du Kalahari.",
  },
  {
    title: "Botswana & Chutes Victoria",
    duration: "9 a 11 jours",
    text: "Une combinaison fluide entre les safaris du nord Botswana et les chutes Victoria.",
  },
];

const entryConditions = [
  {
    title: "Passeport & visa",
    text: "Les ressortissants de l'UE (France, Belgique, Suisse...) entrent au Botswana sans visa pour des sejours touristiques jusqu'a 90 jours. Le passeport doit etre valide au minimum 6 mois apres la date d'entree et disposer d'au moins deux pages vierges. L'entree se fait principalement par l'aeroport international de Maun (MUB) ou Kasane (BBK), et les postes-frontieres terrestres avec la Namibie, le Zimbabwe et l'Afrique du Sud.",
  },
  {
    title: "Sante & vaccinations",
    text: "Aucune vaccination obligatoire pour entrer au Botswana depuis l'Europe, sauf fievre jaune si vous arrivez d'un pays endemique. Il est recommande d'etre a jour pour: hepatite A et B, typhoide, tetanos et rage en zones rurales. Un traitement antipaludeen est fortement conseille pour les zones a risque: Okavango, Chobe et Caprivi, surtout en saison humide.",
  },
  {
    title: "Assurance voyage",
    text: "Une assurance multirisques incluant le rapatriement medical est fortement recommandee. Verifiez que votre contrat couvre les activites outdoor comme le safari en 4x4, le mokoro, la randonnee et les vols en petits avions charter, courants pour relier les camps de l'Okavango. Les frais medicaux et d'evacuation peuvent etre eleves dans les zones eloignees.",
  },
  {
    title: "Monnaie & budget",
    text: "La monnaie locale est le Pula botswanais (BWP). Les cartes Visa et Mastercard fonctionnent dans les lodges et les villes de taille moyenne. Emportez du cash pour les petites depenses locales. Le Botswana est une destination haut de gamme: le budget journalier varie de 350 EUR pour un camp milieu de gamme a 1 200 EUR et plus pour un camp exclusif fly-in. Cette politique maintient une faune abondante et une frequentation limitee.",
  },
  {
    title: "Deplacements & transferts",
    text: "La conduite se fait a gauche. Un permis de conduire europeen est accepte. Les pistes vers les reserves sont non asphaltees: un 4x4 est indispensable hors des villes. La plupart des lodges de l'Okavango sont accessibles uniquement en avion charter depuis Maun. Les transferts en mokoro ou en bateau sont courants a l'interieur du delta.",
  },
  {
    title: "Meilleure periode",
    text: "Saison seche (mai-octobre): ideale pour les safaris, avec des animaux concentres aux points d'eau, une vegetation clairsemee et une excellente observation. Les eaux sont hautes dans l'Okavango de juillet a septembre, le meilleur moment pour le mokoro. Saison verte (novembre-avril): paysages verdoyants, lumiere magnifique, nombreuses naissances et oiseaux migrateurs exceptionnels, ideal pour les photographes.",
  },
];

const accommodations = [
  {
    title: "Lodges de safari",
    text: "Confort, service soigne et acces direct aux activites guidees dans les parcs ou concessions.",
  },
  {
    title: "Camps intimistes",
    text: "Petites structures en pleine nature, parfaites pour une immersion elegante et calme.",
  },
  {
    title: "Mobile safari",
    text: "Une experience plus aventureuse, avec campement mobile et progression au fil des pistes.",
  },
];

const seasons = [
  {
    period: "Novembre - Janvier",
    title: "Saison verte",
    text: "Paysages verdoyants, naissances dans les troupeaux, lumiere photographique magnifique. Moins de visiteurs, tarifs plus attractifs. C'est la periode ideale pour les passionnes d'oiseaux: plus de 500 especes recensees dans le delta.",
    tags: ["Oiseaux", "Photographie", "Prix reduits"],
  },
  {
    period: "Fevrier - Avril",
    title: "Saison des pluies",
    text: "Saison humide, chaleur plus intense. Les Makgadikgadi Pans se remplissent d'eau, attirant flamants roses et zebres en migration. Bebes animaux abondants. Certaines pistes peuvent etre difficiles d'acces dans le nord.",
    tags: ["Migration zebres", "Flamants", "Faune juvenile"],
  },
  {
    period: "Mai - Juillet",
    title: "Debut de saison seche",
    text: "Temperatures douces et agreables. Les eaux de l'Okavango commencent a monter avec l'inondation annuelle venue d'Angola. Excellent pour les safaris en 4x4 et les premieres activites de mokoro. Animaux de plus en plus visibles.",
    tags: ["Safari", "Mokoro", "Autotour"],
  },
  {
    period: "Aout - Octobre",
    title: "Meilleure saison safari",
    text: "La saison la plus prisee. Les eaux de l'Okavango sont au maximum entre juillet et septembre, les animaux se concentrent aux points d'eau, la vegetation est clairsemee. Spectacle garanti: elephants, lions, guepards, lycaons. Reservez tres en avance.",
    tags: ["Safari", "Mokoro", "Delta au maximum"],
    featured: true,
  },
];

const seasonStats = [
  { value: "28 - 38°C", label: "Ete (nov. - mars)" },
  { value: "8 - 26°C", label: "Hiver (mai - sept.)" },
  { value: "Juil. - Sept.", label: "Delta au maximum" },
  { value: "7 - 14 jours", label: "Duree ideale du sejour" },
  { value: "Toute l'annee", label: "Excellente destination" },
];

const faqs = [
  {
    question: "Le Botswana est-il adapte a un premier safari ?",
    answer:
      "Oui, surtout pour les voyageurs qui souhaitent une experience qualitative, calme et tres orientee nature.",
  },
  {
    question: "Combien de temps faut-il prevoir ?",
    answer:
      "Un voyage de 8 a 12 jours permet deja de combiner Chobe, Okavango et une ou deux reserves majeures.",
  },
  {
    question: "Peut-on combiner le Botswana avec un autre pays ?",
    answer:
      "Oui. Les combinaisons les plus naturelles sont les chutes Victoria, la Namibie, l'Afrique du Sud ou la Zambie.",
  },
  {
    question: "Le Botswana convient-il aux familles ?",
    answer:
      "Oui, selon l'age des enfants et les lodges choisis. Certaines activites et concessions ont des restrictions d'age.",
  },
];

const suntrailReasons = [
  {
    title: "Expertise locale de l'Afrique australe",
    text: "Notre equipe connait chaque camp, chaque concession, chaque saison du Botswana. Nos recommandations viennent du terrain et d'un reseau de partenaires locaux de confiance, pas d'un catalogue ou d'un algorithme.",
  },
  {
    title: "Itineraires 100% sur mesure",
    text: "Chaque voyage est concu autour de vos envies, votre rythme et votre budget. Safari romantique a deux, aventure en famille, photographie animaliere ou immersion culturelle, nous adaptons chaque detail a vos attentes.",
  },
  {
    title: "Selection rigoureuse des lodges",
    text: "Nous visitons et selectionnons personnellement chaque lodge et camp de notre catalogue selon des criteres stricts: qualite des guides, localisation, integration environnementale, cuisine et authenticite de l'experience proposee.",
  },
  {
    title: "Approche responsable du safari",
    text: "Nous travaillons exclusivement avec des partenaires engages dans la conservation et le developpement des communautes locales. Voyager au Botswana avec Suntrail, c'est contribuer directement a la protection de la faune sauvage.",
  },
  {
    title: "Accompagnement francophone",
    text: "De la demande de devis a votre retour, notre equipe vous accompagne en francais a chaque etape. Nos partenaires locaux sont egalement selectionnes pour leur capacite a accueillir des voyageurs francophones.",
  },
  {
    title: "Serenite avant, pendant, apres",
    text: "Assistance disponible pendant tout votre sejour. Vols perturbes, changements de derniere minute, imprevus climatiques, notre equipe est la pour gerer a votre place et vous permettre de vous concentrer sur l'essentiel: profiter.",
  },
];

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-muted-foreground">{text}</p>
      ) : null}
    </div>
  );
}

export default function BotswanaPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 py-28 text-white md:py-44">
        <Image
          src="/assets/images/breadcrumb/01.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75" />
        <div className="container-x relative pt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
            Destination
          </p>
          <h1 className="mt-3 max-w-5xl text-4xl font-bold uppercase text-white md:text-6xl">
            Le Botswana, l'elegance sauvage de l'Afrique australe
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/85">
            Entre les plaines du Kalahari, les marais luxuriants de
            l'Okavango et les rivieres sauvages de Chobe, le Botswana revele
            une Afrique preservee, exclusive et profondement immersive.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#circuits" className="rts-btn btn-primary">
              Decouvrir nos circuits
            </Link>
            <Link href="/demande-devis" className="rts-btn btn-primary">
              Demander un devis
            </Link>
          </div>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              A propos
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Pourquoi le Botswana</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Le Botswana est une destination d'exception pour les voyageurs en
              quete d'espaces infinis, de safaris exclusifs et d'une nature
              encore intacte. Ici, la qualite de l'experience prime sur la
              quantite: peu de vehicules, des guides experts et une faune
              observee dans le calme.
            </p>
            <p>
              Des plaines du Kalahari aux marais de l'Okavango, des pans sales
              de Makgadikgadi aux rivieres de Chobe, le pays offre une diversite
              rare dans une ambiance confidentielle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-6 py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Pourquoi choisir le Botswana
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                4 raisons de tomber amoureux
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-muted-foreground">
                Le Botswana seduit par son approche du safari haut de gamme et
                responsable. Voici pourquoi il s'impose comme l'une des plus
                grandes aventures africaines.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {chooseReasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="group rounded-lg border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">
                    {reason.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-6 py-16 md:py-20">
        <div className="container-x">
          <SectionIntro
            eyebrow="Sites a visiter"
            title="Les lieux incontournables du Botswana"
            text="Chaque region propose une facon differente de vivre le safari: l'eau, la savane, le desert, les grands troupeaux et les nuits sous les etoiles."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sites.map((site) => (
              <div key={site.title} className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold">{site.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {site.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Experiences signature
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Ce que seul le Botswana peut offrir
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Des experiences rares, concues pour ceux qui cherchent davantage
              qu'un safari: une immersion totale au coeur de la nature
              africaine.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {uniqueness.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.text}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border bg-muted px-3 py-1 text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="circuits" className="bg-muted/40 px-6 py-16 md:py-20">
        <div className="container-x">
          <SectionIntro
            eyebrow="Circuits"
            title="Idees de voyages au Botswana"
            text="Ces propositions servent de base. Chaque itineraire peut etre adapte selon vos dates, votre rythme, votre niveau de confort et vos envies."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {circuits.map((circuit) => (
              <div key={circuit.title} className="rounded-lg border bg-card p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {circuit.duration}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{circuit.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {circuit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container-x rounded-lg bg-forest p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                Voyage sur mesure
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Imaginez votre safari au Botswana
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/80">
                Dites-nous votre periode, votre style de voyage et vos envies:
                nous composons un itineraire fluide entre lodges, reserves et
                experiences.
              </p>
            </div>
            <Link href="/demande-devis" className="rts-btn btn-primary">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-8 rounded-lg border bg-card p-6 shadow-sm md:p-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Formalites
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Conditions d'entree au Botswana
              </h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                Passeport, sante, assurance, budget et transferts: voici les
                points pratiques a anticiper avant de confirmer votre safari.
              </p>
              <p className="mt-4 rounded-md bg-muted p-4 text-sm leading-6 text-muted-foreground">
                Les exigences peuvent changer selon votre nationalite et votre
                itineraire. Suntrail verifie les formalites applicables avant le
                depart.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {entryConditions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border bg-background p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-6 py-16 md:py-20">
        <div className="container-x">
          <SectionIntro
            eyebrow="Hebergement"
            title="Ou dormir au Botswana"
            text="Le choix de l'hebergement influence fortement le rythme du voyage, les activites possibles et le niveau d'exclusivite."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {accommodations.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="container-x">
          <SectionIntro
            eyebrow="Meilleure periode"
            title="Quand visiter le Botswana"
            text="Le Botswana se visite toute l'annee, mais chaque saison change l'ambiance du safari: couleurs, niveaux d'eau, observation animaliere, frequentation et budget."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {seasons.map((season) => (
              <div
                key={season.period}
                className={
                  season.featured
                    ? "relative overflow-hidden rounded-lg border border-primary/40 bg-forest p-6 text-white shadow-lg"
                    : "rounded-lg border bg-card p-6 shadow-sm"
                }
              >
                {season.featured ? (
                  <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-black">
                    Top safari
                  </span>
                ) : null}
                <p
                  className={
                    season.featured
                      ? "text-sm font-semibold uppercase tracking-[0.16em] text-gold"
                      : "text-sm font-semibold uppercase tracking-[0.16em] text-primary"
                  }
                >
                  {season.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{season.title}</h3>
                <p
                  className={
                    season.featured
                      ? "mt-4 leading-7 text-white/80"
                      : "mt-4 leading-7 text-muted-foreground"
                  }
                >
                  {season.text}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {season.tags.map((tag) => (
                    <span
                      key={tag}
                      className={
                        season.featured
                          ? "rounded-full border border-white/20 px-3 py-1 text-sm text-white/85"
                          : "rounded-full border bg-muted px-3 py-1 text-sm text-muted-foreground"
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 rounded-lg border bg-card p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-5">
            {seasonStats.map((stat) => (
              <div key={stat.label} className="rounded-md bg-muted/50 p-4">
                <p className="text-lg font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-6 py-16 md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Geographie
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Where is Botswana?</h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            Le Botswana se situe en Afrique australe. Il est borde par la
            Namibie a l'ouest et au nord, l'Afrique du Sud au sud, le Zimbabwe
            a l'est et la Zambie au nord pres de la region de Kazungula. Les
            principales portes d'entree touristiques sont Maun pour l'Okavango,
            Kasane pour Chobe et Gaborone pour certains circuits regionaux.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-lg bg-forest text-white">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="p-8 md:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                  Suntrail
                </p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Why visit Botswana with Suntrail
                </h2>
                <p className="mt-5 max-w-xl leading-8 text-white/75">
                  Une expertise de terrain, une selection rigoureuse et un
                  accompagnement francophone pour transformer votre safari en
                  voyage fluide, responsable et profondement personnel.
                </p>
                <Link href="/demande-devis" className="rts-btn btn-primary mt-8">
                  Parler a un specialiste
                </Link>
              </div>
              <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                {suntrailReasons.map((item, index) => (
                  <div key={item.title} className="bg-forest p-6 md:p-7">
                    <p className="text-sm font-semibold text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-white/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-6 py-16 md:py-20">
        <div className="container-x">
          <SectionIntro
            eyebrow="FAQ"
            title="Questions frequentes sur le Botswana"
          />
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border bg-card p-6">
                <summary className="cursor-pointer text-lg font-semibold">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container-x overflow-hidden rounded-lg bg-charcoal text-white">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-72">
              <Image
                src="/assets/images/destination/15.webp"
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                Pret a partir?
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Construisons votre voyage au Botswana
              </h2>
              <p className="mt-4 leading-8 text-white/80">
                Que vous reviez d'un lodge confidentiel, d'un mobile safari ou
                d'une extension aux chutes Victoria, nous dessinons le parcours
                avec vous.
              </p>
              <Link href="/demande-devis" className="rts-btn btn-primary mt-8">
                Commencer mon projet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
