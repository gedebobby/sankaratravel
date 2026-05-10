// components/Navbar.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/80 py-4 shadow-lg backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-nav flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-white">
          MyBrand
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-white transition hover:text-gray-300"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-white transition hover:text-gray-300"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium text-white transition hover:text-gray-300"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="text-white md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5 bg-black/90 px-6 py-6 backdrop-blur-md">
          <Link href="/" className="text-white" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link
            href="/about"
            className="text-white"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-white"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white px-4 py-2 text-center text-white"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
