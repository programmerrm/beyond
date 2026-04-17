import CaseStudySection from "@/components/case-study/caseStudy";
import ConsultationSection from "@/components/consultation/consultationSection";
import DeliverableSection from "@/components/deliverables/deliverable";
import DeploymentSection from "@/components/deployment/deployment";
import FAQSection from "@/components/faq-section/faqSection";
import Footer from "@/components/footer/footerSection";
import HeroSection from "@/components/herosection/HeroSection";
import Implementation from "@/components/implementation/implementation";
import LeadershipSection from "@/components/leadership/leadership";
import OurCore from "@/components/our-core/OurCore";
import OurMission from "@/components/our-mission/OurMission";
import SecuritySection from "@/components/security-wonership/security";
import Service from "@/components/services/service";
import Technology from "@/components/technology/technology";
import WhyBeyond from "@/components/why-beyond/WhyBeyond";




export default function HomePage() {
  return (
    <main className=" scroll-smooth bg-[#050505]">

      <HeroSection />
      <OurMission />
      <WhyBeyond />
      <OurCore />
      <Service />
      <Technology />
      <DeliverableSection />
      <Implementation />
      <DeploymentSection />
      <SecuritySection />
      <LeadershipSection />
      <CaseStudySection />
      <FAQSection />
      <ConsultationSection />
      <Footer />
      

    </main>
  );
}