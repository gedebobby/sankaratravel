"use client";

import React from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Michael Carter",
      country: "Australia",
      review:
        "Amazing Bali experience! Everything was perfectly organized and our driver was incredibly friendly and helpful throughout the journey.",
    },
    {
      name: "Sophie Williams",
      country: "United Kingdom",
      review:
        "Highly recommended for anyone visiting Bali. The tour was comfortable, flexible, and we discovered so many beautiful hidden places.",
    },
    {
      name: "Daniel Kim",
      country: "South Korea",
      review:
        "Professional service and unforgettable memories. The sunrise tour at Mount Batur was definitely the highlight of our trip.",
    },
    {
      name: "Emily Johnson",
      country: "United States",
      review:
        "Very responsive team and excellent hospitality. Everything felt smooth from airport pick-up until the end of our private tour.",
    },
  ];

  return (
    <section className="bg-[#f7f4ef] py-24 px-6 lg:px-10 overflow-hidden">
      <div className="container-nav">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-sm text-neutral-500 mb-5">
              Google Reviews
            </p>

            <h2 className="text-4xl md:text-6xl font-light text-neutral-900 leading-tight mb-6">
              Loved By Travelers
              <br />
              Around The World
            </h2>

            <p className="text-neutral-600 leading-relaxed text-lg">
              Real experiences shared by travelers who explored Bali with our
              private tours and local services.
            </p>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-5xl font-light text-neutral-900">4.9</span>

              <div className="flex text-xl">⭐⭐⭐⭐⭐</div>
            </div>

            <p className="text-neutral-500 uppercase tracking-[0.2em] text-sm">
              Based On Google Reviews
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] md:min-w-[420px] bg-white rounded-[32px] p-8 border border-black/10 shadow-sm snap-start"
            >
              {/* Stars */}
              <div className="flex text-lg mb-6">⭐⭐⭐⭐⭐</div>

              {/* Review */}
              <p className="text-neutral-700 leading-relaxed text-lg mb-10">
                “{item.review}”
              </p>

              {/* User */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-medium text-neutral-900">
                    {item.name}
                  </h4>

                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mt-1">
                    {item.country}
                  </p>
                </div>

                {/* Google Badge */}
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-xl">
                  G
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
