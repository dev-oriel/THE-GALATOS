import React from "react";

const CategoryCard = ({ title, img }) => (
  <div className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer">
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url('${img}')` }}
    ></div>
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
    <div className="absolute bottom-10 left-10">
      <h3 className="text-2xl font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 underline decoration-primary underline-offset-4">
        Explore Collection
      </p>
    </div>
  </div>
);

const EditorialGrid = () => {
  return (
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
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuCE1T4CAkKPwFKrFah7a9vtr9Vpo4cv25F42-OZbQD5e87LSI87peb---ZexYyDyg0wubRaetgjBcGy__VpJICVS8ceFfO0VynHhl4cnAOXpix6ObBXwa1KZqK5MTzA19BqTz_k0hKUEGgXP5jr9t0sq1wvoZ1X3tuYbB9ValtYWL915cl0Pz_AqLXXouvNFr05pgChrLbsc9Je2YRIJyWdcpVRXEsY9QSS-eTJhRTcxFOh7Ikf24nRsP6TWE0-DnRQsuDH1-cQQKbi"
        />
        <CategoryCard
          title="Jewelry"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuDNWB1cLQgOCgOdBevoDCri_M6jlJjMwqLJhz6vu4mV14rke0jnjhbGXyrqpVnmOqoFJL2edFp3nw4xRod18tZSZ-AM3r9l5N1PQBbfm3azZgo8STgYu6O--PclR5hXQ5cQrvv6LedGB4Y8Ji2wv-gigg7FOC6ASW0nmTGG3DdFxmb_w1AG4-PzNaG2rZrwstlLxYOxz2V96hk9XhzS-EL-w2WDVhQMWPkfoGS3z3qFn2XgznB3t9oCBSlhNFrEivbZdqFy3A0ATQdA"
        />
        <CategoryCard
          title="Hand Knits"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuAXd36vYoyRzuZzlMuB7kqosYKpdiw8sSXoMKTFyBZl313XyqrzbbkXlnlbiZ6RSAFkqV7AuHQVEwFjhCgBmV3A_SZeqTC7EEd-97LW1FO9Jwhiv-EECfUJPL-pCRTHdufQn16hgiYr4j4LuK-VRj3rQRt7tfF-nb5lj0pgLccnPUjGALBtxksB-QMHU9g9E5dI0UjJ8jL1ecPvI-SZvMepMh0imE-BhCLKzcWXakrnPjXcPR4iPxuBihRDYxQGm1ryIiPNNqq6zAQR"
        />
      </div>
    </section>
  );
};

export default EditorialGrid;
