import React from "react";

const HomePage = () => {
  return (
    <main className="flex-1">
      {/* 1. HERO SECTION */}
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
          <h1 className="max-w-4xl text-5xl font-light tracking-tight text-white md:text-7xl lg:leading-[1.1] font-display">
            Handcrafted Pieces for <br />{" "}
            <span className="italic font-normal">Everyday Elegance</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90 font-light">
            Curated artisanal goods designed for the modern minimalist
            lifestyle. Sustainability met with timeless craftsmanship.
          </p>
          <button className="mt-10 rounded-full bg-white px-10 py-4 text-sm font-bold tracking-widest uppercase text-text-main shadow-lg hover:bg-primary hover:text-white transition-all duration-300">
            Shop New Collection
          </button>
        </div>
      </section>

      {/* 2. CATEGORIES GRID (THE EDITORIAL EDIT) */}
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
            View All Categories
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            title="Tote Bags"
            img="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000"
          />
          <CategoryCard
            title="Jewelry"
            img="https://images.unsplash.com/photo-1611085583191-a3b1a308c1f1?q=80&w=1000"
          />
          <CategoryCard
            title="Hand Knits"
            img="https://images.unsplash.com/photo-1608060434411-0c3fa90ca5fe?q=80&w=1000"
          />
        </div>
      </section>

      {/* 3. VALUES SECTION (THE ARTISAN PROCESS) */}
      <section className="bg-neutral-soft/20 dark:bg-background-dark/50 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">
                Our Philosophy
              </span>
              <h2 className="mt-4 text-5xl font-light leading-tight tracking-tight">
                The Artisan Process
              </h2>
              <p className="mt-8 text-lg text-text-muted leading-relaxed">
                We believe in quality over quantity. Every piece in our
                collection is born from a slow, intentional process using
                ethically sourced materials.
              </p>

              <div className="mt-12 space-y-8">
                <ValueItem
                  icon="eco"
                  title="Ethically Sourced"
                  desc="Direct partnerships with local artisans ensure fair wages."
                />
                <ValueItem
                  icon="front_hand"
                  title="Handmade with Love"
                  desc="Every stitch and weave is performed with a level of care machines cannot replicate."
                />
                <ValueItem
                  icon="schedule"
                  title="Timeless Design"
                  desc="Aesthetics that transcend seasons, designed for a lifetime."
                />
              </div>
            </div>

            <div className="relative h-[600px] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80"
                className="h-full w-full object-cover"
                alt="Artisan hands working"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 text-center lg:px-20 border-t border-neutral-soft/50 dark:border-primary/10">
        <h3 className="text-3xl font-light tracking-tight italic">
          Join our slow living community
        </h3>
        <p className="mt-4 text-text-muted">
          Sign up for editorial stories, new arrivals, and studio updates.
        </p>
        <form
          className="mt-10 mx-auto flex max-w-md gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="flex-1 rounded-lg border-neutral-soft bg-transparent px-4 focus:ring-primary dark:border-primary/20"
            placeholder="Email Address"
            type="email"
          />
          <button className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
};

/* Internal Sub-components for better organization */
const CategoryCard = ({ title, img }) => (
  <div className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer">
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url(${img})` }}
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
    <div className="absolute bottom-10 left-10">
      <h3 className="text-2xl font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 underline decoration-primary underline-offset-4">
        Explore Collection
      </p>
    </div>
  </div>
);

const ValueItem = ({ icon, title, desc }) => (
  <div className="flex items-start gap-5">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div>
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="mt-1 text-text-muted">{desc}</p>
    </div>
  </div>
);

export default HomePage;
