"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import consultationImage from "../../assets/img/consultation.png"

export default function ConsultationSection() {
  return (
    <section className="py-7 lg:py-14">
      <div className="container ">
        <div className="max-w-265 mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Book a free consultation
          </motion.h2>
          <div className="mt-8 sm:mt-12">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={consultationImage}
                alt="Consultation"
                width={1060}
                height={490}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



