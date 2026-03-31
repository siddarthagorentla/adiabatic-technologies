const techPillars = [
  {
    title: "Intelligent BMS Architecture",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    description: "Cell-level monitoring with microsecond response. Supports CANbus, RS485, I²C, UART, and NMEA 2000 for seamless OEM integration.",
    points: ["Cell-level fusing", "SOC/SOH real-time", "Adaptive balancing", "Thermal runaway detection"],
  },
  {
    title: "Application-Optimised Pack Design",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    description: "Every pack is engineered from the ground up for its specific application — not adapted from a generic design. Form, interface, and chemistry matched to the use case.",
    points: ["Custom form-factor", "IP54 to IP67 choices", "Vibration hardened", "OEM bracket integration"],
  },
  {
    title: "Thermal Management & Safety",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description: "Passive and active thermal management systems ensuring stable cell temperatures across -40°C to 70°C operating ranges.",
    points: ["Phase-change materials", "Active cooling ready", "Thermal runaway barrier", "IEC 62619 compliant"],
  },
  {
    title: "High Cycle Life Cell Engineering",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    description: "Best-in-class cell selection with rigorous qualification testing. LFP chemistry for safety and longevity; NMC for high energy density applications.",
    points: ["3000–8000+ cycle LFP", "Rigorous cell QC", "Capacity-matched cells", "Grade-A cells only"],
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-24 bg-primary-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-3">Engineering Depth</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Built from First Principles
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Unlike adapted consumer or EV cells, Adiabatic batteries are engineered from cell selection to pack architecture for each specific industrial application.
          </p>
        </div>

        {/* Tech Pillars */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {techPillars.map((pillar) => (
            <div key={pillar.title} className="glass rounded-2xl p-8 hover:border-primary-green/20 border border-transparent transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary-green/10 text-primary-green flex items-center justify-center mb-5 group-hover:bg-primary-green/20 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-3">{pillar.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-5">{pillar.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {pillar.points.map((point) => (
                  <div key={point} className="flex items-center gap-2 text-xs text-neutral-300">
                    <span className="w-1 h-1 rounded-full bg-primary-green" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BMS Protocol Table */}
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-heading font-semibold text-white mb-6">BMS Communication Protocols by Application</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 pr-6 text-left text-xs text-neutral-500 uppercase tracking-wider">Application</th>
                  <th className="py-3 pr-6 text-left text-xs text-neutral-500 uppercase tracking-wider">Protocol</th>
                  <th className="py-3 pr-6 text-left text-xs text-neutral-500 uppercase tracking-wider">IP Rating</th>
                  <th className="py-3 text-left text-xs text-neutral-500 uppercase tracking-wider">Chemistry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { app: "MHE / Forklifts", proto: "CANbus 2.0B / RS485", ip: "IP54", chem: "LFP" },
                  { app: "AMR / AGV", proto: "CAN / UART", ip: "IP65", chem: "NMC" },
                  { app: "Humanoid Robots", proto: "CAN-FD / I²C / SPI", ip: "IP54", chem: "NMC High-Power" },
                  { app: "Defence Vehicles", proto: "MIL-STD-1553 / CAN", ip: "IP67", chem: "LFP" },
                  { app: "Marine", proto: "NMEA 2000 / CAN", ip: "IP67", chem: "LFP" },
                  { app: "BESS Grid", proto: "IEC 61850 / MODBUS TCP", ip: "IP55", chem: "LFP" },
                  { app: "Drones / UAV", proto: "UART / Smart Port", ip: "IP54", chem: "NMC" },
                  { app: "Electric Vehicles", proto: "CAN 2.0B", ip: "IP67", chem: "NMC / LFP" },
                ].map((row) => (
                  <tr key={row.app} className="hover:bg-white/3 transition-colors">
                    <td className="py-3 pr-6 text-neutral-200 font-medium">{row.app}</td>
                    <td className="py-3 pr-6 text-neutral-400 font-mono text-xs">{row.proto}</td>
                    <td className="py-3 pr-6">
                      <span className="text-xs bg-primary-green/10 text-primary-green px-2 py-0.5 rounded font-mono">{row.ip}</span>
                    </td>
                    <td className="py-3 text-neutral-400 text-xs">{row.chem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
