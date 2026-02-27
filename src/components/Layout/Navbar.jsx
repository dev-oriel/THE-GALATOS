import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Mapping the nav items to their actual routes
  const navLinks = [
    { name: "Shop", path: "/shop" },
    { name: "Bags", path: "/shop" }, // You can filter these later
    { name: "Jewelry", path: "/shop" }, // You can filter these later
    { name: "Handmade", path: "/shop" }, // You can filter these later
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-soft/50 bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80 dark:border-primary/20 transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-20">
        <div className="flex items-center gap-12">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-text-main dark:text-slate-100 group"
          >
            <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:rotate-12">
              auto_awesome
            </span>
            <h2 className="text-xl font-extrabold tracking-tighter uppercase italic font-display">
              Elegance
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-text-main dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-xl">
              search
            </span>
            <input
              className="h-10 w-48 rounded-lg border-none bg-neutral-soft/30 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary dark:bg-primary/10 dark:text-slate-100 placeholder:text-text-muted/60"
              placeholder="Search collection..."
              type="text"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Wishlist/Favorites Icon from your Artisan page */}
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-soft/50 dark:hover:bg-primary/20 transition-colors text-text-main dark:text-slate-200">
              <span className="material-symbols-outlined">favorite</span>
            </button>

            {/* Shopping Bag with Badge */}
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-soft/50 dark:hover:bg-primary/20 transition-colors text-text-main dark:text-slate-200">
              <span className="material-symbols-outlined">shopping_bag</span>
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">
                2
              </span>
            </button>

            {/* Profile Avatar */}
            <button className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border border-primary/20 ml-2">
              <img
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnoo5T0FdqYMpT8RP_0iD94AZFLKYloFZ6lqLGNmTf7hknHoBy31jgLh5UiMCUFMS8Hwm5Uya5oy5SxaXhvDCqzYP9qSwyUsFmGWALmE35N31eqnXsmDNeZAYUAUinUOUkkYFpKTDKFVJTssmf2DbZO33yrA5E5jStjIGTkcke3MHDNnfzoStcLQGuqTS7uLsbKrIZ3v-WJwROgFb_99XhDiOtnmkuogne9WPk69ewsDHOclGOawgRXbGiF86Ufcs0Hh-WxJiEpn7Y"
                alt="User profile"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
