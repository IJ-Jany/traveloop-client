"use client";

import { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";

export default function Destinations() {
  const [destinations, setDestinations] = useState(null);
  const [error, setError] = useState(null);



  useEffect(() => {
  fetch("http://localhost:3000/destinations")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched Data:", data); 
      setDestinations(data);
    })
    .catch((err) => setError(err));
}, []);





  if (error) return <p>❌ Failed to load destinations</p>;
  if (!destinations) return <p>⏳ Loading...</p>;

  return (
     <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Top Destinations</h1>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {destinations.map((item) => (
          <DestinationCard key={item._id} item={item} />
        ))}
      </div> */}
    </div>
  );
}
