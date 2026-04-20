"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { MouseEvent } from "react";
import Image from "next/image";
import aiImage from "../../assets/img/ai.png"

export default function Footer() {

    // const smoothScroll = (
    //     e: MouseEvent<HTMLAnchorElement>,
    //     id: string
    // ) => {
    //     if (id.startsWith("/#")) {
    //         e.preventDefault();

    //         const section = document.getElementById(id.replace("/#", ""));
    //         if (section) {
    //             section.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //             });
    //         }
    //     }
    // };
    const smoothScroll = (
    e: MouseEvent<HTMLAnchorElement>,
    id: string
) => {
    if (id.startsWith("/#")) {
        e.preventDefault();

        const section = document.getElementById(id.replace("/#", ""));
        if (!section) return;

        const offset = 50;

        const top =
            section.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    }
};

    return (
        <section>
            <div className="container">
                <div className="lg:px-27.25 -mb-27.5 relative z-20">
                    <div className="bg-[linear-gradient(90deg,#FC00FF_0%,#00DBDE_100%)] py-5 lg:pl-12 px-5.5 rounded-2xl md:rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-5">
                        <div className="w-full md:max-w-lg">
                            
                            <motion.h3
                                className="text-2xl sm:text-3xl md:text-4xl md:leading-12 font-extrabold will-change-transform"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                Transform Your Operations with Intelligence
                            </motion.h3>

                            <motion.button
                                className="bg-black hover:bg-white transition-all duration-500 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold sm:leading-5 text-white hover:text-black flex items-center gap-5.5 cursor-pointer mt-4 sm:mt-7 group will-change-transform jami-link jami-link--arrowed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: 0.1 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <span>Book for Consultation</span>

                                
                                    <svg
                                    className="arrow-icon-con size-7 sm:size-8.25"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                >
                                    <g
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                    >
                                        {/* Circle */}
                                        <circle className="arrow-icon--circle-con" cx="16" cy="16" r="15.12" />

                                        {/* Centered icon */}
                                        <g transform="translate(9,8) scale(0.8)">
                                            <path
                                                fill="#000000"
                                                stroke="#000000"
                                                strokeWidth=".2"
                                                d="M9 2.15a7.6 7.6 0 0 1 7.6 7.6V15a.85.85 0 0 1-.85.85H13.5a2.35 2.35 0 0 1-2.35-2.35V12a2.35 2.35 0 0 1 2.35-2.35h1.398a5.899 5.899 0 0 0-11.795 0H4.5A2.35 2.35 0 0 1 6.85 12v1.5a2.35 2.35 0 0 1-2.35 2.35H2.25A.85.85 0 0 1 1.4 15V9.75A7.6 7.6 0 0 1 9 2.15Zm4.5 9.2a.65.65 0 0 0-.65.65v1.5a.65.65 0 0 0 .65.65h1.4v-2.8zm-10.4 2.8h1.4a.65.65 0 0 0 .65-.65V12a.65.65 0 0 0-.65-.65H3.1z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </motion.button>
                        </div>
                        <div className="w-full md:max-w-102.75 group">

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <Image
                                    src={aiImage}
                                    alt="AI"
                                    width={411}
                                    height={232}
                                    className="transition-transform duration-500 group-hover:scale-105"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-linear-to-b from-[#050505] from-15% to-[#561EAB]">
                <div className="container">
                    <div className="lg:px-27.25 pb-10 sm:pb-20 lg:pb-28.75 pt-35 sm:pt-50 lg:pt-61.5 flex flex-col sm:flex-row justify-between gap-5">
                        <div className="w-full max-w-69">

                            <motion.h4
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <Link href="/">Beyond Code</Link>
                            </motion.h4>

                            <motion.p
                                className="text-white/80 mt-3 sm:mt-5"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                AI operational intelligence infrastructure for institutional execution and reporting automation.
                            </motion.p>
                        </div>
                        <div className="flex w-full max-w-140.5 justify-between gap-5">
                            {/* Company */}
                            <div>

                                <motion.h6
                                    className="text-base font-bold leading-4.5 text-white md:text-lg"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    Company
                                </motion.h6>

                                <motion.ul
                                    className="mt-4 space-y-1.5 sm:space-y-3"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={{
                                        hidden: {},
                                        show: {
                                            transition: {
                                                staggerChildren: 0.1,
                                            },
                                        },
                                    }}
                                >
                                    {[
                                        { label: "About", href: "/#about", target: "#about" },
                                        { label: "Why Us", href: "/#why-us", target: "#why-us" },
                                        { label: "Systems", href: "/#systems", target: "#systems" },
                                        { label: "Services", href: "/#services", target: "#services" },
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                show: { opacity: 1, y: 0 },
                                            }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={(e) => smoothScroll(e, item.target)}
                                                className="text-sm transition-all hover:text-white/50 sm:text-[15px]"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>

                            {/* Use Cases */}
                            <div>

                                <motion.h6
                                    className="text-base font-bold leading-4.5 text-white md:text-lg"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    Use Cases
                                </motion.h6>


                                <motion.ul
                                    className="mt-4 space-y-1.5 sm:space-y-3"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={{
                                        hidden: {},
                                        show: {
                                            transition: {
                                                staggerChildren: 0.1,
                                            },
                                        },
                                    }}
                                >
                                    {[
                                        { label: "Technology", href: "/#technology", target: "#technology" },
                                        { label: "Process", href: "/#process", target: "#process" },
                                        { label: "Case Study", href: "/case-study", target: null },
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                show: { opacity: 1, y: 0 },
                                            }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={(e) => item.target && smoothScroll(e, item.target)}
                                                className="text-sm transition-all hover:text-white/50 sm:text-[15px]"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <motion.h6
                                    className="text-base font-bold leading-4.5 text-white md:text-lg"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    Resources
                                </motion.h6>


                                <motion.ul
                                    className="mt-4 space-y-1.5 sm:space-y-3"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={{
                                        hidden: {},
                                        show: {
                                            transition: {
                                                staggerChildren: 0.1,
                                            },
                                        },
                                    }}
                                >
                                    {[
                                        { label: "Leadership", href: "/#leadership", target: "#leadership" },
                                        { label: "FAQs", href: "/#faq", target: "#faq" },
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                show: { opacity: 1, y: 0 },
                                            }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={(e) => smoothScroll(e, item.target)}
                                                className="text-sm transition-all hover:text-white/50 sm:text-[15px]"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/30">
                    <div className="container">
                        <div className="lg:px-27.25 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3">

                            <motion.ul
                                className="flex flex-wrap items-center gap-6 sm:gap-10"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={{
                                    hidden: {},
                                    show: {
                                        transition: {
                                            staggerChildren: 0.1,
                                        },
                                    },
                                }}
                            >
                                {[
                                    { label: "Privacy Policy", href: "/privacy-policy" },
                                    { label: "Terms of Use", href: "/terms-of-use" },
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            show: { opacity: 1, y: 0 },
                                        }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="text-sm leading-3 transition-all hover:text-white/50"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.p
                                className="text-sm text-white font-light text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                © 2026 Beyond Code. All rights reserved.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}


