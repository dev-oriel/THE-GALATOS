import React from "react";

const AboutHero = () => (
  <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0GzOuwoeu6MhSiA2b1UyxKvREZ6YnB4evqlD-47QH-zeXgV9Ne44xz3vOBe-yhel_99NIQIzO53OxGxPbLA17qXLOs4wkb0-fZq80XiMOcsA04Qk_88UcVtXOVXo2XbNq6JahL_JnPhk-Pi6qB_OMVTZKcxjjG86RrwSusyRQVQtP66udgj22HaLWEAIj3Ertu8Q1nedxEMxOSnhhhb03YRPuFH_3qHXi-UDsXDWrp1FPlpv5x-xOZFaqCDC_ETpzPAK214AQveGW')",
      }}
    ></div>
    <div className="absolute inset-0 bg-slate-900/40"></div>
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
);

export default AboutHero;
