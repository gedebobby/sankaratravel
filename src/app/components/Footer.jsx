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
            <h4 className="text-3xl text-white mb-4">Bali Horizon</h4>

            <p className="leading-relaxed text-neutral-400 max-w-lg">
              Premium Bali private tours and travel experiences designed for
              unforgettable tropical adventures.
            </p>
          </div>

          <div className="md:text-right space-y-3">
            <p>Denpasar, Bali, Indonesia</p>
            <p>+62 812 3456 7890</p>
            <p>hello@balihorizon.com</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-neutral-500">
          © 2026 Bali Horizon. All rights reserved.
        </div>
      </footer>
    </>
  );
}
