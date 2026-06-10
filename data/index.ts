// Data for the home page and other sections of the website

import heroSavanna from "@/public/assets/images/destination/15.webp";
import heroLeopard from "@/public/assets/images/banner/leopard.webp";
import heroCamp from "@/public/assets/images/banner/hero-01.webp";
import shield from "@/public/assets/images/feature/01.svg"
import hour from "@/public/assets/images/feature/02.svg"
import guide from "@/public/assets/images/feature/03.svg"
import happyClient from "@/public/assets/images/counter/11.svg"
import circuit from "@/public/assets/images/counter/12.svg"
import destinationIcon from "@/public/assets/images/counter/13.svg"
import annee from "@/public/assets/images/counter/14.svg"

// Home page data
export const homeSlides = [
  {
    img: heroSavanna,
    eyebrow: "Voyages privés d'exception",
    title: "L'Afrique,\ndans sa plus belle expression",
    sub: "Des itinéraires confidentiels imaginés par nos experts, du Kalahari aux îles de l'océan Indien.",
  },
  {
    img: heroLeopard,
    eyebrow: "Safari authentique",
    title: "À la rencontre\ndes grands félins",
    sub: "Lodges intimes, pisteurs d'élite, instants suspendus avec la faune sauvage.",
  },
  {
    img: heroCamp,
    eyebrow: "Lodges & camps signature",
    title: "Le luxe\nau cœur du sauvage",
    sub: "Tentes d'exception, dîners aux lanternes, ciels constellés à perte de regard.",
  },
];

// Inspiration/ themes
export const inspiration = [
    {
        title: "Safari",
        img: heroCamp,
        link: "",
    },
    {
        title: "Partir à deux",
        img: heroCamp,
        link: "",
    },
    {
        title: "En famille",
        img: heroCamp,
        link: "",
    },
    {
        title: "Lune de miel",
        img: heroCamp,
        link: "",
    },
    {
        title: "Safari photo/ornitho",
        img: heroCamp,
        link: "",
    },
    {
        title: "Voyage de luxe",
        img: heroCamp,
        link: "",
    },
];

// Features
export const features =[
    {
        title: "Assistance 24h/24",
        desc: "À vos côtés à tout moment, où que vous soyez, avec un accompagnement discret et réactif.",
        icon: hour,
    },
    {
        title: "Sécurité absolue",
        desc: "Encadrement professionnel et suivi permanent pour garantir votre tranquillité tout au long du voyage.",
        icon: shield,
    },
    {
        title: "Guides locaux certifiés",
        desc: "Des experts locaux, offrant une connaissance approfondie, riches et parfaitement encadrées.",
        icon: guide,
    }
];

// Destinations/ packages
export const packageDestinations = [
    {
        title: "Botswana",
        img: heroCamp,
        icon: "users",
        location: "Botswana",
        reviews: 120,
        days: 10,
        price: 5000,
        link: "",
    },
    {
        title: "Zambia",
        img: heroCamp,
        icon: "users",
        location: "Zambia",
        reviews: 95,
        days: 7,
        price: 3500,
        link: "",
    },
    {
        title: "Kenya",
        img: heroCamp,
        icon: "users",
        location: "Kenya",
        reviews: 85,
        days: 8,
        price: 4000,
        link: "",
    },
];

// Pourquoi nous choisir
export const whyChooseUs = [
    {
        icon: "users",
        title: "Voyages sur mesure, sans compromis",
        desc: "Chaque itinéraire est conçu exclusivement pour vous—selon vos envies, votre rythme et votre vision du voyage.",
    },
    {
        icon: "shield",
        title: "Une expertise locale incomparable",
        desc: "Basés en Namibie, nous connaissons chaque destination en profondeur et vous ouvrons les portes d’expériences uniques.",
    },
];

// FAQ
export const faq = [
    {
        id: 1,
        question: "Comment se déroule la réservation d'un voyage sur mesure ?",
        answer: "Après votre demande de devis, un conseiller Suntrail vous contacte dans les 24h. Ensemble, nous concevons un itinéraire personnalisé selon vos dates, votre budget et vos envies. Une fois validé, nous gérons toute la logistique : vols intérieurs, lodges, guides, transferts et permis.",
    },
    {
        id: 2,
        question: "Quelle est la meilleure période pour visiter la Namibie et le Botswana ?",
        answer: "La saison sèche (mai à octobre) est idéale pour les safaris — la végétation est clairsemée et les animaux se regroupent autour des points d'eau. Pour le Botswana, juillet–octobre est la haute saison, avec des concentrations spectaculaires dans le delta de l'Okavango.",
    },
    {
        id: 3,
        question: "Faut-il un visa pour le Rwanda ou le Zimbabwe ?",
        answer: "Le Rwanda propose le visa en ligne (e-visa) accessible à tous les nationalités. Le Zimbabwe délivre un visa à l'arrivée pour la plupart des voyageurs. Notre équipe vous guide sur les formalités propres à chaque destination lors de la préparation de votre voyage.",
    },
    {
        id: 4,
        question: "Les voyages Suntrail sont-ils adaptés aux familles avec enfants ?",
        answer: "Absolument. Nous concevons des voyages familiaux adaptés à tous les âges, avec des activités sécurisées et enrichissantes. La Namibie et le Zimbabwe offrent d'excellentes options pour les familles, avec des lodges qui accueillent les enfants dès 6 ans pour les safaris en véhicule.",
    }
];

// STATS
export const stats = [
   { id: 1, icon: happyClient, value: 120, suffix: "K+", label: "Voyageurs heureux" },
   { id: 2, icon: circuit, value: 250, suffix: "+", label: "Circuits proposés" },
   { id:3, icon: destinationIcon, value: 50, suffix: "+", label: "Destinations couvertes" },
   { id:4, icon: annee, value: 10, suffix: "+", label: "Années d'expérience" },
]


// Pourquoi nous faire confiance
export const confiance = [
    {
        id: 1,
        desc:"Agence locale basée à Windhoek depuis plus de 10 ans",
    },
    {
        id: 2,
        desc:"Devis 100 % gratuit et sans engagement",
    },
    {
        id: 3,
        desc:"Réponse garantie sous 24 heures",
    },
    {
        id: 4,
        desc:"Experts de 6 destinations en Afrique australe",
    },
    {
        id: 5,
        desc:"Note 5/5 sur l'ensemble de nos avis clients",
    },
    {
        id: 6,
        desc:"Paiements sécurisés, itinéraires sur mesure",
    },
]
