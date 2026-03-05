export default function ManufacturingSection() {
    const capabilities = [
        { title: "Cell-Level Assembly", desc: "Precision cell sorting & module assembly" },
        { title: "Automated Welding", desc: "Spot welding with quality assurance" },
        { title: "BMS Integration", desc: "In-house BMS design & programming" },
        { title: "End-of-Line Testing", desc: "100% QC with cycle testing" },
    ];

    return (
        <section className="relative py-24 bg-primary-darker overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-green/20 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent z-10" />
                        <img
                            src="/factory.png"
                            alt="Adiabatic Technologies manufacturing facility at MIDC Ahmednagar"
                            className="w-full h-80 lg:h-[450px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <div className="glass px-4 py-2 rounded-lg">
                                <p className="text-sm font-heading font-semibold text-white">MIDC Ahmednagar, Maharashtra</p>
                                <p className="text-xs text-neutral-400">Dedicated Manufacturing Facility</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="text-primary-green text-sm font-medium uppercase tracking-widest">
                            Manufacturing
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3 mb-4">
                            Engineered in India.{" "}
                            <span className="text-gradient">Built for the World.</span>
                        </h2>
                        <p className="text-neutral-400 leading-relaxed mb-8">
                            Our state-of-the-art manufacturing facility at MIDC Ahmednagar houses complete
                            battery pack assembly lines — from cell sorting to final quality testing. Every
                            pack undergoes rigorous 100% end-of-line testing before shipping.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {capabilities.map((cap) => (
                                <div key={cap.title} className="glass rounded-xl p-4 hover:border-primary-green/20 transition-all">
                                    <h4 className="text-sm font-heading font-semibold text-white mb-1">{cap.title}</h4>
                                    <p className="text-xs text-neutral-500">{cap.desc}</p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 text-primary-green hover:text-white text-sm font-medium transition-colors"
                        >
                            Schedule a Factory Visit
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
