"use client";

import Link from "next/link";
import useAuth from "../useAuth";
import { getAuth, signOut } from "firebase/auth";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { user } = useAuth();
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path
      ? "text-white bg-blue-600 rounded-md px-3 py-1 shadow-md"
      : "text-gray-200 hover:text-white hover:bg-white/20 rounded-md px-3 py-1";

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
    <div className="navbar bg-gradient-to-r from-blue-700 to-purple-600 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md border-b border-white/20">
      
      {/* LEFT */}
      <div className="navbar-start">

        {/* MOBILE MENU BUTTON */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          {/* MOBILE MENU ITEMS */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[50] p-3 shadow-lg 
            bg-white/90 backdrop-blur-md text-gray-800 rounded-xl w-56"
          >
             <li><Link href="/">Home</Link></li>
            <li>
              <Link className={isActive("/destinations")} href="/destinations">
                Destinations
              </Link>
            </li>
           
            <li><Link href="/add-trip">Add Trip</Link></li>
            <li><Link href="/manage-trip">Manage Trip</Link></li>

            {user && (
              <li>
                <button onClick={handleLogout} className="text-red-600 font-medium">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* LOGO */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide px-2">
          Traveloop
        </Link>
      </div>

      {/* CENTER – Desktop only */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 text-lg">
           <li><Link className={isActive("/")} href="/">Home</Link></li>
          <li><Link className={isActive("/destinations")} href="/destinations">Destinations</Link></li>
         

          <li>
            <Link className={isActive("/add-trip")} href={user ? "/add-trip" : "/login"}>
              Add Trip
            </Link>
          </li>

          <li><Link className={isActive("/manage-trip")} href="/manage-trip">Manage Trip</Link></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-white ring-offset-2">
                <img src={user.photoURL} alt="user" />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow-lg 
              bg-white/95 backdrop-blur-md text-gray-800 rounded-xl w-56"
            >
              <h1 className="font-semibold px-2">{user.displayName}</h1>

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
          <Link
            href="/login"
            className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow-md 
            hover:bg-blue-100 transition-all duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
