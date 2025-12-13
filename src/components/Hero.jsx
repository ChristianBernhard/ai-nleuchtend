"use client";

import Image from 'next/image'
import { Container } from '@/components/Container'
import { Typewriter } from 'react-simple-typewriter'
import { NewsletterButton } from '@/components/NewsletterButton'
import { AnimatedCounter } from '@/components/AnimatedCounter'


import logoHPMedizin from 'public/logos/hpmedizin.png'
import logoWulff from 'public/logos/wulff-removebg-preview.png'
import logoVHS from 'public/logos/vhs.png'
import logoKVB from 'public/logos/kvb.png'
import logoHPConsulting from 'public/logos/hpconsulting.png'
import logoBeckAkademie from 'public/logos/beckakademie.png'
import logoExpedia from 'public/logos/expedia.png'
import logoLandau from 'public/logos/stadt-landau.png'
import logoPutzbrunn from 'public/logos/putzbrunn.png'
import logoErgo from 'public/logos/ergo.png'

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
    { name: 'Ergo', logo: logoErgo },
];

export function Hero() {
    return (
        <Container className="pb-10 pt-20 text-center lg:pt-16 relative">
            <h1 className="mx-auto max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 sm:tracking-normal relative z-10 flex flex-col items-center">
    <span className="block">Wir machen</span>
    <span className="relative min-h-[1.2em] text-blue-600">
        <span className="relative block min-w-[310px] text-center">
            <Typewriter
                words={['Künstliche Intelligenz', 'ChatGPT', 'AI Agents', 'KI-Automatisierung', 'Innovation']}
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
                <a 
                    href="https://steady.page/de/ainleuchtend/posts" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 hover:text-blue-600 transition-colors duration-200 underline-offset-2 hover:underline"
                >
                    Alle bisherigen Ausgaben ansehen →
                </a>
            </div>

            <div className="mt-20 lg:mt-16">
                <p className="font-display text-base text-slate-900 mb-8">
                    KI-Weiterbildung? Unsere Kunden bestätigen den Erfolg!
                </p>
                <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                    <div className="flex w-max animate-infinite-scroll">
                        {[...logos, ...logos].map((company, index) => (
                            <div key={index} className="flex items-center justify-center w-[180px] h-[80px] mx-6 flex-shrink-0">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    unoptimized
                                    className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Counter */}
                <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
                    <div className="flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-3">
                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <div className="font-display text-3xl font-bold text-slate-900">
                            <AnimatedCounter end={100} />
                        </div>
                        <div className="mt-1 text-sm text-slate-600 text-center">
                            Vorträge
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-3">
                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <div className="font-display text-3xl font-bold text-slate-900">
                            <AnimatedCounter end={10000} />
                        </div>
                        <div className="mt-1 text-sm text-slate-600 text-center">
                            Teilnehmer
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-3">
                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="font-display text-3xl font-bold text-slate-900">
                            <AnimatedCounter end={5} />
                        </div>
                        <div className="mt-1 text-sm text-slate-600 text-center">
                            Jahre Erfahrung
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-3">
                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="font-display text-3xl font-bold text-slate-900">
                            ∞
                        </div>
                        <div className="mt-1 text-sm text-slate-600 text-center">
                            KI-Innovation
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
