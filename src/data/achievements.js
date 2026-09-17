import { FaLaptopCode, FaLightbulb, FaMedal, FaTrophy } from "react-icons/fa6";

export const achievements = [
  {
    id: "pbl-second-prize",
    title: "PBL — 2nd Prize",
    description:
      'Got 2nd prize for our project "Crop Disease Detection at Edge" during the Industry Conclave.',
    category: "PBL",
    icon: FaTrophy,
  },
  {
    id: "college-merit-scholarship",
    title: "College Merit Scholarship",
    description:
      "Awarded the College Merit Scholarship for ranking in the Top 4 of the batch for four consecutive semesters.",
    category: "Merit",
    icon: FaMedal,
  },
  {
    id: "sih-2025-2024",
    title: "SIH 2025 & 2024",
    description: "Was in the top 50 team out of 150 to get selected at the college level.",
    category: "Smart India Hackathon",
    icon: FaLaptopCode,
  },
  {
    id: "crop-disease-detection-patent",
    title: "Project Under Patent",
    description: "My Crop Disease Detection using Edge Computing project is currently under patent.",
    category: "Project",
    icon: FaLightbulb,
  },
];
