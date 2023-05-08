import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white">
      <div className="lg:w-2/3 mx-auto p-4 flex items-center justify-between">
        <div>
          <Link href="/" className="text-orange-400 font-bold">
            Melange Media
          </Link>
        </div>
        <div>
          <Link href="/stories">
            <p>Stories</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
