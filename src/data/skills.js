import {
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { SiFirebase, SiMongodb } from "react-icons/si";

export const skills = [
  {
    name: "React",
    icon: FaReact,
    category: "Frontend",
    iconClass: "text-[#61DAFB]",
    hoverClass: "hover:border-cyan-300/35 hover:shadow-cyan-400/15",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    category: "Frontend",
    iconClass: "text-[#F7DF1E]",
    hoverClass: "hover:border-yellow-300/35 hover:shadow-yellow-400/15",
  },
  {
    name: "Java",
    icon: FaJava,
    category: "Language",
    iconClass: "text-[#F26B3A]",
    hoverClass: "hover:border-orange-300/35 hover:shadow-orange-400/15",
  },
  {
    name: "Python",
    icon: FaPython,
    category: "Language",
    iconClass: "text-[#4B8BBE]",
    hoverClass: "hover:border-blue-300/35 hover:shadow-blue-400/15",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    category: "Backend",
    iconClass: "text-[#68A063]",
    hoverClass: "hover:border-green-300/35 hover:shadow-green-400/15",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    iconClass: "text-[#47A248]",
    hoverClass: "hover:border-emerald-300/35 hover:shadow-emerald-400/15",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    category: "Backend",
    iconClass: "text-[#FFCA28]",
    hoverClass: "hover:border-amber-300/35 hover:shadow-amber-400/15",
  },
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
    secondaryIcon: FaGithub,
    category: "Tools",
    iconClass: "text-[#F05032]",
    secondaryIconClass: "text-ink",
    hoverClass: "hover:border-orange-300/35 hover:shadow-orange-400/15",
  },
];
