'use client'

import {useId} from 'react'
import Image from 'next/image'
import {Tab} from '@headlessui/react'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {ScrollReveal, StaggerContainer, StaggerItem} from '@/components/ScrollReveal'

const features = [
    {
        name: 'Über mich',
        summary:
            'Erfahrung trifft Leidenschaft für KI',
        description:
            'Mit jahrelanger Erfahrung im Bereich der Künstlichen Intelligenz und einem fundierten technischen Background als M. Sc. Informatik biete ich Ihnen tiefgehende und praxisorientierte Einblicke.',
        image: "/beck_1.png",
        width: 600,
        height: 400,
        icon: function ContactsIcon() {
            return (
                <>
                    <path
                        opacity=".5"
                        d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                        fill="#fff"
                    />
                    <path
                        d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                        fill="#fff"
                    />
                </>
            )
        },
    },
    {
        name: 'Themen & Inhalte',
        summary:
            'KI: Maßgeschneidert',
        description:
            'Von den Grundlagen der KI bis hin zu spezialisierten Themen wie Large Language Models. Sie können aus einer Vielzahl von Themen wählen, um den besten Mehrwert für Ihr Publikum zu schaffen.',
        image: "/zweites.png",
        width: 600,
        height: 400,
        icon: function InventoryIcon() {
            return (
                <>
                    <path
                        opacity=".5"
                        d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                        fill="#fff"
                    />
                    <path
                        opacity=".3"
                        d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                        fill="#fff"
                    />
                    <path
                        d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                        fill="#fff"
                    />
                </>
            )
        },
    },
    {
        name: 'Format & Buchung',
        summary: 'Flexibilität für Ihr Event',
        description:
            'Ob online oder vor Ort, kleine Gruppen oder große Konferenzen, für Laien oder Experten - wir bieten verschiedene Formate und Buchungsoptionen an, um Ihren spezifischen Anforderungen gerecht zu werden.',
        image: "/third.JPG",
        width: 600,
        height: 400,
        icon: function ReportingIcon() {
            let id = useId()
            return (
                <>
                    <defs>
                        <linearGradient
                            id={id}
                            x1="11.5"
                            y1={18}
                            x2={36}
                            y2="15.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset=".194" stopColor="#fff"/>
                            <stop offset={1} stopColor="#6692F1"/>
                        </linearGradient>
                    </defs>
                    <path
                        d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                        stroke={`url(#${id})`}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </>
            )
        },
    },
]

function Feature({feature, isActive, className, ...props}) {
    return (
        <div
            className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
            {...props}
        >
            <div
                className={clsx(
                    'w-9 rounded-lg',
                    isActive ? 'bg-blue-600' : 'bg-slate-500',
                )}
            >
                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                    <feature.icon/>
                </svg>
            </div>
            <h3
                className={clsx(
                    'mt-6 text-sm font-medium',
                    isActive ? 'text-blue-600' : 'text-slate-600',
                )}
            >
                {feature.name}
            </h3>
            <p className="mt-2 font-display text-xl text-slate-900">
                {feature.summary}
            </p>
            <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
        </div>
    )
}

function FeaturesMobile() {
    return (
        <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
            {features.map((feature) => (
                <div key={feature.summary}>
                    <Feature feature={feature} className="mx-auto max-w-2xl" isActive/>
                </div>
            ))}
            <div className="mt-10 mx-auto flex justify-center">
                <Image
                    src="/first.JPG"
                    alt="t4g image"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    )
}

function FeaturesDesktop() {
    return (
        <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
            {({selectedIndex}) => (
                <>
                    <Tab.List className="grid grid-cols-3 gap-x-8">
                        {features.map((feature, featureIndex) => (
                            <Feature
                                key={feature.summary}
                                feature={{
                                    ...feature,
                                    name: (
                                        <Tab className="ui-not-focus-visible:outline-none">
                                            <span className="absolute inset-0"/>
                                            {feature.name}
                                        </Tab>
                                    ),
                                }}
                                isActive={featureIndex === selectedIndex}
                                className="relative"
                            />
                        ))}
                    </Tab.List>
                    <Tab.Panels
                        className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
                        <div className="-mx-5 flex" style={{width: `${features.length * 600}px`}}>
                            {features.map((feature, featureIndex) => (
                                <Tab.Panel
                                    static
                                    key={feature.summary}
                                    className={clsx(
                                        'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                                        featureIndex !== selectedIndex && 'opacity-60',
                                    )}
                                    style={{transform: `translateX(-${selectedIndex * 400}px)`}}
                                    aria-hidden={featureIndex !== selectedIndex}
                                >
                                    <div
                                        className="w-[600px] h-[400px] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                                        <Image
                                            className="w-full h-full object-cover object-center"
                                            src={feature.image}
                                            alt=""
                                            width={600}
                                            height={400}
                                        />
                                    </div>
                                </Tab.Panel>
                            ))}
                        </div>
                        <div
                            className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10"/>
                    </Tab.Panels>
                </>
            )}
        </Tab.Group>
    )
}

export function SecondaryFeatures() {
    return (
        <section
            id="about-us"
            aria-label="Features for simplifying everyday business tasks"
            className="pb-14 pt-10 sm:pb-20 sm:pt-16 lg:pb-32"
        >
            <Container>
                <ScrollReveal>
                    <div className="mx-auto max-w-2xl md:text-center">
                        <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl mb-2 sm:mb-4">
                            Lernen Sie uns kennen!
                        </h2>

                        {/*<p className="mt-4 text-lg tracking-tight text-slate-700">*/}
                        {/*  Entdecken Sie, was uns ausmacht und wie wir Ihren Anforderungen gerecht werden.*/}
                        {/*</p>*/}
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <FeaturesMobile/>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <FeaturesDesktop/>
                </ScrollReveal>
            </Container>
        </section>
    )
}
