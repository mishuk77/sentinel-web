"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
    firstName: string;
    lastName: string;
    jobTitle: string;
    company: string;
    email: string;
};

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setError("");

        // TODO: REPLACE THIS WITH YOUR WEB3FORMS ACCESS KEY
        const ACCESS_KEY = "5cf1ebb2-47d5-4e07-bc91-b29d341c3e60";

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    ...data,
                    subject: "New Sentinel Contact Request",
                }),
            });

            const result = await res.json();
            if (!result.success) {
                throw new Error(result.message || "Something went wrong");
            }

            setIsSuccess(true);
            reset();
        } catch (err) {
            setError("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-8 animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-charcoal transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {isSuccess ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-charcoal mb-2">Request Received</h3>
                        <p className="text-gray-600 mb-8">
                            Thank you for your interest in Sentinel. We will be in touch shortly.
                        </p>
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-charcoal text-white rounded font-medium hover:bg-charcoal/90 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <h2 className="text-2xl font-bold text-charcoal mb-6">Request a Conversation</h2>

                        <div className="space-y-1">
                            <label className="block text-sm font-semibold text-charcoal">
                                First Name: <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("firstName", { required: true })}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all placeholder:text-gray-400"
                                placeholder="Enter your first name"
                            />
                            {errors.firstName && <span className="text-xs text-red-500">First name is required</span>}
                        </div>

                        <div className="space-y-1">
                            <label className="block text-sm font-semibold text-charcoal">
                                Last Name: <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("lastName", { required: true })}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all placeholder:text-gray-400"
                                placeholder="Enter your last name"
                            />
                            {errors.lastName && <span className="text-xs text-red-500">Last name is required</span>}
                        </div>

                        <div className="space-y-1">
                            <label className="block text-sm font-semibold text-charcoal">
                                Job Title: <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("jobTitle", { required: true })}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all placeholder:text-gray-400"
                                placeholder="Enter your job title"
                            />
                            {errors.jobTitle && <span className="text-xs text-red-500">Job title is required</span>}
                        </div>

                        <div className="space-y-1">
                            <label className="block text-sm font-semibold text-charcoal">
                                Company: <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("company", { required: true })}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all placeholder:text-gray-400"
                                placeholder="Enter your company name"
                            />
                            {errors.company && <span className="text-xs text-red-500">Company is required</span>}
                        </div>

                        <div className="space-y-1">
                            <label className="block text-sm font-semibold text-charcoal">
                                Email Address: <span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                })}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all placeholder:text-gray-400"
                                placeholder="Enter your work email address"
                            />
                            {errors.email && <span className="text-xs text-red-500">Valid email is required</span>}
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 text-red-600 text-sm rounded">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 px-4 bg-charcoal text-white font-semibold rounded hover:bg-charcoal/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                        >
                            {isSubmitting ? "Sending..." : "Submit Request"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
