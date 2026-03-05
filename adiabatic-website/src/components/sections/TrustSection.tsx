"use client";

const trustPoints = [
    { icon: "🏛️", label: "IIT Hyderabad Incubated", desc: "Born from deep-tech research at IIT Hyderabad" },
    { icon: "🏭", label: "MIDC Manufacturing", desc: "Dedicated factory at MIDC Ahmednagar, Maharashtra" },
    { icon: "✅", label: "AIS-156 Compliant", desc: "Meets Indian automotive safety standards" },
    { icon: "🌿", label: "2nd Life Sustainability", desc: "Circular economy through cell refurbishment" },
    { icon: "📡", label: "Real-Time IoT", desc: "Cloud-based battery monitoring platform" },
    { icon: "🇮🇳", label: "100% Made in India", desc: "Complete in-house design & manufacturing" },
];

const testimonials = [
    {
        quote: "Adiabatic's battery packs reduced our fleet downtime by 40%. The real-time monitoring is a game-changer for our operations.",
        author: "Mr. Sagar Jadhav",
        company: "DF Automation",
        role: "Operations Head",
    },
    {
        quote: "The 10x lower degradation claim is real — we've seen significantly longer battery life compared to other vendors.",
        author: "Fleet Operator",
        company: "EV Fleet Services",
        role: "Technical Director",
    },
    {
        quote: "Their agri battery packs are affordable and durable. Perfect for Indian farming conditions and rural deployment.",
        author: "Agricultural Partner",
        company: "Agri-Tech Solutions",
        role: "Procurement Lead",
    },
];

export default function TrustSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-green/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary-green text-sm font-medium uppercase tracking-widest">
                        Why Adiabatic
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mt-3 mb-4">
                        Why Industry Leaders Choose Us
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Trust Points */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {trustPoints.map((point) => (
                            <div key={point.label} className="glass rounded-xl p-5 text-center hover:border-primary-green/20 transition-all duration-300 group">
                                <span className="text-2xl block mb-2">{point.icon}</span>
                                <h4 className="text-sm font-heading font-semibold text-white mb-1">{point.label}</h4>
                                <p className="text-xs text-neutral-500 leading-relaxed">{point.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Testimonials */}
                    <div className="space-y-4">
                        {testimonials.map((t, i) => (
                            <div key={i} className="glass rounded-xl p-6 hover:border-primary-green/10 transition-all duration-300">
                                <svg className="w-8 h-8 text-primary-green/30 mb-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                                </svg>
                                <p className="text-neutral-300 text-sm leading-relaxed mb-4 italic">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary-green/20 flex items-center justify-center text-primary-green text-xs font-bold">
                                        {t.author[0]}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-white">{t.author}</div>
                                        <div className="text-xs text-neutral-500">{t.role}, {t.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Supported By */}
                <div className="mt-16 text-center">
                    <p className="text-xs text-neutral-500 uppercase tracking-widest mb-6">Supported & Backed By</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
                        {["IIT Hyderabad", "T-Hub", "MIDC", "MSME", "Startup India"].map((name) => (
                            <div key={name} className="px-6 py-3 border border-white/10 rounded-lg text-sm text-neutral-400 font-heading">
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
