import { notFound } from "next/navigation";
import Link from "next/link";
import { productCategories, getCategoryBySlug } from "@/data/products";

export async function generateStaticParams() {
  return productCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return { title: "Not Found" };
  return {
    title: `${cat.name} Battery Packs — Adiabatic Technologies`,
    description: cat.description,
  };
}

const categoryIconMap: Record<string, string> = {
  mhe: "🏭", robotics: "🤖", defence: "🛡️", marine: "⚓",
  "power-tools": "🔧", drones: "🚁", ev: "⚡",
  "consumer-electronics": "📱", "bess-residential": "🏠",
  "bess-grid": "🔌", "solar-street-light": "💡", "agri-repurposed": "🌱",
};

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const icon = categoryIconMap[cat.slug] || "🔋";

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb & Hero */}
      <section className="py-20 bg-primary-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-green/5 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-primary-green transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary-green transition-colors">Products</Link>
            <span>/</span>
            <span className="text-neutral-300">{cat.shortName}</span>
          </nav>

          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary-green/10 flex items-center justify-center text-3xl shrink-0">
              {icon}
            </div>
            <div>
              <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-2">Battery Systems</p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">{cat.name}</h1>
              <p className="text-xl text-neutral-400 max-w-2xl">{cat.heroTagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-primary-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neutral-300 text-lg max-w-3xl leading-relaxed">{cat.description}</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {cat.products.map((product) => (
              <div key={product.id} className="glass rounded-2xl p-8 border border-transparent hover:border-primary-green/20 transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left: Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div>
                        {product.tag && (
                          <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${product.tagColor || "bg-primary-green"} text-primary-dark mr-2`}>
                            {product.tag}
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-neutral-500">Model: {product.model}</span>
                      </div>
                      {product.datasheet && (
                        <a
                          href={product.datasheet}
                          className="flex items-center gap-1.5 text-xs text-primary-green border border-primary-green/30 px-3 py-1.5 rounded-lg hover:bg-primary-green/10 transition-all font-medium"
                          download
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download Datasheet
                        </a>
                      )}
                    </div>

                    <h2 className="text-2xl font-heading font-bold text-white mb-2">{product.name}</h2>
                    <p className="text-sm text-primary-green mb-4">{product.tagline}</p>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">{product.description}</p>

                    {/* Quick Specs Row */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {[
                        { label: "Voltage", value: product.voltage },
                        { label: "Capacity", value: product.capacity },
                        { label: "Chemistry", value: product.chemistry },
                        { label: "Cycles", value: product.cycleLife },
                        { label: "IP Rating", value: product.ipRating },
                        { label: "Weight", value: product.weight },
                      ].map((spec) => (
                        <div key={spec.label} className="glass-light rounded-lg px-3 py-2 text-center min-w-24">
                          <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-0.5">{spec.label}</div>
                          <div className="text-sm font-semibold text-white font-mono">{spec.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((f) => (
                        <span key={f} className="text-xs bg-primary-green/10 text-primary-green border border-primary-green/20 px-3 py-1 rounded-full">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Full Specs */}
                  <div className="glass-light rounded-xl p-5">
                    <h4 className="text-xs text-neutral-500 uppercase tracking-widest font-mono mb-4">Full Specifications</h4>
                    <div className="space-y-2.5">
                      {product.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between gap-2 text-xs border-b border-white/5 pb-2">
                          <span className="text-neutral-500">{spec.label}</span>
                          <span className="text-neutral-200 font-medium text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 space-y-2">
                      <Link
                        href="/contact"
                        className="block w-full text-center py-2.5 bg-primary-green text-primary-dark text-sm font-semibold rounded-lg hover:bg-primary-green-dim transition-all"
                      >
                        Request Quote / Specs
                      </Link>
                      {product.datasheet && (
                        <a
                          href={product.datasheet}
                          download
                          className="block w-full text-center py-2.5 border border-white/15 text-neutral-300 text-sm rounded-lg hover:bg-white/5 hover:text-white transition-all"
                        >
                          Download Datasheet (PDF)
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Applications */}
                {product.applications.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest mr-3">Applications:</span>
                    {product.applications.map((app) => (
                      <span key={app} className="text-xs text-neutral-400 mr-3">{app}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 glass rounded-2xl p-8 border border-primary-green/15 text-center">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              Need a custom spec for {cat.shortName}?
            </h3>
            <p className="text-neutral-400 mb-6 max-w-xl mx-auto">
              Our battery engineering team can design and deliver application-specific packs. Share your voltage, capacity, interface, and environmental requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-green text-primary-dark font-semibold rounded-xl hover:bg-primary-green-dim transition-all duration-300"
            >
              Talk to Engineering
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
