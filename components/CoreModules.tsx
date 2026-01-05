export function CoreModules() {
    const modules = [
        {
            title: "Data ingestion & pipelines",
            description: "Capture decision-time signals with full context.",
        },
        {
            title: "Feature engineering",
            description: "Transform raw signals into decision-ready attributes.",
        },
        {
            title: "Model training & governance",
            description: "Control which models influence decisions and when.",
        },
        {
            title: "Real-time scoring",
            description: "Execute models deterministically under production constraints.",
        },
        {
            title: "Decision orchestration",
            description: "Apply policy, rules, and step-up logic to execute outcomes.",
        },
        {
            title: "Monitoring & dashboards",
            description: "Real-time visibility into decision behavior.",
        },
        {
            title: "Compliance & explainability",
            description: "Every decision is auditable and defensible.",
        },
    ];

    return (
        <section id="modules" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12">
                    Core platform modules
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((mod, index) => (
                        <div key={index} className="p-6 border border-gray-100 rounded-sm hover:border-accent/20 transition-colors">
                            <h3 className="text-lg font-semibold text-charcoal mb-2">
                                {mod.title}
                            </h3>
                            <p className="text-charcoal/70 text-base leading-relaxed">
                                {mod.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
