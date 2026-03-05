"use client";
import Link from "next/link";

const resources = [
    {
        title: "Battery Capacity Calculator",
        description: "Input your vehicle specs to get recommended battery capacity and ROI analysis vs lead-acid.",
        href: "/resources/calculator",
        type: "Interactive Tool",
        icon: (
            <svg className="w-8 h-8 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Product Datasheet (v2.4)",
        description: "Detailed technical specifications, wiring diagrams, and safety certification details for all packs.",
        href: "/contact",
        type: "PDF Download",
        icon: (
            <svg className="w-8 h-8 text-secondary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        title: "ROI Case Study: E-Rickshaws",
        description: "How a fleet of 50 e-rickshaws saved ₹14 Lakhs in 2 years by switching from Lead Acid to Adiabatic.",
        href: "/insights",
        type: "Technical Report",
        icon: (
            <svg className="w-8 h-8 text-accent-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
];

export default function ResourcesPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-primary-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary-green text-sm font-medium uppercase tracking-widest">Knowledge Base</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">
                        Engineering <span className="text-gradient">Resources</span>
                    </h1>
                    <p className="text-lg text-neutral-400">
                        Download technical documentation, use our calculation tools, and read performance reports from field deployments.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {resources.map((res) => (
                        <div
                            key={res.title}
                            className="glass rounded-2xl p-8 border-white/5 hover:border-primary-green/20 transition-all group flex flex-col"
                        >
                            <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary-green/10 transition-colors">
                                {res.icon}
                            </div>
                            <span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">{res.type}</span>
                            <h3 className="text-xl font-heading font-bold text-white mb-4">{res.title}</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed mb-8 flex-1">
                                {res.description}
                            </p>
                            <Link
                                href={res.href}
                                className="inline-flex items-center gap-2 text-primary-green font-semibold text-sm hover:gap-3 transition-all"
                            >
                                {res.href === "/contact" ? "Request Access" : "Open Resource"}
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* OEM Partner Support */}
                <div className="bg-gradient-to-br from-primary-green/10 via-transparent to-secondary-blue/10 rounded-3xl p-12 border border-white/5 text-center">
                    <h2 className="text-2xl font-heading font-bold text-white mb-4">Dedicated OEM Support Portal</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
                        Are you an OEM partner? Access restricted technical docs, BMS integration guides, and real-time support for your battery projects.
                    </p>
                    <Link
                        href="/contact"
                        className="px-10 py-4 bg-primary-green text-primary-dark font-bold rounded-xl hover:bg-primary-green-dim transition-all shadow-xl shadow-primary-green/20"
                    >
                        Request Partner Access
                    </Link>
                </div>
            </div>
        </div>
    );
}
