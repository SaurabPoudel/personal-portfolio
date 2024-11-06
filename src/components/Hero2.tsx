"use client";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero2 = () => {
  return (
    <section className="w-full min-h-screen bg-black text-green-500 py-20 px-4 md:px-8 font-mono flex items-center">
      <div className="md:max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Terminal Window Header */}
          <div className="border border-green-500 rounded-lg overflow-hidden">
            <div className="bg-gray-900 px-4 py-2 border-b border-green-500 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-green-500 text-sm">kali@terminal:~</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 bg-black space-y-4">
              {/* First Command */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-red-500">root@kali</span>
                <span className="text-white">:</span>
                <span className="text-blue-500">~</span>
                <span className="text-white">$</span>
                <div className="text-green-500">
                  <Typewriter
                    options={{
                      strings: ["whoami"],
                      autoStart: true,
                      delay: 75,
                      cursor: "▊",
                    }}
                  />
                </div>
              </div>

              {/* Response */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-green-400 ml-4"
              >
                <Typewriter
                  options={{
                    strings: ["Saurab Poudel"],
                    autoStart: true,
                    delay: 50,
                    cursor: "",
                    deleteSpeed: 9999999,
                  }}
                />
              </motion.div>

              {/* Second Command */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="flex items-center gap-2"
              >
                <span className="text-red-500">root@kali</span>
                <span className="text-white">:</span>
                <span className="text-blue-500">~</span>
                <span className="text-white">$</span>
                <div className="text-green-500">
                  <Typewriter
                    options={{
                      strings: ["cat about.txt"],
                      autoStart: true,
                      delay: 75,
                      cursor: "▊",
                    }}
                  />
                </div>
              </motion.div>

              {/* About Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
                className="text-green-400 ml-4 space-y-2"
              >
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer | Open Source Enthusiast",
                      "Specializing in Next.js, React, and TypeScript",
                      "Building secure and scalable web applications",
                      "Currently exploring Golang and System Design",
                    ],
                    autoStart: true,
                    delay: 30,
                    cursor: "",
                    deleteSpeed: 9999999,
                  }}
                />
              </motion.div>

              {/* Final Command */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 7 }}
                className="flex items-center gap-2"
              >
                <span className="text-red-500">root@kali</span>
                <span className="text-white">:</span>
                <span className="text-blue-500">~</span>
                <span className="text-white">$</span>
                <span className="animate-pulse">▊</span>
              </motion.div>
            </div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 8 }}
            className="flex gap-4 text-sm"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              ./github.sh
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              ./linkedin.sh
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              ./contact.sh
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero2;
