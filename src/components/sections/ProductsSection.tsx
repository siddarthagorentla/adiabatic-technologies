import Link from "next/link";

// Homepage shows the 6 core INDUSTRIAL segments only.
// Full 12-category portfolio lives at /products.
const coreCategories = [
  {
    slug: "mhe",
    name: "MHE & Forklifts",
    icon: "🏭",
    spec: "24V–80V | 100–400Ah | LFP",
    badge: "Industrial Core",
    desc: "Drop-in lithium traction batteries for forklifts, pallet jacks, stackers, and warehouse automation.",
  },
  {
    slug: "robotics",
    name: "Robotics & AMR/AGV",
    icon: "🤖",
    spec: "24V–48V | 15–60Ah | NMC",
    badge: "High Tech",
    desc: "High burst-discharge packs for humanoids, AMRs, AGVs, cleaning robots, and airport tug crafts.",
  },
  {
    slug: "defence",
    name: "Defence & Security",
    icon: "🛡️",
    spec: "28V–48V | 40–100Ah | LFP",
    badge: "MIL-Grade",
    desc: "MIL-STD-810G rated systems for defence vehicles, soldier equipment, and UGVs.",
  },
  {
    slug: "marine",
    name: "Marine & Maritime",
    icon: "⚓",
    spec: "24V–96V | 50–300Ah | LFP",
    badge: "Certified",
    desc: "Salt-mist resistant propulsion and auxiliary batteries for maritime vessels.",
  },
  {
    slug: "power-tools",
    name: "Power Tools",
    icon: "🔧",
    spec: "18V–36V | 3–10Ah | NMC",
    badge: "High Rate",
    desc: "High-rate NMC packs engineered for pro-grade industrial power tools.",
  },
  {
    slug: "drones",
    name: "Drones & UAVs",
    icon: "🚁",
    spec: "14V–44V | 8–28Ah | NMC",
    badge: "Lightweight",
    desc: "Maximum endurance, minimum weight UAV packs with flight-time prediction BMS.",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Core Industrial Segments</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3">
              Built for the Toughest<br />Industrial Applications
            </h2>
            <p className="text-neutral-400 max-w-xl text-base leading-relaxed">
              Every pack engineered from first principles — cell selection, pack architecture, thermal management, and BMS — purpose-built for each application&apos;s duty cycle.
            </p>
          </div>
          <Link
            href="/products"
            className="shrink-0 flex items-center gap-2 text-sm text-primary-green border border-primary-green/30 px-5 py-2.5 rounded-xl hover:bg-primary-green/10 transition-all font-medium"
          >
            Full Portfolio (12 segments)
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid — 2 columns on md, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group glass rounded-2xl p-7 hover:border-primary-green/25 border border-transparent transition-all duration-300 hover:-translate-y-1 hover:glow-green flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center text-2xl">
                  {cat.icon}
                </div>
                <span className="text-[10px] font-mono text-primary-green bg-primary-green/10 border border-primary-green/20 px-2.5 py-1 rounded-full">
                  {cat.badge}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-white text-lg mb-1.5 group-hover:text-primary-green transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-neutral-500 font-mono mb-3">{cat.spec}</p>
              <p className="text-sm text-neutral-400 leading-relaxed mb-5 flex-1">{cat.desc}</p>
              <div className="flex items-center gap-1.5 text-xs text-primary-green font-medium">
                View Products
                <svg className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional segments strip */}
        <div className="mt-8 glass-light rounded-2xl px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-neutral-500 font-mono mr-2">Also available:</span>
            {[
              { label: "EV", slug: "ev" },
              { label: "Consumer Electronics", slug: "consumer-electronics" },
              { label: "BESS Residential", slug: "bess-residential" },
              { label: "BESS Grid", slug: "bess-grid" },
              { label: "Solar Street Light", slug: "solar-street-light" },
              { label: "Agri / 2nd Life", slug: "agri-repurposed" },
            ].map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="text-xs text-neutral-400 bg-white/5 border border-white/8 hover:border-primary-green/30 hover:text-primary-green px-3 py-1.5 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="text-xs text-primary-green border border-primary-green/30 px-4 py-2 rounded-lg hover:bg-primary-green/10 transition-all font-medium shrink-0"
          >
            Request Custom Spec →
          </Link>
        </div>
      </div>
    </section>
  );
}
