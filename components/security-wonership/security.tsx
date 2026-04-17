
"use client";

import { motion } from "framer-motion";
import ourCoreBg from "../../assets/img/our-core-bg.png";
import SecurityCard from "./securityCard";

export default function SecuritySection() {
    const item = {
        hidden: { opacity: 0, y: 50 },
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.2,
                ease: "easeOut" as const,
            },
        }),
    };
    return (
        <section className="py-7 md:py-14 ">
            <div className="container">
                <div className="sm:text-center">
                    <motion.h2
                        className="mb-5"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut" as const,
                        }}
                    >
                        Security & Infrastructure Ownership
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-xl font-normal sm:leading-7 text-[#C1C1C1] max-w-135.75 mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut" as const,
                        }}
                    >
                        Beyond Code systems are built using modern AI and cloud infrastructure.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-5 relative mt-6 sm:mt-12">
                    
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-80 sm:w-130 md:w-170 h-75 sm:h-130 md:h-170 opacity-30 blur-[90px] sm:rotate-40">
                        <div className="w-full max-w-134.25 h-133 bg-[#FCE172] absolute top-0 right-0 mix-blend-saturation rounded-full"></div>
                        <div className="w-full max-w-134.25 h-133 bg-[#FF09F4] absolute bottom-0 left-0 mix-blend-saturation rounded-full"></div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5 lg:px-34.75">

                        <motion.div
                            custom={0}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={item}
                        >
                            <SecurityCard
                                title="Beyond Code systems ensure:"
                                capabilities={[
                                    "Full institutional data ownership",
                                    "Infrastructure controlled by the entity",
                                    "Secure internal deployment environments",
                                    "Governance-aligned system architecture",
                                ]}
                            />
                        </motion.div>

                        <motion.div
                            custom={1}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={item}
                        >
                            <SecurityCard
                                title="Beyond Code provides:"
                                capabilities={[
                                    "Intelligence software",
                                    "Deployment support",
                                    "System configuration",
                                    "Maintenance and updates",
                                ]}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}







