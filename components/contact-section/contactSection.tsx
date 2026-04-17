"use client";

import { motion } from "framer-motion";
import { ArrowRight, Headphones, Phone } from "lucide-react";
import Button from "../button/button";
import GradientButton from "../button/GradientButton";
import phoneIcon from "../../assets/img/phone.png";
import maileIcon from "../../assets/img/maile.png";
import locationIcon from "../../assets/img/location.png";
import instagramIcon from "../../assets/img/instagram.png";
import facebookIcon from "../../assets/img/facebook.png";
import tiktokIcon from "../../assets/img/tiktok.png";
import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-7 md:py-14">
      <div className="container">
        <div className="bg-[linear-gradient(270deg,#FCE172_0%,#9747FF_100%)] rounded-3xl p-0.5">
          <div className="bg-black rounded-3xl">
            <div className="flex flex-col md:flex-row gap-6 justify-between bg-[#222222]/50 rounded-3xl">
              {/* Left panel */}
              <div className="w-full md:max-w-82 flex flex-col justify-between rounded-[20px] pt-10 md:pt-21 md:pb-18 pl-5 lg:pl-14 text-white">
                <div>
                  {/* <p className="text-2xl sm:text-[28px] font-semibold sm:leading-9 text-white max-w-70.5"><span className="text-[#636363]">Book a consultation </span>unlock operational intelligence.</p> */}
                  <motion.p
                    className="text-2xl sm:text-[28px] font-semibold sm:leading-9 text-white max-w-70.5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <span className="text-[#636363]">Book a consultation </span>
                    unlock operational intelligence.
                  </motion.p>

                  {/* <div className="mt-7 inline-block">
                    <GradientButton 
                      text="Book for consulation"
                      icon={<Headphones className="h-4 w-4" />}
                    />
                  </div> */}
                  <motion.div
                    className="mt-7 inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <GradientButton
                      text="Book for consulation"
                      icon={<Headphones className="h-4 w-4" />}
                    />
                  </motion.div>
                </div>

                <div className="space-y-6 md:space-y-12 mt-6 md:mt-0">
                  <div>
                    {/* <h5 className="mb-3">Contact Details</h5> */}
                    <motion.h5
                      className="mb-3"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      Contact Details
                    </motion.h5>
                    {/* <div className="space-y-1 text-white/80">
                      <Link href="tel:+966000115666" className="flex items-center gap-3 text-white">
                        <div className="w-full max-w-4.75">
                          <Image
                            src={phoneIcon}
                            alt="phoneIcon"
                            width={19}
                            height={19}
                          />
                        </div>
                        +966 000 115666
                      </Link>
                      <Link href="mailto:info@beyondcode.ae" className="flex items-center gap-3 text-white">
                        <div className="w-full max-w-4.75">
                          <Image
                            src={maileIcon}
                            alt="maileIcon"
                            width={19}
                            height={19}
                          />
                        </div>
                        info@beyondcode.ae
                      </Link>
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-full max-w-4.75">
                          <Image
                            src={locationIcon}
                            alt="phoneIcon"
                            width={19}
                            height={19}
                          />
                        </div>
                        Abu Dhabi, UAE
                      </div>
                    </div> */}
                    <motion.div
                      className="space-y-1 text-white/80"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={{
                        hidden: {},
                        show: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {/* Phone */}
                      <motion.div
                        className="flex items-center gap-3 text-white"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <div className="w-full max-w-4.75">
                          <Image src={phoneIcon} alt="phoneIcon" width={19} height={19} />
                        </div>
                        <Link href="tel:+966000115666">+966 000 115666</Link>
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        className="flex items-center gap-3 text-white"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <div className="w-full max-w-4.75">
                          <Image src={maileIcon} alt="maileIcon" width={19} height={19} />
                        </div>
                        <Link href="mailto:info@beyondcode.ae">
                          info@beyondcode.ae
                        </Link>
                      </motion.div>

                      {/* Location */}
                      <motion.div
                        className="flex items-center gap-3 text-white"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <div className="w-full max-w-4.75">
                          <Image src={locationIcon} alt="locationIcon" width={19} height={19} />
                        </div>
                        Abu Dhabi, UAE
                      </motion.div>
                    </motion.div>
                  </div>

                  <div>
                    {/* <h3 className="mb-4 text-2xl font-semibold">Social links</h3> */}
                    <motion.h3
                      className="mb-4 text-2xl font-semibold"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      Social links
                    </motion.h3>
                    {/* <div className="flex gap-3">
                      <Link
                        href="https://instagram.com"
                        target="_blank"
                      >
                        <Image
                          src={instagramIcon}
                          alt="Instagram"
                          className="h-8 sm:h-12 w-8 sm:w-12 object-contain"
                        />
                      </Link>

                      <Link
                        href="https://facebook.com"
                        target="_blank"
                      >
                        <Image
                          src={facebookIcon}
                          alt="Facebook"
                          className="h-8 sm:h-12 w-8 sm:w-12 object-contain"
                        />
                      </Link>

                      <Link
                        href="https://tiktok.com"
                        target="_blank"
                      >
                        <Image
                          src={tiktokIcon}
                          alt="TikTok"
                          className="h-8 sm:h-12 w-8 sm:w-12 object-contain"
                        />
                      </Link>
                    </div> */}
                    <motion.div
                      className="flex gap-3"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={{
                        hidden: {},
                        show: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {[
                        { href: "https://instagram.com", icon: instagramIcon, alt: "Instagram" },
                        { href: "https://facebook.com", icon: facebookIcon, alt: "Facebook" },
                        { href: "https://tiktok.com", icon: tiktokIcon, alt: "TikTok" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                          }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          <Link href={item.href} target="_blank">
                            <Image
                              src={item.icon}
                              alt={item.alt}
                              className="h-8 sm:h-12 w-8 sm:w-12 object-contain"
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div className="py-4 lg:py-7 pr-4 lg:pr-7 w-full md:max-w-182.75">
                <div className="rounded-[18px] bg-[#1A1A1A]/50 px-5 lg:px-14.5 pt-5 lg:pt-14 pb-5 lg:pb-11 text-white">
                 
                  <motion.span
                    className="inline-block rounded-full border border-white px-4 py-2 sm:py-3 text-sm sm:text-lg font-normal sm:leading-6 text-white"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    Contact Us
                  </motion.span>
                  <motion.h2
                    className="mt-7"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    Let’s discuss how we can transform your operations with intelligent systems.
                  </motion.h2>

                  <motion.form
                    className="mt-12 space-y-6 lg:space-y-10"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.12,
                        },
                      },
                    }}
                  >
                    {[
                      {
                        label: "Full Name",
                        type: "text",
                        placeholder: "Full Name",
                      },
                      {
                        label: "Email",
                        type: "email",
                        placeholder: "you@example.com",
                      },
                    ].map((field, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          show: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <label className="mb-4 block text-sm sm:text-base leading-5 text-[#515151] font-semibold">
                          {field.label}
                        </label>

                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full text-sm sm:text-base text-[#BFBFBF] sm:leading-6 border-b border-white/20 bg-transparent pb-3 outline-none placeholder:text-[#BFBFBF]"
                        />
                      </motion.div>
                    ))}

                    {/* Message */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <label className="mb-4 block text-sm sm:text-base leading-5 text-[#515151] font-semibold">
                        Message
                      </label>

                      <textarea
                        rows={1}
                        placeholder="Tell more about your idea"
                        className="w-full text-sm sm:text-base text-[#BFBFBF] sm:leading-6 border-b border-white/20 bg-transparent pb-3 outline-none placeholder:text-[#BFBFBF]"
                      />
                    </motion.div>

                    {/* Button */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <Button
                        text="Send Message"
                        icon={<ArrowRight className="h-4 w-4" />}
                      />
                    </motion.div>
                  </motion.form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







