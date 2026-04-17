"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../button/button";
import leadershipImage1 from "../../assets/img/ceo.png";
import leadershipImage2 from "../../assets/img/technology-officer.png";
import leadershipImage3 from "../../assets/img/operation-officer.png";
import leadershipBg from "../../assets/img/leadership-bg.png";
import LeadershipCard from "./leadershipCard";

type LeadershipSectionProps = {
  showButton?: boolean;
};

export default function LeadershipSection({

  showButton = true,
}: LeadershipSectionProps) {

  const items = [
    "Leadership at Beyond Code combines deep operational expertise with advanced AI and system engineering capabilities.",
    "The team focuses on building structured intelligence systems aligned with real institutional environments.",
  ];

  return (
    <section id="leadership" className="py-7 md:py-14 bg-[#050505]">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-10 relative">
          
          <div className="absolute -left-10 md:-left-40 top-40 w-80 md:w-134.25 h-80 md:h-115 opacity-30 blur-[90px]">
            <div className="w-full max-w-105 h-105 bg-[#05E388] absolute top-0 right-0 mix-blend-luminosity rounded-full"></div>
            <div className="w-full max-w-105 h-105 bg-[#00D1FF] absolute bottom-0 left-0 mix-blend-luminosity rounded-full"></div>
          </div>

          <div className="w-full lg:max-w-93 relative z-20">
            <motion.h2
              className="mb-3 sm:mb-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              Leadership
            </motion.h2>

            <div className="text-base sm:text-xl text-[#C1C1C1] font-normal sm:leading-7 space-y-4 sm:space-y-8 mb-5 sm:mb-10">

              {items.map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>


            {showButton && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <Button
                  text="Contact us"
                  icon={<ArrowRight className="h-4 w-4" />}
                  href="/contact-us"
                />
              </motion.div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-7.5 w-full lg:max-w-211.25">

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0 }}
            >
              <LeadershipCard
                image={leadershipImage1}
                name="Reem Aljneibi"
                role="Founder & CEO"
                designation="Operational Intelligence and Systems Strategist"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <LeadershipCard
                image={leadershipImage2}
                name="Mohammed Alyafaei"
                role="Chief Technology Officer"
                designation="Intelligent Systems and AI Infrastructure Architect"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <LeadershipCard
                image={leadershipImage3}
                name="Yasir Arafat"
                role="Chief Operation Officer"
                designation="Intelligent Systems and AI Infrastructure Architect"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}