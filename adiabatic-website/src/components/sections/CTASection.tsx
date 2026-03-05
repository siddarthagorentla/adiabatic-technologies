export default function CTASection() {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-green/10" />
            <div className="absolute inset-0 bg-grid opacity-30" />

            {/* Glow effects */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-green/10 rounded-full blur-[100px]" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                    Ready to Power Your{" "}
                    <span className="text-gradient">Next Project?</span>
                </h2>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
                    Whether you&apos;re an OEM, fleet operator, or innovator — let&apos;s build the
                    perfect battery solution together.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <a
                        href="/contact"
                        className="px-8 py-4 bg-primary-green text-primary-dark font-semibold rounded-lg hover:bg-primary-green-dim transition-all duration-300 hover:shadow-xl hover:shadow-primary-green/20"
                    >
                        Get a Custom Quote
                    </a>
                    <a
                        href="/resources/catalog"
                        className="px-8 py-4 glass text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                        Download Product Catalog
                    </a>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-neutral-400">
                    <a href="tel:+919521611518" className="flex items-center gap-2 hover:text-white transition-colors">
                        <svg className="w-4 h-4 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +91-9521611518
                    </a>
                    <span className="text-neutral-600">|</span>
                    <a href="mailto:darshan@adiabatic.co.in" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                        <svg className="w-5 h-5 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        darshan@adiabatic.co.in
                    </a>
                </div>
            </div>
        </section>
    );
}
