export default function Testimonail() {
  const testimonials = [
    {
      name: "Raihan Ahmed",
      location: "Bali, Indonesia",
      message:
        "The best travel experience of my life! Everything was perfectly arranged — hotel, transport, tour guide — absolutely amazing!",
      image: "/images/traveler1.jpg",
    },
    {
      name: "Sara Hossain",
      location: "Santorini, Greece",
      message:
        "Beautiful views, smooth booking process, and super friendly support team. I will definitely book again!",
      image: "/images/traveler2.jpg",
    },
    {
      name: "Mehedi Hasan",
      location: "Cappadocia, Turkey",
      message:
        "Hot air balloon ride was unforgettable! Thanks for making my dream trip come true. Highly recommended.",
      image: "/images/traveler3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          What Travelers Say
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Thousands of travelers explore the world with us every year.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 border-t-4 border-blue-500"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4 shadow"
              />
              <p className="text-gray-700 italic mb-6">{item.message}</p>

              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-blue-600 font-medium text-sm">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
