"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CaseStudyCardProps = {
  image: StaticImageData | string;
  title: string;
  description: string;
  href: string;
};

export default function CaseStudyCard({
  image,
  title,
  description,
  href,
}: CaseStudyCardProps) {
  return (
    <div className="space-y-4 sm:space-y-7 flex flex-col items-center sm:items-start">
      {/* Image */}
      <Link href={href} className="w-full max-w-110 mx-auto group">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >

          <Image
            src={image}
            alt={title}
            width={440}
            height={405}
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      </Link>

      {/* Content */}
      <div className="text-center sm:text-start">
        <motion.h5
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link href={href}>
            {title}
          </Link>
        </motion.h5>

        <motion.p
          className="mt-2 sm:mt-3.5 line-clamp-2 text-[#C1C1C1]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Button */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full bg-[#353535] hover:bg-[linear-gradient(90.45deg,#00D1FF_-368.58%,#FF09F4_40.43%,#2D7FFF_174.52%)] transition-all duration-500 py-1.5 pl-5 pr-2.5 text-sm font-semibold text-white sm:text-base sm:leading-5 group jami-link jami-link--arrowed"
        >
          <span>Learn More</span>
            <svg
            className="arrow-icon-case size-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <g
              fill="#5B5B5B"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeMiterlimit="10"
            >
              <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12" />
              <path
                className="arrow-icon--arrow"
                d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
              />
            </g>
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}