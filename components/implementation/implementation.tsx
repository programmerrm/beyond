"use client";

import { motion } from "framer-motion";
import ProcessCard from "./processCard";
import GradienArrowtButton from "../button/gradientArrowButton";

export default function Implementation() {
  const processes = [
    {
      number: 1,
      title: "Diagnose",
      description:
        "Assess workflows, reporting structures, and operational gaps.",
    },
    {
      number: 2,
      title: "Structure",
      description: "Design governance logic and system architecture.",
    },
    {
      number: 3,
      title: "Engineer",
      description: "Develop AI systems and intelligence infrastructure.",
    },
    {
      number: 4,
      title: "Deploy",
      description:
        "Deploy and configure systems within institutional environments.",
    },
  ];
  return (
    <section id="process">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-between flex-wrap gap-5 pb-6 md:pb-12"
        >
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2>Implementation Process</h2>
            <p className="text-base sm:text-xl sm:leading-7 font-normal text-[#C1C1C1] mt-3">
              Beyond Code follows a 4-stage deployment methodology.
            </p>
          </motion.div>

          {/* RIGHT BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GradienArrowtButton
              text="Learn More"
            />
          </motion.div>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
          {processes.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProcessCard
                number={item.number}
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


