"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../button/button";
import serviceImage1 from "../../assets/img/intelligence.svg";
import serviceImage2 from "../../assets/img/operational.svg";
import serviceImage3 from "../../assets/img/automation.svg";
import serviceImage4 from "../../assets/img/custom-intelligence.svg";
import ServiceCard from "./serviceCard";

export default function Service() {

    const services = [
    {
      image: serviceImage1,
      title: "Intelligence & Predictive Systems",
      description:
        "Powered by LLM and machine learning systems, predictive analytics, and organizational knowledge intelligence.",
    },
    {
      image: serviceImage2,
      title: "Operational Intelligence Systems",
      description:
        "From real-time monitoring to intelligent dashboards and operational data insights - built for complete operational control.",
    },
    {
      image: serviceImage3,
      title: `Automation </br> Systems`,
      description:
        "From automated reporting to workflow automation and AI-powered assistants — built to streamline and scale operations.",
    },
    {
      image: serviceImage4,
      title: "Custom Intelligence Development",
      description:
        "Agentic AI systems, autonomous operational intelligence platforms, and custom enterprise system development.",
    },
  ];
  return (
    <section id="services" className="py-7 md:py-14">
      <div className="container">
        
        <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex items-center justify-between flex-wrap gap-5 pb-6 md:pb-12"
    >
      {/* LEFT TEXT */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Services & Expertise
      </motion.h2>

      {/* RIGHT BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Button
          text="Contact us"
          icon={<ArrowRight className="h-4 w-4" />}
          href="/contact-us"
        />
      </motion.div>
    </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5 h-full">
      {services.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.15,
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ServiceCard
            image={item.image}
            title={item.title}
            description={item.description}
          />
        </motion.div>
      ))}
    </div>
      </div>
    </section>
  );
}




