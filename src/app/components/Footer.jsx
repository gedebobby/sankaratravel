import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        id="contact"
        className="bg-black text-neutral-300 py-16 px-6 lg:px-10"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h4 className="text-3xl text-white mb-4">Aryana Tour</h4>

            <p className="leading-relaxed text-neutral-400 max-w-lg">
              Bali private tours experiences designed for unforgettable tropical
              adventures.
            </p>
          </div>

          <div className="md:text-right space-y-3">
            <p className="block">
              Perumahan Giri Asri, Blok I/7, Mumbul,
              <br />
              Kuta Selatan, Badung, Bali, Indonesia
            </p>

            <a
              href="https://wa.me/6281337921417"
              target="_blank"
              className="block hover:text-white transition"
            >
              +62 813 3792 1417
            </a>

            <a
              href="mailto:ketutaryana16@gmail.com"
              className="block hover:text-white transition"
            >
              ketutaryana16@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Aryana Bali Tour. All rights reserved.
        </div>
      </footer>
    </>
  );
}
