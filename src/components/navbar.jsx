import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full height-4 px-10 py-6 shadow-xl flex fixed t-0 l-0 z-40 bg-gradient-to-r from-indigo-800 to-violet-600 text-white font-bold">
      <h1 className="">
        {" "}
        <span className="ml-auto">XOrithm Servers Status</span>{" "}
      </h1>
      <Link href="login" className="ml-auto">
        Logout
      </Link>
    </nav>
  );
}
