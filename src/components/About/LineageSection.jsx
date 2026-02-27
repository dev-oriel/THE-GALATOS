import React from "react";

const LineageSection = () => (
  <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight">
          Bridging the gap between lineage and living.
        </h2>
        <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          <p>
            At Afro-Modern Craft, we believe that luxury isn't just about the
            final product; it's about the hours of quiet dedication, the rhythm
            of the loom, and the stories passed down through generations of
            master artisans.
          </p>
          <p>
            Our mission is to preserve the legacy of handmade excellence while
            redefining luxury for the conscious consumer.
          </p>
        </div>
        <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center gap-2">
          Meet our Artisans{" "}
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </div>
      <div className="relative group">
        <div className="aspect-[4/5] bg-primary/10 overflow-hidden rounded-2xl">
          <img
            alt="Artisan"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs0-8QI11fSH5wZyAHAKZrrd1h3xAo0qSjDBUPUzbAo3_ivYAAHUD_6tOfwVOlYJXKdlpTaTWK048zOjE73GoGW0q_GRCTf0iSI7P3uwNQPTL5rLrlwALmHdc5h8MK56VnC6jTc-Pv_j5Ox0O6auzuJ8s4DAAt6Iws_CCqFfyiylxMQQr-CjwciD-hYEfAuOilDCkR4moKDDREldfwoWoLI1qPh4CISEGzsw28jA8xp6sbQtLWQMm4pM-fRn3BTm_fSCDsYC1aBmi_"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-background-light dark:bg-background-dark p-6 border border-primary/20 shadow-xl max-w-xs rounded-xl">
          <p className="font-serif italic text-primary text-xl">
            "The wood speaks, I simply listen to what it wants to become."
          </p>
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            — Master Koffi, Ivory Coast
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default LineageSection;
