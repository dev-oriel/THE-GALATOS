import React from "react";

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

const Philosophy = () => {
  return (
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
              We believe in quality over quantity. Every piece in our collection
              is born from a slow, intentional process using ethically sourced
              materials.
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
                desc="Every stitch and weave is performed with a level of care."
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkFv6R02UD5Li11FOWs93razcsX-8j924b6Htwy0yBngpGAPwYvlScEI8zCYGIDK4XTkgR8BeIe88SX1JJVE46WwMR_HbTYg4cPppm-5s6WAdyWgLUprtfUo4fJ9sS-wAq-Ci1bF317J5aKA_sp2ZDGPVoQHt8XkqZfJhgmO1eYVA-sL9tcY2mz32BWSChmDFMTV6l80keV3WDFy97n-lNQflIADwuHBH0Qwxw2v0Lh_XOni7vZ9ndTqTz1QG4j5TymGsfJE_qFhjG"
              className="h-full w-full object-cover"
              alt="Artisan hands working"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
