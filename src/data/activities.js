import {
  FaHandsHelping,
  FaLaptopCode,
  FaLinux,
  FaMicrochip,
  FaRobot,
  FaStore,
} from "react-icons/fa";

export const activities = [
  {
    id: "ieee-r10",
    title: "IEEE R@10 Challenge",
    category: "technical",
    shortDescription: "FloodSense — a cloud-connected approach to flood monitoring.",
    description:
      "Developed FloodSense, a cloud-connected flood monitoring application designed to enable real-time monitoring of environmental parameters. We integrated ESP32 with Firebase Realtime Database to establish real-time data communication, cloud storage, and monitoring capabilities. The project was presented to the IEEE R@10 challenge panel, giving us an opportunity to showcase our solution and its practical application in environmental monitoring.",
    icon: FaMicrochip,
  },
  {
    id: "myosa-ieee",
    title: "MYOSA-IEEE",
    category: "technical",
    shortDescription: "An assistive smart-spectacles concept informed by AI and computer vision.",
    description:
      "Developed an AI-powered smart spectacles concept combining real-time object and face recognition with an alert system. The project brought together microcontrollers, sensors, and computer vision algorithms to create an intelligent assistive system capable of interpreting its surroundings and providing meaningful alerts.",
    icon: FaRobot,
  },
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025",
    category: "technical",
    shortDescription: "Exploring accessible, multilingual interaction through AI and LLMs.",
    description:
      "Contributed to the development of a language-agnostic chatbot focused on enabling multilingual interaction. We explored AI and LLM-based techniques to build a system capable of supporting multiple languages and creating more accessible, intelligent user interaction.",
    icon: FaLaptopCode,
  },
  {
    id: "linux-workshop",
    title: "Linux Workshop",
    category: "technical",
    shortDescription: "Hands-on experience working in a Linux-based development environment.",
    description:
      "Participated in a hands-on Linux Workshop conducted at SIT by Umesh Gaykawad Sir from Iravan Technologies. The workshop provided practical exposure to Linux and strengthened my understanding of working in a Linux-based development environment.",
    icon: FaLinux,
  },
  {
    id: "gofig",
    title: "GOFIG",
    category: "extracurricular",
    shortDescription: "Supporting events, coordination, and collaboration at SIT and COEP, Pune.",
    description:
      "Volunteered for GOFIG at SIT and COEP, Pune, contributing to event coordination and supporting various activities under mentorship. The experience helped me develop teamwork, communication, coordination, and responsibility beyond the technical side of college life.",
    icon: FaHandsHelping,
  },
  {
    id: "iskcon",
    title: "ISKCON",
    category: "extracurricular",
    shortDescription: "A gifting-store website prototype for a practical organisation need.",
    description:
      "Developed a prototype website for a gifting store at ISKCON, Katraj. This experience allowed me to apply my web development skills to a practical real-world requirement and think about how technology can support an organization's needs.",
    icon: FaStore,
  },
];
