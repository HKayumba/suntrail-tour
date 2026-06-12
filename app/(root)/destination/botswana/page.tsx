"use client"

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, Check, CheckCircle, ImageMinus, MapPin, Phone, Sailboat } from "lucide-react";
import { chooseReasons, circuits, info, sites, uniqueness } from "@/data/botswana";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";
import Bostwana from "@/components/destinationSeaons/Botswana";
import bgImage from "@/public/assets/images/destination/botswana/chobe.jpg"





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

      {/* Info */}
      <section className="bg-[#BA6827]">
        <div className="container-x">
          <div className="relative z-20 -mt-px">
            <div className="mx-auto grid grid-cols-2 divide-x divide-[oklch(1_0_0/0.12)] md:grid-cols-4">
              {info.map((item) => (
                <div key={item.label} className="px-5 py-7 text-center sm:px-8">
                  <span className="text-[11px] md:text-[12px] uppercase text-[#FFF8F1]">{item.label}</span> <br />
                  <span className="mt-2 font-display md:text-4xl text-[oklch(0.97_0.01_90)] sm:text-3xl">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Botswana */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-3xl text-[#BA6827] font-display">À la découverte du Botswana</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">Un sanctuaire africain d'exception</h2>
              <p className="text-justify text-muted-foreground leading-relaxed">Le Botswana est une destination d'exception pour les voyageurs en quête d'espaces infinis, de safaris exclusifs et d'une nature encore intacte. Réputé pour sa politique de conservation exemplaire, le pays offre une expérience de voyage rare, où la faune règne en maître et où chaque rencontre se vit dans le calme, l'authenticité et le respect de l'environnement.</p>
              <p className="text-justify text-muted-foreground leading-relaxed">Des plaines du Kalahari aux marais luxuriants de l'Okavango, des pans salés de Makgadikgadi aux rivières sauvages de Chobe — le Botswana révèle une Afrique élégante, préservée et profondément immersive.</p>
              <span className="text-justify italic text-muted-foreground/80 block pl-4 border-l-4 border-[#BA6827]">« Au Botswana, les safaris se vivent loin des foules. Ici, c'est la qualité de l'expérience qui prime — un éléphant à portée de main, un ciel étoilé sans limite, le silence absolu des grands espaces. »</span>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/demande-devis"
                  className="inline-flex items-center justify-center rts-btn btn-primary"
                >
                  Planifier mon voyage
                </Link>

                <Link
                  href="tel:+26771234567"
                  className="inline-flex items-center gap-2 rts-btn btn-primary leading-none"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  <span className="leading-none">(+267) 71 234 567</span>
                </Link>
              </div>
            </div>
            
            {/* Image div - centered vertically */}
            <div className="flex items-center justify-center h-full">
              <Image
                src="/assets/images/destination/48.webp"
                alt="Botswana"
                width={600}
                height={700}
                className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to fall in love */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center items-center mb-10">
            <span className="inline-flex gap-4 items-center text-md text-[#BA6827]">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Pourquoi choisir le Botswana</span>
            <h2>4 raisons de tomber amoureux</h2>
            <p>Le Botswana séduit par son approche du safari haut de gamme et responsable. Voici pourquoi il s'impose comme l'une des plus grandes aventures africaines.</p> 
          </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chooseReasons.map((reason, idx) => (
            <Card 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-white to-slate-50 dark:from-card dark:to-muted/20 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Number indicator */}
              <div className="absolute top-4 right-4">
                <span className={`text-4xl font-display font-black ${reason.iconColor}/20 transition-all duration-300 group-hover:${reason.iconColor}/30`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${reason.borderColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              
              <CardHeader className="pb-4 pt-8 px-6">
                <div className="space-y-5">
                  <div className="relative inline-flex">
                    <div className={`absolute inset-0 ${reason.iconBgColor}/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className={`relative p-3.5 rounded-xl bg-gradient-to-br from-white to-slate-100 dark:from-card dark:to-muted/30 shadow-sm transition-all duration-300 ${reason.iconBgColor}/10 ${reason.iconHoverBgClass}`}>
                      <reason.icon className={`w-15 h-15 transition-all duration-300 ${reason.iconColor} ${reason.iconHoverColor}`} />
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-display font-bold leading-tight tracking-tight text-foreground">
                    {reason.title}
                  </h4>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 pb-8 px-6">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {reason.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Sites not to miss */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center items-center mb-10">
            <span className="inline-flex gap-4 items-center text-md text-[#BA6827]">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Incontournables</span>
            <h2>Les sites à ne pas manquer</h2>
            <p>Des marais de l'Okavango aux étendues silencieuses du Kalahari, voici les joyaux qui font du Botswana une destination hors du commun.</p> 
          </div>
          <Carousel  opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3500,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="relative w-full">
            <CarouselContent>
              {sites.map((site, idx) =>(
                <CarouselItem key={idx} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <Card className="p-0 flex h-full flex-col overflow-hidden rounded-4xl border border-border bg-card shadow-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={site.image}
                        alt={site.title}
                        width={1280}
                        height={900}
                        loading="lazy"
                        className="size-full object-cover object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <Badge className="bg-[#BA6827]"><p className="absolute left-4 top-4 rounded-full bg-[#BA6827] px-3 py-1 text-sm font-semibold text-white shadow">
                        {site.badge}
                      </p></Badge>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.18_0.02_60/0.85)] to-transparent p-5">
                        <h3 className="font-display text-2xl text-white mb-0 pb-0">
                          {site.title}
                        </h3>
                        <p className="mt-0 flex items-center gap-1.5 text-xs text-white">
                          <MapPin className="size-5" /> {site.location}
                        </p>
                      </div>
                    </div>
                    <CardContent>
                      <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {site.text}
                    </p>
                    <p className="mt-4 border-t border-border pt-4 text-sm text-foreground">
                      <span className="font-semibold text-[#BA6827]">À vivre : </span>
                      {site.experiences}
                    </p>
                  </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-3">
              <CarouselPrevious className="static left-auto right-auto top-auto size-11 translate-x-0 translate-y-0 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="static left-auto right-auto top-auto size-11 translate-x-0 translate-y-0 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Uniqueness */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center items-center mb-10">
            <span className="inline-flex gap-4 items-center text-md text-[#BA6827]">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Expériences signature
            </span>
            <h2>Ce que seul le Botswana peut offrir</h2>
            <p>Des expériences rares, conçues pour ceux qui cherchent davantage qu'un safari — une immersion totale au cœur de la nature africaine.</p> 
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {uniqueness.map((item, idx) => (
            <Card 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-white to-slate-50 dark:from-card dark:to-muted/20 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Decorative accent line */}
              <div 
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.borderColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
              
              <CardHeader className="pb-4 pt-8 px-6">
                <div className="space-y-5">
                  {/* Icon container - fixed hover colors */}
                  <div className="relative inline-flex">
                    <div className={`absolute inset-0 ${item.iconBgColor}/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className={`relative p-3.5 rounded-xl bg-gradient-to-br from-white to-slate-100 dark:from-card dark:to-muted/30 shadow-sm transition-all duration-300 ${item.iconBgColor}/10 ${item.iconHoverBgColor}`}>
                      <item.icon className={`w-15 h-15 transition-all duration-300 ${item.iconColor} ${item.iconHoverColor}`} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-display font-bold leading-tight tracking-tight text-foreground">
                    {item.title}
                  </h4>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 pb-8 px-6">
                <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                  {item.text}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.tags.map((tag, tagIdx) => (
                   
                  <span 
                    key={tagIdx} 
                    className={`inline-flex items-center gap-1.5 text-lg px-3 py-1.5 rounded-full ${item.iconBgColor}/10 ${item.iconColor} font-medium transition-all duration-200 cursor-default leading-none`}
                  >
                    <CheckCircle size={10} className="h-5 w-5 shrink-0 -translate-y-px" />
                    <span>{tag}</span>
                  </span>
                  ))}
                </div>
                
                {/* Decorative element */}
                <div className="mt-4 pt-2 border-t border-slate-100 dark:border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <item.icon className="w-8 h-8 opacity-50" />
                    <span className="text-lg">Expérience authentique</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Circuits Botswana */}
      <section id="circuits" className="py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 pb-6 border-b border-gray-100">
            <div className="max-w-4xl text-start">
              <span className="inline-flex gap-4 items-center text-md text-[#BA6827]">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Circuits favoris</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950 mb-4">
                Nos circuits phares au Botswana
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Des itinéraires soigneusement construits, alliant safaris d'exception, hébergements de caractère et expériences immersives.
              </p> 
            </div>

            <div className="shrink-0">
              <Link href="#circuits" className="rts-btn btn-primary">
                Tous nos circuits
              </Link>
            </div>
          </div>

          <div className="">
             <Carousel  opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3500,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="relative w-full">
            <CarouselContent>
              {circuits.map((circuit, idx) =>(
                <CarouselItem key={idx} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <Card className="p-0 flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={circuit.image}
                        alt={circuit.title}
                        width={1280}
                        height={960}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-x-4 top-4 z-10 flex items-start justify-between gap-3 pointer-events-none">
                        <span className="rounded-full bg-[#BA6827] px-3 py-1 text-2xl font-semibold text-white shadow">
                          {circuit.duration}
                        </span>
                        <span className="rounded-full bg-[#BA6827] px-3 py-1 text-2xl font-semibold text-white justify-center shadow">
                          {circuit.badge}
                        </span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.18_0.02_60/0.85)] to-transparent p-5">
                        <h3 className="mb-0 pb-0 font-display text-2xl text-white">
                          {circuit.title}
                        </h3>
                        <p className="mt-0 pt-0 flex items-center gap-1.5 text-xs text-white">
                          <MapPin className="size-5" /> {circuit.region}
                        </p>
                      </div>
                    </div>
                    <CardContent>
                      <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {circuit.text}
                    </p>
                    <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                      <div>
                        <span className="text-xl text-muted-foreground">À partir de</span> <br />
                        <span className="text-4xl mt-0 pt-0 font-display text-[#BA6827]">
                          {circuit.price}
                          <span className="ml-1 text-lg font-normal text-muted-foreground">
                            / pers.
                          </span>
                        </span>
                      </div>
                      <Link href="/demande-devis" className="rts-btn btn-primary text-lg">
                        Demander un devis
                      </Link>
                    </div>
                  </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-3">
              <CarouselPrevious className="static left-auto right-auto top-auto size-11 translate-x-0 translate-y-0 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="static left-auto right-auto top-auto size-11 translate-x-0 translate-y-0 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>
          </div>
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <Image
          src={bgImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 size-full bg-center object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.2 0.02 60 / 0.7), oklch(0.18 0.02 60 / 0.88))",
          }}
        />
        <div className="container-x">
          <div className="relative mx-auto bg-[#BA6827]/15 text-white rounded-3xl">
            <div className="relative px-8 py-20 md:px-14 md:py-30">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <span className="text-[20px] font-body font-semibold uppercase tracking-[0.25em] text-[#BA6827]">
                    Voyage sur mesure
                  </span>
                  <h2 className="mt-4 text-white font-display">
                    Votre aventure botswanaise commence ici 
                  </h2>
                  <p className="mt-4 max-w-7xl font-body text-base leading-[1.8] text-white">
                    Dites-nous votre période, votre style de voyage et vos envies :
                    nous composons un itinéraire fluide entre lodges, réserves et
                    expériences.
                  </p>
                </div>
                <Link href="/demande-devis" className="rts-btn btn-primary">
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions to enter Botswana */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center items-center mb-10">
            <span className="inline-flex gap-4 items-center text-md text-[#BA6827]">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Avant de partir
            </span>
            <h2>Conditions d'entrée au Botswana</h2>
            <p>Tout ce qu'il faut savoir pour préparer votre voyage en toute sérénité.</p> 
          </div>

          <div></div>
        </div>
      </section>

      {/* Hebergement */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center items-center mb-10">
            <span className="inline-flex gap-4 items-center text-md text-[#BA6827]">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Hébergements
            </span>
            <h2>Nos camps et lodges coups de cœur</h2>
            <p>Chacun de ces établissements a été sélectionné pour sa localisation exceptionnelle, la qualité de ses guides naturalistes et l'authenticité de l'expérience proposée.</p> 
          </div>

          <div></div>
        </div>
      </section>

      {/* Best Peroid to visist */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center items-center mb-10">
            <span className="inline-flex gap-4 items-center text-md text-[#BA6827]">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Climat & Saisons
            </span>
            <h2>Quand partir au Botswana ?</h2>
            <p>Le Botswana se visite toute l'année, mais chaque saison offre une expérience différente et tout aussi mémorable.</p> 
          </div>

          <Bostwana />
        </div>
      </section>

      {/* Where is Botswana */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center items-center mb-10">
            <span className="inline-flex gap-4 items-center text-md text-[#BA6827]">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Géographie
            </span>
            <h2>Où se trouve le Botswana ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.</p> 
          </div>
        </div>
        
      </section>

      {/* Why visit Botswana with Suntrail */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center items-center mb-10">
            <span className="inline-flex gap-4 items-center text-md text-[#BA6827]">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Notre engagement
            </span>
            <h2>Pourquoi confier votre Botswana à Suntrail ?</h2>
            <p>Nous ne vendons pas des voyages — nous créons des expériences. Voici ce qui fait la différence.</p> 
          </div>

          <div></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          FAQs
        </div>
      </section>

      {/* CTA 2 */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/20">
        <div className="container-x">
          <div className="max-w-6xl mx-auto text-center">
            <span className="text-[#BA6827] font-semibold text-3xl uppercase tracking-wide mb-3">
              Voyage sur mesure au Botswana
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Prêt à découvrir le Botswana autrement ?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-6xl mx-auto">
              Confiez-nous votre projet et créons ensemble un voyage sur mesure au cœur de l'Afrique australe. 
              Ici, dans l'émotion, le confort et l'authenticité — notre équipe vous répond sous 24 heures.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="#circuits" className="rts-btn btn-primary">
                Découvrir nos circuits
              </Link>
              <Link href="/demande-devis" className="rts-btn btn-primary">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
