export const metadata = {
  title: "About — Adiabatic Technologies",
  description: "Adiabatic Technologies is India's full-stack industrial battery company — IIT Hyderabad incubated, building the energy layer for industrial electrification.",
};

const timeline = [
  { year: "2022", event: "Incorporated as Adiabatic Technologies Pvt. Ltd. — IIT Hyderabad Technology Business Incubator" },
  { year: "2023", event: "First production batch: agricultural spray pump batteries and 2-wheeler EV packs" },
  { year: "2024", event: "Expanded to MHE, drone, and industrial power tool battery segments. MIDC Ahmednagar facility commissioned." },
  { year: "2025", event: "Launched industrial-grade BMS with CANbus + RS485 for forklift traction applications. Entered Defence and Marine segments." },
  { year: "2026", event: "Initiated India's first purpose-built humanoid robot battery program. BESS grid-scale product line under development." },
];

const leadership = [
  {
    name: "Darshan Gorentla",
    role: "Co-founder & CEO",
    bio: "IIT Hyderabad. Battery system design, industrial electrification strategy, and business development.",
  },
  {
    name: "Technical Leadership",
    role: "Battery Engineering & BMS",
    bio: "Team of electrochemists and embedded engineers with combined deep-tech experience across cell technology and BMS firmware.",
  },
  {
    name: "Manufacturing Leadership",
    role: "Operations & Quality",
    bio: "15+ person manufacturing team at MIDC Ahmednagar with expertise in lithium pack assembly and IEC certification.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-green/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 max-w-3xl">
            Powering India&apos;s Industrial Electrification
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Adiabatic Technologies was founded on a single belief: India&apos;s industrial electrification cannot succeed on adapted consumer batteries. Every application demands a battery engineered from the ground up for its specific duty cycle, environment, and interface.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Mission</p>
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Building India&apos;s Full-Stack Battery Ecosystem
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Adiabatic has built a full-stack battery technology ecosystem focused on powering the next wave of industrial electrification. We design and manufacture high-performance battery packs specifically engineered for Robotics, Defence, Marine, Material Handling Equipment (MHE), and Power Tools — where durability, thermal stability, safety, and high cycle life are mission-critical.
              </p>
              <p className="text-neutral-300 leading-relaxed mb-6">
                With strong in-house battery engineering, intelligent BMS architecture, and application-optimised pack design, Adiabatic delivers reliable energy solutions tailored for high-duty industrial and automation environments.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Alongside our core industrial focus, we are building a scalable battery repurposement platform that converts retired lithium-ion cells into cost-effective, reliable power solutions for the agriculture spray pump segment — contributing to carbon reduction and circular economy objectives.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Founded", value: "2022" },
                { label: "Incubated At", value: "IIT Hyderabad — Technology Business Incubator" },
                { label: "Facility", value: "L-78, MIDC Ahmednagar, Maharashtra" },
                { label: "Market Segments", value: "12 Industrial Verticals" },
                { label: "Core Team", value: "Engineering, BMS, Manufacturing, Sales" },
                { label: "Chemistry", value: "LFP, NMC, LFP/NMC" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4 flex justify-between items-center">
                  <span className="text-sm text-neutral-400">{item.label}</span>
                  <span className="text-sm text-white font-medium text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Humanoid Focus */}
      <section className="py-20 bg-primary-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-10 border border-primary-green/15">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Strategic Initiative</p>
                <h2 className="text-3xl font-heading font-bold text-white mb-4">
                  Humanoid & Robotics Battery Systems — Built in India, From the Ground Up
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  As India embarks on its humanoid robotics journey, one foundational gap remains largely unaddressed: the intelligence and energy layer that powers these machines. Adiabatic is building India&apos;s first ground-up indigenous battery system purpose-designed for humanoid and advanced robotics platforms.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  Unlike adapted EV or consumer cells, humanoid robots demand ultra-high burst discharge, sub-millisecond load response, compact form-factor integration, and real-time adaptive BMS — capabilities that no existing domestic supplier currently offers at depth. We are developing this from first principles — entirely within India.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "⚡", title: "Ultra-High Burst Discharge", desc: "20C burst discharge for sudden multi-axis joint load spikes in humanoid motion" },
                  { icon: "⏱️", title: "Sub-millisecond BMS Response", desc: "AI-driven adaptive BMS that responds to load changes faster than joint controllers can detect" },
                  { icon: "📐", title: "Compact Form-Factor Integration", desc: "Torso-integrated pack design co-engineered with robot structural team" },
                  { icon: "🧠", title: "Adaptive AI BMS", desc: "Machine learning-driven SOH prediction and charge optimisation for 10,000+ cycle life target" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-0.5">{item.title}</h4>
                      <p className="text-xs text-neutral-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Company Journey</p>
            <h2 className="text-4xl font-heading font-bold text-white">Milestones</h2>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-primary-dark border-2 border-primary-green flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-primary-green" />
                  </div>
                  <div className="glass rounded-xl p-5">
                    <span className="text-xs text-primary-green font-mono font-bold">{item.year}</span>
                    <p className="text-sm text-neutral-300 mt-1 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Work with Adiabatic</h2>
          <p className="text-neutral-400 mb-8">Whether you need a battery pack, want to join the team, or are interested in a strategic partnership.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="px-8 py-3.5 bg-primary-green text-primary-dark font-semibold rounded-xl hover:bg-primary-green-dim transition-all">
              Contact Engineering
            </a>
            <a href="/careers" className="px-8 py-3.5 border border-white/15 text-white font-medium rounded-xl hover:bg-white/5 transition-all">
              View Open Roles
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
