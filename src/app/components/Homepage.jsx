"use client";

import Navbar from "./Navbar";

export default function HomePage() {
  const tours = [
    {
      title: "Ubud Nature Escape",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1200&auto=format&fit=crop",
      description:
        "Explore waterfalls, rice terraces, and sacred temples in the heart of Bali.",
    },
    {
      title: "Nusa Penida Adventure",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
      description:
        "Discover crystal-clear beaches and dramatic cliffs on a full-day island tour.",
    },
    {
      title: "Sunset Uluwatu Tour",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Experience the iconic Uluwatu sunset and traditional Kecak performance.",
    },
  ];

  return (
    <main className="bg-white text-neutral-800 overflow-hidden">
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        {/* NAVBAR */}
        <Navbar />

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="uppercase tracking-[0.35em] text-sm mb-6 text-neutral-200">
            Explore The Island Of Gods
          </p>

          <h2 className="text-5xl md:text-7xl leading-tight font-light mb-8">
            Luxury Bali Travel
            <br />& Private Tours
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-neutral-200 leading-relaxed mb-10">
            Curated Bali experiences designed for unforgettable adventures,
            tropical escapes, and authentic island moments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tours"
              className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition"
            >
              Explore Tours
            </a>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
            About Us
          </p>

          <h3 className="text-4xl md:text-5xl leading-tight font-light mb-8">
            Discover Bali Beyond The Ordinary
          </h3>

          <p className="text-neutral-600 leading-relaxed mb-6">
            We provide premium Bali tour experiences tailored for couples,
            families, solo travelers, and private groups seeking authentic
            island adventures.
          </p>

          <p className="text-neutral-600 leading-relaxed mb-10">
            From scenic rice terraces and hidden waterfalls to luxury beach
            clubs and cultural landmarks, every journey is carefully crafted to
            create unforgettable memories.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-4xl font-light mb-2">500+</h4>
              <p className="text-neutral-500">Happy Travelers</p>
            </div>

            <div>
              <h4 className="text-4xl font-light mb-2">4.9★</h4>
              <p className="text-neutral-500">Customer Rating</p>
            </div>
          </div>
        </div>

        <div className="relative h-[650px] rounded-[32px] overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200&auto=format&fit=crop"
            alt="Bali Travel"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* TOURS */}
      <section id="tours" className="bg-neutral-100 py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
              Popular Tours
            </p>

            <h3 className="text-4xl md:text-5xl font-light mb-6">
              Handpicked Bali Experiences
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              Choose from our most popular Bali destinations and curated private
              tours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <div
                key={index}
                className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <div className="h-[320px] overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-8">
                  <h4 className="text-2xl font-medium mb-4">{tour.title}</h4>

                  <p className="text-neutral-600 leading-relaxed mb-8">
                    {tour.description}
                  </p>

                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:opacity-70 transition"
                  >
                    Book via WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
            Why Choose Us
          </p>

          <h3 className="text-4xl md:text-5xl font-light mb-6">
            Travel With Comfort & Confidence
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-10 rounded-[28px] bg-neutral-100">
            <h4 className="text-2xl mb-4">Private Tours</h4>
            <p className="text-neutral-600 leading-relaxed">
              Flexible and personalized itineraries tailored to your travel
              style.
            </p>
          </div>

          <div className="p-10 rounded-[28px] bg-neutral-100">
            <h4 className="text-2xl mb-4">Professional Drivers</h4>
            <p className="text-neutral-600 leading-relaxed">
              Friendly local drivers with years of Bali tourism experience.
            </p>
          </div>

          <div className="p-10 rounded-[28px] bg-neutral-100">
            <h4 className="text-2xl mb-4">Fast Booking</h4>
            <p className="text-neutral-600 leading-relaxed">
              Simple WhatsApp booking process with quick response support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')",
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
            href="https://wa.me/6281234567890"
            target="_blank"
            className="inline-flex px-10 py-5 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition"
          >
            Book Now via WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
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

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition"
      >
        WhatsApp
      </a>
    </main>
  );
}
