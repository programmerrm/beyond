import ContactSection from "@/components/contact-section/contactSection";
import FAQSection from "@/components/faq-section/faqSection";
import LeadershipSection from "@/components/leadership/leadership";

export default function AboutUs() {
    return (
        <>
            <ContactSection />
            <LeadershipSection 
                showButton={false}
            />
            <FAQSection />
        </>
    );
}