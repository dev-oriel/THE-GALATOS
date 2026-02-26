import React from "react";

const HomePage = () => {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070')",
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-5xl font-light tracking-tight text-white md:text-7xl lg:leading-[1.1]">
            Handcrafted Pieces for <br />{" "}
            <span className="italic font-normal">Everyday Elegance</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90 font-light font-display">
            Curated artisanal goods designed for the modern minimalist
            lifestyle.
          </p>
          <button className="mt-10 rounded-full bg-white px-10 py-4 text-sm font-bold tracking-widest uppercase text-text-main shadow-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
            Shop New Collection
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">
              The Selection
            </span>
            <h2 className="mt-2 text-4xl font-light tracking-tight">
              The Editorial Edit
            </h2>
          </div>
          <a
            className="text-sm font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors"
            href="#"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Tote Bags", "Jewelry", "Hand Knits"].map((item) => (
            <div
              key={item}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-neutral-soft bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000')",
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-2xl font-medium text-white">{item}</h3>
                <p className="mt-2 text-sm text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 underline decoration-primary underline-offset-4">
                  Explore Collection
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
