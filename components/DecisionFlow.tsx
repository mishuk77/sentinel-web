export function DecisionFlow() {
    const steps = [
        "Application",
        "Signals & Features",
        "Models & Scores",
        "Policy & Rules",
        "Decision & Action",
        "Record & Visibility",
    ];

    return (
        <section id="flow" className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-16">
                    The decision flow
                </h2>
                <div className="relative">
                    {/* Connector Line - Desktop */}
                    <div className="hidden md:block absolute top-[22px] left-0 right-0 h-0.5 bg-gray-200 z-0" />

                    {/* Connector Line - Mobile */}
                    <div className="md:hidden absolute left-[22px] top-0 bottom-0 w-0.5 bg-gray-200 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex md:flex-col items-center md:text-center gap-6 md:gap-6">
                                <div className="w-12 h-12 rounded-full bg-white border-2 border-accent flex items-center justify-center shrink-0">
                                    <div className="w-3 h-3 rounded-full bg-accent" />
                                </div>
                                <span className="text-base font-medium text-charcoal">
                                    {step}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
