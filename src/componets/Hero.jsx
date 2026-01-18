import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-[#a2ff00] overflow-hidden font-sans">

      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/CKjpQCXbgdY4rJr7UEGzaixoAe8.webp?scale-down-to=2048&width=3795&height=2024')",
          filter: 'brightness(0.9) contrast(1.1)',
        }}
      />

      <div className="absolute inset-0 z-[1] opacity-80 pointer-events-none" />

      <main className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 mix-blend-difference text-white">

        <header className="uppercase">
          <p className="text-[10px] md:text-[11px] tracking-[0.3em] mb-14 font-semibold opacity-90 leading-relaxed">
            THOUGHTFUL DESIGN ACROSS<br />
            BRANDS, PRODUCTS, AND DIGITAL EXPERIENCES
          </p>

          <h1 className="text-7xl md:text-[11rem] font-black leading-[0.8] tracking-tighter mb-12">
            DESIGN<br />
            FOR<br />
            EVERYONE
          </h1>

          <p className="text-[10px] md:text-[12px] tracking-[0.2em] font-semibold opacity-80">
            WE HELP IDEAS BECOME CLEAR, USABLE, AND<br />
            BEAUTIFULLY CRAFTED
          </p>
        </header>

        <button className="mt-12 px-10 py-3 border-[1.5px] border-white text-white text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-white hover:text-black transition-all duration-300">
          SCHEDULE A CALL
        </button>
      </main>

    </div>
  );
};

export default HeroSection;
