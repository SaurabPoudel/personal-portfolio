"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface KaliRootProps {
  command: string;
  result: string;
}

const Hero = () => {
  const [isRoot, setIsRoot] = useState(true);
  setTimeout(() => setIsRoot(false), 4000);
  return (
    <section className="flex justify-center">
      <div className="pt-10 px-8 md:max-w-4xl w-full">
        <h1 className="text-lime-500 text-3xl pb-10">./ Saurab Poudel</h1>

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
                  <KaliRoot
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
          </div>
        </div>
      </div>
    </section>
  );
};

const KaliRoot = (props: KaliRootProps) => {
  const rootVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  const commandVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
  };

  const resultVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 2 } },
  };
  return (
    <motion.div variants={rootVariants} initial="hidden" animate="visible">
      <div className="flex items-center pt-3 pl-3 text-sky-700">
        <span className="bg-sky-700  h-[2px] w-16"></span>
        {"("}
        <span className="text-red-800">root</span>

        <span className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2a9 9 0 0 0-9 9a8.99 8.99 0 0 0 4 7.47V22h2v-3h2v3h2v-3h2v3h2v-3.54c2.47-1.65 4-4.46 4-7.46a9 9 0 0 0-9-9m-4 9a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m8 0a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-4 3l1.5 3h-3l1.5-3Z"
            />
          </svg>
        </span>
        <span className="text-red-800">saurab</span>
        {")"}
        <span className="px-1">-</span>
        {"["}
        <span className="text-white">~</span>
        {"]"}
      </div>
      <div className="flex text-sky-700">
        <div className="flex pl-3 absolute">
          <span className="w-[2px] h-10 bg-sky-700 translate-y-[-11px]"></span>
        </div>

        <div className="flex pl-3 absolute">
          <span className="w-10 h-[2px] bg-sky-700 translate-y-7"></span>
          <span className="text-red-800 translate-y-5">#</span>
          <motion.div
            variants={commandVariants}
            initial="hidden"
            animate="visible"
            className="flex"
          >
            <Command command={props.command} />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={resultVariants}
        initial="hidden"
        animate="visible"
        className="flex"
      >
        <Result result={props.result} />
      </motion.div>
    </motion.div>
  );
};

const KaliUser = (props: KaliRootProps) => {
  const rootVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  const commandVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
  };

  const resultVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 2 } },
  };
  return (
    <motion.div variants={rootVariants} initial="hidden" animate="visible">
      <div className="flex items-center pt-3 pl-3 text-teal-700">
        <span className="bg-teal-700  h-[2px] w-16"></span>
        {"("}
        <span className="text-sky-800">saurab</span>

        <span className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2a9 9 0 0 0-9 9a8.99 8.99 0 0 0 4 7.47V22h2v-3h2v3h2v-3h2v3h2v-3.54c2.47-1.65 4-4.46 4-7.46a9 9 0 0 0-9-9m-4 9a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m8 0a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-4 3l1.5 3h-3l1.5-3Z"
            />
          </svg>
        </span>
        <span className="text-sky-800">saurab</span>
        {")"}
        <span className="px-1">-</span>
        {"["}
        <span className="text-white">~</span>
        {"]"}
      </div>
      <div className="flex text-sky-700">
        <div className="flex pl-3 absolute">
          <span className="w-[2px] h-10 bg-teal-700 translate-y-[-11px]"></span>
        </div>

        <div className="flex pl-3 absolute">
          <span className="w-10 h-[2px] bg-teal-700 translate-y-7"></span>
          <span className="text-sky-800 translate-y-5">$</span>
          <motion.div
            variants={commandVariants}
            initial="hidden"
            animate="visible"
            className="flex"
          >
            <Command command={props.command} />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={resultVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col text-lime-500"
      >
        <Result result={props.result} />
        <div className="pt-10 flex ">
          <Image
            src="/armin.png"
            width={100}
            height={60}
            alt="Armin"
            className=" translate-y-[-3vh]"
          />
          <div className="flex flex-col pl-4 translate-y-[-3vh]">
            <span> I learn </span>
            <span> I do web development </span>
            <span>I hack</span>
            <span>He/Him</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Result = (props: { result: string }) => {
  return (
    <div className="text-lime-500 pt-10 pl-5">
      <span>{props.result}</span>
    </div>
  );
};
const Command = (props: { command: string }) => {
  return (
    <span className="text-teal-700 translate-y-5 pl-2">{props.command}</span>
  );
};
export default Hero;
