"use client";

import Image from 'next/image'
import { Container } from '@/components/Container'
import { Typewriter } from 'react-simple-typewriter'
import { NewsletterButton } from '@/components/NewsletterButton'


import logoHPMedizin from 'public/logos/hpmedizin.png'
import logoWulff from 'public/logos/wulff-removebg-preview.png'
import logoVHS from 'public/logos/vhs.png'
import logoKVB from 'public/logos/kvb.png'
import logoHPConsulting from 'public/logos/hpconsulting.png'
import logoBeckAkademie from 'public/logos/beckakademie.png'
import logoExpedia from 'public/logos/expedia.png'
import logoLandau from 'public/logos/stadt-landau.png'
import logoPutzbrunn from 'public/logos/putzbrunn.png'

const logos = [
    { name: 'KVB', logo: logoKVB },
    { name: 'HPMedizin', logo: logoHPMedizin },
    { name: 'VHS', logo: logoVHS },
    { name: 'Wulff', logo: logoWulff },
    { name: 'HPConsulting', logo: logoHPConsulting },
    { name: 'BeckAkademie', logo: logoBeckAkademie },
    { name: 'Expedia', logo: logoExpedia },
    { name: 'Landau', logo: logoLandau },
    { name: 'Putzbrunn', logo: logoPutzbrunn },
];

export function Hero() {
    return (
        <Container className="pb-10 pt-20 text-center lg:pt-16 relative">
            <h1 className="mx-auto max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 sm:tracking-normal relative z-10 flex flex-col items-center">
    <span className="block">Wir machen</span>
    <span className="relative min-h-[1.2em] text-blue-600">
        <span className="relative block min-w-[310px] text-center">
            <Typewriter
                words={['Künstliche Intelligenz', 'Innovation', 'Automatisierung']}
                loop={true} 
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1200}
            />
        </span>
    </span>
    <span className="block">greifbar.</span>
</h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
                Vergessen Sie kurzzeitige Trends und Buzzwords: Durch uns bekommen Sie fundierte Einblicke und ein
                tiefgreifendes Verständnis für die Welt der KI.
                
            </p>

            <div className="mt-10 flex flex-col items-center gap-3">
                <div className="text-center">
                    <p className="text-sm text-slate-600">
                        <span className="font-semibold text-blue-600">Brand neu:</span> Dein Update zu Künstlicher Intelligenz - klar, aktuell, relevant.
                    </p>
                </div>
                <NewsletterButton />
            </div>

            <div className="mt-20 lg:mt-16">
                <p className="font-display text-base text-slate-900 mb-8">
                    KI-Weiterbildung? Unsere Kunden bestätigen den Erfolg!
                </p>
                <div className="overflow-hidden">
                    <ul
                        role="list"
                        className="flex items-center justify-start gap-x-8 animate-infinite-scroll"
                        style={{ width: 'calc(200% + 4rem)' }}
                    >
                        {[...logos, ...logos].map((company, index) => (
                            <li key={index} className="flex items-center justify-center w-[200px] h-[90px] flex-shrink-0">
                            <Image
                                    src={company.logo}
                                    alt={company.name}
                                    unoptimized
                                    className="filter grayscale brightness-60 object-contain w-full h-full"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    )
}
