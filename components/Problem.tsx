export function Problem() {
    const problems = [
        "Credit decisions span data, models, rules, and vendors",
        "Each step lives in a different system",
        "Decisions are assembled through fragile glue code",
        "When something goes wrong, no system can explain why",
    ];

    return (
        <section id="problem" className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 max-w-2xl">
                    The problem isn’t prediction — it’s orchestration
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <ul className="space-y-4">
                        {problems.map((item, index) => (
                            <li key={index} className="flex items-start gap-4 text-lg text-charcoal/80">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center">
                        <p className="text-xl md:text-2xl font-medium text-charcoal italic leading-relaxed">
                            “Teams reconstruct decisions after the fact, exactly when the stakes are highest.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
