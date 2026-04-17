"use client";

import { motion } from "framer-motion";
import CaseStudyCard from "./caseStudyCard";
import { CaseStudyData } from "@/data/caseStudy";
import GradienArrowtButton from "../button/gradientArrowButton";

export default function CaseStudySection() {
  const caseStudyData = CaseStudyData;
  const caseStudy = caseStudyData.slice(0, 3);
  return (
    <section className="py-7 lg:py-14 bg-[linear-gradient(180deg,#050505_0%,#252525_100%)]">
      <div className="container ">
        <div className="flex items-center justify-between flex-wrap gap-5 pb-6 md:pb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Pilot Program / Case Study
            </motion.h2>
            <motion.p
              className="mt-3 text-base font-normal text-[#C1C1C1] sm:text-xl sm:leading-7"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Institutions can start with a controlled pilot deployment to validate
            </motion.p>
          </div>
          <div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <GradienArrowtButton
                text="View All"
                href="/case-study"
              />
            </motion.div>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-y-10 gap-x-5">
          {caseStudy?.map((item: any) => {
            return (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <CaseStudyCard
                  image={item?.image}
                  title={item?.title}
                  description={item?.description}
                  href={`/case-study/${item?.slug}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
