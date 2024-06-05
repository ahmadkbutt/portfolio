import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Gujrat",
    location: "Punjab, Pakistan",
    description:
      "I graduated in 2019 and started working as a Site Administrator during sophomore year",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Javascript Developer",
    location: "Karigar Web Solutions",
    description:
      "I worked as a Javascript developer for 1 year working in various multi-dimensional projects. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "DMechs - Webwrite",
    description:
        "I worked as a full stack developer expanding my arsenal to different technologies",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Javascript Developer",
    location: "Arbisoft",
    description:
      "Started working in Automation Testing domain while getting exposure in Quality Assurance Side of SDLC",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Team Lead",
    location: "Abhi Pvt Ltd",
    description:
        "Leading a team of excellent resources, making combined efforts to deliver optimized solutions",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "AWS",
  "Docker",
  "MongoDB",
  "Redux",
  "Serverless",
  "Nest.js",
  "Express",
  "PostgreSQL",
  "Python",
] as const;
