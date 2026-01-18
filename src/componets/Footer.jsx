import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-[#a2ff00] text-black font-sans pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-24">
        
        <div className="md:col-span-6 space-y-6">
          <p className="text-sm font-bold tracking-tight">+1132 132 131</p>
          <p className="text-sm font-bold leading-tight max-w-[200px]">
            TechHub Plaza, Suite 301 Main Street, <br />
            Metro Tower, Floor 15
          </p>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-[10px] uppercase tracking-widest text-black/50 font-bold mb-6">Menu</h4>
          <ul className="space-y-3 text-[13px] font-bold uppercase">
            <li className="hover:opacity-60 cursor-pointer transition-opacity">About</li>
            <li className="hover:opacity-60 cursor-pointer transition-opacity">Gallery</li>
            <li className="hover:opacity-60 cursor-pointer transition-opacity">Article</li>
            <li className="hover:opacity-60 cursor-pointer transition-opacity">Contact</li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-[10px] uppercase tracking-widest text-black/50 font-bold mb-6">Contacts</h4>
          <ul className="space-y-3 text-[13px] font-bold">
            <li className="hover:opacity-60 cursor-pointer transition-opacity">hello@nivora.com</li>
            <li className="hover:opacity-60 cursor-pointer transition-opacity">info@nivora.com</li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-[10px] uppercase tracking-widest text-black/50 font-bold mb-6">Socials</h4>
          <ul className="space-y-3 text-[13px] font-bold uppercase">
            <li className="hover:opacity-60 cursor-pointer transition-opacity">X link</li>
            <li className="hover:opacity-60 cursor-pointer transition-opacity">Dribbble</li>
            <li className="hover:opacity-60 cursor-pointer transition-opacity">Linkedin</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center pb-12 text-[11px] font-bold">
        <p>Copyright 2025</p>
        <div className="flex gap-8">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms of Use</span>
        </div>
      </div>

      <div className="bg-black py-4 border-t-4 border-white flex items-center overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-white text-[12vw] font-black tracking-tighter leading-none px-4">
                NIVORA
              </span>
              <span className="text-zinc-800 text-[12vw] font-black tracking-tighter leading-none px-4">
                NIVORA
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;