import React, { useState } from "react";
import ProductGallery from "../components/Product/ProductGallery";
import ProductInfo from "../components/Product/ProductInfo";
import ProductExtraInfo from "../components/Product/ProductExtraInfo";

const ProductDetails = () => {
  // State for variants to make it feel real
  const [selectedColor, setSelectedColor] = useState("Cognac");
  const [selectedSize, setSelectedSize] = useState("Classic (Medium)");

  // Data strictly following your prototype images
  const product = {
    name: "The Heritage Leather Tote",
    price: 245.0,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAo0d-zEY9uvrM-25XamIwkWdSPqfuH1kZpJ03IsoHbRFEF3uNOWVROYYjD-ErgiYBJS2vJM-IAutDgBZd4mlFVT6CM6h4xYFjFw8A11rfSopQurQcGHq9b9tRYva22pCm0cHMuSMQUP40YE6G3zmnRWbpBIU3UzyCCt1z1DgQCMYlKOESLovptNkowyULeyGe5yWOu4BL1JWVVqrI02Qo17dPNdk9ar__0JEJ7JMVSqvHb5ClIEsTccYg5ybLmlXtGdWA6gly9SF5A",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfxFSrMb7pfZci38JDUyXCCtFBqnw-gXgci_oiO_yfFI-LmLQ7us2weXnKnAaQPUnoAmXPCv8LzAZWsV8VC1sXLpFk_OnbW0qd9f7n8DDG4Ro7IycxzBFEbtk71xDf_1_Lrlofs0OTVIXntjoQQEqYf2sZDvFdnl6u-PGN7Odg72rjLBsnPBk_fuh0g4L7cQ7jwGkcwGsmboyjtWLMHBhN_ejrlIS3vljuVptTpmQ80bb4sHP91t7wfOnUL2BDQVTjMl7JagxeZM79",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBF8sXVvuOk0f9NI4A2ReRLinjoGIC-cnBXW6r8R6mPDg4z_GPlgdCy4Kwa8ia7JxRkfUVmz3T5eS9TSL184CJBaNNoCXOgDZFCtKstPa8L7VS8Ly6-ggnxJLb5rIjJDoTyKhw1oYIe5v2QMNYXDhFTzOQYb2FU4q8s7dQFuII3491ox9GXyj-O5gTjON9nvHENhRQhJYhpiH3cKK2FdeHJVJMeMhUOBOPub6tI6kLq1Z3_jlIG9giSEhZA6dW944n4vV7pMRBgR9cf",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-HS6WMsM-1ASuyYejMQ8-o3vV6RUyAZcNCuoI93EDXdMEwdlDHZcevIuUyhoipeAU4sSN9Nv924bzv8Gq4UPfDL2AWSV-4PktUseJZseptTFQa-Ql8UdIAs9uLwNw-D0Duda2DQ3RL46vChLCstiUqyyE24HpFfOpqv_LyUbEfXfPFGjEcZ5K4AsgghmiZoLuqN0mSajvgy92pTo7ifzdVT4D99URwogNb26O3GAXxjQvcCPARVK1kDIM31_mQiDvof3iQgPwTmLc",
    ],
    colors: [
      { name: "Cognac", hex: "#8b4513" },
      { name: "Espresso", hex: "#2c1e14" },
      { name: "Tan", hex: "#d2b48c" },
    ],
    sizes: ["Classic (Medium)", "Overnight (Large)"],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-display">
        <a className="hover:text-primary transition-colors" href="/">
          Home
        </a>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <a className="hover:text-primary transition-colors" href="/shop">
          Handmade Goods
        </a>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-slate-900 dark:text-slate-100 font-medium">
          {product.name}
        </span>
      </nav>

      {/* 2. Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Vertical Gallery */}
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} />
        </div>

        {/* Right: Sticky Sidebar */}
        <div className="lg:col-span-5">
          <ProductInfo
            product={product}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </div>
      </div>

      {/* 3. Materials, Artisan Note, and Reviews */}
      <ProductExtraInfo />

      {/* 4. Complements Section */}
      <RelatedProducts />
    </div>
  );
};

// Internal sub-component for Related Items using your images 25-28
const RelatedProducts = () => (
  <section className="mt-24 pb-24">
    <h3 className="text-2xl font-bold mb-8">Complements the Heritage Tote bags</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { title: "Slim Bi-Fold Wallet", price: "85.00", img: "25" },
        { title: "Artisan Key Fob", price: "35.00", img: "26" },
        { title: "Cord Organizer Set", price: "45.00", img: "27" },
        { title: "Extra Wide Strap", price: "60.00", img: "28" },
      ].map((item) => (
        <div key={item.title} className="group cursor-pointer">
          <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden mb-3">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={`http://googleusercontent.com/profile/picture/${item.img}`}
              alt={item.title}
            />
          </div>
          <p className="text-sm font-bold">{item.title}</p>
          <p className="text-sm text-primary">${item.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProductDetails;
