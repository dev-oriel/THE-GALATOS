import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="sticky top-0 z-50 w-full border-b border-neutral-soft/50 bg-background-light/80 backdrop-blur-md">
    <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-20">
      <div className="flex items-center gap-12">
        <Link to="/" className="flex items-center gap-2 text-text-main">
          <span className="material-symbols-outlined text-primary text-3xl">
            auto_awesome
          </span>
          <h2 className="text-xl font-extrabold tracking-tighter uppercase italic font-display">
            Elegance
          </h2>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Our Story
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined p-2 hover:bg-neutral-soft rounded-full">
          shopping_bag
        </button>
        <button className="material-symbols-outlined p-2 hover:bg-neutral-soft rounded-full">
          person
        </button>
      </div>
    </div>
  </header>
);

export default Navbar;
