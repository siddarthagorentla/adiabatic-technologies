import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us — Adiabatic Technologies",
    description: "Learn about Adiabatic Technologies, an IIT Hyderabad incubated startup building India's most advanced lithium-ion battery packs.",
};

const timeline = [
    { year: "2020", title: "Vision Born", desc: "Engineers observed inefficiencies in rural energy storage and EV batteries." },
    { year: "2022", title: "Company Founded", desc: "Adiabatic Technologies Pvt. Ltd. incorporated. IIT Hyderabad incubation begins." },
    { year: "2023", title: "First Products", desc: "Launched battery packs for 2-wheelers, 3-wheelers, and agri equipment." },
    { year: "2024", title: "Manufacturing Scale", desc: "Dedicated MIDC Ahmednagar factory operational. 500+ packs deployed." },
    { year: "2025", title: "Platform Growth", desc: "IoT monitoring platform, real-time tracking, and BESS solutions launched." },
    { year: "2026", title: "Expansion", desc: "Scaling across India with new product lines, OEM partnerships, and R&D." },
];

const team = [
    { name: "Darshan Meher", role: "Founder & CEO", initial: "DM" },
    { name: "Gaurav Zawar", role: "Head of Operations", initial: "GZ" },
    { name: "Nitin Dive", role: "R&D Lead", initial: "ND" },
    { name: "Akshay Ghadge", role: "Production Manager", initial: "AG" },
    { name: "Sanket Khandare", role: "R&D Engineer", initial: "SK" },
    { name: "Sarthak Garje", role: "Sales & Marketing", initial: "SG" },
    { name: "Saurabh Bidve", role: "Production Engineer", initial: "SB" },
    { name: "Ganesh Gulati", role: "After Sales Support", initial: "GG" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-grid">
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary-green/5 rounded-full blur-[120px]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-primary-green text-sm font-medium uppercase tracking-widest">About Us</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-3 mb-6">
                        Powering India&apos;s{" "}
                        <span className="text-gradient">Clean Energy Future</span>
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                        Adiabatic began with a vision to drive meaningful impact at the intersection of
                        clean energy and rural empowerment. We build lithium-ion battery packs that are
                        high-performing, affordable, and adaptable.
                    </p>
                </div>
            </section>

            {/* Mission / Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass rounded-2xl p-8">
                            <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white mb-3">Our Vision</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                To create the most compelling energy company of the 21st century by powering the
                                future of energy storage with our battery technology.
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-8">
                            <div className="w-12 h-12 rounded-xl bg-secondary-blue/10 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-secondary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white mb-3">Our Mission</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                To enable a greener, more inclusive energy transition for India by building
                                battery packs with 10x lower degradation — affordable for every market segment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-primary-darker">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-16">Our Journey</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-green/50 via-primary-green/20 to-transparent hidden md:block" />
                        <div className="space-y-12">
                            {timeline.map((item, i) => (
                                <div key={item.year} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                    <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                        <div className="glass rounded-xl p-6 inline-block">
                                            <span className="text-primary-green font-mono text-sm">{item.year}</span>
                                            <h4 className="text-lg font-heading font-bold text-white mt-1">{item.title}</h4>
                                            <p className="text-sm text-neutral-400 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-primary-green border-4 border-primary-dark shrink-0 hidden md:block" />
                                    <div className="md:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary-green text-sm font-medium uppercase tracking-widest">Our Team</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3">Meet the Engineers</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {team.map((member) => (
                            <div key={member.name} className="glass rounded-xl p-6 text-center group hover:border-primary-green/20 transition-all duration-300">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-green/20 to-secondary-blue/20 flex items-center justify-center mx-auto mb-4 text-white font-heading font-bold text-lg">
                                    {member.initial}
                                </div>
                                <h4 className="text-sm font-heading font-semibold text-white">{member.name}</h4>
                                <p className="text-xs text-neutral-500 mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
