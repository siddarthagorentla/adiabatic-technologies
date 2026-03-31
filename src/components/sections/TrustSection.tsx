const trustItems = [
  {
    icon: "🏛️",
    title: "IIT Hyderabad Incubated",
    description: "Born out of deep academic research in electrochemistry and battery engineering at IIT Hyderabad.",
  },
  {
    icon: "🏭",
    title: "In-House Manufacturing",
    description: "End-to-end manufacturing at our MIDC Ahmednagar facility — cell grading, pack assembly, BMS integration, and QC under one roof.",
  },
  {
    icon: "🔬",
    title: "Application-Specific Engineering",
    description: "Every pack designed from first principles for its application — not adapted from generic designs. Purpose-built, not repurposed.",
  },
  {
    icon: "📜",
    title: "Compliance & Certifications",
    description: "Products certified to IEC 62619, UN 38.3, MIL-STD-810G, and IEC 60092 (Marine) standards with ongoing AIS 156 certification.",
  },
  {
    icon: "🧠",
    title: "AI-Driven BMS",
    description: "Intelligent battery management with adaptive algorithms that predict SOH degradation and optimise charge cycles for maximum longevity.",
  },
  {
    icon: "♻️",
    title: "Circular Battery Economy",
    description: "India's first scalable second-life battery repurposement platform, converting retired cells into cost-effective solutions for agriculture.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Why Adiabatic</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            The Industrial Battery Partner
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Deep-tech battery innovation with full-stack in-house capability — from cell engineering to BMS software to certified pack manufacturing.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-6 hover:border-primary-green/20 border border-transparent transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-heading font-semibold text-white mb-2 group-hover:text-primary-green transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Quote CTA Strip */}
        <div className="glass rounded-2xl p-8 border border-primary-green/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-1">Powering India's Industrial Electrification</h3>
            <p className="text-neutral-400 text-sm">From first prototype to series production — partner with Adiabatic at any stage.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="mailto:darshan@adiabatic.co.in"
              className="px-6 py-3 border border-white/15 text-white font-medium rounded-xl hover:bg-white/5 transition-all text-sm"
            >
              Send an Email
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-primary-green text-primary-dark font-semibold rounded-xl hover:bg-primary-green-dim transition-all text-sm hover:shadow-lg hover:shadow-primary-green/25"
            >
              Talk to Engineering
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
