import Link from "next/link";

export const metadata = {
  title: "Careers — Adiabatic Technologies",
  description: "Join Adiabatic Technologies — build India's industrial battery future. Open roles in battery engineering, BMS, manufacturing, and sales.",
};

const currentOpenings = [
  {
    id: "cell-eng-1",
    title: "Battery Cell Engineer",
    department: "R&D — Battery Engineering",
    location: "Ahmednagar, Maharashtra",
    type: "Full-time",
    experience: "2–5 years",
    description: "You will own cell characterisation, selection, and qualification for new product lines across LFP, NMC, and LCO chemistries. Work with the core engineering team to validate cell performance under application-specific conditions.",
    requirements: [
      "B.E./M.Tech in Chemical Engineering, Electrochemistry, or Materials Science",
      "Hands-on experience with electrochemical characterisation (EIS, CV, rate testing)",
      "Familiarity with cell-level thermal modelling",
      "Experience with battery test equipment (Neware, Arbin, BioLogic preferred)",
    ],
    nicetohave: ["Prior experience at a battery manufacturer or EV startup", "Publications in battery materials"],
    skills: ["LFP", "NMC", "Cell Characterisation", "EIS", "Thermal Modelling"],
  },
  {
    id: "bms-fw-1",
    title: "BMS Firmware Engineer",
    department: "Engineering — BMS & Embedded",
    location: "Hyderabad / Ahmednagar (Hybrid)",
    type: "Full-time",
    experience: "3–6 years",
    description: "Design and optimise embedded firmware running on our proprietary BMS hardware. Implement SOC/SOH algorithms, cell balancing logic, communication stacks (CAN, RS485, I²C), and protection features.",
    requirements: [
      "B.E./M.Tech in Embedded Systems, Electronics & Communication, or Computer Science",
      "Strong C/C++ embedded development skills",
      "Experience with CAN, SPI, UART, I²C protocol implementation",
      "Familiarity with RTOS (FreeRTOS, Zephyr) environments",
    ],
    nicetohave: ["Experience with battery SOC/SOH algorithms (EKF, Coulomb counting)", "Automotive-grade (MISRA C) coding experience"],
    skills: ["C/C++", "CAN/UART/I²C", "FreeRTOS", "STM32", "BMS Algorithms"],
  },
  {
    id: "mech-pack-1",
    title: "Mechanical Design Engineer — Battery Packs",
    department: "Engineering — Pack Design",
    location: "Ahmednagar, Maharashtra",
    type: "Full-time",
    experience: "2–4 years",
    description: "Design battery pack enclosures, structural frames, and thermal management assemblies using SolidWorks/CATIA. Work with the manufacturing team to ensure DFM compliance and IP rating achievement.",
    requirements: [
      "B.E./M.Tech in Mechanical Engineering",
      "Proficiency in SolidWorks or CATIA",
      "Knowledge of GD&T, sheet metal DFM, and plastic injection moulding considerations",
      "Understanding of thermal management principles in enclosed enclosures",
    ],
    nicetohave: ["Experience with Li-ion pack mechanical design", "FEA simulation experience (ANSYS, Abaqus)"],
    skills: ["SolidWorks", "CATIA", "GD&T", "Thermal Design", "DFM"],
  },
  {
    id: "ind-sales-1",
    title: "Industrial Sales Manager",
    department: "Sales & Business Development",
    location: "Bangalore / Pune / Delhi (Remote-friendly)",
    type: "Full-time",
    experience: "4–8 years",
    description: "Own the end-to-end B2B sales cycle for industrial battery packs — from lead generation and technical pre-sales to contract closure and key account management. Target segments include MHE, Robotics, Defence, and BESS.",
    requirements: [
      "Bachelor's/Master's in Engineering or Business",
      "5+ years of B2B technical sales experience (industrial capital goods, energy, or cleantech)",
      "Strong understanding of lithium battery technology",
      "Proven track record of closing enterprise deals (>₹50L deal size)",
    ],
    nicetohave: ["Existing relationships with forklift OEMs, robotics startups, or defence PSUs", "Experience selling to government / defence procurement"],
    skills: ["B2B Sales", "Technical Pre-sales", "Key Account Management", "CRM", "Battery Knowledge"],
  },
  {
    id: "mfg-qa-1",
    title: "Manufacturing Quality Engineer",
    department: "Manufacturing — Quality & Process",
    location: "Ahmednagar, Maharashtra",
    type: "Full-time",
    experience: "2–4 years",
    description: "Own quality control processes for cell incoming inspection, pack assembly, BMS integration, and outgoing product testing. Implement and maintain ISO 9001 / IEC 62619 quality systems.",
    requirements: [
      "B.E. in Electronics, Mechanical, or Manufacturing Engineering",
      "Experience with IEC 62619, UN 38.3, or AIS 156 testing standards",
      "Proficiency in QC tools: SPC, FMEA, 8D, Fishbone",
      "Experience with cell testing and characterisation equipment",
    ],
    nicetohave: ["6-Sigma Green Belt or Black Belt", "Experience in battery or EV manufacturing"],
    skills: ["IEC 62619", "UN 38.3", "FMEA", "SPC", "Six Sigma"],
  },
];

