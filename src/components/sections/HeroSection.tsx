"use client";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
    end: number;
    suffix?: string;
    label: string;
}

function Counter({ end, suffix = "", label }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;
        const duration = 2000;
        const steps = 60;
        const increment = end / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [inView, end]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-white">
                {count}{suffix}
            </div>
            <div className="text-xs md:text-sm text-neutral-400 mt-1 uppercase tracking-wider">{label}</div>
        </div>
    );
}

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-grid">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-green/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary-blue/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="animate-slide-in-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-xs font-medium text-primary-green mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
                            IIT Hyderabad Incubated
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.05] mb-6">
                            India&apos;s 1st Battery Pack with{" "}
                            <span className="text-gradient">10x Lower</span>{" "}
                            Life Degradation
                        </h1>

                        <p className="text-lg text-neutral-400 leading-relaxed max-w-lg mb-8">
                            High-performance lithium-ion battery packs powering electric vehicles,
                            drones, agriculture equipment, and energy storage systems across India.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <a
                                href="/contact"
                                className="px-8 py-3.5 bg-primary-green text-primary-dark font-semibold rounded-lg hover:bg-primary-green-dim transition-all duration-300 hover:shadow-xl hover:shadow-primary-green/20 text-sm"
                            >
                                Get a Quote →
                            </a>
                            <a
                                href="/technology"
                                className="px-8 py-3.5 glass text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 text-sm"
                            >
                                Explore Technology
                            </a>
                        </div>
                    </div>

                    {/* Right - Battery Image */}
                    <div className="animate-slide-in-right flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary-green/10 rounded-3xl blur-3xl animate-pulse-glow" />
                            <img
                                src="/battery-hero.png"
                                alt="Adiabatic lithium-ion battery pack with green LED indicators"
                                className="relative w-full max-w-md lg:max-w-lg rounded-2xl animate-float"
                            />
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="mt-16 glass rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children">
                    <Counter end={500} suffix="+" label="Packs Deployed" />
                    <Counter end={10} suffix="x" label="Lower Degradation" />
                    <Counter end={15} suffix="+" label="Industries Served" />
                    <Counter end={100} suffix="%" label="Made in India" />
                </div>
            </div>
        </section>
    );
}
