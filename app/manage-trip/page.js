"use client";

import { useEffect, useState } from "react";
import useAuth from "../useAuth";
import { useRouter } from "next/navigation";

export default function ManageTrip() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [trips, setTrips] = useState([]);

  // Protected Route
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  // Dummy Data Now (Later Firebase)
  useEffect(() => {
    setTrips([
      {
        id: 1,
        title: "Paris Trip",
        price: 599,
        date: "2025-02-10",
      },
      {
        id: 2,
        title: "Tokyo Adventure",
        price: 899,
        date: "2025-03-05",
      }
    ]);
  }, []);

  if (loading || !user) {
    return <p className="text-center p-6">Loading...</p>;
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Manage Your Trips
      </h1>

      <div className="overflow-x-auto shadow rounded">
        <table className="table w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {trips.map((trip, index) => (
              <tr key={trip.id}>
                <td>{index + 1}</td>
                <td className="font-semibold">{trip.title}</td>
                <td>${trip.price}</td>
                <td>{trip.date}</td>
                <td className="flex gap-2">
                  
                  {/* View Button */}
                  <button
                    className="btn btn-sm btn-info text-white"
                    onClick={() => router.push(`/destinations/${trip.id}`)}
                  >
                    View
                  </button>

                  {/* Delete Button */}
                  <button
                    className="btn btn-sm btn-error text-white"
                    onClick={() => alert("Delete clicked")}
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
