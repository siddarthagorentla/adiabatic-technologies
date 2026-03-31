import Link from "next/link";
import { productCategories } from "@/data/products";

export const metadata = {
  title: "Industrial Battery Products — Adiabatic Technologies",
  description: "Explore Adiabatic's full range of industrial lithium battery packs for MHE, Robotics, Defence, Marine, BESS, Drones, EVs, and more.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/5 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Full Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            Industrial Battery Solutions
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Purpose-engineered lithium battery packs across 12 industrial segments. Every model built from first principles.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="glass rounded-2xl p-8 hover:border-primary-green/30 border border-transparent transition-all duration-300 hover:-translate-y-1 hover:glow-green group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary-green/10 flex items-center justify-center text-2xl">
                    {{
                      mhe: "🏭", robotics: "🤖", defence: "🛡️", marine: "⚓",
                      "power-tools": "🔧", drones: "🚁", ev: "⚡",
                      "consumer-electronics": "📱", "bess-residential": "🏠",
                      "bess-grid": "🔌", "solar-street-light": "💡", "agri-repurposed": "🌱",
                    }[cat.slug] || "🔋"}
                  </div>
                  <span className="text-xs font-mono text-neutral-500 bg-white/5 px-2 py-1 rounded">
                    {cat.products.length} model{cat.products.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <h2 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-primary-green transition-colors">
                  {cat.name}
                </h2>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">{cat.heroTagline}</p>
                <div className="flex items-center gap-1 text-sm text-primary-green font-medium">
                  View Products
                  <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 glass rounded-2xl p-8 border border-primary-green/15 text-center">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">Don't see your application?</h3>
            <p className="text-neutral-400 mb-6">We design custom battery packs for unique applications. Share your requirements and we'll engineer a solution.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-green text-primary-dark font-semibold rounded-xl hover:bg-primary-green-dim transition-all duration-300 hover:shadow-xl hover:shadow-primary-green/25"
            >
              Request Custom Design
            </Link>
          </div>
        </div>
      </section>

      {/* Nomenclature */}
      <section className="py-20 bg-primary-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Product Naming</p>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Model Nomenclature</h2>
            <p className="text-neutral-400">Every Adiabatic model follows a consistent naming convention for easy identification.</p>
          </div>
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="font-mono text-center text-2xl text-white mb-8 tracking-wider">
              ADT-<span className="text-primary-green">MHE</span>-<span className="text-secondary-blue">48V</span>-<span className="text-accent-amber">200Ah</span>-<span className="text-purple-400">LFP</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              {[
                { code: "ADT", label: "Brand Prefix", color: "text-white" },
                { code: "MHE / ROB / DEF...", label: "Segment Code", color: "text-primary-green" },
                { code: "48V", label: "Nominal Voltage", color: "text-secondary-blue" },
                { code: "200Ah", label: "Capacity", color: "text-accent-amber" },
              ].map((item) => (
                <div key={item.code} className="glass-light rounded-xl p-4">
                  <div className={`font-mono font-bold text-base mb-1 ${item.color}`}>{item.code}</div>
                  <div className="text-xs text-neutral-400">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-neutral-500 text-center font-mono">
              {["MHE — Material Handling", "ROB — Robotics", "DEF — Defence", "MAR — Marine", "PTL — Power Tools", "DRN — Drones", "EV2 — 2W EV", "BRC — BESS R&C", "BGD — BESS Grid", "SSL — Solar Street Light", "AG2 — Agriculture 2nd Life", "CON — Consumer"].map(s => (
                <div key={s} className="py-1">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
