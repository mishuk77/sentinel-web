export default function Privacy() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-24">
            <h1 className="text-4xl font-bold text-charcoal mb-12">Privacy Policy</h1>

            <div className="space-y-12 text-charcoal/80 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-semibold text-charcoal mb-4">Overview</h2>
                    <p>
                        Sentinel Decision Systems, Inc. ("Sentinel") respects your privacy. This policy describes how we handle information.
                        Currently, this website does not collect personal data from visitors.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-charcoal mb-4">Data we collect</h2>
                    <p>
                        We adhere to strict data minimization principles. We do not use cookies for tracking or analytics on this marketing site.
                        If you contact us via email, we will store your contact information solely for the purpose of communicating with you.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-charcoal mb-4">How we use data</h2>
                    <p>
                        Data provided by you (e.g., via email) is used only to respond to inquiries and discuss potential partnerships.
                        We do not sell or share your data with third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-charcoal mb-4">Contact</h2>
                    <p>
                        For privacy-related inquiries, please contact us at: <a href="mailto:hello@sentineldecisions.com" className="text-accent hover:underline">hello@sentineldecisions.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
