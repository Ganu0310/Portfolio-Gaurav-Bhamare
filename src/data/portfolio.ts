export const skills = {
  frontend: [
    { name: "React", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "JavaScript", level: 85 },
     { name: "TypeScript", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "Python", level: 90 },
  ],
  database: [
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 80 },
  ],
  tools: [
    { name: "Git", level: 80 },
    { name: "GitHub", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Postman", level: 75 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Jewandan Blood Donar",
    description: "This project is a platform that connects blood donors with recipients, ensuring a seamless way to find and donate blood. It aims to make the process of blood donation easier and more efficient.",
    tech: ["Handlebars", "JavaScript", "Node.js", "Express.js","MongoDB"],
    github: "https://github.com/Ganu0310/Jewandan-Blood-Donar",
    demo: "#",
  },
  {
    id: 2,
    title: "KrishiSmart",
    description: "KrishiSmart is an innovative agricultural management tool designed to assist farmers in optimizing their processes, improving yield, and making data-driven decisions. The platform combines modern technology with user-friendly interfaces to provide essential features tailored for the agricultural community.",
    tech: ["Typescript", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Ganu0310/KrishiSmart",
    demo: "#",
  },
  {
    id: 3,
    title: "Grovewurm",
    description: "Grovewurm is a classic snake-like game with a magical twist. Navigate your glowing caterpillar, eat enchanted food to grow longer, and achieve the highest score.",
    tech: ["Tyupescript", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Ganu0310/Grovewurm--Enhanced-Forest-Worm-Game",
    demo: "#",
  },
];

import pythonCert from "../assets/python_for_dsa.pdf";
import netCert from "../assets/bit and bites.pdf";
import awsCert from "../assets/aws.pdf";

export const certifications = [
  { title: "Python for Data Structures and Algorithms", org: "NPTEL", link: pythonCert },
  { title: "Bits and Bytes of Computer Networking", org: "Google", link: netCert },
  { title: "AWS Cloud Practitioner", org: "AWS", link: awsCert },
];

export const education = [
  {
    degree: "Diploma in Computer Engineering",
    status: "Completed 2025",
    institution: "MSBTE Institute",
  },
  {
    degree: "Bachelor's in Information Technology",
    status: "Pursuing",
    institution: "SPPU University",
  },
];

export const roles = [
  "Full Stack Developer",
  "Python Developer",
  "Data Enthusiast",
  "Aspiring Data Science Specialist",
];

export const contactInfo = {
  email: "bhamaregaurav165@gmail.com",
  phone: "8669075817",
  linkedin: "https://linkedin.com/in/gaurav-bhamare-b3733a2b4",
  github: "https://github.com/Ganu0310",
};
