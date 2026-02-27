import React from "react";

const ProductExtraInfo = () => {
  return (
    <section className="mt-24 border-t border-primary/10 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Materials */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              inventory_2
            </span>
            Materials & Care
          </h4>
          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
            {[
              "Full-grain vegetable-tanned Italian leather",
              "Hand-waxed linen thread",
              "Solid brass hardware",
              "Unlined interior",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Artisan's Note */}
        <div className="bg-primary/5 p-8 rounded-xl space-y-4 border border-primary/10 relative">
          <span className="material-symbols-outlined absolute top-4 right-4 text-primary/20 text-4xl">
            format_quote
          </span>
          <h4 className="text-lg font-bold">Artisan's Note</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed">
            "I designed the Heritage Tote to be the last bag you'll ever need.
            The beauty of this leather is that it's alive..."
          </p>
          <div className="flex items-center gap-3 pt-2">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtkypdgCOY9Vpzc9f3aqAJgTn7sPNXUpChFJF7pvBfDYZ5nCrm6AkZi0cu7yngTFwE1b2egqOHLWFOX77TNn-IeThWoUN3y4HCHahc969Pk86bH4T9ZC2Zq-ISp9nQMnyNQ66KdoPoWNFGJTp-5IaqCyqdnD7uyd2hSPS8s_CsHhi2ml7wCyZXnXWdzAI3fIyi6BVQIVyC65K7DV-0U2q3IvT9susMCNfgpcf2Wr6LD4Pv51v35gKZEp-BSG-522eW91jtbFBt7GVG"
              alt="Marco Rossi"
            />
            <div>
              <p className="text-sm font-bold">Marco Rossi</p>
              <p className="text-xs text-slate-500">Master Leatherworker</p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              reviews
            </span>
            Recent Reviews
          </h4>
          <div className="space-y-4">
            <ReviewItem
              name="Sarah K."
              comment="The leather feels incredibly premium. Beautiful patina."
            />
            <button className="text-sm font-bold text-primary hover:underline underline-offset-4">
              Read all 48 reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewItem = ({ name, comment }) => (
  <div className="border-b border-primary/5 pb-4">
    <div className="flex items-center gap-1 text-primary mb-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-xs fill-current"
        >
          star
        </span>
      ))}
    </div>
    <p className="text-xs text-slate-500 mt-1">"{comment}"</p>
    <p className="text-[10px] text-slate-400 mt-2">— {name}</p>
  </div>
);

export default ProductExtraInfo;
