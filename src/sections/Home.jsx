
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/votan.png";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa6";
import ParticleBackground from "../components/ParticlesBackground";

const socials = [
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/tan-vo-44b9a5202/" },
  { Icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/vo.tan.1023611" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/vdt040499" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(166,124,82,0.9)) drop-shadow(0 0 18px rgba(224,201,166,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.95,
    y: 0,
    transition: { duration: 0.08 },
  },
};

const Home = React.forwardRef((props, ref) => {
  const roles = useMemo(
    () => ["Fullstack Engineer", "UITian", "AI Enthusiast"],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // typing effect logic
  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60); // original typing speed
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      ref={ref}
      id="home"
      className="h-screen w-full relative overflow-hidden bg-black"
    >
      <ParticleBackground />

      {/* gradient blobs */}
      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-32 
          w-[70vw] sm:w-[50vw] md:w-[40vw] 
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[500px] max-h-[500px]
          rounded-full
          bg-gradient-to-r from-[#4a3b2a] via-[#a67c52] to-[#e0c9a6]
          opacity-30 sm:opacity-20 md:opacity-10 
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse"
        />
        <div
          className="absolute bottom-0 right-0 
          w-[70vw] sm:w-[50vw] md:w-[40vw] 
          h-[70vw] sm:h-[50vw] md:h-[40vw] 
          max-w-[500px] max-h-[500px] 
          rounded-full 
          bg-gradient-to-r from-[#e0c9a6] via-[#a67c52] to-[#4a3b2a] 
          opacity-40 sm:opacity-30 
          blur-[100px] sm:blur-[130px] md:blur-[150px] 
          animate-pulse delay-500"
        />
      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        {/* left */}
        <motion.div
          className="flex flex-col justify-center h-full text-center lg:text-left relative"
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
            {/* typing text */}
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
                style={{ height: "1em" }}
              />
            </motion.div>

            {/* name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-[#e0c9a6] via-[#a67c52] to-[#4a3b2a] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Hello, I&apos;m
              <br />
              <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                Võ Tân
              </span>
            </motion.h1>

            {/* description */}
            <motion.p
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              I am a Fullstack Engineer.
              I bridge the gap between robust software engineering and advanced AI, building intelligent systems that solve real-world problems.
            </motion.p>

            {/* buttons */}
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              {/* <a
                href="#projects"
                className="px-6 py-3 rounded-full text-lg font-medium text-white 
                bg-gradient-to-r from-[#e0c9a6] via-[#a67c52] to-[#4a3b2a]
                shadow-lg hover:scale-105 transition-all"
              >
                View My Work
              </a> */}
              <a
                href="/tanvd_cv.pdf"
                download
                className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white 
                hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
              >
                My Resume
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* right */}
        <motion.div
          className="relative hidden lg:block h-full w-full"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Tech Geometry Background */}
            <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-[#e0c9a6]/20 to-[#4a3b2a]/20 rounded-full blur-[80px]" />

            {/* Rotating Rings */}
            <motion.div
              className="absolute w-[550px] h-[550px] border border-[#e0c9a6]/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[500px] h-[500px] border border-dashed border-[#a67c52]/40 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating Orbs */}
            <motion.div
              className="absolute top-10 right-10 w-5 h-5 bg-[#e0c9a6] rounded-full shadow-[0_0_15px_#e0c9a6]"
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 left-10 w-4 h-4 bg-[#a67c52] rounded-full shadow-[0_0_15px_#a67c52]"
              animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Main Avatar */}
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={avatar}
                alt="Gaurav Gupta avatar"
                className="relative w-auto h-auto max-h-[90vh] lg:max-h-[650px] xl:max-h-[800px] object-contain drop-shadow-[0_0_25px_rgba(166,124,82,0.6)] mask-image-gradient"
                style={{
                  maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Home;
