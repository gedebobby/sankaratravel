// components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-black/55" />

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="uppercase tracking-[0.5em] text-sm mb-6 text-neutral-200">
          Explore The Island Of Gods
        </p>

        <h2 className="text-5xl md:text-7xl leading-tight tracking-wide font-light mb-8">
          Bali Travel & Private Tours
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-neutral-200 tracking-wider leading-relaxed mb-10">
          Your Trusted Local Partner to Explore the Beauty of Bali
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
  );
}
