"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Headphones, Menu, X } from "lucide-react";
import heroBgTop from "../../assets/img/hero-bg-top.png";
import heroBg from "../../assets/img/hero-bg.jpg";
import Link from "next/link";
import FeatureCard from "../card/featureCard";
import Button from "../button/button";
import GradientButton from "../button/GradientButton";
import Header from "../header/header";
export default function HeroSection() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navItems = [
        { label: 'About', href: '/about' },
        { label: 'Why Us', href: '/why-us' },
        { label: 'Systems', href: '/systems' },
        { label: 'Services', href: '/services' },
        { label: 'Technology', href: '/technology' },
        { label: 'Process', href: '/process' },
        { label: 'Case Study', href: '/case-study' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <section className="">
            {/* Background image */}

            <div
                className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-40"
                style={{ backgroundImage: `url(${heroBg.src})` }}
            >
                <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black"></div>
                <div className="w-12 h-12 bg-[linear-gradient(154.14deg,#FCE172_0.79%,#000000_86.61%)] rounded-full absolute top-80 md:top-153.75 left-5 md:left-107.5"></div>
                <div className="w-15.75 h-15.75 bg-[linear-gradient(154.14deg,#664DFF_0.79%,#000000_86.61%)] rounded-full absolute top-80 md:top-115 right-5 md:right-117.5"></div>
            </div>

            <div className="">
                <div className="absolute top-0 left-0 right-0 h-105 bg-cover bg-top bg-no-repeat"
                    style={{ backgroundImage: `url(${heroBgTop.src})` }}>
                </div>

                {/* HEADER SECTION */}
                <Header />

                {/* HEADER SECTION END */}

                {/* Hero Content */}
                <div className="container overflow-hidden">
                    <div className="mx-auto max-w-245.5 pt-8 md:pt-16 xl:pt-27.25 text-center relative z-20">

                        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.375rem] leading-10 sm:leading-14 md:leading-18 lg:leading-21 tracking-[-0.01em] font-bold"
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            Operational <span className="bg-linear-to-r from-[#fa9df5] to-[#FF09F4] bg-clip-text text-transparent"> Intelligence </span> and <span className="bg-linear-to-r from-[#FCE172] to-[#ffa4fa] bg-clip-text text-transparent"> AI Systems </span>for Institutional Environments
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-lg sm:text-xl leading-7.5 font-normal text-[#B2B2B2] mt-7 max-w-224.5"
                        >
                            Enhancing execution, reporting, and decision-making through structured intelligence systems - delivering clarity, control, and measurable operational impact.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="mt-10 flex flex-wrap items-center justify-center gap-4"
                        >
                            <div>
                                <GradientButton
                                    text="Request a Consultation"
                                    icon={<Headphones className="h-4 w-4" />}
                                />
                            </div>

                            <Button
                                text="Explore Our Systems"
                                icon={<ArrowRight className="h-4 w-4" />}
                                href="#"
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="container">
                    <motion.div
                        className="grid md:grid-cols-3 gap-6 mt-16 lg:mt-32 lg:px-27.5"
                    >
                        {[
                            "Reduce preparation time by up to 70%",
                            "Reduce manual reporting by 85%",
                            "Enable real-time operational intelligence",
                        ].map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 80 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.2, duration: 0.7 }}
                            >
                                <FeatureCard text={text} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

