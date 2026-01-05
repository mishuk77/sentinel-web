import Link from "next/link";

export function Hero() {
    return (
        <section id="hero" className="max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
            <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-charcoal mb-8 leading-[1.1]">
                    Decision infrastructure for fintech
                </h1>
                <p className="text-xl md:text-2xl text-charcoal/80 mb-12 leading-relaxed max-w-2xl">
                    Sentinel ingests signals, applies models and policy, executes decisions, and records exactly why money moved.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <a
                        href="mailto:hello@sentineldecisions.com"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-charcoal rounded-md hover:bg-charcoal/90 transition-colors"
                    >
                        Request a conversation
                    </a>
                    <Link
                        href="#flow"
                        className="text-base font-medium text-accent hover:text-accent/80 transition-colors border-b border-transparent hover:border-accent"
                    >
                        See the flow
                    </Link>
                </div>
            </div>
        </section>
    );
}
