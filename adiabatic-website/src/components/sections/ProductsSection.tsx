"use client";

const products = [
    {
        icon: "🛵",
        title: "2-Wheeler",
        voltage: "48V – 72V",
        desc: "High-performance battery packs for electric scooters and bikes with fast charging.",
        href: "/products",
        color: "from-green-500/20 to-emerald-600/5",
    },
    {
        icon: "🛺",
        title: "3-Wheeler",
        voltage: "60V – 96V",
        desc: "Robust power solutions for e-rickshaws and cargo three-wheelers.",
        href: "/products",
        color: "from-blue-500/20 to-cyan-600/5",
    },
    {
        icon: "🚲",
        title: "E-Cycle",
        voltage: "36V – 48V",
        desc: "Lightweight, efficient batteries for electric bicycles with extended range.",
        href: "/products",
        color: "from-purple-500/20 to-violet-600/5",
    },
    {
        icon: "✈️",
        title: "Drones",
        voltage: "22.2V – 44.4V",
        desc: "High energy-density, lightweight packs for extended drone flight times.",
        href: "/products",
        color: "from-amber-500/20 to-orange-600/5",
    },
    {
        icon: "🌾",
        title: "Agri Equipment",
        voltage: "12V – 48V",
        desc: "Durable batteries for spray pumps, tillers, and agricultural machinery.",
        href: "/products",
        color: "from-lime-500/20 to-green-600/5",
    },
    {
        icon: "🏭",
        title: "Material Handling",
        voltage: "48V – 80V",
        desc: "Industrial-grade packs for forklifts and warehouse equipment.",
        href: "/products",
        color: "from-slate-400/20 to-gray-600/5",
    },
    {
        icon: "⚡",
        title: "BESS",
        voltage: "48V – 800V",
        desc: "Scalable energy storage systems for grid, solar, and commercial applications.",
        href: "/products",
        color: "from-yellow-500/20 to-amber-600/5",
    },
    {
        icon: "🔧",
        title: "Custom Solutions",
        voltage: "Any Config",
        desc: "Bespoke battery pack design for unique OEM and enterprise requirements.",
        href: "/contact",
        color: "from-rose-500/20 to-pink-600/5",
    },
];

export default function ProductsSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-green/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary-green text-sm font-medium uppercase tracking-widest">
                        Product Portfolio
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mt-3 mb-4">
                        Powering Every Industry
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        From micro-mobility to mega energy storage — our lithium-ion battery solutions
                        are engineered for performance, safety, and longevity.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.map((product, i) => (
                        <a
                            key={product.title}
                            href={product.href}
                            className="group relative glass rounded-xl p-6 hover:border-primary-green/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-green/5"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative">
                                <span className="text-3xl mb-4 block">{product.icon}</span>
                                <h3 className="text-lg font-heading font-semibold text-white mb-1">
                                    {product.title}
                                </h3>
                                <span className="inline-block text-xs font-mono text-primary-green bg-primary-green/10 px-2 py-0.5 rounded mb-3">
                                    {product.voltage}
                                </span>
                                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                                    {product.desc}
                                </p>
                                <span className="text-xs text-primary-green font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Explore
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
