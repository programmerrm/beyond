"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OurMissionImage from "../../assets/img/mission.png";

export default function OurMission() {
  return (
    <section id="about" className="bg-black py-16 text-white lg:py-32 overflow-hidden">
      <div className="container">
        <div className="mx-auto flex max-w-254.5 flex-col items-center justify-between gap-10 md:flex-row">
          
          {/* Image - bottom to top */}
          <motion.div
            className="relative max-w-117.25 group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={OurMissionImage}
              alt="Robot Hand"
              width={469}
              height={534}
              className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Content - bottom to top */}
          <motion.div
            className="max-w-120.25 space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Who We Are */}
            <div>
              <h2 className="mb-3 text-2xl font-bold leading-[44.8px] sm:mb-5 md:text-[32px]">
                Who We Are
              </h2>
              <p className="text-base font-normal leading-[25.2px] text-[#B2B2B2] sm:text-lg">
                Beyond Code is an operational intelligence company that develops
                <span className="font-bold">
                  {" "}
                  AI-powered institutional systems
                </span>{" "}
                designed to improve execution, reporting, and decision-making.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="mb-3 text-2xl font-bold leading-[44.8px] sm:mb-5 md:text-[32px]">
                Our Mission
              </h2>
              <p className="text-base font-normal leading-[25.2px] text-[#B2B2B2] sm:text-lg">
                To close the gap between{" "}
                <span className="font-bold">
                  AI adoption and operational readiness
                </span>{" "}
                by building systems that integrate directly into institutional
                workflows.
              </p>
            </div>

            {/* Our Approach */}
            <div>
              <h2 className="mb-3 text-2xl font-bold leading-[44.8px] sm:mb-5 md:text-[32px]">
                Our Approach
              </h2>
              <p className="text-base font-normal leading-[25.2px] text-[#B2B2B2] sm:text-lg">
                Systems are designed to align with:
              </p>
              <ul className="list-inside pl-3 list-disc text-base font-normal leading-[25.2px] text-[#B2B2B2] sm:text-lg">
                <li>Institutional governance structures</li>
                <li>Existing operational workflows</li>
                <li>Reporting frameworks</li>
                <li>Infrastructure environments</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}