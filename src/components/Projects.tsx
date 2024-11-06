"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "baithak",
    description: "Video conferencing app, with all the features of zoom",
    technologies: ["Next.js", "Tailwind", "WebRTC"],
    imageUrl: "/project1.jpg",
    githubUrl: "https://github.com/SaurabPoudel/baithak",
    liveUrl: "https://baithak-nepal.vercel.app",
  },
  {
    title: "Golang Microservice",
    description: "Golang Microservice with gRPC, GraphQL, and Elastic Search",
    technologies: ["Golang", "gRPC", "GraphQL", "Elastic Search"],
    imageUrl: "/project1.jpg",
    githubUrl: "https://github.com/SaurabPoudel/go-grpc-graphql-micro",
  },
  {
    title: "YC Directory",
    description: "YC Directory Website made with Next.js 15 latest features",
    technologies: ["Next.js 15", "Tailwind", "Sanity"],
    imageUrl: "/project1.jpg",
    githubUrl: "https://github.com/SaurabPoudel/pitch",
    liveUrl: "https://pitch-lime.vercel.app",
  },
  {
    title: "Distributed File Storage",
    description:
      "Distributed File Storage with Golang, with a custom protocol and encryption",
    technologies: ["Golang Standard Library"],
    imageUrl: "/project1.jpg",
    githubUrl: "https://github.com/SaurabPoudel/distributed-file-storage",
  },
];

const Projects = () => {
  return (
    <section className="w-full   text-green-500 py-20 px-4 md:px-8 border-b-2 border-dotted border-green-500 font-mono">
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
            <span className="text-blue-500">~/projects</span>
            <span className="text-white">$</span>
            <span className="animate-pulse">▊</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold glitch-text">
            ./show_projects.sh
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-green-500 bg-black p-6 rounded-md relative
                        before:content-[''] before:absolute before:top-0 before:left-0 
                        before:w-full before:h-full before:bg-green-500/5 
                        hover:before:bg-green-500/10 before:transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-green-500">[~]</span>
                <h3 className="text-xl font-bold text-green-500">
                  {project.title}
                </h3>
              </div>

              <div className="mb-6 text-green-400 opacity-80 font-terminal">
                <p>{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 border border-green-500 text-green-500 text-sm
                             hover:bg-green-500 hover:text-black transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors z-10"
                  >
                    <FaGithub size={20} />
                    <span>Source</span>
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors z-10"
                  >
                    <FaExternalLinkAlt size={18} />
                    <span>Deploy</span>
                  </Link>
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

export default Projects;
