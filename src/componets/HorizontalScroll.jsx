const DevelopmentSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Our Service
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Development
          </h2>

          <p className="text-gray-400 max-w-md leading-relaxed mb-8">
            We create modern, responsive, and high-performing websites tailored
            to your business goals. Our developers ensure seamless functionality
            across all devices.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              Responsive design
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              Custom development
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              SEO Optimization
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              E-commerce solutions
            </li>
          </ul>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <img
            src="https://framerusercontent.com/images/Yl8rGcvdrmWh7CvrDP6DXMKxTc.webp?scale-down-to=1024&width=1536&height=1024"
            alt="Development Illustration"
            className="w-full max-w-lg opacity-90"
          />
        </div>

      </div>
    </section>
  );
};

export default DevelopmentSection;
