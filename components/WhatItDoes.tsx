export function WhatItDoes() {
    const features = [
        "Ingests decision-time signals from internal and third-party systems",
        "Produces features, scores, and policy outcomes in one flow",
        "Executes approvals, declines, and step-ups in real time",
        "Creates an immutable decision record for audit and review",
    ];

    return (
        <section id="what-it-does" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12">
                    What Sentinel does
                </h2>
                <div className="max-w-3xl">
                    <ul className="space-y-6">
                        {features.map((item, index) => (
                            <li key={index} className="flex items-start gap-4 text-lg text-charcoal/80">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
