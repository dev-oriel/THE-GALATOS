import React, { useEffect } from "react";
import { useCart } from "../../context/CartContext";

const CartPreview = () => {
  const { lastAddedItem, showPreview, hidePreview } = useCart();

  useEffect(() => {
    if (showPreview) {
      const timer = setTimeout(() => {
        hidePreview();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showPreview, hidePreview]);

  if (!showPreview || !lastAddedItem) return null;

  return (
    <div className="fixed top-24 right-6 z-[100] w-full max-w-sm animate-in slide-in-from-right fade-in duration-300">
      <div className="bg-white dark:bg-background-dark border border-primary/20 shadow-2xl rounded-xl overflow-hidden">
        <div className="p-4 flex gap-4">
          <div className="h-16 w-14 bg-background-light dark:bg-slate-800 rounded overflow-hidden flex-shrink-0">
            <img
              src={lastAddedItem.image}
              alt={lastAddedItem.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest">
                Added to Basket
              </p>
              <button
                onClick={hidePreview}
                className="material-symbols-outlined text-sm text-slate-400 hover:text-primary transition-colors"
              >
                close
              </button>
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
              {lastAddedItem.title}
            </h4>
            <p className="text-xs text-slate-500">${lastAddedItem.price}</p>
          </div>
        </div>
        <div className="bg-primary/5 px-4 py-2 flex justify-between items-center border-t border-primary/5">
          <span className="text-[10px] font-medium text-slate-500 uppercase">
            Item added to bag
          </span>
          <button className="text-[10px] font-bold text-primary uppercase underline underline-offset-4">
            View Cart
          </button>
        </div>
        <div className="h-0.5 bg-primary/20 w-full">
          <div className="h-full bg-primary animate-[shrink_4s_linear]" />
        </div>
      </div>
    </div>
  );
};

export default CartPreview;
