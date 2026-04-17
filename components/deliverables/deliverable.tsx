"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import deliverableImage from "../../assets/img/deliverables.png"
export default function DeliverableSection() {
  const items = [
    {
      title: "AI Assistants",
      desc: "Secure internal assistants trained on institutional data.",
    },
    {
      title: "Operational Intelligence Systems",
      desc: "Real-time monitoring and execution tracking.",
    },
    {
      title: "Enterprise Reporting Infrastructure",
      desc: "Automated report generation and executive dashboards.",
    },
    {
      title: "Workflow Automation",
      desc: "Structured operational execution systems.",
    },
    {
      title: "Full System Deployment",
      desc: "Integration with existing infrastructure and institutional systems.",
    },
  ];
  return (
    <section className="bg-black text-white py-10 sm:py-16 lg:py-32">
      <div className="container ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:px-9">
          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative max-w-151.25"
          >
            <Image
              src={deliverableImage}
              alt="deliverable Image"
              width={605}
              height={677}
              className="object-cover rounded-lg"
            />
          </motion.div>

          {/* Right Content */}
          <div className="max-w-151.25">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Deliverables
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-base sm:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-2 sm:mt-3"
              >
                When institutions work with Beyond Code, they receive:
              </motion.p>
            </motion.div>

            <div className="divide-y divide-[#4A4A4A] space-y-3 sm:space-y-5 mt-10 sm:mt-16">
              {items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="pb-3 sm:pb-5 last:pb-0"
                >
                  <h5>{item.title}</h5>
                  <p className="text-sm sm:text-base md:text-xl font-normal sm:leading-7 text-[#C1C1C1] mt-1 sm:mt-2">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


