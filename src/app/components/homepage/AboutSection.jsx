import { MapPinned, CarTaxiFront, Sparkles } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
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
    <>
      <section
        id="about"
        className="container-nav grid lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl leading-tight font-light mb-8 uppercase">
            Discover Bali With Local Expertise
          </h2>

          <p className="text-neutral-600 leading-relaxed mb-6">
            At Aryana Bali Tour, we believe that every journey in Bali should
            feel meaningful, exciting, and unforgettable. Surrounded by
            breathtaking landscapes, vibrant traditions, and warm hospitality,
            Bali offers more than just destinations — it offers experiences that
            stay with you long after the trip ends.
          </p>

          <p className="text-neutral-600 leading-relaxed mb-6">
            We focus on creating tour experiences that are relaxed,
            well-organized, and tailored to each guest’s interests. Whether you
            are visiting Bali for adventure, culture, relaxation, or a
            combination of everything, we aim to make every moment enjoyable and
            stress-free.
          </p>
        </div>

        <div className="relative h-[400px] lg:h-[650px] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/assets/img/about.webp"
            alt="Bali Travel"
            className="w-full h-full object-cover"
            width={1920}
            height={1280}
          />
        </div>
      </section>
      <section className="">
        <div className="container-nav grid lg:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index} className="group flex flex-col">
                {/* Top */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-light text-neutral-900 mb-5 leading-tight">
                  {feature.title}
                </h3>

                {/* Line */}
                <div className="w-full h-px bg-black/10 mb-6 group-hover:w-24 transition-all duration-500" />

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
