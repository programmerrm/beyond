"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "What does Beyond Code do?",
        answer:
            "Beyond Code designs and deploys operational intelligence systems that integrate AI, automation, and data infrastructure to improve execution, reporting, and decision-making within institutional environments.",
    },
    {
        question: "How are your systems different from traditional AI tools?",
        answer:
            "Our systems are built around your workflows and reporting structure, not just prompts. They automate execution, provide visibility, and support measurable operational outcomes.",
    },
    {
        question: "Can your systems integrate with our existing platforms?",
        answer:
            "Yes, we can integrate with CRMs, ERPs, internal dashboards, APIs, and cloud platforms depending on your infrastructure.",
    },
    {
        question: "How long does implementation take?",
        answer:
            "Most pilot deployments take 2–6 weeks depending on complexity, data readiness, and stakeholder alignment.",
    },
    {
        question: "Do you offer a pilot or trial before full deployment?",
        answer:
            "Yes — we typically offer a pilot engagement before full deployment. This allows us to validate workflows, and align the system with your team’s real-world processes before scaling to a full implementation.",
    },
    {
        question: "How secure are your systems?",
        answer:
            "Security is built into every layer of our systems. We follow best practices for data encryption, access control, secure integrations and reliable.",
    },
    {
        question: "Will we retain ownership of our data and systems?",
        answer:
            "Yes — you retain full ownership of your data, systems, and all operational intelligence assets at every stage of deployment.",
    },
    {
        question: "What kind of results can we expect?",
        answer:
            "You can expect streamlined workflows, stronger operational visibility, faster decision-making, and measurable improvements in efficiency, accuracy, and execution outcomes.",
    },
];

function FAQItem({
    faq,
    isOpen,
    onClick,
}: {
    faq: { question: string; answer: string };
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="rounded-2xl bg-white/5 px-5 sm:px-6 sm:pr-5 transition-all duration-300 ">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between gap-4 py-4 text-left sm:py-6 cursor-pointer"
            >
                <h6 className="text-base sm:text-lg font-bold text-white/80 sm:leading-7 ">
                    {faq.question}
                </h6>

                <span className="flex items-center justify-center rounded-full text-white shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 sm:pb-6 text-sm sm:text-base leading-7 text-white/40">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-[#050505] pb-7 sm:pb-14 pt-14 sm:pt-27.5">
            <div className="container">
                <div className="mx-auto max-w-190">

                    <motion.h2
                        className="mb-6 sm:mb-10 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Frequently Asked Questions
                    </motion.h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <FAQItem
                                    faq={faq}
                                    isOpen={openIndex === index}
                                    onClick={() => toggleFAQ(index)}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
