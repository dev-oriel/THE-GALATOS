import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-neutral-soft/50 dark:border-primary/10 py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-2 text-text-main dark:text-slate-100 opacity-50">
            <span className="material-symbols-outlined text-primary">
              auto_awesome
            </span>
            <h2 className="text-lg font-extrabold tracking-tighter uppercase italic">
              Elegance
            </h2>
          </div>

          <div className="flex flex-wrap gap-8 text-sm text-text-muted font-display">
            {["Shipping", "Returns", "Contact", "Privacy"].map((item) => (
              <a
                key={item}
                className="hover:text-primary transition-colors"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              className="text-text-muted hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              className="text-text-muted hover:text-primary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-text-muted/60 uppercase tracking-widest">
          © 2026 Elegance Minimalist Fashion. Crafted for slow living.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
