export default function CTA() {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-700 to-purple-600 text-white text-center px-6">
      
      <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-wide">
        Ready for Your Next Adventure?
      </h2>

      <p className="mb-8 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
        Join thousands of travelers and explore breathtaking destinations around the globe.
      </p>

      <button
        className="
          px-8 py-3 
          bg-white text-blue-700 
          font-semibold rounded-lg shadow-md 
          hover:bg-blue-100 
          transition-all duration-300
        "
      >
        Get Started
      </button>
    </div>
  );
}
