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
import { ArrowRight, ImageMinus, MapPin, Phone } from "lucide-react";
import { chooseReasons, circuits, sites, uniqueness } from "@/data/botswana";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";
import Bostwana from "@/components/destinationSeaons/Botswana";





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
      <section className="">
        <div className="container-x"></div>
      </section>

      {/* About Botswana */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p>À la découverte du Botswana</p>
              <h2>Un sanctuaire africain d'exception</h2>
              <p className="text-justify">Le Botswana est une destination d'exception pour les voyageurs en quête d'espaces infinis, de safaris exclusifs et d'une nature encore intacte. Réputé pour sa politique de conservation exemplaire, le pays offre une expérience de voyage rare, où la faune règne en maître et où chaque rencontre se vit dans le calme, l'authenticité et le respect de l'environnement.</p>
              <p className="text-justify">Des plaines du Kalahari aux marais luxuriants de l'Okavango, des pans salés de Makgadikgadi aux rivières sauvages de Chobe — le Botswana révèle une Afrique élégante, préservée et profondément immersive.</p>
              <span className="text-justify">« Au Botswana, les safaris se vivent loin des foules. Ici, c'est la qualité de l'expérience qui prime — un éléphant à portée de main, un ciel étoilé sans limite, le silence absolu des grands espaces. »</span>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/demande-devis"
                  className="inline-flex items-center justify-center rts-btn btn-primary"
                >
                  Planifier mon voyage
                </Link>

                <Link
                  href="tel:+26771234567"
                  className="inline-flex items-center gap-4 rts-btn btn-primary"
                >
                  <Phone className="h-6 w-6" />
                  <span>(+267) 71 234 567</span>
                </Link>
              </div>
            </div>
            {/*Second grid Image */}
            <div className="flex">
              <Image
                src="/assets/images/destination/48.webp"
                alt="Botswana"
                width={300}
                height={100}
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to fall in love */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center items-center mb-10">
            <p className="inline-flex gap-4 items-center">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Pourquoi choisir le Botswana</p>
            <h2>4 raisons de tomber amoureux</h2>
            <p>Le Botswana séduit par son approche du safari haut de gamme et responsable. Voici pourquoi il s'impose comme l'une des plus grandes aventures africaines.</p> 
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {chooseReasons.map((reason, idx) => (
                <Card key={idx}>
                  <CardHeader>
                   <div className="space-y-4">
                     <reason.icon className="w-20 h-20" />
                    <h4 className="">{reason.title}</h4>
                   </div>
                  </CardHeader>
                  <CardContent>
                   <p> {reason.text}</p>
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
            <p className="inline-flex gap-4 items-center">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Incontournables</p>
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
                  <Card className="p-0 flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={site.image}
                        alt={site.title}
                        width={1280}
                        height={960}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <Badge><p className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground shadow">
                        {site.badge}
                      </p></Badge>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.18_0.02_60/0.85)] to-transparent p-5">
                        <h3 className="font-display text-2xl text-[oklch(0.98_0.01_90)]">
                          {site.title}
                        </h3>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-[oklch(0.9_0.02_88)]">
                          <MapPin className="size-3.5" /> {site.location}
                        </p>
                      </div>
                    </div>
                    <CardContent>
                      <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {site.text}
                    </p>
                    <p className="mt-4 border-t border-border pt-4 text-sm text-foreground">
                      <span className="font-semibold text-primary">À vivre : </span>
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
            <p className="inline-flex gap-4 items-center">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Expériences signature
            </p>
            <h2>Ce que seul le Botswana peut offrir</h2>
            <p>Des expériences rares, conçues pour ceux qui cherchent davantage qu'un safari — une immersion totale au cœur de la nature africaine.</p> 
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {uniqueness.map((item, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="space-y-4">
                      <item.icon className="w-20 h-20" />
                      <h4 className="">{item.title}</h4>
                    </div>
                </CardHeader>
                <CardContent>
                  <p>{item.text}</p>
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
              <p className="inline-flex gap-4 items-center">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Circuits favoris</p>
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
              {circuits.map((circuits, idx) =>(
                <CarouselItem key={idx} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <Card className="p-0 flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={circuits.image}
                        alt={circuits.title}
                        width={1280}
                        height={960}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 pointer-events-none">
                        <Badge className="bg-accent text-accent-foreground px-3 py-1 text-sm shadow"><p>{circuits.duration}</p></Badge>
                      </div>
                      <div className="absolute top-4 right-4 pointer-events-none">
                        <Badge className="bg-accent text-accent-foreground px-3 py-1 text-sm shadow"><p>{circuits.badge}</p></Badge>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.18_0.02_60/0.85)] to-transparent p-5">
                        <h3 className="font-display text-2xl text-[oklch(0.98_0.01_90)]">
                          {circuits.title}
                        </h3>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-[oklch(0.9_0.02_88)]">
                          <MapPin className="size-3.5" /> {circuits.region}
                        </p>
                      </div>
                    </div>
                    <CardContent>
                      <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {circuits.text}
                    </p>
                    <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                      <div>
                        <p className="text-muted-foreground">À partir de</p>
                        <h6 className="font-display text-2xl text-foreground">
                          {circuits.price}
                          <span className="ml-1 text-xs font-normal text-muted-foreground">
                            / pers.
                          </span>
                        </h6>
                      </div>
                      <Link href="/demande-devis" className="rts-btn btn-primary">
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

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div></div>
        </div>
      </section>

      {/* Conditions to enter Botswana */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center items-center mb-10">
            <p className="inline-flex gap-4 items-center">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Avant de partir
            </p>
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
            <p className="inline-flex gap-4 items-center">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Hébergements
            </p>
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
            <p className="inline-flex gap-4 items-center">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Climat & Saisons
            </p>
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
            <p className="inline-flex gap-4 items-center">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Géographie
            </p>
            <h2>Où se trouve le Botswana ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.</p> 
          </div>
        </div>
        
      </section>

      {/* Why visit Botswana with Suntrail */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center items-center mb-10">
            <p className="inline-flex gap-4 items-center">
              <Image width={30} height={30} src="/assets/images/banner/icon/06.svg" alt="icon"/>
              Notre engagement
            </p>
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

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          CTA
        </div>
      </section>
    </main>
  );
}
