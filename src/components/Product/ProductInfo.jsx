import React from "react";

const ProductInfo = ({
  product,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div className="lg:sticky lg:top-24 space-y-8">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight">{product.name}</h2>
        <div className="flex items-center gap-4">
          <p className="text-2xl font-medium text-primary">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex items-center gap-1 text-yellow-600">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-sm fill-current"
              >
                star
              </span>
            ))}
            <span className="text-xs text-slate-500 ml-1">
              ({product.reviewsCount} reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-sm uppercase tracking-wider">
          The Story of Craftsmanship
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Variants */}
      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold mb-3">
            Color: <span className="text-slate-500">{selectedColor}</span>
          </p>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-10 h-10 rounded-full border-2 p-0.5 transition-all ${selectedColor === color.name ? "border-primary" : "border-transparent"}`}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: color.hex }}
                ></div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm font-semibold">Size</p>
            <button className="text-xs font-medium text-primary underline underline-offset-4">
              Size Guide
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-3 px-4 border-2 font-bold rounded transition-all ${selectedSize === size ? "border-primary text-primary" : "border-primary/10 text-slate-500 hover:border-primary/40"}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="space-y-3 pt-4">
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95">
          <span className="material-symbols-outlined">shopping_cart</span>
          Add to Cart
        </button>
        <p className="text-center text-xs text-slate-500 italic">
          Free worldwide shipping on all artisan orders.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
