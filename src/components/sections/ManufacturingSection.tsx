export default function ManufacturingSection() {
  return (
    <section className="py-24 bg-primary-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Manufacturing Excellence</p>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              End-to-End in India,<br />
              <span className="text-gradient">Under One Roof</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Our MIDC Ahmednagar facility houses all critical manufacturing processes — from cell incoming QC and grading to automated pack assembly, BMS flashing, and functional testing — ensuring traceability and quality control at every step.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { step: "01", title: "Cell Incoming QC & Grading", desc: "100% cell capacity-matching and IR testing before assembly" },
                { step: "02", title: "Pack Assembly & Welding", desc: "Automated nickel-strip laser welding for consistent cell interconnects" },
                { step: "03", title: "BMS Integration & Flashing", desc: "Application-specific firmware loaded and calibrated per pack" },
                { step: "04", title: "Functional Testing & Certification", desc: "Full charge-discharge cycle, thermal profile, and protocol comms test" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-green/10 text-primary-green text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-neutral-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {["MIDC Ahmednagar", "IEC 62619", "UN 38.3", "AIS 156 (In Progress)"].map((cert) => (
                <span key={cert} className="text-xs bg-white/5 border border-white/10 text-neutral-300 px-3 py-1.5 rounded-lg font-mono">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "100%", label: "Cell QC Traceability", icon: "🔍" },
              { value: "IP67", label: "Peak Ingress Protection", icon: "💧" },
              { value: "3", label: "Battery Chemistries", icon: "⚗️" },
              { value: "12+", label: "Industrial Segments", icon: "🏭" },
            ].map((metric) => (
              <div key={metric.label} className="glass rounded-2xl p-6 text-center hover:glow-green transition-all duration-300">
                <div className="text-2xl mb-2">{metric.icon}</div>
                <div className="text-3xl font-heading font-bold text-primary-green mb-1">{metric.value}</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider leading-tight">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
