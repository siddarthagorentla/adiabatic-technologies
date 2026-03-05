import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technology — Adiabatic Technologies",
    description: "Explore our full-stack battery technology: Cell chemistry, smart BMS, thermal management, and real-time IoT monitoring. 10x lower life degradation.",
};

const stages = [
    { label: "Cell", icon: "⚡", color: "bg-green-500" },
    { label: "Module", icon: "🔗", color: "bg-emerald-500" },
    { label: "Pack", icon: "📦", color: "bg-teal-500" },
    { label: "BMS", icon: "🧠", color: "bg-blue-500" },
    { label: "Cloud", icon: "☁️", color: "bg-indigo-500" },
];

const sections = [
    {
        id: "cell-tech",
        title: "Battery Cell Technology",
        subtitle: "The Foundation of Performance",
        description: "We use premium LFP (Lithium Iron Phosphate) and NMC (Nickel Manganese Cobalt) cells carefully selected and matched for optimal performance in Indian tropical conditions. Our proprietary cell matching algorithm results in 10x lower degradation over the battery lifecycle compared to standard packs.",
        features: [
            { label: "LFP Chemistry", desc: "Safer, longer cycle life, thermally stable" },
            { label: "NMC Chemistry", desc: "Higher energy density for range-critical applications" },
            { label: "Cell Matching", desc: "98%+ capacity matching for uniform aging" },
            { label: "3000+ Cycles", desc: "Industry-leading cycle life for extended ROI" },
        ],
        gradient: "from-green-500/10",
    },
    {
        id: "bms",
        title: "Smart BMS Platform",
        subtitle: "Intelligence at Every Cell",
        description: "Our Battery Management System goes beyond basic monitoring. It uses advanced algorithms for real-time cell balancing, precise State of Charge (SOC) and State of Health (SOH) estimation, and predictive fault detection. Connected via IoT protocols for remote fleet management.",
        features: [
            { label: "Active Balancing", desc: "Real-time cell-level voltage management" },
            { label: "SOC/SOH", desc: "Accurate state estimation algorithms" },
            { label: "Fault Detection", desc: "Predictive analytics for preventive maintenance" },
            { label: "CAN/UART", desc: "Standard interfaces for OEM integration" },
        ],
        gradient: "from-blue-500/10",
    },
    {
        id: "thermal",
        title: "Thermal Management System",
        subtitle: "Keeping Cool Under Pressure",
        description: "Indian ambient temperatures regularly exceed 45°C. Our intelligent cooling system dynamically regulates battery temperature to maintain optimal 25-35°C operating conditions, dramatically extending battery life and preventing thermal runaway events.",
        features: [
            { label: "Active Cooling", desc: "Dynamic temperature regulation system" },
            { label: "Thermal Runaway Prevention", desc: "Multi-layer safety architecture" },
            { label: "-20°C to 60°C", desc: "Operating range for extreme conditions" },
            { label: "Smart Sensors", desc: "Multi-point temperature monitoring" },
        ],
        gradient: "from-amber-500/10",
    },
    {
        id: "monitoring",
        title: "Real-Time Monitoring",
        subtitle: "Cloud-Connected Intelligence",
        description: "Track your entire battery fleet's health, location, and performance in real-time through our IoT cloud dashboard. Get instant alerts, predictive maintenance insights, and detailed analytics — accessible from anywhere.",
        features: [
            { label: "Live GPS", desc: "Real-time battery/vehicle location tracking" },
            { label: "Health Dashboard", desc: "SOH trends, cycle counts, temperature logs" },
            { label: "Fleet Analytics", desc: "Cross-fleet performance comparison" },
            { label: "Alerts", desc: "Instant notifications for anomalies" },
        ],
        gradient: "from-purple-500/10",
    },
];

export default function TechnologyPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-grid">
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-secondary-blue/5 rounded-full blur-[120px]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-secondary-blue text-sm font-medium uppercase tracking-widest">Technology</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-3 mb-6">
                        Full-Stack{" "}
                        <span className="text-gradient">Battery Technology</span>
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                        From cell chemistry to cloud monitoring — we control every layer of the battery
                        technology stack. This is what makes our 10x lower degradation claim possible.
                    </p>
                </div>
            </section>

            {/* Process Pipeline */}
            <section className="py-12 bg-primary-darker">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {stages.map((stage, i) => (
                            <div key={stage.label} className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <div className={`w-12 h-12 rounded-full ${stage.color}/20 flex items-center justify-center text-xl border-2 ${stage.color}/30`}>
                                        {stage.icon}
                                    </div>
                                    <span className="text-xs text-neutral-400 mt-2 font-mono">{stage.label}</span>
                                </div>
                                {i < stages.length - 1 && (
                                    <div className="w-8 sm:w-16 lg:w-24 h-px bg-gradient-to-r from-white/20 to-white/5 mx-2" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Sections */}
            {sections.map((section, i) => (
                <section key={section.id} id={section.id} className={`py-24 ${i % 2 === 0 ? "" : "bg-primary-darker"}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                            <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                                <span className="text-secondary-blue text-sm font-medium uppercase tracking-widest">
                                    {section.subtitle}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3 mb-6">
                                    {section.title}
                                </h2>
                                <p className="text-neutral-400 leading-relaxed mb-8">
                                    {section.description}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {section.features.map((f) => (
                                        <div key={f.label} className="glass rounded-xl p-4">
                                            <h4 className="text-sm font-heading font-semibold text-white mb-1">{f.label}</h4>
                                            <p className="text-xs text-neutral-500">{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                                <div className={`glass rounded-2xl p-12 bg-gradient-to-br ${section.gradient} to-transparent flex items-center justify-center min-h-[300px]`}>
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">{stages[i]?.icon || "🔋"}</div>
                                        <p className="text-lg font-heading font-bold text-white">{section.title}</p>
                                        <p className="text-sm text-neutral-400 mt-2">Interactive visualization coming soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="py-20 bg-primary-darker">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        See Our Technology in Action
                    </h2>
                    <p className="text-neutral-400 mb-8">
                        Schedule a demo of our real-time battery monitoring platform or visit our manufacturing facility.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/contact" className="px-8 py-3.5 bg-primary-green text-primary-dark font-semibold rounded-lg hover:bg-primary-green-dim transition-all">
                            Schedule a Demo
                        </a>
                        <a href="https://intuions.com/platform/" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 glass text-white font-medium rounded-lg hover:bg-white/10 transition-all">
                            Try Monitoring Platform →
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
