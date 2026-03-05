import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Insights — Adiabatic Technologies Blog",
    description: "Read the latest insights on lithium-ion battery technology, EV industry trends, and energy storage solutions from Adiabatic Technologies.",
};

const posts = [
    {
        slug: "lfp-vs-nmc-indian-climate",
        title: "LFP vs NMC: Which Battery Chemistry Suits Indian Climate?",
        excerpt: "A deep-dive comparison of Lithium Iron Phosphate and Nickel Manganese Cobalt cells for tropical operating conditions. Learn which chemistry best fits your application.",
        category: "Technology",
        date: "Feb 28, 2026",
        readTime: "8 min read",
    },
    {
        slug: "10x-lower-degradation-explained",
        title: "How We Achieve 10x Lower Battery Degradation",
        excerpt: "The science behind Adiabatic's core value proposition — from cell matching algorithms to intelligent thermal management systems.",
        category: "Deep Dive",
        date: "Feb 15, 2026",
        readTime: "12 min read",
    },
    {
        slug: "ev-battery-for-erickshaw",
        title: "Complete Guide: Lithium-Ion Batteries for E-Rickshaws in India",
        excerpt: "Everything fleet operators need to know about switching from lead-acid to lithium-ion for their e-rickshaw fleet — costs, ROI, and maintenance.",
        category: "Guide",
        date: "Jan 30, 2026",
        readTime: "10 min read",
    },
    {
        slug: "bess-market-india",
        title: "BESS Market in India: Opportunities and Challenges",
        excerpt: "An analysis of the Battery Energy Storage System market in India — government policies, growth projections, and technology requirements.",
        category: "Industry",
        date: "Jan 15, 2026",
        readTime: "7 min read",
    },
    {
        slug: "sustainable-battery-manufacturing",
        title: "Why Sustainable Battery Manufacturing Matters for India's Future",
        excerpt: "Our approach to sustainable battery production — second-life cell refurbishment, responsible sourcing, and circular economy principles.",
        category: "Sustainability",
        date: "Dec 20, 2025",
        readTime: "6 min read",
    },
    {
        slug: "smart-bms-fleet-management",
        title: "Smart BMS: The Brain Behind Fleet Battery Management",
        excerpt: "How our IoT-enabled BMS platform helps fleet operators reduce downtime, predict failures, and optimize battery life across thousands of vehicles.",
        category: "Technology",
        date: "Dec 5, 2025",
        readTime: "9 min read",
    },
];

const categoryColors: Record<string, string> = {
    Technology: "text-blue-400 bg-blue-400/10",
    "Deep Dive": "text-purple-400 bg-purple-400/10",
    Guide: "text-green-400 bg-green-400/10",
    Industry: "text-amber-400 bg-amber-400/10",
    Sustainability: "text-emerald-400 bg-emerald-400/10",
};

export default function InsightsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 bg-grid">
                <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-secondary-blue/5 rounded-full blur-[120px]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-secondary-blue text-sm font-medium uppercase tracking-widest">Insights</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-3 mb-6">
                        Blog &{" "}
                        <span className="text-gradient">Insights</span>
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Deep technical articles, industry analysis, and guides from our battery engineering team.
                    </p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/insights/${post.slug}`}
                                className="glass rounded-2xl p-6 group hover:border-primary-green/20 transition-all duration-500 hover:-translate-y-1 flex flex-col"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] || "text-neutral-400 bg-white/5"}`}>
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-neutral-500">{post.readTime}</span>
                                </div>
                                <h3 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-primary-green transition-colors leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-neutral-400 leading-relaxed mb-4 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <span className="text-xs text-neutral-500">{post.date}</span>
                                    <span className="text-xs text-primary-green font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-primary-darker">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-heading font-bold text-white mb-4">Stay Updated</h2>
                    <p className="text-neutral-400 mb-8 text-sm">
                        Get monthly insights on battery technology, EV industry trends, and product updates.
                    </p>
                    <div className="flex gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-primary-green/50"
                        />
                        <button className="px-6 py-3 bg-primary-green text-primary-dark font-semibold text-sm rounded-lg hover:bg-primary-green-dim transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
