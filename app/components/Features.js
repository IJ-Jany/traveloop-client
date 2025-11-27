const features = [
  { title: "Easy Booking", desc: "Book your trips effortlessly online.", icon: "🛫" },
  { title: "24/7 Support", desc: "We are here to help anytime.", icon: "📞" },
  { title: "Exclusive Deals", desc: "Get the best deals for top destinations.", icon: "💰" },
  { title: "Guided Tours", desc: "Experience curated trips with experts.", icon: "🗺️" },
];

export default function Features() {
  return (
    <div className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-24">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="
              bg-white p-8 rounded-xl shadow-md 
              hover:shadow-xl hover:-translate-y-2 
              transition-all duration-300 border border-gray-100
            "
          >
            {/* Icon Circle */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl shadow-sm">
                {f.icon}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
              {f.title}
            </h3>

            <p className="text-gray-600 text-center leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
