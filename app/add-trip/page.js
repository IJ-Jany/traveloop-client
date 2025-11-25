"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import useAuth from "../useAuth";

export default function AddTrip() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const [image, setImage] = useState("");

  // 👇 Authentication protection
  if (loading) {
    return <p className="p-8 text-center">Checking authentication...</p>;
  }

  if (!user) {
    router.push("/login");
    return null;
  }

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      title,
      shortDesc,
      fullDesc,
      price,
      date,
      priority,
      image
    });

    alert("Trip added successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Add New Trip
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded">

        {/* Title */}
        <label className="block mb-2 font-semibold">Title</label>
        <input
          className="w-full p-3 border rounded mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Short Description */}
        <label className="block mb-2 font-semibold">Short Description</label>
        <input
          className="w-full p-3 border rounded mb-4"
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
          required
        />

        {/* Full Description */}
        <label className="block mb-2 font-semibold">Full Description</label>
        <textarea
          className="w-full p-3 border rounded mb-4"
          rows="4"
          value={fullDesc}
          onChange={(e) => setFullDesc(e.target.value)}
          required
        />

        {/* Price */}
        <label className="block mb-2 font-semibold">Price</label>
        <input
          type="number"
          className="w-full p-3 border rounded mb-4"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        {/* Date */}
        <label className="block mb-2 font-semibold">Date</label>
        <input
          type="date"
          className="w-full p-3 border rounded mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        {/* Priority */}
        <label className="block mb-2 font-semibold">Priority</label>
        <select
          className="w-full p-3 border rounded mb-4"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Select priority</option>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>

        {/* Image URL */}
        <label className="block mb-2 font-semibold">Image URL (Optional)</label>
        <input
          className="w-full p-3 border rounded mb-4"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
