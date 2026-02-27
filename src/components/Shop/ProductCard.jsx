import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({
  id,
  image,
  title,
  category,
  price,
  isLimited,
  hasQuickAdd,
}) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart({ id, image, title, category, price });
  };

  return (
    <div className="group relative">
      <Link to={`/product/${id}`} className="block cursor-pointer">
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800 mb-5">
          <img
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={image}
            alt={title}
          />

          {isLimited && (
            <div className="absolute top-4 left-4">
              <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                Limited Edition
              </span>
            </div>
          )}

          {hasQuickAdd && (
            <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
              <button
                onClick={handleQuickAdd}
                className="w-full bg-white dark:bg-background-dark py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors shadow-lg"
              >
                Quick Add
              </button>
            </div>
          )}
        </div>

        <div className="space-y-1 px-1">
          <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-xs text-slate-500 uppercase tracking-widest">
            {category}
          </p>
          <p className="text-sm font-bold text-primary mt-2">${price}</p>
        </div>
      </Link>

      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={(e) => e.preventDefault()}
          className="h-8 w-8 rounded-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">favorite</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
