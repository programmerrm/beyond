"use client";

import { Globe, } from "lucide-react";
import { useEffect, useState } from "react";

export const GoogleTranslate = () => {
    const [showTranslate, setShowTranslate] = useState(false);

    const toggleTranslate = () => {
        setShowTranslate((prev) => !prev);
    };


    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        (window as any).googleTranslateElementInit = () => {
            setTimeout(() => {
                new (window as any).google.translate.TranslateElement(
                    {
                        pageLanguage: "bn",
                        includedLanguages: "en,bn",
                        layout:
                            (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
                    },
                    "google_translate_element"
                );
            }, 300);
        };
    }, []);

    return (
        <div className="w-9 flex items-center justify-center relative">
            <Globe
                onClick={toggleTranslate}
                className="h-4 sm:h-6 w-4 sm:w-6 text-white cursor-pointer"
            />
            <div
                id="google_translate_element"
                className={`absolute top-10 right-0 bg-white text-black rounded shadow transition-all ${showTranslate ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />
        </div>
    );
};
