import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXqVzoDHYUxsh6ZH_O7c01zOhdrcKDAS1CZ58ObR5NQW3T8aP3MzwSTJmKYZjeBzPmh828MAW84q6z4lfYSXsV7hUwfUDdrAPEkdFUfe32g03O2PuI2IT57PA0dkHklgD5LMILQ2AuALHVUlgoW-NAJxp9zfrIjtl_wxCx8VQZLIGVg9sbv03EnZcd0WYNztZyjcb1VdIDrJOkJbOakhpFxMX0_NluL-2EsExMcJNeCRp-fAQLdTcVdJz1KuEa_F6QQzGBlBw--J4l')",
        }}
      >
        <div className="absolute inset-0 bg-black/10 hero-gradient"></div>
      </div>
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-5xl font-light tracking-tight text-white md:text-7xl lg:leading-[1.1] font-display">
          Handcrafted Pieces for <br />{" "}
          <span className="italic font-normal">Everyday Elegance</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/90 font-light">
          Curated artisanal goods designed for the modern minimalist lifestyle.
          Sustainability met with timeless craftsmanship.
        </p>
        <button className="mt-10 rounded-full bg-white px-10 py-4 text-sm font-bold tracking-widest uppercase text-text-main shadow-lg hover:bg-primary hover:text-white transition-all duration-300">
          Shop New Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;
