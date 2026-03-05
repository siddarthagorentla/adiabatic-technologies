"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { allProducts } from "@/data/products";
import type { Product } from "@/context/CartContext";

const categories = ["All", "2-Wheeler", "E-Cycle", "Agri Equipment", "Solar Inverter Batteries"];

function AddToCartButton({ product }: { product: Product }) {
    const { addToCart, items } = useCart();
    const [added, setAdded] = useState(false);
    const inCart = items.find((item) => item.product.id === product.id);

    const handleAdd = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <button
            onClick={handleAdd}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-semibold text-sm rounded-lg transition-all duration-300 ${added
                    ? "bg-green-600 text-white shadow-lg shadow-green-600/20"
                    : "bg-primary-green text-primary-dark hover:bg-primary-green-dim hover:shadow-lg hover:shadow-primary-green/20"
                }`}
        >
            {added ? (
                <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Added!
                </>
            ) : (
                <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    {inCart ? `In Cart (${inCart.quantity})` : "Add to Cart"}
                </>
            )}
        </button>
    );
}

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [sortBy, setSortBy] = useState<"newest" | "price-low" | "price-high">("newest");

    const filtered = activeCategory === "All"
        ? allProducts
        : allProducts.filter((p) => p.category === activeCategory);

    const sorted = [...filtered].sort((a, b) => {
        if (sortBy === "price-low") return a.salePrice - b.salePrice;
        if (sortBy === "price-high") return b.salePrice - a.salePrice;
        return 0;
    });

    const discount = (orig: number, sale: number) =>
        Math.round(((orig - sale) / orig) * 100);

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-12 bg-grid">
                <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-primary-green/5 rounded-full blur-[120px]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-primary-green text-sm font-medium uppercase tracking-widest">
                        All Products
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-3 mb-4">
                        Battery Solutions for{" "}
                        <span className="text-gradient">Every Application</span>
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                        From ₹999 agri spray pumps to enterprise-grade energy storage — our lithium-ion packs
                        deliver 10x lower degradation across every segment.
                    </p>
                </div>
            </section>

            {/* Filters + Sort */}
            <section className="sticky top-20 z-30 bg-primary-dark/90 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        {/* Category Filter */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full sm:w-auto">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${activeCategory === cat
                                            ? "bg-primary-green text-primary-dark"
                                            : "glass text-neutral-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Sort + Count */}
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-neutral-500">{sorted.length} products</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                                className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-neutral-300 focus:outline-none focus:border-primary-green/50 appearance-none cursor-pointer"
                            >
                                <option value="newest" className="bg-primary-dark">Category Newest</option>
                                <option value="price-low" className="bg-primary-dark">Price: Low → High</option>
                                <option value="price-high" className="bg-primary-dark">Price: High → Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sorted.map((product) => (
                            <div
                                key={product.id}
                                className="glass rounded-2xl overflow-hidden group hover:border-primary-green/20 transition-all duration-500 hover:-translate-y-1 flex flex-col"
                            >
                                {/* Image Area */}
                                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] p-6 flex items-center justify-center h-56 overflow-hidden">
                                    {/* Tag */}
                                    {product.tag && (
                                        <span className={`absolute top-4 left-4 text-[10px] font-bold text-white px-3 py-1 rounded-md ${product.tagColor} uppercase tracking-wider z-10`}>
                                            {product.tag}
                                        </span>
                                    )}
                                    {/* Discount Badge */}
                                    <span className="absolute top-4 right-4 text-[10px] font-bold text-primary-dark bg-accent-amber px-2 py-0.5 rounded-md z-10">
                                        {discount(product.originalPrice, product.salePrice)}% OFF
                                    </span>
                                    {/* Battery Icon Placeholder */}
                                    <div className="flex flex-col items-center group-hover:scale-110 transition-transform duration-500">
                                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-green/20 to-secondary-blue/10 flex items-center justify-center border border-white/5">
                                            <svg className="w-12 h-12 text-primary-green/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div className="mt-3 flex items-center gap-1">
                                            <span className="text-xs font-mono text-primary-green bg-primary-green/10 px-2 py-0.5 rounded">
                                                {product.voltage}
                                            </span>
                                            <span className="text-xs font-mono text-secondary-blue bg-secondary-blue/10 px-2 py-0.5 rounded">
                                                {product.capacity}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Category */}
                                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">{product.category}</span>

                                    {/* Title */}
                                    <h3 className="text-base font-heading font-bold text-white mb-2 leading-snug line-clamp-2">
                                        {product.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-2 flex-1">
                                        {product.description}
                                    </p>

                                    {/* Specs Grid */}
                                    <div className="grid grid-cols-2 gap-1.5 mb-4">
                                        {[
                                            { label: "Chemistry", value: product.chemistry },
                                            { label: "Cycle Life", value: product.cycleLife },
                                            { label: "Weight", value: product.weight },
                                            { label: "Voltage", value: product.voltage },
                                        ].map((spec) => (
                                            <div key={spec.label} className="bg-white/[0.03] rounded-lg px-2.5 py-1.5">
                                                <div className="text-[9px] text-neutral-600 uppercase tracking-wider">{spec.label}</div>
                                                <div className="text-[11px] font-mono text-neutral-300">{spec.value}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {product.features.slice(0, 4).map((f) => (
                                            <span key={f} className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-neutral-500">
                                                {f}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-end gap-2 mb-4">
                                        <span className="text-2xl font-heading font-bold text-white">
                                            ₹{product.salePrice.toLocaleString("en-IN")}
                                        </span>
                                        <span className="text-sm text-neutral-500 line-through mb-0.5">
                                            ₹{product.originalPrice.toLocaleString("en-IN")}
                                        </span>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        <AddToCartButton product={product} />
                                        <a
                                            href="/contact"
                                            className="px-4 py-3 glass text-white text-sm rounded-lg hover:bg-white/10 transition-all flex items-center justify-center"
                                        >
                                            Enquire
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {sorted.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-neutral-500 text-lg">No products found in this category.</p>
                            <button
                                onClick={() => setActiveCategory("All")}
                                className="mt-4 px-6 py-2.5 glass text-sm text-white rounded-lg hover:bg-white/10 transition-all"
                            >
                                Show All Products
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Custom Battery CTA */}
            <section className="py-20 bg-primary-darker">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">
                        Need a Custom Battery Configuration?
                    </h2>
                    <p className="text-neutral-400 mb-8">
                        Our engineering team can design bespoke battery packs for unique OEM requirements.
                        Share your specifications and we&apos;ll get back within 24 hours.
                    </p>
                    <a
                        href="/contact"
                        className="px-8 py-3.5 bg-primary-green text-primary-dark font-semibold rounded-lg hover:bg-primary-green-dim transition-all inline-block"
                    >
                        Request Custom Solution →
                    </a>
                </div>
            </section>
        </>
    );
}
