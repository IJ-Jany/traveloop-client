"use client";

import { useEffect, useState } from "react";

export default function Destinations() {
  const [destinations, setDestinations] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => setError(err));
  }, []);

  if (error) return <p>❌ Failed to load destinations</p>;
  if (!destinations) return <p>⏳ Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Top Destinations</h1>

      <pre className="bg-gray-100 p-4 mt-4 rounded">
        {JSON.stringify(destinations, null, 2)}
      </pre>
    </div>
  );
}
