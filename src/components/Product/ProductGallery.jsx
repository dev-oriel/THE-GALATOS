import React from "react";

const ProductGallery = ({ images }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Hero Image */}
      <div className="aspect-[4/5] bg-slate-200 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={images[0]}
          alt="Product Main"
        />
      </div>

      {/* Secondary Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-square bg-slate-200 overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={images[1]}
            alt="Detail 1"
          />
        </div>
        <div className="aspect-square bg-slate-200 overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={images[2]}
            alt="Detail 2"
          />
        </div>
      </div>

      {/* Final Detail */}
      <div className="aspect-[4/5] bg-slate-200 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={images[3]}
          alt="Detail 3"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
