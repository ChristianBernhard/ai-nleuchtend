'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChatMessage } from '@/components/agent-demo/ChatMessage';
import { StreamingText } from '@/components/agent-demo/StreamingText';
import { HITLCard } from '@/components/agent-demo/HITLCard';
import { useRunner } from '@/hooks/useRunner';
import { loadContent } from '@/utils/agent-demo-content';
import { FileText, Download, Brain, Sparkles, Settings, Zap, Users, Target, Award, Lightbulb, ChevronRight, Play, Code, BarChart3, TrendingUp, PieChart } from 'lucide-react';
import Link from 'next/link';

export default function AgentDemoPage() {
  const [appState, setAppState] = useState('idle');
  const [expandedMessages, setExpandedMessages] = useState(new Set());
  const [showPythonCode, setShowPythonCode] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  
  const content = loadContent();
  const runner = useRunner(content);

  const handleStart = async () => {
    if (appState === 'idle') {
      setAppState('running');
      await runner.start();
      setAppState('done');
    }
  };

  const handleReplay = () => {
    setAppState('idle');
    setExpandedMessages(new Set());
    setShowPythonCode(false);
    setShowCharts(false);
    runner.reset();
  };

  const handleAccept = () => {
    setAppState('uploading');
    
    setTimeout(() => {
      setAppState('uploaded');
    }, 3000);
  };

  const toggleExpanded = (messageId) => {
    setExpandedMessages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(messageId)) {
        newSet.delete(messageId);
      } else {
        newSet.add(messageId);
      }
      return newSet;
    });
  };

  const isBottomBarDisabled = appState !== 'idle';
  const isButtonSpinning = appState === 'running';

  const glossaryItems = [
    {
      term: 'Tools',
      description: 'Externe Funktionen wie Websuche, Daten-APIs, Python-Interpreter, die der Agent gezielt einsetzt.',
      icon: Settings
    },
    {
      term: 'Action',
      description: 'Der Agent führt eine Aktion aus: Websuche, Datenextraktion, Code-Generierung oder Visualisierung.',
      icon: Zap
    },
    {
      term: 'Feedback',
      description: 'Tools liefern Ergebnisse zurück - der Agent analysiert diese und plant den nächsten Schritt.',
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-slate-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Back to Home Link */}
        <div className="mb-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-ainleuchtend-primary transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>

        {/* Enhanced Header without Logo */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-ainleuchtend-dark">
              Agentic AI Demo
            </h1>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-8 h-8 text-ainleuchtend-primary" />
            </motion.div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto flex items-center justify-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-ainleuchtend-primary" />
            Erleben Sie intelligente KI-Agenten in Aktion
          </p>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto italic">
            Diese Unterseite dient zu Schulungszwecken innerhalb der KI-Kurse von AI-nleuchtend im Bereich Agentic AI
          </p>
        </motion.div>

        {/* Enhanced Theory Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-white via-blue-50/20 to-white backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-ainleuchtend-primary to-blue-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-ainleuchtend-dark">
                  Agentic AI – kurz erklärt
                </h2>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-blue-100/50">
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
                  Ein klassischer LLM-Aufruf: Du gibst Input, das Modell denkt, und es kommt eine Antwort heraus. 
                  <span className="font-semibold text-ainleuchtend-primary"> Agentic AI geht einen Schritt weiter:</span> Das Modell kann eigenständig Tools nutzen (z. B. Websuche, Datenbank, Kalender), 
                  Actions ausführen und anhand des Feedbacks der Tools den nächsten Schritt planen.
                </p>
              </div>

              {/* Enhanced Glossary Section */}
              <div className="grid md:grid-cols-3 gap-6">
                {glossaryItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.term}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-200/30 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
                    >
                      <motion.div 
                        className="w-14 h-14 bg-gradient-to-br from-ainleuchtend-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </motion.div>
                      <h4 className="font-bold text-ainleuchtend-dark mb-3 text-xl">{item.term}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      <div className="mt-4 flex justify-center">
                        <ChevronRight className="w-4 h-4 text-ainleuchtend-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chat Interface */}
        <motion.div 
          className="border border-gray-200/50 rounded-3xl bg-white/90 backdrop-blur-sm shadow-xl flex flex-col min-h-[70vh]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Enhanced Header with Status */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/50 bg-gradient-to-r from-white to-blue-50/30">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-ainleuchtend-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div>
                <h2 className="font-bold text-ainleuchtend-dark text-lg">Markt- & Webanalyse-Agent</h2>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Bereit für Ihre Analyse
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {(appState !== 'idle' || runner.messages.length > 0) && (
                <button
                  onClick={handleReplay}
                  className="h-9 px-4 rounded-xl text-sm text-gray-600 border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200 flex items-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  Neu starten
                </button>
              )}
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-4">
              {runner.messages.map((message, index) => {
                const isExpanded = expandedMessages.has(message.id);
                const maxBullets = isExpanded ? message.bullets?.length || 0 : 3;
                const visibleBullets = Math.min(message.visibleBullets, maxBullets);
                const hasMore = (message.bullets?.length || 0) > 3;

                if (message.type === 'user') {
                  return (
                    <ChatMessage
                      key={message.id}
                      role="user"
                    >
                      <div>{message.content}</div>
                    </ChatMessage>
                  );
                }

                return (
                  <React.Fragment key={message.id}>
                    <ChatMessage
                      role="agent"
                      title={message.title}
                      status={message.status}
                      isStreaming={message.status === 'streaming'}
                    >
                      {message.showBullets && visibleBullets > 0 && (
                        <>
                          {message.status === 'streaming' ? (
                            <div className="space-y-2">
                              {message.bullets?.slice(0, visibleBullets).map((bullet, i) => (
                                <div key={i} className="flex items-start space-x-2">
                                  <span className="text-gray-400 mt-1 text-xs">•</span>
                                  <StreamingText
                                    text={bullet}
                                    speed={15}
                                    delay={0}
                                    className="text-gray-600 flex-1 font-mono text-xs"
                                  />
                                </div>
                              ))}
                            </div>
                          ) : (
                            <ul className="space-y-2 list-disc ml-4">
                              {message.bullets?.slice(0, visibleBullets).map((bullet, i) => (
                                <li key={i} className="text-gray-600 font-mono text-xs">{bullet}</li>
                              ))}
                            </ul>
                          )}
                          {hasMore && !isExpanded && message.status === 'done' && (
                            <button
                              onClick={() => toggleExpanded(message.id)}
                              className="text-xs text-gray-500 hover:text-gray-700 mt-2 underline"
                            >
                              Mehr anzeigen
                            </button>
                          )}
                        </>
                      )}
                      
                      {/* Show Python Code Button for step 3 */}
                      {index === 3 && message.status === 'done' && (
                        <div className="mt-3">
                          <button
                            onClick={() => setShowPythonCode(!showPythonCode)}
                            className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border border-purple-200 hover:from-purple-100 hover:to-indigo-100 transition-all duration-200"
                          >
                            <Code className="w-4 h-4" />
                            {showPythonCode ? 'Code ausblenden' : 'Python-Code anzeigen'}
                          </button>
                        </div>
                      )}
                      
                      {/* Show Charts Button for step 4 */}
                      {index === 4 && message.status === 'done' && (
                        <div className="mt-3">
                          <button
                            onClick={() => setShowCharts(!showCharts)}
                            className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border border-blue-200 hover:from-blue-100 hover:to-cyan-100 transition-all duration-200"
                          >
                            <BarChart3 className="w-4 h-4" />
                            {showCharts ? 'Charts ausblenden' : 'Charts anzeigen'}
                          </button>
                        </div>
                      )}
                    </ChatMessage>
                    
                    {/* Python Code Expandable Section */}
                    {index === 3 && showPythonCode && message.status === 'done' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-10 mb-4"
                      >
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-700 shadow-lg">
                          <div className="flex items-center gap-2 mb-3">
                            <Code className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-semibold text-purple-400">matplotlib_charts.py</span>
                          </div>
                          <pre className="text-xs text-green-400 font-mono overflow-x-auto">
{`import matplotlib.pyplot as plt
import numpy as np

# Chart 1: Marktwachstum 2020-2025
years = [2020, 2021, 2022, 2023, 2024, 2025]
market_size = [3.2, 3.6, 4.0, 4.3, 4.8, 5.4]

plt.figure(figsize=(10, 6))
plt.plot(years, market_size, marker='o', linewidth=2, 
         color='#2563eb', markersize=8)
plt.title('Marktwachstum Nachhaltige Verpackungen', 
          fontsize=14, fontweight='bold')
plt.xlabel('Jahr', fontsize=12)
plt.ylabel('Marktvolumen (Mrd. €)', fontsize=12)
plt.grid(True, alpha=0.3)
plt.savefig('market_growth.png', dpi=300, bbox_inches='tight')

# Chart 2: Marktanteile Top-5 Wettbewerber
companies = ['DS Smith', 'Smurfit Kappa', 'Mondi', 
             'Stora Enso', 'Prinzhorn']
market_share = [22, 18, 16, 15, 12]
colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

plt.figure(figsize=(8, 8))
plt.pie(market_share, labels=companies, autopct='%1.1f%%',
        colors=colors, startangle=90)
plt.title('Marktanteile Top-5 Wettbewerber', 
          fontsize=14, fontweight='bold')
plt.savefig('market_share.png', dpi=300, bbox_inches='tight')

# Chart 3: Materialtypen Vergleich
materials = ['Bio-Plastik', 'Papier', 'Recycling']
growth_rates = [45, 28, 35]
colors_bar = ['#10b981', '#f59e0b', '#3b82f6']

plt.figure(figsize=(10, 6))
plt.bar(materials, growth_rates, color=colors_bar, alpha=0.8)
plt.title('Wachstumsraten nach Materialtyp', 
          fontsize=14, fontweight='bold')
plt.ylabel('Wachstum (%)', fontsize=12)
plt.grid(axis='y', alpha=0.3)
plt.savefig('material_comparison.png', dpi=300, 
            bbox_inches='tight')

print("✓ Alle Charts erfolgreich generiert!")
`}</pre>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Charts Expandable Section */}
                    {index === 4 && showCharts && message.status === 'done' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="ml-10 mb-6"
                      >
                        <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                          <h3 className="text-lg font-semibold text-ainleuchtend-dark mb-4 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-blue-600" />
                            Generierte Visualisierungen
                          </h3>
                          <div className="space-y-6">
                            {/* Chart 1: Market Growth Line Chart */}
                            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                              <div className="flex items-center gap-2 mb-4">
                                <TrendingUp className="w-5 h-5 text-blue-600" />
                                <h4 className="text-sm font-semibold text-gray-800">Marktwachstum 2020-2025</h4>
                              </div>
                              <div className="h-64 relative">
                                <svg viewBox="0 0 500 250" className="w-full h-full">
                                  <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#3b82f6" />
                                      <stop offset="100%" stopColor="#2563eb" />
                                    </linearGradient>
                                  </defs>
                                  
                                  {/* Grid lines */}
                                  <line x1="50" y1="20" x2="50" y2="200" stroke="#d1d5db" strokeWidth="2" />
                                  <line x1="50" y1="200" x2="480" y2="200" stroke="#d1d5db" strokeWidth="2" />
                                  {[20, 65, 110, 155, 200].map((y, i) => (
                                    <line key={i} x1="50" y1={y} x2="480" y2={y} stroke="#e5e7eb" strokeWidth="1" />
                                  ))}
                                  
                                  {/* Y-axis labels */}
                                  <text x="40" y="25" textAnchor="end" fontSize="12" fill="#6b7280">5.5€</text>
                                  <text x="40" y="70" textAnchor="end" fontSize="12" fill="#6b7280">4.5€</text>
                                  <text x="40" y="115" textAnchor="end" fontSize="12" fill="#6b7280">3.5€</text>
                                  <text x="40" y="160" textAnchor="end" fontSize="12" fill="#6b7280">2.5€</text>
                                  <text x="40" y="205" textAnchor="end" fontSize="12" fill="#6b7280">1.5€</text>
                                  
                                  {/* Line - Data: 3.2, 3.6, 4.0, 4.3, 4.8, 5.4 (Mrd €) */}
                                  <path
                                    d="M 80,145 L 160,125 L 240,100 L 320,85 L 400,55 L 480,30"
                                    fill="none"
                                    stroke="url(#lineGradient)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  
                                  {/* Data points */}
                                  {[
                                    [80, 145], [160, 125], [240, 100], [320, 85], [400, 55], [480, 30]
                                  ].map(([x, y], i) => (
                                    <g key={i}>
                                      <circle cx={x} cy={y} r="6" fill="#3b82f6" stroke="white" strokeWidth="2" />
                                    </g>
                                  ))}
                                  
                                  {/* X-axis labels */}
                                  <text x="80" y="220" textAnchor="middle" fontSize="12" fill="#6b7280">2020</text>
                                  <text x="160" y="220" textAnchor="middle" fontSize="12" fill="#6b7280">2021</text>
                                  <text x="240" y="220" textAnchor="middle" fontSize="12" fill="#6b7280">2022</text>
                                  <text x="320" y="220" textAnchor="middle" fontSize="12" fill="#6b7280">2023</text>
                                  <text x="400" y="220" textAnchor="middle" fontSize="12" fill="#6b7280">2024</text>
                                  <text x="480" y="220" textAnchor="middle" fontSize="12" fill="#6b7280">2025</text>
                                </svg>
                              </div>
                              <p className="text-xs text-gray-600 mt-3 text-center">
                                <span className="font-semibold text-blue-600">CAGR: +12.3%</span> • Kontinuierliches Wachstum
                              </p>
                            </div>

                            {/* Chart 2: Market Share Pie Chart */}
                            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                              <div className="flex items-center gap-2 mb-4">
                                <PieChart className="w-5 h-5 text-green-600" />
                                <h4 className="text-sm font-semibold text-gray-800">Marktanteile Top-5 Wettbewerber</h4>
                              </div>
                              <div className="flex items-center justify-center gap-8">
                                {/* Pie Chart */}
                                <div className="relative w-48 h-48">
                                  <svg viewBox="0 0 200 200" className="transform -rotate-90">
                                    <defs>
                                      <filter id="shadow">
                                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                                      </filter>
                                    </defs>
                                    {/* DS Smith 22% */}
                                    <circle cx="100" cy="100" r="80" fill="none" stroke="#3b82f6" strokeWidth="60" 
                                            strokeDasharray="138 345" strokeDashoffset="0" filter="url(#shadow)" />
                                    {/* Smurfit Kappa 18% */}
                                    <circle cx="100" cy="100" r="80" fill="none" stroke="#10b981" strokeWidth="60" 
                                            strokeDasharray="113 345" strokeDashoffset="-138" filter="url(#shadow)" />
                                    {/* Mondi 16% */}
                                    <circle cx="100" cy="100" r="80" fill="none" stroke="#f59e0b" strokeWidth="60" 
                                            strokeDasharray="100 345" strokeDashoffset="-251" filter="url(#shadow)" />
                                    {/* Stora Enso 15% */}
                                    <circle cx="100" cy="100" r="80" fill="none" stroke="#ef4444" strokeWidth="60" 
                                            strokeDasharray="94 345" strokeDashoffset="-351" filter="url(#shadow)" />
                                    {/* Prinzhorn 12% */}
                                    <circle cx="100" cy="100" r="80" fill="none" stroke="#8b5cf6" strokeWidth="60" 
                                            strokeDasharray="75 345" strokeDashoffset="-445" filter="url(#shadow)" />
                                  </svg>
                                </div>
                                {/* Legend */}
                                <div className="space-y-2">
                                  {[
                                    { name: 'DS Smith', share: '22%', color: 'bg-blue-500' },
                                    { name: 'Smurfit Kappa', share: '18%', color: 'bg-green-500' },
                                    { name: 'Mondi', share: '16%', color: 'bg-orange-500' },
                                    { name: 'Stora Enso', share: '15%', color: 'bg-red-500' },
                                    { name: 'Prinzhorn', share: '12%', color: 'bg-purple-500' }
                                  ].map((company, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                      <div className={`w-3 h-3 rounded-full ${company.color}`}></div>
                                      <span className="text-xs text-gray-700 font-medium">{company.name}</span>
                                      <span className="text-xs text-gray-500">{company.share}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Chart 3: Material Growth Bar Chart */}
                            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                              <div className="flex items-center gap-2 mb-4">
                                <BarChart3 className="w-5 h-5 text-purple-600" />
                                <h4 className="text-sm font-semibold text-gray-800">Wachstumsraten nach Materialtyp</h4>
                              </div>
                              <div className="h-64 relative">
                                <svg viewBox="0 0 500 250" className="w-full h-full">
                                  {/* Grid lines */}
                                  <line x1="50" y1="20" x2="50" y2="200" stroke="#d1d5db" strokeWidth="2" />
                                  <line x1="50" y1="200" x2="480" y2="200" stroke="#d1d5db" strokeWidth="2" />
                                  {[20, 56, 92, 128, 164, 200].map((y, i) => (
                                    <line key={i} x1="50" y1={y} x2="480" y2={y} stroke="#e5e7eb" strokeWidth="1" />
                                  ))}
                                  
                                  {/* Y-axis labels */}
                                  <text x="40" y="25" textAnchor="end" fontSize="12" fill="#6b7280">50%</text>
                                  <text x="40" y="60" textAnchor="end" fontSize="12" fill="#6b7280">40%</text>
                                  <text x="40" y="96" textAnchor="end" fontSize="12" fill="#6b7280">30%</text>
                                  <text x="40" y="132" textAnchor="end" fontSize="12" fill="#6b7280">20%</text>
                                  <text x="40" y="168" textAnchor="end" fontSize="12" fill="#6b7280">10%</text>
                                  <text x="40" y="204" textAnchor="end" fontSize="12" fill="#6b7280">0%</text>
                                  
                                  {/* Bars - Data: Bio-Plastik 45%, Papier 28%, Recycling 35% */}
                                  {/* Bio-Plastik 45% */}
                                  <rect x="100" y="38" width="80" height="162" fill="#10b981" rx="4" />
                                  <text x="140" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#10b981">45%</text>
                                  
                                  {/* Papier 28% */}
                                  <rect x="210" y="110" width="80" height="90" fill="#f59e0b" rx="4" />
                                  <text x="250" y="102" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#f59e0b">28%</text>
                                  
                                  {/* Recycling 35% */}
                                  <rect x="320" y="74" width="80" height="126" fill="#3b82f6" rx="4" />
                                  <text x="360" y="66" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3b82f6">35%</text>
                                  
                                  {/* X-axis labels */}
                                  <text x="140" y="220" textAnchor="middle" fontSize="12" fill="#6b7280" fontWeight="500">Bio-Plastik</text>
                                  <text x="250" y="220" textAnchor="middle" fontSize="12" fill="#6b7280" fontWeight="500">Papier</text>
                                  <text x="360" y="220" textAnchor="middle" fontSize="12" fill="#6b7280" fontWeight="500">Recycling</text>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            
              {/* PDF Message as Agent Bubble */}
              {appState === 'done' && (
                <ChatMessage role="agent" title="Marktanalyse-Report erstellt" status="done">
                  <div className="bg-white/80 rounded-xl p-4 border border-gray-200/50">
                    {/* Download badge / pill */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-50/80 border border-gray-200 rounded-lg px-3 py-3 mb-4">
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ainleuchtend-primary to-blue-600 text-white grid place-items-center flex-shrink-0 shadow-lg">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                          <span className="text-sm font-semibold text-ainleuchtend-dark break-words">
                            Marktanalyse_Nachhaltige_<wbr/>Verpackungen_DE_2024.pdf
                          </span>
                          <span className="text-xs text-gray-500 mt-0.5">~3.4 MB • 8 Seiten • PDF-Dokument</span>
                        </div>
                      </div>
                      <a
                        href="/Marktanalyse_Nachhaltige_Verpackungen_DE_2024.pdf"
                        download
                        className="inline-flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-ainleuchtend-primary to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium whitespace-nowrap"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>

                    {/* Summary checklist */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-ainleuchtend-dark mb-3">
                        Zusammenfassung der durchgeführten Schritte
                      </h4>
                      <div className="bg-gradient-to-br from-emerald-50/80 to-green-50/60 backdrop-blur-sm border border-emerald-200/40 rounded-xl p-4 space-y-3">
                        {[
                          'Websuche (127 Quellen durchsucht)',
                          'Datenextraktion (Marktgröße, Wachstum, Top-5 Wettbewerber)',
                          'Python-Code generiert (3 professionelle Charts)',
                          'Code ausgeführt (Diagramme visualisiert)',
                          'Draft & Self-Review (Tonalität & Qualität geprüft)',
                          'PDF-Report erstellt (8 Seiten Analyse)'
                        ].map((step, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <motion.div 
                              className="inline-grid place-items-center h-5 w-5 rounded-full bg-emerald-500 flex-shrink-0 mt-0.5"
                              initial={{ scale: 0, rotate: -90 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ 
                                scale: { duration: 0.3, type: 'spring', delay: i * 0.1 },
                                rotate: { duration: 0.5, delay: i * 0.1 + 0.1 }
                              }}
                            >
                              <motion.svg 
                                viewBox="0 0 24 24" 
                                className="h-3 w-3 text-white"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                              >
                                <motion.path 
                                  d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" 
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="0.5"
                                />
                              </motion.svg>
                            </motion.div>
                            <span className="text-sm text-emerald-800 font-medium">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mb-3">
                      <p className="text-sm text-gray-700 mb-3">
                        Möchten Sie die Marktanalyse nun in Ihrem System speichern?
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button
                          onClick={handleAccept}
                          className="w-full sm:w-auto px-4 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-medium rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-sm"
                        >
                          Ja, speichern
                        </button>
                        <button className="w-full sm:w-auto px-4 py-2.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-200 transition-all duration-200 border border-gray-200">
                          Änderungsvorschläge
                        </button>
                      </div>
                    </div>
                  </div>
                </ChatMessage>
              )}
            
              {/* Upload Messages */}
              {appState === 'uploading' && (
                <ChatMessage
                  role="agent"
                  title="Speichere im System"
                  status="running"
                >
                  <div>{content.uploadingText}</div>
                </ChatMessage>
              )}
            
              {appState === 'uploaded' && (
                <ChatMessage
                  role="agent"
                  title="Erfolgreich gespeichert"
                  status="done"
                >
                  <div>{content.uploadedText}</div>
                </ChatMessage>
              )}

              {/* Enhanced Welcome State */}
              {runner.messages.length === 0 && (
                <div className="flex justify-center items-center min-h-[400px] py-8">
                  <div className="max-w-3xl w-full mx-4">
                    <motion.div 
                      className="bg-gradient-to-br from-white via-blue-50/30 to-white backdrop-blur-md border border-gray-200/50 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      
                      <div className="relative z-10">
                        {/* Enhanced Header */}
                        <div className="text-center mb-10">
                          <motion.div 
                            className="w-20 h-20 bg-gradient-to-br from-ainleuchtend-primary to-blue-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl"
                            animate={{ 
                              boxShadow: [
                                "0 10px 30px rgba(37, 99, 235, 0.3)",
                                "0 10px 40px rgba(37, 99, 235, 0.4)",
                                "0 10px 30px rgba(37, 99, 235, 0.3)"
                              ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <Brain className="w-10 h-10 text-white" />
                          </motion.div>
                          <h1 className="text-3xl font-bold text-ainleuchtend-dark mb-3 flex items-center justify-center gap-3">
                            Markt- & Webanalyse-Agent
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Sparkles className="w-6 h-6 text-ainleuchtend-primary" />
                            </motion.div>
                          </h1>
                          <p className="text-gray-600 text-lg">Intelligente Marktforschung mit automatischer Visualisierung</p>
                        </div>

                        {/* Enhanced Process Steps */}
                        <div className="mb-10">
                          <div className="flex items-center justify-center gap-2 mb-6">
                            <Target className="w-5 h-5 text-ainleuchtend-primary" />
                            <h3 className="font-semibold text-gray-700 text-lg">So funktioniert's:</h3>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              { icon: Users, text: 'Durchsucht das Web nach relevanten Marktdaten' },
                              { icon: Target, text: 'Extrahiert strukturierte Informationen automatisch' },
                              { icon: Settings, text: 'Generiert Python-Code für professionelle Charts' },
                              { icon: Award, text: 'Führt Code aus und visualisiert Daten' },
                              { icon: Brain, text: 'Ruft sich selbst auf für Qualitätsprüfung (Self-Review)' },
                              { icon: FileText, text: 'Erstellt finales PDF-Analysedokument' }
                            ].map((step, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-blue-100/50 hover:bg-white/80 transition-all duration-200"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                whileHover={{ x: 5 }}
                              >
                                <div className="w-8 h-8 bg-gradient-to-br from-ainleuchtend-primary to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <step.icon className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm text-gray-700">{step.text}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Enhanced Call to Action */}
                        <div className="text-center">
                          <div className="bg-gradient-to-r from-ainleuchtend-primary/10 to-blue-600/10 rounded-2xl p-6 mb-6">
                            <p className="text-gray-700 text-lg mb-2 flex items-center justify-center gap-2">
                              <Play className="w-5 h-5 text-ainleuchtend-primary" />
                              <span className="font-semibold">Klicken Sie Starten,</span> um die Marktanalyse zu beginnen
                            </p>
                            <div className="inline-flex items-center text-sm text-gray-600 bg-white/70 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200/50">
                              <motion.div 
                                className="w-2 h-2 bg-green-400 rounded-full mr-2"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                              Demo-Modus • Nachhaltige Verpackungen Deutschland
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Enhanced Chat Input */}
          <div className="border-t border-gray-200/50 p-6 bg-gradient-to-r from-white to-blue-50/20">
            <div className="flex gap-4 items-center max-w-4xl mx-auto">
              <div className="flex-1">
                <div className="rounded-2xl px-5 py-4 bg-gradient-to-r from-gray-50 to-blue-50/50 backdrop-blur-sm text-gray-700 text-sm border border-gray-200/50 shadow-sm">
                  {content.prompt}
                </div>
              </div>
              <motion.button
                disabled={isBottomBarDisabled}
                onClick={handleStart}
                className="h-12 px-6 rounded-2xl text-sm text-white disabled:opacity-50 bg-gradient-to-r from-ainleuchtend-primary to-blue-600 hover:shadow-xl transition-all duration-300 font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="inline-flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: isButtonSpinning ? 360 : 0 }}
                    transition={{ duration: 1, repeat: isButtonSpinning ? Infinity : 0, ease: "linear" }}
                  >
                    {isButtonSpinning ? (
                      <Brain className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </motion.div>
                  {isButtonSpinning ? 'Arbeitet...' : 'Starten'}
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* HITL Card */}
        <HITLCard isCollapsed={true} />

        {/* Footer */}
        <motion.div 
          className="text-center mt-8 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>AI-nleuchtend Agent Demo • Markt- & Webanalyse Edition • Powered by AI</p>
          <p className="mt-2">
            <a href="https://www.ainleuchtend.de" target="_blank" rel="noopener noreferrer" className="text-ainleuchtend-primary hover:underline">
              www.ainleuchtend.de
            </a> • Tel.: 0177-8028796 • christianbernhard089@gmail.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}

