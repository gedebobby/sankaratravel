import React from "react";
import { MapPinned, CarTaxiFront, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: MapPinned,
      title: "Local Expertise",
      description:
        "Explore Bali with experienced local guides who know the island’s hidden gems, culture, and best destinations.",
    },
    {
      icon: CarTaxiFront,
      title: "Comfortable & Safe Transport",
      description:
        "Travel comfortably with clean private vehicles, professional drivers, and reliable transportation services.",
    },
    {
      icon: Sparkles,
      title: "Customizable Packages",
      description:
        "Flexible travel experiences tailored to your schedule, preferences, and the way you want to explore Bali.",
    },
  ];

  return (
    <div className="bg-white py-24 px-6 lg:px-10">
      <div className="container-nav">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-500 mb-5">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-6xl font-light text-neutral-900 leading-tight mb-6">
            Designed For
            <br />
            Better Bali Experiences
          </h2>

          <p className="text-neutral-600 leading-relaxed text-lg">
            We focus on comfort, flexibility, and authentic local experiences to
            make every Bali journey more memorable and stress-free.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group border border-black/10 rounded-[32px] p-8 hover:-translate-y-1 hover:shadow-xl transition duration-500"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition duration-500">
                  <Icon size={30} strokeWidth={1.7} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-light text-neutral-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
