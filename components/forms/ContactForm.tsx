"use client"

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";

function ContactForm() {
     const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    
    <div>
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <span className="size-16 grid place-items-center rounded-full bg-forest/5 mx-auto mb-6">
                      <Send className="size-7 text-terracotta" />
                    </span>
                    <h3 className="text-3xl mb-3">Message envoyé</h3>
                    <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Merci pour votre message. Un conseiller Suntrail vous contactera dans les plus brefs délais pour affiner votre projet de voyage.
                    </p>
                    <a href="/" className="btn-primary mt-8 inline-flex">
                      Retour à l'accueil <ArrowRight className="size-4" />
                    </a>
                  </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl mb-1">Écrivez-nous</h3>
                      <p className="text-muted-foreground text-sm">Remplissez le formulaire ci-dessous et nous reprendrons contact avec vous rapidement.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Nom complet</label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Jean Dupont"
                          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="jean@email.com"
                          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                      <select
                        id="subject"
                        required
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition appearance-none"
                      >
                        <option value="">Choisissez un sujet</option>
                        <option value="devis">Demande de devis personnalisé</option>
                        <option value="info">Renseignements sur une destination</option>
                        <option value="existing">Modifier une réservation existante</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="destination" className="text-sm font-medium">Destination d'intérêt</label>
                      <select
                        id="destination"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition appearance-none"
                      >
                        <option value="">Sélectionnez une destination (optionnel)</option>
                        <option value="namibie">Namibie</option>
                        <option value="botswana">Botswana</option>
                        <option value="mozambique">Mozambique</option>
                        <option value="rwanda">Rwanda</option>
                        <option value="zambie">Zambie</option>
                        <option value="zimbabwe">Zimbabwe</option>
                        <option value="multi">Circuit multi-pays</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Votre message</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Décrivez vos envies, vos dates envisagées, votre budget approximatif..."
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center">
                      Envoyer mon message <Send className="size-4" />
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      En envoyant ce formulaire, vous acceptez d'être recontacté par Suntrail dans le cadre de votre demande de voyage.
                    </p>
                </form>
            )}
        </div>
    </div>
  )
}

export default ContactForm