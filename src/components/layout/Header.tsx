"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const navLinks = [
    {
        label: "Products",
        href: "/products",
        children: [
            { label: "2-Wheeler Batteries", href: "/products#2-wheeler" },
            { label: "3-Wheeler Batteries", href: "/products#3-wheeler" },
            { label: "E-Cycle Batteries", href: "/products#e-cycle" },
            { label: "Drone Batteries", href: "/products#drones" },
            { label: "Agri Equipment", href: "/products#agri" },
            { label: "BESS / Energy Storage", href: "/products#bess" },
        ],
    },
    {
        label: "Technology",
        href: "/technology",
        children: [
            { label: "Battery Cell Technology", href: "/technology#cell-tech" },
            { label: "Smart BMS", href: "/technology#bms" },
            { label: "Thermal Management", href: "/technology#thermal" },
            { label: "Real-Time Monitoring", href: "/technology#monitoring" },
        ],
    },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { totalItems, setIsCartOpen } = useCart();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-primary-dark/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full border-2 border-primary-green flex items-center justify-center group-hover:glow-green-strong transition-all duration-300">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-green" fill="currentColor">
                                <path d="M12 2L4 12h5v10l7-12h-5z" />
                            </svg>
                        </div>
                        <span className="text-xl font-heading font-bold tracking-tight">
                            <span className="text-white">ADIA</span>
                            <span className="text-primary-green">B</span>
                            <span className="text-white">ATIC</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1"
                                >
                                    {link.label}
                                    {link.children && (
                                        <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>
                                {/* Dropdown */}
                                {link.children && activeDropdown === link.label && (
                                    <div className="absolute top-full left-0 mt-1 w-64 glass rounded-xl p-2 animate-fade-in shadow-2xl shadow-black/40">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className="block px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA + Cart */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Cart Button */}
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2.5 rounded-lg hover:bg-white/5 text-neutral-300 hover:text-white transition-colors"
                            aria-label="Open cart"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                            </svg>
                            {totalItems > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary-green text-primary-dark text-[10px] font-bold rounded-full flex items-center justify-center animate-fade-in">
                                    {totalItems}
                                </span>
                            )}
                        </button>

                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-primary-green text-primary-dark font-semibold text-sm rounded-lg hover:bg-primary-green-dim transition-all duration-300 hover:shadow-lg hover:shadow-primary-green/20"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile: Cart + Toggle */}
                    <div className="flex lg:hidden items-center gap-2">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 text-neutral-300 hover:text-white"
                            aria-label="Open cart"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                            </svg>
                            {totalItems > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary-green text-primary-dark text-[10px] font-bold rounded-full flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 text-neutral-300 hover:text-white"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-primary-dark/95 backdrop-blur-xl border-t border-white/5 animate-fade-in">
                    <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-3 text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 rounded-lg"
                                >
                                    {link.label}
                                </Link>
                                {link.children && (
                                    <div className="pl-6 space-y-1">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="block px-4 py-2 text-sm text-neutral-400 hover:text-white"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="block w-full text-center px-6 py-3 bg-primary-green text-primary-dark font-semibold rounded-lg"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
