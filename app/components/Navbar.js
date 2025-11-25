"use client";
import Link from "next/link";
import useAuth from "../useAuth";
import { getAuth, signOut } from "firebase/auth";

export default function Navbar() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
      {/* LEFT */}
      <div className="navbar-start">

        {/* MOBILE MENU BUTTON */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          {/* MOBILE MENU ITEMS */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link href= "/destinations" >Destinations</Link></li>
            <li><a>My Booking</a></li>

            <li><Link href= "/add-trip" >Add Trip</Link></li>
            <li><Link href="/manage-trip">Manage Trip</Link></li>

            {user && (
              <li>
                <button onClick={handleLogout} className="text-red-600">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* LOGO */}
        <Link href="/" className="btn btn-ghost text-xl">Traveloop</Link>
      </div>

      {/* CENTER – Desktop only */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href= "/destinations" >Destinations</Link></li>
          <li><a>My Booking</a></li>

          <li><Link href={user ? "/add-trip" : "/login"}>Add Trip</Link></li>
          <li><Link href="/manage-trip">Manage Trip</Link></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="user" />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <h1 className="font-semibold px-3">{user.displayName}</h1>

              <li><Link href="/add-trip">Add Trip</Link></li>
              <li><Link href="/manage-trip">Manage Trip</Link></li>

              <li>
                <button onClick={handleLogout} className="text-red-600">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/login" className="btn">Login</Link>
        )}
      </div>
    </div>
  );
}
