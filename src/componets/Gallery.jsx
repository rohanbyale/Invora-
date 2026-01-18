import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const GalleryItem = ({ title, category, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 25 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);
  const smoothCursorX = useSpring(cursorX, { stiffness: 400, damping: 30 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  return (
    <div className="flex flex-col gap-4 group">
      <div 
        className="relative cursor-none" 
        style={{ perspective: "1200px" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          x.set(0); y.set(0);
        }}
      >
        <motion.div
          style={{ left: smoothCursorX, top: smoothCursorY, x: "-50%", y: "-50%" }}
          animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          className="pointer-events-none absolute z-50 bg-white text-black text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-tighter shadow-xl"
        >
          Preview
        </motion.div>

        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative aspect-square w-full bg-[#0a0a0a] overflow-hidden border border-white/5"
        >
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 z-10" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40 z-10" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40 z-10" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 z-10" />

          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
          />
        </motion.div>
      </div>

      <div className="flex flex-col uppercase px-1">
        <h3 className="text-white font-bold text-[11px] tracking-[0.15em]">{title}</h3>
        <span className="text-zinc-500 text-[9px] tracking-widest mt-0.5">{category}</span>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const items = [
    { title: "RADIO", category: "AUDIO DEVICE", image: "https://framerusercontent.com/images/ECZJ1Q4e4w0kBS44HaG0CXpt4.webp?scale-down-to=1024&width=1800&height=2400" },
    { title: "KNOBS", category: "HARDWARE", image: "https://framerusercontent.com/images/NtEN2D6kMVU5edxcFtgwapyjzY.webp?scale-down-to=1024&width=1800&height=2400" },
    { title: "CAMERA", category: "IMAGING DEVICE", image: "https://framerusercontent.com/images/MmBthxVDgdEVOD8FF0y49WB0kKk.webp?scale-down-to=1024&width=1800&height=2400" },
    { title: "FLOPPY", category: "INPUT DEVICE", image: "https://framerusercontent.com/images/uYntMlmBGGuyvzWF4BXrjyJndY.webp?scale-down-to=1024&width=1800&height=2400" }
  ];

  return (
    <section className="bg-black w-full px-6 md:px-12 py-32 font-sans">
      
      <div className="text-center mb-24 uppercase">
        <span className="text-[#a2ff00] text-[9px] font-bold tracking-[0.4em]">GALLERY</span>
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tighter mt-4 mb-6">
          PHYSICAL PRODUCTS
        </h2>
        <p className="text-zinc-400 text-[10px] md:text-[11px] tracking-widest leading-relaxed max-w-xl mx-auto opacity-80">
          CAREFULLY DESIGNED OBJECTS FOCUSED ON FORM, USABILITY, AND<br />
          MANUFACTURABLE DETAIL ACROSS MODERN CONSUMER DEVICES.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
        {items.map((item, index) => (
          <GalleryItem key={index} {...item} />
        ))}
      </div>

    </section>
  );
};

export default GallerySection;