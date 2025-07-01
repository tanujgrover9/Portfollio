"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiRedux,
} from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { name: "React.js", icon: SiReact, color: "text-sky-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "Redux", icon: SiRedux, color: "text-purple-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
];

export const TechStackSection = () => {
  return (
    <section
      id="tech"
      className="w-full py-20 mb-10  text-white"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-5xl mb-4">
          My <span className="text-purple-400">Tech Stack</span>
        </h2>
        <p className="mb-12 text-gray-400 max-w-xl mx-auto text-sm md:text-lg">
          I work with the latest frontend technologies to build scalable, clean, and engaging user experiences.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 place-items-center">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-center gap-3 bg-[#12122e] border border-white/10 rounded-xl px-6 py-8 w-full max-w-[180px] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:border-purple-400 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#2b2b51] to-[#1a1a3b] group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`text-3xl ${tech.color}`} />
                </div>
                <p className="text-sm font-medium text-gray-200">{tech.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
