import React from "react";
import Link from "next/link";

export default function TourSection() {
  const tours = [
    {
      title: "Ubud Cultural Journey",
      slug: "ubud-cultural-journey",
      price: "IDR 1.000K",
      duration: "10 Hours",
      image:
        "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200&auto=format&fit=crop",
      description:
        "Explore the cultural heart of Bali through traditional villages, sacred temples, rice terraces, and hidden waterfalls surrounded by lush tropical scenery.",
    },
    {
      title: "Kintamani Highland Tour",
      slug: "kintamani-highland-tour",
      price: "IDR 1.200K",
      duration: "10 Hours",
      image:
        "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1200&auto=format&fit=crop",
      description:
        "Experience breathtaking views of Mount Batur, visit iconic temples, and discover the peaceful atmosphere of Bali’s beautiful highland region.",
    },
    {
      title: "Kintamani Adventure Experience",
      slug: "kintamani-adventure-experience",
      price: "IDR 1.200K",
      duration: "10 Hours",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      description:
        "Enjoy an unforgettable sunrise adventure with jeep rides, mountain landscapes, and refreshing morning views above the clouds at Mount Batur.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-10">
      <div className="container-nav">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
            Bali Tours
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
            Explore Bali Experiences
          </h2>

          <p className="text-neutral-600 leading-relaxed">
            Discover curated private tours across Bali’s most beautiful
            destinations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="group rounded-[28px] overflow-hidden border border-neutral-200 bg-white hover:shadow-xl transition duration-500"
            >
              {/* Image */}
              <div className="relative h-[340px] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] mb-2 opacity-80">
                    {tour.price} / {tour.duration}
                  </p>

                  <h3 className="text-2xl font-light leading-snug">
                    {tour.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {tour.description}
                </p>

                <Link
                  href={`/tours/${tour.slug}`}
                  className="inline-flex items-center justify-between w-full rounded-full border border-neutral-300 px-6 py-4 text-sm uppercase tracking-[0.2em] hover:bg-black hover:text-white transition"
                >
                  View Details
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
