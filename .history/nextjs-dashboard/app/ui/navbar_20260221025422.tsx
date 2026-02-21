"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
{/* Header with Nav */}
      <header className="flex justify-between items-center p-4 bg-blue-500 text-white rounded-lg">
        <AcmeLogo />
        
          <Link href="/login" className="flex items-center gap-2 bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
              Log in <ArrowRightIcon className="w-4 h-4" />
          </Link>
      </header>
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Cooperative</h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/customers">Customers</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 bg-blue-600 p-4 rounded">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/customers" onClick={() => setMenuOpen(false)}>Customers</Link>
          <Link href="/membership" onClick={() => setMenuOpen(false)}>Membership</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}