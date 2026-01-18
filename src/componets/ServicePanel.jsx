import React from "react";
import { motion } from "framer-motion";

const steps = [
  { 
    title: "IDEA", 
    desc: "WE MEET WITH YOUR TEAM TO LEARN MORE.", 
    category: "PHASE 01",
    centerText: "STRATEGY & VISION", 
    logo: "https://e7.pngegg.com/pngimages/941/101/png-clipart-light-computer-icons-idea-logo-innovation-electricity-thumbnail.png" 
  },
  { 
    title: "DESIGN", 
    desc: "WE WILL DESIGN A MOCKUP OR PROTOTYPE.", 
    category: "PHASE 02",
    centerText: "UI/UX ARCHITECTURE",
    logo: "https://s3-alpha.figma.com/hub/file/2811018019/cae7d25d-8aff-4c49-8189-fad585dfb7cb-cover.png" 
  },
  { 
    title: "WEB DEV", 
    desc: "DEVELOPING USING THE BEST PRACTICES.", 
    category: "PHASE 03",
    centerText: "SCALABLE SYSTEMS",
    logo: "https://toppng.com/uploads/preview/react-logo-icon-11609374122d9vkbptqap.png" 
  },
  { 
    title: "LAUNCH", 
    desc: "PROJECT COMPLETED & FINAL TRAINING.", 
    category: "PHASE 04",
    centerText: "DEPLOY & SCALE",
    logo: "https://e7.pngegg.com/pngimages/460/204/png-clipart-computer-icons-project-management-software-deployment-implementation-others-angle-logo-thumbnail.png" 
  },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


const cardVariants = {
  hidden: {
    y: 80,
    opacity: 0,
    scale: 0.95,
    filter: "blur(12px)",
  },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1,
    },
  }),
};


const floatAnimation = {
  y: [0, -8, 0],
  rotate: [0, 1, -1, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const HowItWorks = () => {
  return (
    <section className="bg-black text-white py-40 px-6 md:px-12 flex flex-col items-center w-full overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-32 max-w-2xl"
      >
        <span className="text-[#a2ff00] text-[10px] font-bold tracking-[0.5em] uppercase">
          Process
        </span>
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mt-4 uppercase">
          Step by Step
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            className="group relative perspective-[1200px]"
          >
            <motion.div
              animate={floatAnimation}
              whileHover={{
                y: -16,
                scale: 1.05,
                rotateX: 6,
                rotateY: -6,
                boxShadow: "0px 12px 40px rgba(162,255,0,0.25)",
                transition: { type: "spring", stiffness: 220, damping: 18 },
              }}
              className="relative aspect-[4/5] w-full bg-[#0a0a0a] border border-white/10
              flex flex-col justify-between p-6 overflow-hidden
              transition-all duration-500
              group-hover:border-[#a2ff00]/40
              group-hover:shadow-[0_0_40px_rgba(162,255,0,0.15)]
              hover:cursor-pointer"
            >
              <div className="flex justify-between items-start z-10">
                <h3 className="text-white font-bold text-[14px] tracking-widest 
                  transition-colors group-hover:text-transparent group-hover:bg-clip-text 
                  group-hover:bg-gradient-to-r group-hover:from-[#a2ff00] group-hover:to-[#00ffaa]">
                  {step.title}
                </h3>
                <span className="text-[#a2ff00] text-[9px] font-bold border border-[#a2ff00]/20 px-2 py-1">
                  {step.category}
                </span>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                <motion.img 
                  src={step.logo} 
                  alt="icon" 
                  className="w-8 h-8 mb-3 opacity-20 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
                <span className="text-[10px] text-white/40 font-medium tracking-[0.2em] uppercase group-hover:text-[#a2ff00] transition-colors duration-500">
                  {step.centerText}
                </span>
              </div>

              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center
                  text-white/5 text-[10rem] font-black select-none pointer-events-none
                  group-hover:text-[#a2ff00]/10 transition-all duration-[1200ms]"
              >
                0{index + 1}
              </motion.span>

              <div className="z-10">
                <p className="text-zinc-500 text-[10px] leading-relaxed tracking-wider 
                  group-hover:text-zinc-300 transition-colors">
                  {step.desc}
                </p>
              </div>

              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 group-hover:border-[#a2ff00]/50 transition-colors" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 group-hover:border-[#a2ff00]/50 transition-colors" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowItWorks;