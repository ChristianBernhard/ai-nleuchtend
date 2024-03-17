import Image from 'next/image'

import {Container} from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
    [{
        question: 'Wie kann künstliche Intelligenz mein Unternehmen verbessern?',
        answer:
            'KI kann in vielen Bereichen helfen, von der Automatisierung routinemäßiger Aufgaben bis hin zur Gewinnung tieferer Einsichten aus Daten, was zu effizienteren und effektiveren Geschäftsentscheidungen führen kann. Neben unseren Workshops unterstützen wir zahlreiche Unternehmen dabei, Ihre individuellen Use Cases zu identifizieren.',
    },
        {
            question: 'Kann man ein personalisiertes Teilnahmezertifikat erhalten?',
            answer: 'Ja, jeder Teilnehmer erhält auf Wunsch ein Teilnahmezertifikat, welches die gewonnen Kenntnisse bestätigt.',
        },
    ],
    [
        {
            question: 'Sind Vorkenntnisse für die Teilnahme an einem Vortrag erforderlich?',
            answer:
                'Unsere Intuition-Vorträge sind so konzipiert, dass sie für ein breites Publikum verständlich sind, unabhängig vom Kenntnisstand im Bereich KI oder einem Informatikbackground. Darüber hinaus bieten wir Expertenvorträge für Fortgeschrittene bzw. Naturwissenschaftler an.',
        },
        {
            question:
                'Wie kann man einen Vortrag buchen?',
            answer:
                'Für Buchungen kontaktieren Sie uns bitte direkt per Mail oder Telefon mit den Kontaktinformationen auf unserer Website.',
        },
    ],
    [
        {
            question:
                'Wie lange dauert ein typischer Vortrag?',
            answer:
                'Ein Standardvortrag dauert in der Regel ca. 90 Minuten, kann aber je nach Anforderung angepasst werden. Außerdem haben die Teilnehmer die Möglichkeit, im Rahmen einer Diskussionsrunde, Ihre eigenen Fragen zu KI beantwortet zu bekommen.',
        },
        {
            question: 'Auf welcher Sprache werden die Kurse gehalten?',
            answer:
                'Unsere Kurse werden sowohl auf Deutsch als auch Englisch angeboten.',
        },
    ],
]

export function Faqs() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
            className="relative overflow-hidden bg-slate-50 py-20 sm:py-16"
        >
            <Image
                className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
                src={backgroundImage}
                alt=""
                width={1558}
                height={946}
                unoptimized
            />
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="faq-title"
                        className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Häufig gestellte Fragen
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                        Bei weiteren Fragen zögern Sie bitte nicht, uns zu kontaktieren.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
                >
                    {faqs.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul role="list" className="flex flex-col gap-y-8">
                                {column.map((faq, faqIndex) => (
                                    <li key={faqIndex}>
                                        <h3 className="font-display text-lg leading-7 text-slate-900">
                                            {faq.question}
                                        </h3>
                                        <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
