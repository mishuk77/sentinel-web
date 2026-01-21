"use client";

import { useState } from "react";
import { ContactModal } from "./ContactModal";

export function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="py-24 bg-charcoal text-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
                    Contact
                </h2>
                <div className="flex flex-col items-start gap-8">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-charcoal bg-white rounded-md hover:bg-gray-100 transition-colors"
                    >
                        Email us
                    </button>
                    <p className="text-sm text-gray-400">
                        Based in the U.S. • Sentinel Decision Systems, Inc.
                    </p>
                </div>
            </div>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
