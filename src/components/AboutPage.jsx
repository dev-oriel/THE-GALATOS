import React from "react";

const AboutPage = () => {
  return (
    <main className="grow">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1590736961649-7100b3c8871b?auto=format&fit=crop&q=80')`,
            filter: "brightness(0.7)",
          }}
        ></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-primary bg-background-light/90 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full mb-6 inline-block">
            Established 2018
          </span>
          <h1 className="font-serif italic text-5xl md:text-8xl text-white leading-tight mb-8">
            The Heart of Every Stitch
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            A journey through heritage, where ancestral wisdom meets the refined
            silhouette of modern minimalism.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 leading-tight">
              Bridging the gap between lineage and living.
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                At Afro-Modern Craft, we believe that luxury isn't just about
                the final product; it's about the hours of quiet dedication.
              </p>
            </div>
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center gap-2">
              Meet our Artisans{" "}
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
          <div className="aspect-[4/5] bg-primary/10 overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1617146059254-d1b14af77f85?auto=format&fit=crop&q=80"
              alt="Artisan"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
