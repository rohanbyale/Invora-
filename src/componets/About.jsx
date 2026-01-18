import React, { useState } from 'react';
import {  useMotionValue, useTransform, useSpring, motion } from 'framer-motion';

const ProjectCard = ({ title, category, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);
  const smoothCursorX = useSpring(cursorX, { stiffness: 250, damping: 25 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-4 group w-full max-w-[420px] ml-auto" 
    >
      <div 
        className="relative cursor-none" 
        style={{ perspective: "1500px" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          x.set(0);
          y.set(0);
        }}
      >
        <motion.div
          style={{ 
            left: smoothCursorX, 
            top: smoothCursorY,
            x: "-50%",
            y: "-50%" 
          }}
          animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          className="pointer-events-none absolute z-50 bg-white text-black text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-tighter"
        >
          Preview
        </motion.div>

        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative aspect-square w-full bg-[#0a0a0a] overflow-hidden border border-white/10"
        >
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 z-10" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40 z-10" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40 z-10" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 z-10" />

          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
          />
        </motion.div>
      </div>

      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-white font-bold text-xs tracking-[0.2em]">{title}</h3>
        <span className="text-zinc-500 text-[9px] tracking-widest">{category}</span>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  const projects = [
    { title: "KNOBS", category: "HARDWARE", image: "https://framerusercontent.com/images/sXpGa5SBIHzL1ZlluLzui0nhLvU.webp?scale-down-to=1024&width=1800&height=2400" },
    { title: "SPACECUBE", category: "DIGITAL", image: "https://framerusercontent.com/images/9eD88IPKTw4s3e2ACxglJMr1zWs.webp?scale-down-to=1024&width=1800&height=2400" },
    { title: "ORBITAL", category: "BRANDING", image: "https://framerusercontent.com/images/ruM84yQKYiTGK0mIWGzyalj01WQ.webp?scale-down-to=1024&width=1920&height=2400" }
  ];

  return (
    <section className="bg-black min-h-screen w-full flex flex-col md:flex-row px-10 md:px-24 py-40 gap-20">
      <div className="md:w-1/2">
        <div className="md:sticky md:top-40 max-w-lg">
          <h2 className="text-white text-3xl md:text-[2.8rem] font-medium leading-[1.2] tracking-tight">
            We are a design studio focused on clarity, craft, and real-world execution. 
          </h2>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col gap-48">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;