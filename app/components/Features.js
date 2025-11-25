const features = [
  { title: "Easy Booking", desc: "Book your trips effortlessly online.", icon: "🛫" },
  { title: "24/7 Support", desc: "We are here to help anytime.", icon: "📞" },
  { title: "Exclusive Deals", desc: "Get the best deals for top destinations.", icon: "💰" },
  { title: "Guided Tours", desc: "Experience curated trips with experts.", icon: "🗺️" },
];

export default function Features() {
  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-16">
        {features.map((f, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="font-semibold text-blue-400 mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
