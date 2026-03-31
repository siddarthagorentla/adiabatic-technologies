"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const productCategories = [
  { label: "MHE & Forklifts", href: "/products/mhe", icon: "🏭" },
  { label: "Robotics & AMR/AGV", href: "/products/robotics", icon: "🤖" },
  { label: "Defence", href: "/products/defence", icon: "🛡️" },
  { label: "Marine", href: "/products/marine", icon: "⚓" },
  { label: "Power Tools", href: "/products/power-tools", icon: "🔧" },
  { label: "Drones & UAVs", href: "/products/drones", icon: "🚁" },
  { label: "Electric Vehicles", href: "/products/ev", icon: "⚡" },
  { label: "Consumer Electronics", href: "/products/consumer-electronics", icon: "📱" },
  { label: "BESS Residential & Commercial", href: "/products/bess-residential", icon: "🏠" },
  { label: "BESS Grid Connected", href: "/products/bess-grid", icon: "🔌" },
  { label: "Solar Street Lighting", href: "/products/solar-street-light", icon: "💡" },
  { label: "Agriculture & Repurposed", href: "/products/agri-repurposed", icon: "🌱" },
];

const navLinks = [
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary-dark/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg border-2 border-primary-green flex items-center justify-center group-hover:bg-primary-green/10 transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-green" fill="currentColor">
                <path d="M12 2L4 12h5v10l7-12h-5z" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-heading font-bold tracking-tight">
                <span className="text-white">ADIAB</span>
                <span className="text-primary-green">ATIC</span>
              </span>
              <span className="text-[9px] text-neutral-500 tracking-widest uppercase font-mono">Technologies</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button
                    className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1.5"
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mega Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[720px] bg-[#0A0F1C] rounded-2xl p-6 shadow-2xl shadow-black/70 border border-white/10 transition-all duration-200 ${
                      productsOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="mb-4 pb-3 border-b border-white/8">
                      <p className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Industrial Battery Solutions</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.href}
                          href={cat.href}
                          onClick={() => setProductsOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:text-white hover:bg-white/8 transition-all group"
                        >
                          <span className="text-base opacity-70 group-hover:opacity-100 transition-opacity">{cat.icon}</span>
                          <span>{cat.label}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/8 flex justify-between items-center">
                      <Link
                        href="/products"
                        onClick={() => setProductsOpen(false)}
                        className="text-xs text-primary-green hover:text-primary-green-dim transition-colors font-medium"
                      >
                        View all products →
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setProductsOpen(false)}
                        className="text-xs bg-primary-green/10 text-primary-green hover:bg-primary-green/20 px-4 py-1.5 rounded-lg transition-all font-medium"
                      >
                        Request Specifications
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-primary-dark bg-primary-green hover:bg-primary-green-dim rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-green/25"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex lg:hidden p-2 text-neutral-300 hover:text-white transition-colors"
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary-dark/98 backdrop-blur-xl border-t border-white/5 animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
            <div>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 rounded-lg"
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileProductsOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg"
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 rounded-lg"
              >
                {link.label}
              </Link>
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
