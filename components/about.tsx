"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className='font-medium'>
          <span className='italic'>
            A seasoned Full Stack Developer and Solutions Architect
          </span>
          , I bring extensive experience in
          <span className='italic'>
            software architecture and development
          </span>
          . Leading a team in high-growth fintech company in Lahore, Pakistan, played my role in driving regional expansion and significant revenue growth. Proficient in modern web frameworks, cloud services, and containerization technologies, I ensure the delivery of high-quality, scalable solutions. My expertise includes managing complex projects, optimizing cloud infrastructure, and fostering effective team collaboration, with a strong commitment to continuous learning and innovation in the tech industry.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
