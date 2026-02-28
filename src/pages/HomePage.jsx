import React from "react";
import Hero from "../components/Home/Hero";
import EditorialGrid from "../components/Home/EditorialGrid";
import Philosophy from "../components/Home/Philosophy";

const HomePage = () => {
  return (
    <main className="flex-1">
      <Hero />
      <EditorialGrid />
      <Philosophy />

      {/* Simple Newsletter remains here or can be its own Shared component */}
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
            Subscribe button
          </button>
        </form>
      </section>
    </main>
  );
};

export default HomePage;
