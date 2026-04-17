"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import GradientButton from "../button/GradientButton";
import SystemCard from "./systemCard";
import ourCoreBg from "../../assets/img/our-core-bg.png";
import learnImage from "../../assets/img/learn.png";
import Image from "next/image";

export default function OurCore() {
  return (
    <section id="systems" className="py-7 md:py-14 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-5 pb-6 md:pb-12">
          
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Core Systems
          </motion.h2>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <GradientButton
              text="Book for consultation"
              icon={<Headphones className="h-4 w-4" />}
            />
          </motion.div>
        </div>

        <div className="relative flex flex-col gap-5">

          <div className="absolute top-[65%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-80 sm:w-130 md:w-136 h-75 sm:h-130 md:h-135 opacity-30 blur-[112px] sm:rotate-30 z-20">
              <div className="w-full max-w-106 h-105 bg-[#FCE172] absolute top-0 right-0 mix-blend-saturation rounded-full"></div>
              <div className="w-full max-w-106 h-105 bg-[#FF09F4] absolute bottom-0 left-0 mix-blend-saturation rounded-full"></div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SystemCard
                badge="System 1"
                title="Agentic Institutional Intelligence"
                description="An integrated operational intelligence platform designed for real-time institutional decision support."
                capabilitiesTitle="Capabilities"
                capabilities={[
                  "Operational intelligence assistant",
                  "Reporting intelligence interface",
                  "Workflow intelligence models",
                  "Decision support models",
                  "Document management integration",
                  "ERP and operational database connectivity",
                ]}
                impactTitle="Impact"
                impact={[
                  "50–70% faster executive decision preparation",
                  "60–80% faster information retrieval",
                  "70–90% reduction in manual data retrieval",
                  "Up to 60% improved institutional responsiveness",
                ]}
              />
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SystemCard
                badge="System 2"
                title="Institutional Policy-Linked Reporting"
                description="A structured reporting infrastructure that connects reports directly to institutional policies."
                capabilitiesTitle="Key Features"
                capabilities={[
                  "Automated report generation",
                  "Policy and clause linking",
                  "Intelligent compliance tracking",
                  "Structured document workflows",
                ]}
                impactTitle="Impact"
                impact={[
                  "80% faster report preparation",
                  "85% reduction in manual reporting work",
                  `Up to <span class="text-white">15× faster report generation</span>`,
                ]}
              />
            </motion.div>
          </div>

          {/* IMPACT BOX */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-[10px] p-px"
            style={{
              background:
                "linear-gradient(45deg, #FFFFFF 14.29%, rgba(255, 255, 255, 0.2) 32.14%, rgba(230, 242, 255, 0.1) 50%, rgba(255, 255, 255, 0.15) 67.86%, rgba(255, 255, 255, 0.6) 85.71%)",
            }}
          >
            <div className="rounded-[10px] bg-[#222222]">
              <div className="p-5 text-white lg:p-10">
                <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
                  
                  {/* TEXT */}
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full sm:max-w-147"
                  >
                    <h2>Institutional Impact</h2>
                    <h3 className="mt-7.5 text-xl font-bold sm:text-2xl md:leading-10 lg:text-[30px]">
                      Operational Transformation
                    </h3>
                    <p className="text-base font-normal text-[#C1C1C1] sm:text-lg md:leading-8 lg:text-xl">
                      Manual reporting → Automated reporting systems Fragmented
                      knowledge → Integrated intelligence systems Delayed decisions →
                      Real-time operational insight
                    </p>
                    <h5 className="mt-7.5">Results</h5>
                    <ul className="mt-5 list-disc pl-9 text-base text-[#C1C1C1] lg:text-[22px] lg:leading-8">
                      <li>Reduced operational delays</li>
                      <li>Increased reporting accuracy</li>
                      <li>Improved institutional visibility</li>
                      <li>Faster executive decision cycles</li>
                    </ul>
                  </motion.div>

                  {/* IMAGE */}
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="sm:max-w-151.25 group"
                  >
                    <Image
                      src={learnImage}
                      alt="learnImage"
                      width={605}
                      height={450}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}