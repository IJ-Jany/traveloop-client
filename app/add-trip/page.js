"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import useAuth from "../useAuth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTrip = {
      title,
      shortDesc,
      fullDesc,
      price,
      date,
      priority,
      image,
    };

    // API call or local handling
    console.log("New Trip:", newTrip);

    // ✅ Show toast notification
    toast.success("Trip added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    // Clear form after submission
    setTitle("");
    setShortDesc("");
    setFullDesc("");
    setPrice("");
    setDate("");
    setPriority("");
    setImage("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <ToastContainer />

      <form className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg border border-gray-200" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Add New Trip
        </h1>

        {/* Title */}
        <label className="block mb-2 font-semibold">Title</label>
        <input
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-400 transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Short Description */}
        <label className="block mb-2 font-semibold">Short Description</label>
        <input
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-400 transition"
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
          required
        />

        {/* Full Description */}
        <label className="block mb-2 font-semibold">Full Description</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-400 transition"
          rows="4"
          value={fullDesc}
          onChange={(e) => setFullDesc(e.target.value)}
          required
        />

        {/* Price */}
        <label className="block mb-2 font-semibold">Price</label>
        <input
          type="number"
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-400 transition"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        {/* Date */}
        <label className="block mb-2 font-semibold">Date</label>
        <input
          type="date"
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-400 transition"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        {/* Priority */}
        <label className="block mb-2 font-semibold">Priority</label>
        <select
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-400 transition"
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
          className="w-full p-3 border border-gray-300 rounded mb-6 focus:ring-2 focus:ring-blue-400 transition"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
