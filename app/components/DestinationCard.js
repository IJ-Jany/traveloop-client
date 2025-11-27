import Link from "next/link";

export default function DestinationCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover transform transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-600 text-sm mb-3">{item.desc}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold text-blue-600">{item.price}</span>
          <span className="text-gray-500 text-sm">{new Date(item.date).toLocaleDateString()}</span>
        </div>

        <Link href={`/destinationdetails/${item._id}`}>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
