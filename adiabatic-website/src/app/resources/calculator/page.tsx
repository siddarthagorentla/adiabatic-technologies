"use client";
import { useState } from "react";
import Link from "next/link";

const vehicleTypes = [
    { id: "2w", label: "2-Wheeler (Scooter/Bike)", avgEfficiency: 35, baseVoltage: 60 },
    { id: "3w", label: "3-Wheeler (E-Rickshaw)", avgEfficiency: 60, baseVoltage: 48 },
    { id: "loader", label: "E-Loader / Cargo", avgEfficiency: 85, baseVoltage: 60 },
    { id: "cycle", label: "E-Cycle", avgEfficiency: 15, baseVoltage: 36 },
];

export default function CalculatorPage() {
    const [step, setStep] = useState(1);
    const [vehicle, setVehicle] = useState(vehicleTypes[0]);
    const [range, setRange] = useState(80);
    const [dailyKm, setDailyKm] = useState(40);
    const [electricityCost, setElectricityCost] = useState(8);

    // Calculations
    const requiredEnergyWh = range * vehicle.avgEfficiency;
    const ahAtBaseVoltage = Math.round(requiredEnergyWh / vehicle.baseVoltage);

    // ROI Math (Lithium vs Lead Acid)
    const years = 3;
    const leadAcidCycles = 400;
    const lithiumCycles = 3000;
    const setsOfLeadAcidNeeded = Math.ceil((dailyKm * 365 * years) / (range * leadAcidCycles));
    const leadAcidCost = 25000 * setsOfLeadAcidNeeded;
    const lithiumCost = 45000; // Estimated

    const totalSavings = leadAcidCost - lithiumCost;

    return (
        <div className="min-h-screen pt-32 pb-20 bg-grid">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <span className="text-primary-green text-sm font-medium uppercase tracking-widest">Resources</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3">
                        Battery Capacity & <span className="text-gradient">ROI Calculator</span>
                    </h1>
                    <p className="text-neutral-400 mt-4">
                        Calculate exactly what battery size you need and see how much you save by switching to Adiabatic Lithium-ion.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Inputs Section */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="glass rounded-2xl p-8 space-y-8">
                            {/* Step 1: Vehicle Type */}
                            <div className="space-y-4">
                                <label className="text-sm font-heading font-semibold text-white">1. Select Vehicle Type</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {vehicleTypes.map((v) => (
                                        <button
                                            key={v.id}
                                            onClick={() => setVehicle(v)}
                                            className={`p-4 rounded-xl border-2 transition-all text-left ${vehicle.id === v.id
                                                    ? "border-primary-green bg-primary-green/5"
                                                    : "border-white/5 bg-white/5 hover:border-white/20"
                                                }`}
                                        >
                                            <div className={`text-xs uppercase tracking-wider mb-1 ${vehicle.id === v.id ? "text-primary-green" : "text-neutral-500"}`}>
                                                {v.id}
                                            </div>
                                            <div className="text-sm font-semibold text-white leading-tight">{v.label}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 2: Range Requirement */}
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <label className="text-sm font-heading font-semibold text-white">2. Required Range (km/charge)</label>
                                    <span className="text-primary-green font-mono font-bold">{range} km</span>
                                </div>
                                <input
                                    type="range"
                                    min="20"
                                    max="200"
                                    step="5"
                                    value={range}
                                    onChange={(e) => setRange(parseInt(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-green"
                                />
                                <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                                    <span>20km</span>
                                    <span>100km</span>
                                    <span>200km</span>
                                </div>
                            </div>

                            {/* Step 3: Daily Usage */}
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <label className="text-sm font-heading font-semibold text-white">3. Average Daily Usage (km)</label>
                                    <span className="text-primary-green font-mono font-bold">{dailyKm} km</span>
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="150"
                                    step="5"
                                    value={dailyKm}
                                    onChange={(e) => setDailyKm(parseInt(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-green"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass rounded-2xl p-8 border-primary-green/20 relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-green/10 rounded-full blur-3xl -mr-16 -mt-16" />

                            <h3 className="text-xl font-heading font-bold text-white mb-8">Recommended Configuration</h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Recommended Voltage</div>
                                    <div className="text-3xl font-heading font-bold text-white">{vehicle.baseVoltage}V</div>
                                </div>

                                <div>
                                    <div className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Recommended Capacity</div>
                                    <div className="text-3xl font-heading font-bold text-primary-green">{ahAtBaseVoltage}Ah</div>
                                    <div className="text-[10px] text-neutral-600 font-mono mt-1">~{Math.round(requiredEnergyWh / 1000 * 10) / 10} kWh total energy</div>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <div className="text-xs text-neutral-500 uppercase tracking-widest mb-3">ROI Analysis (3 Years)</div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-sm text-neutral-400">Lead Acid Replacement Cost</span>
                                            <span className="text-sm text-white font-mono">₹{leadAcidCost.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between bg-primary-green/10 p-3 rounded-lg border border-primary-green/20">
                                            <span className="text-sm font-semibold text-white">Total Savings</span>
                                            <span className="text-sm font-bold text-primary-green font-mono">₹{totalSavings.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 space-y-3">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center px-6 py-3 bg-primary-green text-primary-dark font-bold rounded-xl hover:bg-primary-green-dim transition-all shadow-lg shadow-primary-green/20"
                                >
                                    Get Custom Quote
                                </Link>
                                <p className="text-[10px] text-center text-neutral-600 leading-relaxed italic">
                                    *Results are estimated based on standard vehicle efficiencies and 10x lower degradation data.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
