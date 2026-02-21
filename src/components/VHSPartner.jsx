'use client'

import Image from 'next/image'
import { Container } from '@/components/Container'
import { ScrollReveal } from '@/components/ScrollReveal'

const qualifications = [
    'Über 20 Jahre Erfahrung als selbstständige Dozentin',
    'Studierte Wirtschaftswissenschaftlerin',
    'Langjährige Lehrtätigkeit im Informatikbereich',
    'Expertin für Didaktik & individuelle Wissensvermittlung',
]

export function VHSPartner() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
            <Container>
                <ScrollReveal>
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                            Volkshochschulen
                        </p>
                        <h2 className="mt-4 font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                            KI-Wissen für alle Bürger
                        </h2>
                        <p className="mt-4 text-lg tracking-tight text-slate-700">
                            Neben unseren Industrievorträgen ist es uns ein Herzensanliegen, KI-Wissen
                            an Volkshochschulen für jeden weiterhin zugänglich zu machen.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="mx-auto mt-14 max-w-5xl">
                        <div className="relative rounded-3xl bg-white shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5 lg:grid lg:grid-cols-5">
                            {/* Image column — full height, flush left */}
                            <div className="relative overflow-hidden rounded-3xl lg:rounded-r-none lg:col-span-2">
                                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-auto lg:h-full">
                                    <Image
                                        src="/conny.jpeg"
                                        alt="Cornelia Hayn – Co-Dozentin für VHS-Kurse bei AInleuchtend"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>

                            {/* Text column */}
                            <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-3 lg:p-12">
                                <h3 className="font-display text-2xl tracking-tight text-slate-900">
                                    Cornelia Hayn
                                </h3>
                                <p className="mt-1 text-sm font-medium text-blue-600">
                                    Co-Dozentin &middot; VHS-Kurse
                                </p>

                                <p className="mt-5 text-base leading-7 text-slate-600">
                                    Seit Mitte 2025 führt Cornelia Hayn unsere VHS-Kurse im
                                    Namen von AInleuchtend durch. Mit über zwei Jahrzehnten
                                    Erfahrung als Dozentin sowie einem Hintergrund in
                                    Informatik und Wirtschaftswissenschaften verbindet sie
                                    fachliche Tiefe mit didaktischem Feingefühl &ndash; genau
                                    das, was es braucht, um KI-Themen verständlich und
                                    praxisnah an ein breites Publikum zu vermitteln.
                                </p>

                                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {qualifications.map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                                            <svg
                                                className="mt-0.5 h-5 w-5 shrink-0 text-blue-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-6 text-sm leading-6 text-slate-500">
                                    Die Kursplanung & Konzeption erfolgen weiterhin
                                    über AInleuchtend &ndash; für einen nahtlosen und gewohnt hohen Qualitätsstandard.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    )
}
