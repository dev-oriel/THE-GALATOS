import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80 transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="material-symbols-outlined text-primary text-3xl transition-transform duration-500 group-hover:rotate-180">
              auto_awesome
            </span>
            <h1 className="text-xl font-bold tracking-tighter uppercase italic font-display">
              Elegance
            </h1>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {["Shop", "Stories", "Process", "About"].map((item) => (
              <Link
                key={item}
                to={item === "About" ? "/about" : "/shop"}
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined hover:text-primary transition-colors">
            search
          </button>
          <button className="material-symbols-outlined hover:text-primary transition-colors">
            favorite
          </button>
          <Link
            to="/cart"
            className="relative hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
              2
            </span>
          </Link>
          <div
            className="w-8 h-8 rounded-full bg-cover bg-center border border-primary/20"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbD4i3uZJHVeYvwI9lKLLvZzdM7c0qXmgNDgIrmzxnN7e4Kd0X4fDEcyKKZL3t7bdXbnFd4ut0zHIYNlQuEjmD0EKt1y83rt-8c03qOKzPgii3vRzfXly30RFV44upQfdnFAMjperWNfTxUcZGhZ87VxgB2KMKrYZL9Hr4t6UrnEzxeqTPTWSvbmAfZ5rGsr0f14lgeN2brhg01stRqseC6Q7lGWX6eHeH0XtYkMzPI6FpBOKeLC2zNz_mvGxXHquSe4aGcpCRyLN2')",
            }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
