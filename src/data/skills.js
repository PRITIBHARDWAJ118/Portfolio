import {
  FaBug,
  FaAws,
  FaClock,
  FaCode,
  FaComments,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLightbulb,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaUsers,
} from "react-icons/fa6";
import {
  SiExpress,
  SiFirebase,
  SiJson,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

export const skillCategories = [
  {
    category: "PROGRAMMING LANGUAGES",
    skills: [
      { name: "Java", icon: FaJava, iconClass: "text-[#f89820]" },
      { name: "JavaScript", icon: FaJs, iconClass: "text-[#f7df1e]" },
      { name: "SQL", icon: FaDatabase, iconClass: "text-[#4479a1]" },
      { name: "Python", icon: FaPython, iconClass: "text-[#3776ab]" },
    ],
  },
  {
    category: "FRONTEND TECHNOLOGIES",
    skills: [
      { name: "HTML5", icon: FaHtml5, iconClass: "text-[#e34f26]" },
      { name: "CSS3", icon: FaCss3Alt, iconClass: "text-[#1572b6]" },
      { name: "React.js", icon: FaReact, iconClass: "text-[#61dafb]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, iconClass: "text-[#38bdf8]" },
    ],
  },
  {
    category: "BACKEND TECHNOLOGIES",
    skills: [
      { name: "Node.js", icon: FaNodeJs, iconClass: "text-[#5fa04e]" },
      { name: "Express.js", icon: SiExpress, iconClass: "text-[#252321]" },
      { name: "REST APIs", icon: FaCode, iconClass: "text-[#CC3A63]" },
      { name: "JSON", icon: SiJson, iconClass: "text-[#292929]" },
    ],
  },
  {
    category: "DATABASES",
    skills: [
      { name: "MySQL", icon: SiMysql, iconClass: "text-[#4479a1]" },
      { name: "MongoDB", icon: SiMongodb, iconClass: "text-[#47a248]" },
      { name: "Firebase Realtime Database", icon: SiFirebase, iconClass: "text-[#ffca28]" },
    ],
  },
  {
    category: "CLOUD & TOOLS",
    skills: [
      { name: "Firebase", icon: SiFirebase, iconClass: "text-[#ffca28]" },
      { name: "AWS (Fundamentals)", icon: FaAws, iconClass: "text-[#ff9900]" },
      { name: "Git", icon: FaGitAlt, iconClass: "text-[#f05032]" },
      { name: "GitHub", icon: FaGithub, iconClass: "text-[#252321]" },
      { name: "Linux", icon: FaLinux, iconClass: "text-[#252321]" },
      { name: "VS Code", icon: FaCode, iconClass: "text-[#007acc]" },
    ],
  },
  {
    category: "COMPUTER SCIENCE FUNDAMENTALS",
    skills: [
      { name: "Data Structures and Algorithms", icon: FaCode, iconClass: "text-[#CC3A63]" },
      { name: "Object-Oriented Programming", icon: FaCode, iconClass: "text-[#CC3A63]" },
      { name: "DBMS", icon: FaDatabase, iconClass: "text-[#4479a1]" },
      { name: "Operating Systems", icon: FaLinux, iconClass: "text-[#252321]" },
      { name: "Computer Networks", icon: FaCode, iconClass: "text-[#A2AB73]" },
    ],
  },
  {
    category: "SOFTWARE PRACTICES",
    skills: [
      { name: "Object-Oriented Design", icon: FaCode, iconClass: "text-[#CC3A63]" },
      { name: "Debugging", icon: FaBug, iconClass: "text-[#CC3A63]" },
      { name: "Testing", icon: FaCode, iconClass: "text-[#A2AB73]" },
      { name: "Agile Methodology", icon: FaUsers, iconClass: "text-[#A2AB73]" },
    ],
  },
  {
    category: "SOFT SKILLS",
    isSoftSkills: true,
    skills: [
      { name: "Communication", icon: FaComments },
      { name: "Design Thinking", icon: FaLightbulb },
      { name: "Teamwork and Collaboration", icon: FaUsers },
      { name: "Time Management", icon: FaClock },
      { name: "Leadership and Initiative", icon: FaLightbulb },
      { name: "Adaptability and Learning Agility", icon: FaCode },
    ],
  },
];

// Retained for the existing Top Skills component; all records still derive from the category data above.
const topSkillNames = new Set([
  "React.js",
  "JavaScript",
  "Java",
  "Python",
  "Node.js",
  "MongoDB",
  "Firebase",
  "Git",
]);

export const skills = skillCategories
  .flatMap(({ skills: categorySkills }) => categorySkills)
  .filter((skill) => topSkillNames.has(skill.name));
