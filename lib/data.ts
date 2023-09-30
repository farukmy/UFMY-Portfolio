import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cement from "@/public/cement.jpg";
import ufmy from "@/public/ufmy.png";
import donut from "@/public/Donut.jpg";

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
    title: "Coursera",
    location: "Sokoto",
    description: "Cloud Computing.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Graduated bootcamp",
    location: "Lagos Hackerspace",
    description: "Studied fullstack javascript .",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Sokoto",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Next and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ECommerce",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "MongoDB", "Express", "Node"],
    imageUrl: ufmy,
  },
  {
    title: "Donut",
    description:
      "Worked on this wonderful donut using Blender. Took me a while but here we are!",
    tags: ["Blender"],
    imageUrl: donut,
  },
  {
    title: "In Progress",
    description: "Currntly working on it.",
    tags: [],
    imageUrl: cement,
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
  "Tailwind",

  "MongoDB",
  "Redux",

  "Express",

  "Python",
  "Blender",
  "Motion graphics",

  "Framer Motion",
] as const;
