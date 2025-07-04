"use client";

import { Marquee } from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/slider1.png",
  "/slider2.png",
  "/slider3.png",
  "/slider4.png",
  "/slider5.png",
  "/slider6.png",
  "/slider7.png",
];

const LogoCard = ({ img }: { img: string }) => {
  return (
    <figure className="relative w-32 h-16 mx-4 cursor-pointer overflow-hidden rounded-xl p-4">
      <div className="flex items-center justify-center h-full">
        <Image
          width={200}
          height={200}
          className="h-14 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
          alt="logo"
          src={img || "/placeholder.svg"}
        />
      </div>
    </figure>
  );
};

export function LogoMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12"
    >
      <Marquee pauseOnHover className="flex gap-x-10 [--duration:20s]">
        {logos.map((img, idx) => (
          <LogoCard key={idx} img={img} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#040128] via-[#040128]/50 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#040128] via-[#040128]/50 to-transparent"></div>
    </motion.div>
  );
}
