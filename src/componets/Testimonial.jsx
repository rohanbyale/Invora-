import React from "react";
import { motion } from "framer-motion";

const logos = [
  "Flexify", "Flowboard", "Agentify", "TodoFusion", 
  "Identify", "Codify", "Nexus AI", "Landify"
];

const TestimonialSection = () => {
  return (
    <section className="bg-black text-white py-32 px-6 overflow-hidden font-sans">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          WHAT ARE THEY <br /> SAYING ABOUT US?
        </h2>
        <p className="text-zinc-500 text-[9px] tracking-[0.3em] uppercase font-bold">
          Used and loved by people at leading companies
        </p>
      </div>

      <div className="relative flex overflow-x-hidden mb-40">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 items-center"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center gap-2 opacity-30">
              <div className="w-4 h-4 bg-white/40 rounded-sm" /> 
              <span className="text-xl font-semibold tracking-tight">{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
        
        <div className="flex-1 max-w-sm">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="mb-6">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-zinc-600">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM3 21V18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21" fill="currentColor"/>
              </svg>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold leading-relaxed tracking-tight mb-8">
              Incorporating Designor Framer into our web development process has streamlined collaboration.
            </h3>

            <div className="flex gap-4 items-center">
              <div className="w-[1px] h-10 bg-zinc-800" /> 
              <div>
                <p className="text-[13px] font-bold tracking-wide">John Smith</p>
                <p className="text-zinc-500 text-[11px] font-medium tracking-wide">CEO @taskify</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-white z-20" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white z-20" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white z-20" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white z-20" />

          <div className="relative w-[280px] h-[350px] md:w-[380px] md:h-[460px] overflow-hidden bg-zinc-900">
            <img 
              src="https://framerusercontent.com/images/4XTnLW7JZjeMcl56gnBMDX20k.png?scale-down-to=512&width=640&height=640" 
              alt="Testimonial Portrait"
              className="w-full h-full object-cover grayscale brightness-90 contrast-110"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialSection;