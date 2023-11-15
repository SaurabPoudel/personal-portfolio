"use client";
import { motion } from "framer-motion";

interface KaliRootProps {
  command: string;
  result: string;
}

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="pt-10 px-8 md:max-w-4xl w-full">
        <h1 className="text-lime-500 text-3xl pb-10">./ Saurab Poudel</h1>

        <div className="bg-black ">
          {[
            { command: "whoami", result: "root" },
            { command: "exit", result: "exit" },
          ].map((cmd, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 1.5 }}
            >
              <KaliRoot key={index} command={cmd.command} result={cmd.result} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const KaliRoot = (props: KaliRootProps) => {
  const rootVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const commandVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.5 } },
  };

  const resultVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 3 } },
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
        <span className="text-red-800">kali</span>
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

const Result = (props: { result: string }) => {
  return (
    <div className="text-white pt-10 pl-5">
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
