import React from "react";

export default function CTA() {
  return (
    <>
      <section className="relative py-28 text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/img/cta.webp')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-300 mb-4">
            Start Your Journey
          </p>

          <h3 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Plan Your Bali Adventure Today
          </h3>

          <p className="text-neutral-200 leading-relaxed mb-10 max-w-2xl mx-auto">
            Contact us directly via WhatsApp and let us help you create the
            perfect Bali experience.
          </p>

          <a
            href="https://wa.me/6281337921417?text=Hello%20Aryana%20Tour%2C%20I%20would%20like%20to%20book%20a%20tour."
            target="_blank"
            className="inline-flex px-10 py-5 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition"
          >
            Book Now via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
