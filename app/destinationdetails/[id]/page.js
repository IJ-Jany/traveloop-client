"use client";

export default function DestinationDetails({ destination }) {
  if (!destination) {
    return (
      <p className="p-8 text-center text-red-500">
        No destination data provided.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-8">
      {/* IMAGE */}
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-80 object-cover rounded mb-6"
      />

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        {destination.name}
      </h1>

      {/* DESCRIPTIONS */}
      <p className="text-gray-700 mb-4">{destination.desc}</p>
      <p className="text-gray-600 mb-4">{destination.fullDesc}</p>

      {/* PRICE & DATE */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-semibold text-blue-600">
          {destination.price}
        </span>
        <span className="text-gray-500">
          {new Date(destination.date).toLocaleDateString()}
        </span>
      </div>

      {/* ACTION BUTTON */}
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
        Book Now
      </button>
    </div>
  );
}
