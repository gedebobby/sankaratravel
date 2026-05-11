import React from "react";
import Link from "next/link";

export default function ServiceSection() {
  const services = [
    {
      title: "Activity & Attraction Tickets",
      price: "Best Deals Available",
      description:
        "Book Bali’s top attractions, cultural experiences, and adventure activities with trusted local service.",
      link: "/services/activity-tickets",
    },
    {
      title: "Airport / Hotel Transfers",
      price: "Start From IDR 200K",
      description:
        "Comfortable private transfers across Bali with professional and friendly local drivers.",
      link: "/services/airport-transfer",
    },
    {
      title: "Half Day Private Tours",
      price: "IDR 550K",
      description:
        "Flexible Bali tours designed for travelers who want to explore more destinations in less time.",
      link: "/services/half-day-tour",
    },
    {
      title: "Private Bali Experience",
      price: "IDR 650K",
      description:
        "Personalized journeys with relaxing routes, scenic views, and authentic Bali experiences.",
      link: "/services/private-experience",
    },
    {
      title: "Full Day Exploration Journey",
      price: "IDR 800K - 1000K",
      description:
        "Enjoy a full-day Bali adventure visiting stunning temples, scenic landscapes, waterfalls, beaches, and hidden destinations with a flexible private tour experience.",
      link: "/services/full-exploration",
    },
  ];

  return (
    <section id="services" className="relative">
      {/* Background Decoration */}
      {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-40" /> */}

      <div className="container-nav relative z-10">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-sm text-neutral-500 mb-5">
              Travel Services
            </p>

            <h2 className="text-4xl md:text-6xl font-light text-neutral-900 leading-tight mb-6">
              Crafted For Your
              <br />
              Bali Escape
            </h2>

            <p className="text-neutral-600 leading-relaxed text-lg max-w-2xl">
              Explore Bali comfortably with curated private tours, seamless
              transfers, and unforgettable local experiences designed for every
              traveler.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="border-t border-black/10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-[100px_1fr_220px] gap-8 items-center py-10 border-b border-black/10"
            >
              {/* Number */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-400">0{index + 1}</span>

                <div className="hidden lg:block w-10 h-[1px] bg-black/10" />
              </div>

              {/* Content */}
              <div className="transition duration-500 group-hover:translate-x-2">
                <h3 className="text-2xl md:text-3xl font-light text-neutral-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed max-w-2xl">
                  {service.description}
                </p>
              </div>

              {/* Right Side */}
              <div className="flex flex-col lg:items-end gap-5">
                <p className="uppercase tracking-[0.2em] text-sm text-neutral-500">
                  {service.price}
                </p>

                <Link
                  href="https://wa.me/6281337921417?text=Hello%20Aryana%20Tour%2C%20I%20would%20like%20to%20book%20a%20tour%20transportation%20service."
                  className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] group/button"
                >
                  <span>Explore</span>

                  <span className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition group-hover/button:bg-black group-hover/button:text-white">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
