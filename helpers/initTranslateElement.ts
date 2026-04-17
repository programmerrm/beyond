export const InitTranslateElement = (id: string) => {
    if ((window as any).google?.translate?.TranslateElement) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = "";

        new (window as any).google.translate.TranslateElement(
            {
                pageLanguage: "bn",
                includedLanguages: "en,bn",
            },
            id
        );
    }
};