const alwaysOpenRoles = [
  { title: "Battery Research Intern", dept: "R&D", duration: "3–6 months", skills: ["Electrochemistry", "Python", "Battery Testing"] },
  { title: "Embedded Systems Intern", dept: "BMS Engineering", duration: "3–6 months", skills: ["C", "STM32", "CAN Protocol"] },
  { title: "Mechanical Design Intern", dept: "Pack Engineering", duration: "3–6 months", skills: ["SolidWorks", "CAD", "Thermal Design"] },
  { title: "Business Development Intern", dept: "Sales", duration: "3–4 months", skills: ["B2B Sales", "Market Research", "CRM"] },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary-green/5 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Join the Team</p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
            Build India&apos;s Industrial<br />
            <span className="text-gradient">Battery Future</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mb-10">
            We&apos;re a deep-tech team solving hard problems at the intersection of electrochemistry, embedded systems, mechanical engineering, and industrial automation. If you build things that matter, we&apos;d like to meet you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#openings" className="px-8 py-3.5 bg-primary-green text-primary-dark font-semibold rounded-xl hover:bg-primary-green-dim transition-all">
              See Open Roles
            </a>
            <a href="mailto:careers@adiabatic.co.in" className="px-8 py-3.5 border border-white/15 text-white font-medium rounded-xl hover:bg-white/5 transition-all">
              careers@adiabatic.co.in
            </a>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 bg-primary-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🔬", title: "Engineering-First Culture", desc: "Every decision is driven by technical merit. We build from first principles, not from convention." },
              { icon: "🇮🇳", title: "Build for India, at Scale", desc: "We are building the energy backbone for India's industrial electrification — a mission that matters beyond the organisation." },
              { icon: "🚀", title: "Ownership & Growth", desc: "Small team, large scope. You will own meaningful work from day one with a clear path to leadership." },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-heading font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Current Openings</p>
            <h2 className="text-4xl font-heading font-bold text-white">Open Positions</h2>
          </div>

          <div className="space-y-6">
            {currentOpenings.map((job) => (
              <div key={job.id} className="glass rounded-2xl p-8 border border-transparent hover:border-primary-green/20 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="text-neutral-400">{job.department}</span>
                      <span className="text-neutral-600">·</span>
                      <span className="text-neutral-400">{job.location}</span>
                      <span className="text-neutral-600">·</span>
                      <span className="text-neutral-400">{job.experience}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs bg-primary-green/10 text-primary-green border border-primary-green/20 px-3 py-1 rounded-full font-medium">
                      {job.type}
                    </span>
                    <a
                      href={`mailto:careers@adiabatic.co.in?subject=Application: ${job.title}`}
                      className="px-5 py-2 bg-primary-green text-primary-dark text-sm font-semibold rounded-xl hover:bg-primary-green-dim transition-all"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-5">{job.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-5">
                  <div>
                    <h4 className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-sm text-neutral-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-green mt-1.5 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {job.nicetohave.length > 0 && (
                    <div>
                      <h4 className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Nice to Have</h4>
                      <ul className="space-y-2">
                        {job.nicetohave.map((nh) => (
                          <li key={nh} className="flex items-start gap-2 text-sm text-neutral-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary-blue mt-1.5 shrink-0" />
                            {nh}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span key={skill} className="text-xs font-mono bg-white/5 border border-white/10 text-neutral-300 px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Always Open */}
      <section className="py-20 bg-primary-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Round the Clock</p>
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Always Accepting</h2>
            <p className="text-neutral-400">These positions are always open for strong candidates regardless of current team needs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {alwaysOpenRoles.map((role) => (
              <div key={role.title} className="glass rounded-2xl p-6 hover:border-primary-green/20 border border-transparent transition-all duration-300 group">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{role.dept}</span>
                <h3 className="font-heading font-semibold text-white mt-2 mb-1 group-hover:text-primary-green transition-colors">{role.title}</h3>
                <p className="text-xs text-neutral-500 mb-4">Duration: {role.duration}</p>
                <div className="flex flex-wrap gap-1.5">
                  {role.skills.map((skill) => (
                    <span key={skill} className="text-[10px] bg-primary-green/10 text-primary-green px-2 py-0.5 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-8 border border-primary-green/15 text-center">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">Don&apos;t see your role?</h3>
            <p className="text-neutral-400 mb-6">If you are exceptional at what you do and believe it can contribute to our mission, reach out. We will make room for the right person.</p>
            <a
              href="mailto:careers@adiabatic.co.in"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-green text-primary-dark font-semibold rounded-xl hover:bg-primary-green-dim transition-all duration-300"
            >
              Send Open Application
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
