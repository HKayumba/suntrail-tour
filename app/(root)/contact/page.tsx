import React from 'react'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import ContactForm from '@/components/forms/ContactForm';
import Header from '@/components/layout/Header';

function page() {
  return (
    <>
      {/* Header */}
      {/* <Header /> */}
      {/* Contact page Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-forest text-ivory relative overflow-hidden">
        {/* Darker background image with overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('/images/contactImg.webp')" }} 
          />
          {/* Dark overlay for better readability and modern look */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container-x relative z-10">
          <p className="eyebrow text-gold mb-4 tracking-wide">Contact</p>
          <h1 className="text-5xl lg:text-7xl leading-[1.05] max-w-3xl font-light">
            Votre voyage sur mesure <span className="italic text-gold font-medium">commence ici</span>.
          </h1>
          <p className="mt-6 text-ivory/90 max-w-xl text-lg leading-relaxed">
            Chaque itinéraire commence par une conversation. Racontez-nous vos envies, nos experts du continent vous guident.
          </p>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-20 lg:py-28 container-x">
        <div className="grid lg:grid-cols-12 gap-16">
            {/* Info column */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h2 className="text-3xl mb-3">Notre bureau</h2>
              <p className="text-muted-foreground leading-relaxed">
                Basés à windhoek west, nous sommes à votre écoute du lundi au samedi pour composer ensemble le voyage de vos rêves.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="size-11 rounded-full bg-forest/5 grid place-items-center shrink-0">
                  <MapPin className="size-5 text-terracotta" />
                </span>
                <div>
                  <p className="font-medium text-charcoal">Adresse</p>
                  <p className="text-muted-foreground text-sm mt-0.5">12 Schonlein Street<br />Windhoek, Namibie</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="size-11 rounded-full bg-forest/5 grid place-items-center shrink-0">
                  <Phone className="size-5 text-terracotta" />
                </span>
                <div>
                  <p className="font-medium text-charcoal">Téléphone</p>
                  <a className="text-muted-foreground text-sm mt-0.5 hover:text-terracotta transition-colors">+ (264) 813 266 654 <br/> + (264) 61 304 228</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="size-11 rounded-full bg-forest/5 grid place-items-center shrink-0">
                  <Mail className="size-5 text-terracotta" />
                </span>
                <div>
                  <p className="font-medium text-charcoal">Email</p>
                  <a href="mailto:hello@suntrail.travel" className="text-muted-foreground text-sm mt-0.5 hover:text-terracotta transition-colors">nfo@suntrailts.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="size-11 rounded-full bg-forest/5 grid place-items-center shrink-0">
                  <Clock className="size-5 text-terracotta" />
                </span>
                <div>
                  <p className="font-medium text-charcoal">Horaires</p>
                  <p className="text-muted-foreground text-sm mt-0.5">Lun — Ven : 9h30 — 18h00<br />Sam : 09h30 — 15h00</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="eyebrow mb-4">Réponse garantie</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nous vous répondons sous 24h ouvrées avec une première esquisse d'itinéraire personnalisé, sans engagement.
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Trust section */}
        <section className="py-20 lg:py-28 bg-ivory">
          <div className="container-x">
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-sm">
              <h3 className="text-3xl text-center mb-10">
                Pourquoi nous faire confiance ?
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="size-6 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Agence locale depuis plus de 10 ans</p>
                    <p className="text-muted-foreground text-sm">Basée à Windhoek, Namibie</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="size-6 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Réponse garantie sous 24 heures</p>
                    <p className="text-muted-foreground text-sm">7 jours sur 7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="size-6 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Devis 100 % gratuit, sans engagement</p>
                    <p className="text-muted-foreground text-sm">Aucun frais de dossier</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="size-6 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Experts de 6 destinations africaines</p>
                    <p className="text-muted-foreground text-sm">Namibie, Botswana, Rwanda, Zimbabwe, Zambie, Mozambique</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:col-span-2 justify-center">
                  <CheckCircle2 className="size-6 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Note 5/5 sur l'ensemble de nos avis</p>
                    <p className="text-muted-foreground text-sm">Itinéraires sur mesure, paiements sécurisés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Map decorative band */}
        <section className="h-80 lg:h-96 w-full relative overflow-hidden bg-charcoal">
          <div className='container-x'>
            <div className='rounded-2xl overflow-hidden'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6196.837546312022!2d17.06485180606609!3d-22.554343967533317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1b64785d7599%3A0x4307f0e7e66e1866!2sSuntrail%20Tours%20%26%20Safaris%20%7C%20Agence%20de%20Voyage%20Namibie!5e0!3m2!1sen!2sna!4v1780650198023!5m2!1sen!2sna" 
                width="600" height="450" 
                loading="lazy"
                className="w-full rounded-2xl">
              </iframe>
            </div>
          </div>
        </section>
    </>
  )
}

export default page