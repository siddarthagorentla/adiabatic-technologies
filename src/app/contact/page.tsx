"use client";
import { useState } from "react";
import type { FormEvent } from "react";

const inquiryTypes = [
    "OEM Partnership",
    "Custom Battery Pack",
    "Dealer Inquiry",
    "Product Purchase",
    "General Inquiry",
];

const faqs = [
    { q: "What is the minimum order quantity?", a: "We offer flexible MOQs starting from 10 units for standard products. Custom configurations may have different minimum requirements depending on complexity." },
    { q: "What warranty do you provide?", a: "All our battery packs come with a 2-year warranty covering manufacturing defects. Extended warranty options are available for fleet and enterprise customers." },
    { q: "Can you design custom battery packs?", a: "Absolutely. Our engineering team specializes in custom battery pack design. Share your voltage, capacity, form factor, and application requirements and we'll provide a proposal within 48 hours." },
    { q: "What certifications do your batteries have?", a: "Our battery packs are AIS-156 compliant and manufactured under strict quality control at our MIDC facility. Specific certifications are available per product line." },
    { q: "Do you support fleet monitoring?", a: "Yes, our IoT-enabled battery packs connect to our real-time cloud monitoring platform. Fleet operators can track battery health, location, and performance from anywhere." },
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 bg-grid">
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary-green/5 rounded-full blur-[120px]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-primary-green text-sm font-medium uppercase tracking-widest">Contact</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-3 mb-6">
                        Let&apos;s Build{" "}
                        <span className="text-gradient">Together</span>
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Whether you need a standard battery pack or a custom solution — our team is ready
                        to help you power your next project.
                    </p>
                </div>
            </section>

            {/* Form + Contact Info */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            <div className="glass rounded-2xl p-8">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 rounded-full bg-primary-green/20 flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-heading font-bold text-white mb-2">Thank You!</h3>
                                        <p className="text-neutral-400">Our team will get in touch within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <h3 className="text-xl font-heading font-bold text-white mb-6">Send Us an Inquiry</h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs text-neutral-400 uppercase tracking-wider mb-1.5">Full Name *</label>
                                                <input type="text" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-primary-green/50 transition-colors" placeholder="John Doe" />
                                            </div>
                                            <div>
                                                <label className="block text-xs text-neutral-400 uppercase tracking-wider mb-1.5">Company</label>
                                                <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-primary-green/50 transition-colors" placeholder="Your Company" />
                                            </div>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs text-neutral-400 uppercase tracking-wider mb-1.5">Email *</label>
                                                <input type="email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-primary-green/50 transition-colors" placeholder="john@example.com" />
                                            </div>
                                            <div>
                                                <label className="block text-xs text-neutral-400 uppercase tracking-wider mb-1.5">Phone *</label>
                                                <input type="tel" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-primary-green/50 transition-colors" placeholder="+91-XXXXX-XXXXX" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs text-neutral-400 uppercase tracking-wider mb-1.5">Inquiry Type *</label>
                                            <select required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-primary-green/50 transition-colors appearance-none">
                                                <option value="" className="bg-primary-dark">Select inquiry type</option>
                                                {inquiryTypes.map((t) => (
                                                    <option key={t} value={t} className="bg-primary-dark">{t}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs text-neutral-400 uppercase tracking-wider mb-1.5">Message *</label>
                                            <textarea required rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-primary-green/50 transition-colors resize-none" placeholder="Tell us about your requirements..." />
                                        </div>
                                        <button type="submit" className="w-full px-8 py-3.5 bg-primary-green text-primary-dark font-semibold rounded-lg hover:bg-primary-green-dim transition-all duration-300 hover:shadow-xl hover:shadow-primary-green/20">
                                            Send Inquiry
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="glass rounded-2xl p-6">
                                <h4 className="font-heading font-semibold text-white mb-4">Factory Address</h4>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    L-78, MIDC Ahmednagar,<br />
                                    Maharashtra 414111, India
                                </p>
                            </div>
                            <div className="glass rounded-2xl p-6">
                                <h4 className="font-heading font-semibold text-white mb-4">Registered Office</h4>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    H. No. 4-67/49, Flat No 309,<br />
                                    V.K. Residency, Shivam Homes,<br />
                                    Sangareddy, Telangana 502285
                                </p>
                            </div>
                            <div className="glass rounded-2xl p-6">
                                <h4 className="font-heading font-semibold text-white mb-4">Get in Touch</h4>
                                <div className="space-y-3 text-sm">
                                    <a href="tel:+919521611518" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                                        <svg className="w-4 h-4 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        +91-9521611518
                                    </a>
                                    <a href="mailto:darshan@adiabatic.co.in" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                                        <svg className="w-4 h-4 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        darshan@adiabatic.co.in
                                    </a>
                                </div>
                            </div>
                            <div className="glass rounded-2xl overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123!2d74.7387!3d19.0847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA1JzA1LjAiTiA3NMKwNDQnMTkuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="Adiabatic Technologies factory location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-primary-darker">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-heading font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className="glass rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                                >
                                    <span className="text-sm font-medium text-white">{faq.q}</span>
                                    <svg className={`w-4 h-4 text-neutral-400 transform transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-4 text-sm text-neutral-400 leading-relaxed animate-fade-in">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
