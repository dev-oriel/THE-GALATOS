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
          <div className="mt-12 text-center text-xs text-text-muted/60">
            © 2024 Elegance Minimalist Fashion. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
