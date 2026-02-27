import React from "react";

const PhilosophyItem = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center space-y-6">
    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
      <span className="material-symbols-outlined text-4xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold uppercase tracking-tighter">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

const PhilosophyGrid = () => (
  <section className="bg-primary/5 py-24 px-6 md:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-slate-900 dark:text-slate-100 mb-4">
          Our Craft Philosophy
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <PhilosophyItem
          icon="eco"
          title="Sustainably Sourced"
          desc="Earthy textures and natural fibers ethically harvested."
        />
        <PhilosophyItem
          icon="handshake"
          title="Ethically Made"
          desc="We guarantee fair wages and safe, dignified working environments."
        />
        <PhilosophyItem
          icon="history_edu"
          title="Timeless Design"
          desc="Modern silhouettes inspired by rich African heritage."
        />
      </div>
    </div>
  </section>
);

export default PhilosophyGrid;
