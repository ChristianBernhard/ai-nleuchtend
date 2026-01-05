'use client'

import { Container } from '@/components/Container'
import { ScrollReveal } from '@/components/ScrollReveal'

export function EUAIActBanner() {
    return (
        <section className="relative py-16 sm:py-20 overflow-hidden">
            {/* Background with blue CI gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
            
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Glowing orbs - blue CI */}
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-glow-pulse" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
                
                {/* Subtle grid pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <Container className="relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        {/* Badge Section - floating animation */}
                        <div className="flex-shrink-0 animate-float">
                            <div className="relative">
                                {/* Outer glow ring */}
                                <div className="absolute inset-[-8px] rounded-full bg-gradient-to-r from-blue-400 to-blue-600 blur-xl opacity-30 animate-glow-pulse" />
                                
                                {/* Main badge */}
                                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-1.5 shadow-2xl shadow-blue-500/40">
                                    <div className="w-full h-full rounded-full bg-slate-900/95 backdrop-blur flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-4xl sm:text-5xl mb-1">🇪🇺</div>
                                            <span className="text-xs sm:text-sm font-bold text-blue-400 tracking-widest">AI ACT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 text-center lg:text-left">
                            {/* Tag */}
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 mb-5">
                                <span className="text-blue-300 text-xs sm:text-sm font-medium tracking-wide">
                                    Gesetzliche Pflicht seit Februar 2025
                                </span>
                            </div>
                            
                            {/* Headline */}
                            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                                EU AI Act: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">KI-Kompetenz</span> wird Pflicht
                            </h2>
                            
                            {/* Description */}
                            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                                Gemäß dem <span className="font-semibold text-white">EU AI Act</span> müssen Unternehmen in der EU, 
                                die KI-Systeme einsetzen, sicherstellen, dass ihre Mitarbeiter über 
                                <span className="text-blue-400 font-medium"> ausreichende KI-Kompetenzen</span> verfügen.
                            </p>
                            
                            {/* CTA */}
                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <a 
                                    href="#pricing" 
                                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                                >
                                    <span>Jetzt Mitarbeiter schulen</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                                <span className="text-slate-500 text-sm">
                                    Compliance-konforme Schulungen
                                </span>
                            </div>
                        </div>

                        {/* Stats Cards - Desktop only */}
                        <div className="hidden xl:flex flex-col gap-4 flex-shrink-0">
                            <div className="px-6 py-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-blue-500/30 transition-colors">
                                <div className="text-2xl font-bold text-white">Art. 4</div>
                                <div className="text-xs text-slate-400 mt-0.5">AI Literacy</div>
                            </div>
                            <div className="px-6 py-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-blue-500/30 transition-colors">
                                <div className="text-2xl font-bold text-blue-400">02/2025</div>
                                <div className="text-xs text-slate-400 mt-0.5">In Kraft seit</div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    )
}
