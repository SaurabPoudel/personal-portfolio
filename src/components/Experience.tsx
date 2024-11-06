"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCode, FaLaptopCode } from "react-icons/fa";

interface Experience {
  type: "internship" | "hackathon" | "achievement";
  title: string;
  organization: string;
  duration: string;
  description: string[];
  technologies?: string[];
  achievement?: string;
}

const experiences: Experience[] = [
  {
    type: "internship",
    title: "React/Next.js Developer Intern",
    organization: "YantraCore",
    duration: "Feb 2023 - Jul 2023",
    description: [
      "Developed and maintained responsive web applications using React.js and Next.js",
      "Implemented modern UI components and integrated REST APIs",
      "Collaborated with senior developers on large-scale projects",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Styled Components",
      "Zustand",
    ],
  },
  //   {
  //     type: "hackathon",
  //     title: "Your Hackathon Name",
  //     organization: "Hackathon Organizer",
  //     duration: "48 hours | September 2023",
  //     description: [
  //       "Built a innovative solution for [problem statement]",
  //       "Led a team of 4 developers",
  //       "Implemented real-time features using WebSocket",
  //     ],
  //     achievement: "1st Place Winner",
  //     technologies: ["Next.js", "Node.js", "MongoDB"],
  //   },
];

const Experience = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 font-mono border-b-2 border-dotted border-green-500">
      <div className="md:max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-500">root@kali</span>
            <span className="text-white">:</span>
            <span className="text-blue-500">~/experience</span>
            <span className="text-white">$</span>
            <span className="animate-pulse">▊</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 glitch-text">
            ./show_experience.sh --all
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-green-500 bg-black/50 p-6 rounded-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-green-500">
                  {exp.type === "internship" ? (
                    <FaLaptopCode size={20} />
                  ) : exp.type === "hackathon" ? (
                    <FaCode size={20} />
                  ) : (
                    <FaTrophy size={20} />
                  )}
                </span>
                <h3 className="text-xl font-bold text-green-500">
                  {exp.title}
                </h3>
              </div>

              <div className="ml-8 space-y-4">
                <div className="flex flex-col text-green-400/80">
                  <span>Organization: {exp.organization}</span>
                  <span>Duration: {exp.duration}</span>
                  {exp.achievement && (
                    <span className="text-yellow-500">
                      Achievement: {exp.achievement}
                    </span>
                  )}
                </div>

                <div className="text-green-400/80">
                  <div className="mb-2">$ cat responsibilities.txt</div>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>

                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 border border-green-500 text-green-500 text-sm
                                 hover:bg-green-500 hover:text-black transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .glitch-text {
          text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
            -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
            0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          animation: glitch 500ms infinite;
        }

        @keyframes glitch {
          0% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
              -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          14% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
              -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          15% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          49% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          50% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          99% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          100% {
            text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
