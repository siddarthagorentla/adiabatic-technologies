import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass rounded-3xl p-12 border border-primary-green/15 relative overflow-hidden">
          {/* BG glow */}
          <div className="absolute inset-0 bg-primary-green/3 rounded-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-primary-green/10 blur-[80px] rounded-full" />

          <div className="relative">
            <p className="text-xs text-primary-green font-mono uppercase tracking-widest mb-4">Start a Conversation</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Ready to Power Your Application?
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Share your application requirements and our battery engineering team will respond with specifications, timelines, and pricing within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary-green text-primary-dark font-semibold rounded-xl hover:bg-primary-green-dim transition-all duration-300 hover:shadow-xl hover:shadow-primary-green/30 hover:-translate-y-0.5 text-lg"
              >
                Talk to Engineering
              </Link>
              <a
                href="tel:+919521611518"
                className="px-8 py-4 border border-white/15 text-white font-medium rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center gap-2 text-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9521611518
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
