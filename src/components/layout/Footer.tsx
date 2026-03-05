import Link from "next/link";

const footerSections = [
    {
        title: "Products",
        links: [
            { label: "2-Wheeler Batteries", href: "/products/2-wheeler" },
            { label: "3-Wheeler Batteries", href: "/products/3-wheeler" },
            { label: "E-Cycle Batteries", href: "/products/e-cycle" },
            { label: "Drone Batteries", href: "/products/drones" },
            { label: "Agri Equipment", href: "/products/agri" },
            { label: "BESS / Energy Storage", href: "/products/bess" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Technology", href: "/technology" },
            { label: "Insights", href: "/insights" },
            { label: "Careers", href: "/careers" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Product Datasheets", href: "/resources" },
            { label: "Case Studies", href: "/resources" },
            { label: "Blog", href: "/insights" },
            { label: "Battery Calculator", href: "/resources/calculator" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-primary-darker border-t border-white/5">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full border-2 border-primary-green flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-green" fill="currentColor">
                                    <path d="M12 2L4 12h5v10l7-12h-5z" />
                                </svg>
                            </div>
                            <span className="text-xl font-heading font-bold tracking-tight">
                                <span className="text-white">ADIA</span>
                                <span className="text-primary-green">B</span>
                                <span className="text-white">ATIC</span>
                            </span>
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-sm">
                            India&apos;s 1st lithium-ion battery pack with 10x lower life degradation.
                            Powering EVs, drones, agriculture, and energy storage solutions.
                        </p>
                        <div className="space-y-2 text-sm text-neutral-400">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>L-78, MIDC Ahmednagar, Maharashtra 414111</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+91-9521611518</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>darshan@adiabatic.co.in</span>
                            </div>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
                                {section.title}
                            </h4>
                            <ul className="space-y-2.5">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-neutral-400 hover:text-primary-green transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-xs text-neutral-500">
                        © {new Date().getFullYear()} Adiabatic Technologies Pvt. Ltd. All rights reserved.
                        <span className="mx-2">|</span>
                        CIN: U31100TG2022PTC162462
                        <span className="mx-2">|</span>
                        GST: 27AAWCA9726G1Z1
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
                            Terms
                        </Link>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3 ml-2">
                            <a href="https://www.linkedin.com/company/85656436/adiabatic" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-green transition-colors" aria-label="LinkedIn">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="https://twitter.com/Adiabatic_IN" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-green transition-colors" aria-label="X (Twitter)">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/adiabatic.technologies?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-green transition-colors" aria-label="Instagram">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="https://www.youtube.com/channel/UCX8MWMNTcEB39wrA_zdJ-hQ" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-green transition-colors" aria-label="YouTube">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
