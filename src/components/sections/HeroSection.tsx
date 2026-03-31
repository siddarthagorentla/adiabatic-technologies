"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const stats = [
  { value: "12+", label: "Market Segments" },
  { value: "4000+", label: "Cycle Life (MHE)" },
  { value: "IP67", label: "Top Ingress Protection" },
  { value: "100%", label: "Made in India" },
];

const industryTabs = [
  { id: "mhe", label: "MHE & Forklifts", icon: "🏭", href: "/products/mhe" },
  { id: "robotics", label: "Robotics", icon: "🤖", href: "/products/robotics" },
  { id: "defence", label: "Defence", icon: "🛡️", href: "/products/defence" },
  { id: "marine", label: "Marine", icon: "⚓", href: "/products/marine" },
  { id: "bess", label: "BESS / Grid", icon: "🔋", href: "/products/bess-grid" },
  { id: "drones", label: "Drones", icon: "🚁", href: "/products/drones" },
];

const tabContent: Record<string, { tagline: string; bullets: string[]; stat: string; statLabel: string }> = {
  mhe: {
    tagline: "Drop-in lithium for 24/7 warehouse operations",
    bullets: ["4000+ cycle deep-discharge LFP packs", "CANbus / RS485 vehicle integration", "Opportunity charging ready", "IP54 rated for industrial floors"],
    stat: "4000+",
    statLabel: "Cycles @ 80% DoD",
  },
  robotics: {
    tagline: "Sub-millisecond load response for autonomous machines",
    bullets: ["AI-adaptive BMS for humanoid platforms", "Ultra-high burst discharge (10–20C)", "CAN-FD / UART / I²C interfaces", "Wireless SOC telemetry"],
    stat: "<1ms",
    statLabel: "BMS Load Response",
  },
  defence: {
    tagline: "MIL-STD-810G engineered for mission-critical ops",
    bullets: ["Wide temp range: -40°C to 70°C", "EMI shielded, vibration hardened", "MIL-STD-1553 / CAN interface", "Encrypted SOC telemetry"],
    stat: "-40°C",
    statLabel: "Min. Operating Temp",
  },
  marine: {
    tagline: "Salt-mist resistant propulsion batteries",
    bullets: ["IEC 60092-507 marine certified", "NMEA 2000 network integration", "IP67 bilge-proof enclosure", "Vibration hardened construction"],
    stat: "IP67",
    statLabel: "Ingress Protection",
  },
  bess: {
    tagline: "Scalable grid-scale energy storage systems",
    bullets: ["8000+ cycle LFP chemistry", "IEC 61850 / MODBUS TCP / DNP3", "Turnkey containerised delivery", "Fire suppression & EMS included"],
    stat: "8000+",
    statLabel: "Cycle Life (BESS Grid)",
  },
  drones: {
    tagline: "Maximum endurance, minimum weight UAV packs",
    bullets: ["15C continuous, 25C burst discharge", "Flight time prediction BMS", "Ultralight: 1.9 kg for 355Wh", "IP54 outdoor rated"],
    stat: "15C",
    statLabel: "Continuous Discharge",
  },
};

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("mhe");
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const content = tabContent[activeTab];

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-primary-darker">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-green/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary-blue/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-green/30 bg-primary-green/10 text-primary-green text-xs font-mono font-medium mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary-green animate-pulse" />
          Built in India — IIT Hyderabad Incubated
        </div>

        {/* Headline */}
        <div
          className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.05] mb-6 max-w-4xl">
            Industrial Batteries{" "}
            <span className="text-gradient">Engineered</span>{" "}
            for Mission-Critical{" "}
            <span className="text-gradient">Applications</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10">
            High-performance lithium battery packs purpose-built for Robotics, MHE, Defence, Marine, and Industrial Automation — where reliability is non-negotiable.
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-primary-green text-primary-dark font-semibold rounded-xl hover:bg-primary-green-dim transition-all duration-300 hover:shadow-xl hover:shadow-primary-green/25 hover:-translate-y-0.5"
          >
            Request Specifications
          </Link>
          <Link
            href="/products"
            className="px-8 py-3.5 border border-white/15 text-white font-medium rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            Explore All Products →
          </Link>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-5 text-center">
              <div className="text-3xl font-heading font-bold text-primary-green mb-1">{stat.value}</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Industry Selector */}
        <div
          className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-xs text-neutral-500 uppercase tracking-widest font-mono mb-4">Select your industry</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {industryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary-green text-primary-dark shadow-lg shadow-primary-green/25"
                    : "glass text-neutral-300 hover:text-white hover:bg-white/8"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="glass rounded-2xl p-8 border border-primary-green/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">
                  {industryTabs.find(t => t.id === activeTab)?.icon} {industryTabs.find(t => t.id === activeTab)?.label}
                </p>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{content.tagline}</h3>
                <ul className="space-y-2.5">
                  {content.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-green mt-1.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={industryTabs.find(t => t.id === activeTab)?.href || "/products"}
                  className="inline-flex items-center gap-2 mt-6 text-sm text-primary-green hover:text-primary-green-dim font-medium transition-colors"
                >
                  View {industryTabs.find(t => t.id === activeTab)?.label} Products →
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center glass-light rounded-2xl p-12 glow-green">
                  <div className="text-6xl font-heading font-bold text-primary-green mb-2">{content.stat}</div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">{content.statLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
