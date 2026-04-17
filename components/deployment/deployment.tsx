"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import deploymentImage from "../../assets/img/deployment.png";
export default function DeploymentSection() {
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.15,
        ease: "easeOut" as const,
      },
    }),
  };
  return (
    <section className=" text-white py-6 sm:py-8 lg:py-14">
      <div className="container ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="max-w-160 order-2 md:order-1">

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Deployment Models
              </motion.h2>
            </div>

            <div className="divide-y divide-[#4A4A4A] space-y-3 sm:space-y-5 mt-5 sm:mt-8 md:mt-16">

              <motion.div
                className="pb-3 sm:pb-5 last:pb-0"
                custom={0}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={item}
              >
                <h5>Private Cloud Deployment</h5>
                <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">
                  Systems deployed within entity-controlled cloud environments.
                </p>
              </motion.div>

              <motion.div
                className="pb-3 sm:pb-5 last:pb-0"
                custom={1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={item}
              >
                <h5>On-Premise Deployment</h5>
                <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">
                  Installed within institutional servers and infrastructure.
                </p>
              </motion.div>

              <motion.div
                className="pb-3 sm:pb-5 last:pb-0"
                custom={2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={item}
              >
                <h5>Hybrid Deployment</h5>
                <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">
                  Combination of institutional infrastructure and cloud environments.
                </p>
              </motion.div>

            </div>
          </div>
          <motion.div
            className="relative max-w-127 order-1 md:order-2 group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut" as const,
            }}
          >
            <Image
              src={deploymentImage}
              alt="deployment Image"
              width={508}
              height={473}
              className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


