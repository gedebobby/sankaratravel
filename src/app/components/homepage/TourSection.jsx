import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TourSection() {
  const tours = [
    {
      title: "Ubud",
      slug: "ubud",
      location: "Central Bali",
      image: "/assets/img/ubud.webp",
      description:
        "Famous for rice terraces, jungle scenery, waterfalls, art villages, and Bali’s cultural atmosphere.",
    },
    {
      title: "Kintamani",
      slug: "kintamani",
      location: "Highland Bali",
      image: "/assets/img/kintamani.webp",
      description:
        "Experience breathtaking volcano views, cool mountain air, coffee plantations, and sunrise adventures.",
    },
    {
      title: "Uluwatu",
      slug: "uluwatu",
      location: "South Bali",
      image: "/assets/img/uluwatu.webp",
      description:
        "Known for dramatic ocean cliffs, luxury beach clubs, world-class surf spots, and sunset views.",
    },
    {
      title: "Nusa Penida",
      slug: "nusa-penida",
      location: "Island Escape",
      image: "/assets/img/nusa-penida.webp",
      description:
        "Discover crystal-clear beaches, iconic cliff formations, snorkeling spots, and untouched island beauty.",
    },
    {
      title: "Bedugul",
      slug: "bedugul",
      location: "North Bali",
      image: "/assets/img/bedugul.webp",
      description:
        "Explore peaceful lakes, mountain landscapes, botanical gardens, and the iconic Ulun Danu Temple.",
    },
    {
      title: "Tanah Lot",
      slug: "tanah-lot",
      location: "West Bali",
      image: "/assets/img/tanah-lot.webp",
      description:
        "One of Bali’s most famous sea temples, perfect for cultural sightseeing and magical sunset moments.",
    },
  ];

  return (
    <section id="tours" className="bg-white">
      <div className="container-nav">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
              Bali Destinations
            </p>

            <h2 className="text-4xl md:text-6xl font-light text-neutral-900 leading-tight mb-6">
              Most Visited Places
              <br />
              In Bali
            </h2>

            <p className="text-neutral-600 leading-relaxed text-lg">
              Explore Bali’s iconic destinations loved by travelers from around
              the world.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[30px] bg-neutral-100"
            >
              {/* Image */}
              <div className="relative h-105 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  width={1080}
                  height={1080}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="uppercase tracking-[0.25em] text-xs opacity-80 mb-3">
                    {tour.location}
                  </p>

                  <h3 className="text-3xl font-light mb-4">{tour.title}</h3>

                  <p className="text-white/80 leading-relaxed mb-8">
                    {tour.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
