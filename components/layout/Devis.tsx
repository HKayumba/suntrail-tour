import React from 'react'
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card'
import { DevisForm } from '../forms/DevisForm'

function Devis() {
  return (
    <>
        <Card className=''>
            <CardHeader>
                <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-3'>Demandez un<span> devis gratuit</span></h3>
                <CardDescription>Remplissez le formulaire ci-dessous avec autant de détails que possible. Notre équipe basée à Windhoek vous répondra dans les 24 heures avec une proposition personnalisée.</CardDescription>
            </CardHeader>
            <CardContent>
                {/* Form */}
                <DevisForm />
            </CardContent>
        </Card>
    </>
  )
}

export default Devis