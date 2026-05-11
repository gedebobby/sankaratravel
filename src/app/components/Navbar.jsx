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

  // Prevent body scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const menus = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Tours",
      href: "#tours",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 z-[999] w-full transition-all duration-300 ${
          scrolled
            ? "bg-black/80 py-4 shadow-lg backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-nav flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="text-2xl leading-[90%] text-center font-bold tracking-wide text-white z-[999]"
          >
            ARYANA <br /> TOUR
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center md:gap-10 lg:gap-16 md:flex">
            {menus.map((menu, index) => (
              <a
                key={index}
                href={menu.href}
                className="text-md font-medium tracking-wider text-white transition hover:text-gray-300"
              >
                {menu.name}
              </a>
            ))}

            <a
              href="https://wa.me/6281337921417?text=Hello%20Aryana%20Tour%2C%20I%20would%20like%20to%20book%20a%20tour%20transportation%20service."
              target="_blank"
              className="rounded-full border border-white px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white z-[999] md:hidden"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-sm bg-black text-white z-40 transition-transform duration-500 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full px-8 py-32">
          {/* Menu */}
          <div className="flex flex-col gap-8">
            {menus.map((menu, index) => (
              <a
                key={index}
                href={menu.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-light tracking-wide hover:translate-x-1 transition"
              >
                {menu.name}
              </a>
            ))}
          </div>

          {/* Bottom */}
          <div className="space-y-6">
            <a
              href="https://wa.me/6281337921417?text=Hello%20Aryana%20Tour%2C%20I%20would%20like%20to%20book%20a%20tour%20transportation%20service."
              target="_blank"
              className="flex items-center justify-center rounded-full border border-white px-6 py-4 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Book Now
            </a>

            <p className="text-sm text-white/50 leading-relaxed">
              Explore Bali with private tours, local experiences, and
              unforgettable island journeys.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
