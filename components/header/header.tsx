"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { Menu, X, Headphones, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import GradientButton from "../button/GradientButton";
import WithoutContentButton from "../button/withoutContentButton";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const pathname = usePathname();

    const navItems = [
        { label: "About", href: "/#about", target: "#about" },
        { label: "Why Us", href: "/#why-us", target: "#why-us" },
        { label: "Systems", href: "/#systems", target: "#systems" },
        { label: "Services", href: "/#services", target: "#services" },
        { label: "Technology", href: "/#technology", target: "#technology" },
        { label: "Process", href: "/#process", target: "#process" },
        { label: "Case Study", href: "/case-study", target: "#case-study" },
        { label: "Contact", href: "/contact-us", target: "#contact-us" },
    ];

    useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;

        setScrolled(scrollY > 50);

        // ❌ top এ থাকলে active reset
        if (scrollY < 100) {
            setActiveSection("");
            return;
        }

        let current = "";

        navItems.forEach((item) => {
            const id = item.target.replace("#", "");
            const el = document.getElementById(id);

            if (!el) return;

            const rect = el.getBoundingClientRect();

            if (
                rect.top <= window.innerHeight / 2 &&
                rect.bottom >= window.innerHeight / 2
            ) {
                current = id;
            }
        });

        if (current) {
            setActiveSection(current);
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
}, []);

    // 🔥 SMOOTH SCROLL WITH OFFSET
    const smoothScroll = (e: MouseEvent<HTMLElement>, id: string) => {
        if (id.startsWith("/#")) {
            e.preventDefault();

            const sectionId = id.replace("/#", "");
            const section = document.getElementById(sectionId);

            if (!section) return;

            setActiveSection(sectionId);

            const offset = 120;

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
        <header
            className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
                scrolled
                    ? "bg-[#1A1A1A]/70 backdrop-blur-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto max-w-368 px-4 py-4 sm:py-6">

                {/* HEADER DESIGN (UNCHANGED) */}
                <div className="rounded-full bg-[#1A1A1A]/30">
                    <div
                        className="flex items-center justify-between px-6 sm:px-8 xl:px-10 gap-5 py-2 sm:py-4 backdrop-blur-[10px] rounded-full"
                        style={{
                            boxShadow:
                                "inset 0px 0px 5px rgba(242, 242, 242, 0.5), inset 0px 0px 0px 0px #999999, inset 2px 2px 1px -2px #B3B3B3, inset -2px -2px 1px -2px #B3B3B3, inset 3px 3px 0px -3px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        {/* LOGO */}
                        <Link href="/">
                            <h1 className="text-2xl sm:text-[1.938rem] leading-8 font-bold text-white">
                                BC.
                            </h1>
                        </Link>

                        {/* NAV */}
                        <nav className="hidden gap-5 text-sm text-white lg:flex flex-wrap">
                            {navItems.map((item) => {
                                const id = item.target.replace("#", "");

                                const isActive =
                                    item.href.startsWith("/#")
                                        ? activeSection === id
                                        : pathname === item.href;

                                return item.href ? (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`text-sm font-semibold transition xl:text-base xl:leading-6 hover:text-white/70 ${
                                            isActive
                                                ? "text-white/70"
                                                : "text-white"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <button
                                        key={item.label}
                                        onClick={(e) =>
                                            smoothScroll(e, item.target)
                                        }
                                        className={`text-sm font-semibold transition xl:text-base xl:leading-6 hover:text-white/70 ${
                                            isActive
                                                ? "text-white/70"
                                                : "text-white"
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                );
                            })}
                        </nav>

                        {/* RIGHT */}
                        <div className="flex items-center gap-4">

                            <div className="flex items-center gap-2.5">
                                <button className="text-sm font-semibold text-white">
                                    EN
                                </button>

                                <Globe className="h-4 sm:h-6 w-4 sm:w-6 text-white cursor-pointer" />

                                <button className="text-sm font-semibold text-white">
                                    AR
                                </button>
                            </div>

                            <div className="hidden xl:block">
                                <GradientButton
                                    text="Request a Consultation"
                                    icon={<Headphones className="h-4 w-4" />}
                                />
                            </div>

                            <div className="hidden lg:block xl:hidden">
                                <WithoutContentButton
                                    icon={<Headphones className="h-4 w-4" />}
                                />
                            </div>

                            <button
                                className="flex lg:hidden items-center justify-center p-2 rounded-full text-white hover:bg-white/10 transition"
                                onClick={() =>
                                    setMobileMenuOpen(!mobileMenuOpen)
                                }
                            >
                                {mobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {mobileMenuOpen && (
                    <nav className="lg:hidden mt-4 flex flex-col gap-3 rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl shadow-2xl">
                        {navItems.map((item) => {
                            const id = item.target.replace("#", "");

                            const isActive =
                                item.href.startsWith("/#")
                                    ? activeSection === id
                                    : pathname === item.href;

                            return item.href ? (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`transition hover:text-white/70 ${
                                        isActive
                                            ? "text-white/70"
                                            : "text-white"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <button
                                    key={item.label}
                                    onClick={(e) =>
                                        smoothScroll(e, item.target)
                                    }
                                    className={`text-left transition hover:text-white/70 ${
                                        isActive
                                            ? "text-white/70"
                                            : "text-white"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            );
                        })}

                        <GradientButton
                            text="Request a Consultation"
                            icon={<Headphones className="h-4 w-4" />}
                        />
                    </nav>
                )}
            </div>
        </header>
    );
}