import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-soft/50 bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-20">
        <div className="flex items-center gap-12">
          <Link
            to="/"
            className="flex items-center gap-2 text-text-main dark:text-slate-100"
          >
            <span className="material-symbols-outlined text-primary text-3xl">
              auto_awesome
            </span>
            <h2 className="text-xl font-extrabold tracking-tighter uppercase italic">
              Elegance
            </h2>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {["Shop", "Bags", "Jewelry", "Handmade", "About"].map((item) => (
              <Link
                key={item}
                to={item === "About" ? "/about" : "/"}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xl">
              search
            </span>
            <input
              className="h-10 w-48 rounded-lg border-none bg-neutral-soft/30 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary dark:bg-primary/10"
              placeholder="Search collection..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-soft/50 dark:hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-soft/50 dark:hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
