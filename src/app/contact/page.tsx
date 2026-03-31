"use client";
import { useState } from "react";

const industries = [
  "Material Handling / Forklift",
  "Robotics / AMR / AGV",
  "Defence & Security",
  "Marine & Maritime",
  "Power Tools",
  "Drones & UAVs",
  "Electric Vehicles",
  "Consumer Electronics",
  "BESS Residential / Commercial",
  "BESS Grid Scale",
  "Solar Street Lighting",
  "Agriculture / Second Life",
  "Other",
];

const volumes = [
  "Prototype / Sample (1–10 units)",
  "Small Batch (10–100 units)",
  "Series Production (100–1000 units)",
  "Large Volume (1000+ units)",
  "Not sure yet",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    industry: "", volume: "", voltage: "", capacity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submit
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary-green/5 rounded-full blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">Talk to Engineering</h1>
          <p className="text-xl text-neutral-400 max-w-xl mx-auto">
            Share your application and battery requirements. Our team responds with specifications within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-white mb-4">Sales & Enquiries</h3>
                <div className="space-y-3">
                  {[
                    { icon: "📞", label: "+91 9521611518", href: "tel:+919521611518" },
                    { icon: "📧", label: "darshan@adiabatic.co.in", href: "mailto:darshan@adiabatic.co.in" },
                    { icon: "📍", label: "L-78, MIDC Ahmednagar, Maharashtra 414111", href: "#" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-3 text-sm text-neutral-300 hover:text-primary-green transition-colors"
                    >
                      <span className="text-base mt-0.5">{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-white mb-4">Response Promise</h3>
                <div className="space-y-3">
                  {[
                    { label: "Quote Response", value: "< 24 hours" },
                    { label: "Technical Review", value: "< 48 hours" },
                    { label: "Sample Delivery", value: "4–6 weeks" },
                    { label: "Series Production", value: "8–12 weeks" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between text-sm">
                      <span className="text-neutral-400">{item.label}</span>
                      <span className="text-primary-green font-mono font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-white mb-3">Business Hours</h3>
                <p className="text-sm text-neutral-400">Mon–Fri: 9:00 AM – 6:30 PM IST</p>
                <p className="text-sm text-neutral-400">Sat: 10:00 AM – 2:00 PM IST</p>
                <p className="text-sm text-neutral-500 mt-2">For urgent requirements, call directly.</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="glass rounded-2xl p-12 text-center border border-primary-green/20">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Request Received!</h3>
                  <p className="text-neutral-400">
                    Thank you, <span className="text-white">{form.name}</span>. Our engineering team will review your requirements and respond within 24 hours at <span className="text-primary-green">{form.email}</span>.
                  </p>
                </div>
              ) : (
                <div className="glass rounded-2xl p-8 border border-white/8">
                  <h3 className="text-xl font-heading font-semibold text-white mb-6">Request Battery Specifications</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs text-neutral-400 uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                          id="name" name="name" type="text" required
                          value={form.name} onChange={handleChange}
                          placeholder="Raj Mehta"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-primary-green/50 focus:ring-1 focus:ring-primary-green/20 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs text-neutral-400 uppercase tracking-wider mb-2">Company *</label>
                        <input
                          id="company" name="company" type="text" required
                          value={form.company} onChange={handleChange}
                          placeholder="Acme Robotics Pvt. Ltd."
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-primary-green/50 focus:ring-1 focus:ring-primary-green/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs text-neutral-400 uppercase tracking-wider mb-2">Email Address *</label>
                        <input
                          id="email" name="email" type="email" required
                          value={form.email} onChange={handleChange}
                          placeholder="raj@acme.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-primary-green/50 focus:ring-1 focus:ring-primary-green/20 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs text-neutral-400 uppercase tracking-wider mb-2">Phone Number *</label>
                        <input
                          id="phone" name="phone" type="tel" required
                          value={form.phone} onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-primary-green/50 focus:ring-1 focus:ring-primary-green/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Industry */}
                    <div>
                      <label htmlFor="industry" className="block text-xs text-neutral-400 uppercase tracking-wider mb-2">Application / Industry *</label>
                      <select
                        id="industry" name="industry" required
                        value={form.industry} onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-green/50 focus:ring-1 focus:ring-primary-green/20 transition-all"
                      >
                        <option value="" className="bg-primary-dark">Select industry...</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind} className="bg-primary-dark">{ind}</option>
                        ))}
                      </select>
                    </div>

                    {/* Volume */}
                    <div>
                      <label htmlFor="volume" className="block text-xs text-neutral-400 uppercase tracking-wider mb-2">Expected Volume</label>
                      <select
                        id="volume" name="volume"
                        value={form.volume} onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-green/50 focus:ring-1 focus:ring-primary-green/20 transition-all"
                      >
                        <option value="" className="bg-primary-dark">Select volume...</option>
                        {volumes.map((v) => (
                          <option key={v} value={v} className="bg-primary-dark">{v}</option>
                        ))}
                      </select>
                    </div>

                    {/* Voltage & Capacity */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="voltage" className="block text-xs text-neutral-400 uppercase tracking-wider mb-2">Required Voltage (if known)</label>
                        <input
                          id="voltage" name="voltage" type="text"
                          value={form.voltage} onChange={handleChange}
                          placeholder="e.g. 48V, 24V"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-primary-green/50 focus:ring-1 focus:ring-primary-green/20 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="capacity" className="block text-xs text-neutral-400 uppercase tracking-wider mb-2">Required Capacity (if known)</label>
                        <input
                          id="capacity" name="capacity" type="text"
                          value={form.capacity} onChange={handleChange}
                          placeholder="e.g. 100Ah, 50kWh"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-primary-green/50 focus:ring-1 focus:ring-primary-green/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs text-neutral-400 uppercase tracking-wider mb-2">Application Details & Requirements</label>
                      <textarea
                        id="message" name="message" rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Describe your application, operating conditions, interface requirements, form-factor constraints, timeline, and any other relevant details..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-primary-green/50 focus:ring-1 focus:ring-primary-green/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-primary-green text-primary-dark font-semibold rounded-xl hover:bg-primary-green-dim transition-all duration-300 hover:shadow-xl hover:shadow-primary-green/25 disabled:opacity-60 disabled:cursor-not-allowed text-base"
                    >
                      {submitting ? "Sending..." : "Submit Request"}
                    </button>

                    <p className="text-xs text-neutral-500 text-center">
                      By submitting you agree to be contacted by Adiabatic Technologies regarding your enquiry.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
