import React from "react";

const StoryPage = () => {
  return (
    <main className="flex-grow">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1590736961649-7100b3c8871b?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif italic text-5xl md:text-7xl text-white">
            The Heart of Every Stitch
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-text-main leading-tight">
              Bridging the gap between lineage and living.
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              At Afro-Modern Craft, we believe that luxury isn't just about the
              final product; it's about the hours of quiet dedication and the
              stories passed down through generations.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all">
              Meet our Artisans
            </button>
          </div>
          <div className="relative aspect-[4/5] bg-primary/10 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1000"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Artisan"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoryPage;
