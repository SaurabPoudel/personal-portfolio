import { motion } from "framer-motion";
import Image from "next/image";

interface KaliUserProps {
  command: string;
  result: string;
}

const KaliUser = ({ command, result }: KaliUserProps) => {
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
            <Command command={command} />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={resultVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col text-green-500"
      >
        <Result result={result} />
        <div className="pt-10 flex ">
          <Image
            src="/zoro.jpg"
            width={100}
            height={60}
            alt="Armin"
            className=" translate-y-[-3vh]"
          />
          <div className="flex flex-col pl-4 translate-y-[-3vh]">
            <span>Full Stack Web Developer</span>
            <span> TypeScript, Next.js, Golang</span>
            <span>Passionate about AI and Blockchain</span>
            <span>He/Him</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Command = ({ command }: { command: string }) => {
  return <span className="text-teal-700 translate-y-5 pl-2">{command}</span>;
};

const Result = ({ result }: { result: string }) => {
  return (
    <div className="text-green-500 pt-10 pl-5">
      <span>{result}</span>
    </div>
  );
};

export default KaliUser;
