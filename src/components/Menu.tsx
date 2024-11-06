"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBlog, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface MenuItem {
  title: string;
  url: string;
  icon: JSX.Element;
  description: string;
}

const menuItems: MenuItem[] = [
  {
    title: "blog",
    url: "https://saurabblog.vercel.app",
    icon: <FaBlog size={20} />,
    description:
      "cat ~/blog/articles.txt # Read my tech articles and tutorials",
  },
  {
    title: "github",
    url: "https://github.com/SaurabPoudel",
    icon: <FaGithub size={20} />,
    description: "ls -la ~/repositories # Check out my open source projects",
  },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/in/saurab-poudel/",
    icon: <FaLinkedin size={20} />,
    description: "whoami > ~/professional/profile.md",
  },
  {
    title: "X",
    url: "https://x.com/SaurabPoudel07",
    icon: <FaTwitter size={20} />,
    description: "echo 'Follow my tech journey' >> ~/social/feed.log",
  },
];

const Menu = () => {
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
            <span className="text-blue-500">~/links</span>
            <span className="text-white">$</span>
            <span className="animate-pulse">▊</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-500">
            ./connect.sh --show-all-links
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-green-500 bg-black/50 p-4 rounded-md
                         hover:bg-green-500/5 transition-all duration-300"
            >
              <Link href={item.url} target="_blank" className="block">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-green-500">[~]</span>
                  <div className="text-green-500">{item.icon}</div>
                  <h3 className="text-lg font-bold text-green-500">
                    {item.title}
                  </h3>
                </div>
                <p className="text-green-400/80 font-terminal ml-8 text-sm">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-green-500/70 border-t border-green-500/20 pt-4"
        >
          <span className="text-red-500">root@kali</span>
          <span className="text-white">:</span>
          <span className="text-blue-500">~/links</span>
          <span className="text-white">$</span>
          <span className="animate-pulse ml-2">▊</span>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Menu;
