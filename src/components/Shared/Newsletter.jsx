import React from "react";

const Newsletter = () => (
  <section className="bg-primary py-20 px-6 md:px-20 text-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-white/80 text-lg">
          Receive stories from our workshops and early access to collections.
        </p>
      </div>
      <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
        <input
          className="bg-white/10 border border-white/20 px-6 py-4 rounded-lg min-w-[300px]"
          placeholder="Email address"
          type="email"
        />
        <button className="bg-background-light text-primary font-bold px-8 py-4 rounded-lg hover:bg-white transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  </section>
);

export default Newsletter;
