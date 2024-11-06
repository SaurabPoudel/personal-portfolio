"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Kaliroot from "./Kaliroot";
import KaliUser from "./KaliUser";

const Hero = () => {
  const [isRoot, setIsRoot] = useState(true);
  setTimeout(() => setIsRoot(false), 4000);
  return (
    <section className="flex justify-center  border-b-2 border-dotted border-green-500 pb-10 ">
      <div className="pt-10 px-8 md:max-w-6xl w-full">
        <h1 className="text-green-500 text-3xl pb-10">./ Saurab Poudel</h1>

        <div className="bg-black  ">
          {isRoot ? (
            <>
              {[
                { command: "whoami", result: "root" },
                { command: "exit", result: "exit" },
              ].map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 2 }}
                >
                  <Kaliroot
                    key={index}
                    command={cmd.command}
                    result={cmd.result}
                  />
                </motion.div>
              ))}
            </>
          ) : (
            <>
              <KaliUser command="whoami" result="Saurab Poudel" />
            </>
          )}
          <div className="relative flex justify-center bottom-0 gap-4 pb-2">
            <Link href="https://github.com/SaurabPoudel" target="_blank">
              <Image
                src="/github-mark-white.png"
                alt="github"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/saurab-poudel/"
              target="_blank"
            >
              <Image
                src="/linkedin.png"
                alt="linkedin"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://twitter.com/SaurabPoudel07" target="_blank">
              <Image src="/twitter.png" alt="twitter" width={30} height={30} />
            </Link>
            <Link href="https://lichess.org/@/SaurabPoudel20" target="_blank">
              <Image src="/chess.svg" alt="chess" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
