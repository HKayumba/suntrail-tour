import Devis from '@/components/layout/Devis'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { confiance } from '@/data'
import { CheckCircle2, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
        {/* Hero */}
        <section className='py-20 md:py-30'>
            <div className='container-x'>
                <div className=''>
                    <p>Accueil</p>
                    <p>Demande de devis</p>
                </div>
                <h2 className='uppercase'>Votre voyage sur mesure <br />commence ici</h2>
                <div></div>
                <p>Réponse garantie sous 24 heures — agence locale basée à Windhoek</p>
            </div>
        </section>

        {/* Devis and Contact */}
        <section className='py-20 md:py-30'>
            <div className='container-x'>
                <div className='grid md:grid-cols-12 gap-8'>
                    {/* Demande de devis */}
                    <div className='md:col-span-7'>
                        <Devis />
                    </div>

                    {/* Contact */}
                   <div className='md:col-span-5'>
                     <div className='flex flex-col gap-8'>
                        {/* Contact Card */}
                        <Card className=''>
                            <CardHeader className='flex flex-row items-center gap-2'>
                                <MapPin size="32" className='' />
                                <h5 className='text-xl md:text-2xl font-bold uppercase'>Nous contacter</h5>
                            </CardHeader>

                            <CardContent className=''>
                                {/* Address */}
                                <div  className="flex items-start gap-4 mb-6">
                                    <div className="size-10 rounded-full bg-ivory/20 grid place-items-center text-gold flex-shrink-0">
                                    icon
                                    </div>
                                    <div>
                                    <h6 className="text-lg font-semibold uppercase">Adresse</h6>
                                    <p className="text-sm text-muted-foreground mt-1">64, Schonlein Street <br />Windhoek, Namibie</p>
                                    </div>
                                </div>

                                {/* Postal Address */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="size-10 rounded-full bg-ivory/20 grid place-items-center text-gold flex-shrink-0">
                                        icon
                                    </div>
                                    <div>
                                    <h6 className="text-lg font-semibold uppercase">Adresse Postal</h6>
                                    <p className="text-sm text-muted-foreground mt-1">PO Box 31985 <br />Pioneerspark, Windhoek</p>
                                    </div>
                                </div>

                                {/* Telephone */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="size-10 rounded-full bg-ivory/20 grid place-items-center text-gold flex-shrink-0">
                                        icon
                                    </div>
                                    <div>
                                    <h6 className="text-lg font-semibold uppercase">Téléphone</h6>
                                    <Link href="tel:+264813266654" className="text-sm text-muted-foreground mt-1">+(264) 81 326 6654</Link> <br />
                                    <Link href="tel:+264613042280" className="text-sm text-muted-foreground mt-1">+(264) 61 304 2280</Link>
                                    </div>
                                </div>

                                {/* WhatsApp  */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="size-10 rounded-full bg-ivory/20 grid place-items-center text-gold flex-shrink-0">
                                        icon
                                    </div>
                                    <div>
                                    <h6 className="text-lg font-semibold uppercase">WhatsApp </h6>
                                    <Link href="tel:+264813266654" className="text-sm text-muted-foreground mt-1">+(264) 81 326 6654</Link>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="size-10 rounded-full bg-ivory/20 grid place-items-center text-gold flex-shrink-0">
                                        icon
                                    </div>
                                    <div>
                                    <h6 className="text-lg font-semibold uppercase">E-mail</h6>
                                    <Link href="mailto:info@suntrailts.com" className="text-sm text-muted-foreground mt-1">info@suntrailts.com</Link>
                                    </div>
                                </div>

                                {/* Sociaux Media */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="size-10 rounded-full bg-ivory/20 grid place-items-center text-gold flex-shrink-0">
                                        icon
                                    </div>
                                    <div>
                                    <h6 className="text-lg font-semibold uppercase">Réseaux sociaux</h6>
                                    <div className='grid grid-cols-4'>
                                        <div>1</div>
                                        <div>2</div>
                                        <div>3</div>
                                        <div>4</div>
                                    </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Map */}
                        <div className='rounded-2xl overflow-hidden'>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6196.837546312022!2d17.06485180606609!3d-22.554343967533317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1b64785d7599%3A0x4307f0e7e66e1866!2sSuntrail%20Tours%20%26%20Safaris%20%7C%20Agence%20de%20Voyage%20Namibie!5e0!3m2!1sen!2sna!4v1780650198023!5m2!1sen!2sna" 
                                width="600" height="450" 
                                loading="lazy"
                                className="w-full rounded-2xl">
                            </iframe>
                        </div>

                        {/* Why us */}
                        <Card>
                            <CardHeader className='text-xl lg:text-2xl font-bold'>Pourquoi nous faire confiance ?</CardHeader>
                            {confiance.map((item, id) =>(
                                <CardContent key={id}>
                                    <div className="flex items-start gap-2 items-center">
                                        <CheckCircle2 className="size-5 text-terracotta shrink-0 mt-0.5" />
                                        <p className="text-md font-medium text-charcoal">{item.desc}</p>
                                    </div>
                                </CardContent>
                            ))}
                        </Card>
                    </div>
                   </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default page