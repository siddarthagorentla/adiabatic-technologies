import { notFound } from "next/navigation";
import { allProducts } from "@/data/products";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const product = allProducts.find((p) => p.slug === params.slug);
    if (!product) return { title: "Product Not Found" };

    return {
        title: `${product.name} — Adiabatic Technologies`,
        description: product.description,
    };
}

export default function ProductDetailPage({ params }: Props) {
    const product = allProducts.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    // Schema.org JSON-LD
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.name,
        image: [`https://www.adiabatic.co.in${product.image}`],
        description: product.description,
        brand: {
            "@type": "Brand",
            name: "Adiabatic Technologies",
        },
        offers: {
            "@type": "Offer",
            url: `https://www.adiabatic.co.in/products/${product.slug}`,
            priceCurrency: "INR",
            price: product.salePrice,
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen pt-32 pb-20 bg-primary-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
                        <Link href="/products" className="hover:text-primary-green transition-colors">Products</Link>
                        <span>/</span>
                        <span className="text-white">{product.name}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Image Section */}
                        <div className="space-y-6">
                            <div className="glass rounded-3xl p-12 aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent border-white/10 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary-green/5 blur-3xl rounded-full scale-50 group-hover:scale-100 transition-transform duration-700" />
                                <div className="relative text-center">
                                    <div className="w-48 h-48 rounded-full bg-primary-green/20 flex items-center justify-center mx-auto mb-6 border-2 border-primary-green/30 glow-green shadow-2xl">
                                        <svg className="w-24 h-24 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="text-2xl font-mono text-white tracking-widest">{product.voltage}</span>
                                        <span className="text-neutral-600 text-2xl font-light">|</span>
                                        <span className="text-2xl font-mono text-primary-green tracking-widest">{product.capacity}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Key Specs Mobile/Desktop Row */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { label: "Cycle Life", val: product.cycleLife, icon: "🔄" },
                                    { label: "Weight", val: product.weight, icon: "⚖️" },
                                    { label: "Chemistry", val: product.chemistry, icon: "🧪" },
                                ].map((s) => (
                                    <div key={s.label} className="glass rounded-2xl p-4 text-center border-white/5">
                                        <div className="text-xl mb-1">{s.icon}</div>
                                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">{s.label}</div>
                                        <div className="text-sm font-bold text-white font-mono">{s.val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="flex flex-col">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white ${product.tagColor || 'bg-primary-green'}`}>
                                        {product.tag || 'Standard'}
                                    </span>
                                    <span className="text-xs text-neutral-500 font-mono tracking-widest">
                                        MODEL: AT-{product.slug.toUpperCase().slice(0, 6)}
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                                    {product.name}
                                </h1>
                                <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                                    {product.description}
                                </p>
                            </div>

                            {/* Stats / Features Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                {product.features.map((f) => (
                                    <div key={f} className="flex items-center gap-3 p-4 bg-white/3 border border-white/5 rounded-xl">
                                        <div className="w-2 h-2 rounded-full bg-primary-green shadow-[0_0_8px_#00E676]" />
                                        <span className="text-sm font-medium text-neutral-300">{f}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Pricing & CTA */}
                            <div className="mt-auto p-8 glass rounded-2xl border-primary-green/10 bg-gradient-to-r from-primary-green/5 to-transparent">
                                <div className="flex items-end gap-3 mb-6">
                                    <div className="text-4xl font-heading font-bold text-white">
                                        ₹{product.salePrice.toLocaleString("en-IN")}
                                    </div>
                                    <div className="text-lg text-neutral-500 line-through mb-1">
                                        ₹{product.originalPrice.toLocaleString("en-IN")}
                                    </div>
                                    <div className="ml-auto px-3 py-1 bg-accent-amber text-primary-dark text-xs font-bold rounded">
                                        {Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)}% SAVING
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <button className="px-8 py-4 bg-primary-green text-primary-dark font-bold rounded-xl hover:bg-primary-green-dim transition-all shadow-xl shadow-primary-green/10 flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                                        </svg>
                                        Add to Cart
                                    </button>
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2"
                                    >
                                        Bulk Pricing Inquiry
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
