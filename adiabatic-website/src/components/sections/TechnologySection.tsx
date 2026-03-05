"use client";
import { useState } from "react";

const techPillars = [
    {
        id: "cell",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Battery Cell Technology",
        subtitle: "LFP & NMC Chemistry",
        description:
            "We use premium LFP (Lithium Iron Phosphate) and NMC cells optimized for tropical climates. Our proprietary cell selection and matching algorithm ensures 10x lower degradation over the battery lifecycle.",
        specs: ["3000+ Cycle Life", "LFP & NMC Chemistry", "-20°C to 60°C Range", "98% Cell Matching"],
    },
    {
        id: "bms",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
        title: "Smart BMS",
        subtitle: "AI-Powered Balancing",
        description:
            "Our Battery Management System uses advanced algorithms for real-time cell balancing, SOC/SOH estimation, and predictive fault detection. Connected via IoT for remote fleet monitoring.",
        specs: ["Active Cell Balancing", "SOC/SOH Estimation", "Over-charge Protection", "CAN / UART Interface"],
    },
    {
        id: "thermal",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Thermal Management",
        subtitle: "Intelligent Cooling",
        description:
            "Our intelligent cooling system dynamically regulates battery temperature to maintain optimal operating conditions. This dramatically extends battery life and prevents thermal runaway.",
        specs: ["Active Cooling System", "Thermal Runaway Prevention", "Optimal Temp Maintenance", "35°C Avg Operating Temp"],
    },
    {
        id: "monitoring",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: "Real-Time Monitoring",
        subtitle: "IoT Cloud Dashboard",
        description:
            "Track your battery&apos;s health, location, and performance in real-time through our cloud dashboard. Ideal for fleet operators who need actionable insights across their entire battery fleet.",
        specs: ["Live GPS Tracking", "Health Analytics", "Fleet Dashboard", "Predictive Maintenance"],
    },
];

export default function TechnologySection() {
    const [active, setActive] = useState(0);

    return (
        <section className="relative py-24 bg-primary-darker overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-blue/20 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-secondary-blue text-sm font-medium uppercase tracking-widest">
                        Technology Platform
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mt-3 mb-4">
                        Full-Stack Battery Technology
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        From cell chemistry to cloud monitoring — we control every layer of the
                        battery technology stack.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Tab buttons */}
                    <div className="lg:col-span-2 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                        {techPillars.map((pillar, i) => (
                            <button
                                key={pillar.id}
                                onClick={() => setActive(i)}
                                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 min-w-[200px] lg:min-w-0 ${active === i
                                        ? "glass border-secondary-blue/30 text-white shadow-lg"
                                        : "hover:bg-white/5 text-neutral-400"
                                    }`}
                            >
                                <div className={`shrink-0 ${active === i ? "text-secondary-blue" : "text-neutral-500"}`}>
                                    {pillar.icon}
                                </div>
                                <div>
                                    <div className="font-heading font-semibold text-sm">{pillar.title}</div>
                                    <div className="text-xs text-neutral-500">{pillar.subtitle}</div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Content Panel */}
                    <div className="lg:col-span-3 glass rounded-2xl p-8 lg:p-10">
                        <div key={active} className="animate-fade-in">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-secondary-blue">{techPillars[active].icon}</div>
                                <h3 className="text-2xl font-heading font-bold text-white">
                                    {techPillars[active].title}
                                </h3>
                            </div>
                            <p className="text-neutral-300 leading-relaxed mb-8">
                                {techPillars[active].description}
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {techPillars[active].specs.map((spec) => (
                                    <div key={spec} className="flex items-center gap-2 text-sm">
                                        <svg className="w-4 h-4 text-primary-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-neutral-300 font-mono text-xs">{spec}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <a
                                    href="/technology"
                                    className="inline-flex items-center gap-2 text-secondary-blue hover:text-white text-sm font-medium transition-colors"
                                >
                                    Deep dive into our technology
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
