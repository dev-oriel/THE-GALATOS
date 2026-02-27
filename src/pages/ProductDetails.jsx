import React, { useState } from "react";
import ProductGallery from "../components/Product/ProductGallery";
import ProductInfo from "../components/Product/ProductInfo";
import ProductExtraInfo from "../components/Product/ProductExtraInfo";

const ProductDetails = () => {
  // State for interactivity
  const [selectedColor, setSelectedColor] = useState("Cognac");
  const [selectedSize, setSelectedSize] = useState("Classic (Medium)");

  const productData = {
    name: "The Heritage Leather Tote",
    price: 245.0,
    rating: 5,
    reviewsCount: 48,
    description:
      "Each bag is hand-cut from vegetable-tanned leather that ages beautifully. Our artisans spend 12 hours on every piece, ensuring a legacy of quality and a soul that mass-produced items lack.",
    colors: [
      { name: "Cognac", hex: "#8b4513" },
      { name: "Espresso", hex: "#2c1e14" },
      { name: "Tan", hex: "#d2b48c" },
    ],
    sizes: ["Classic (Medium)", "Overnight (Large)"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAo0d-zEY9uvrM-25XamIwkWdSPqfuH1kZpJ03IsoHbRFEF3uNOWVROYYjD-ErgiYBJS2vJM-IAutDgBZd4mlFVT6CM6h4xYFjFw8A11rfSopQurQcGHq9b9tRYva22pCm0cHMuSMQUP40YE6G3zmnRWbpBIU3UzyCCt1z1DgQCMYlKOESLovptNkowyULeyGe5yWOu4BL1JWVVqrI02Qo17dPNdk9ar__0JEJ7JMVSqvHb5ClIEsTccYg5ybLmlXtGdWA6gly9SF5A",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfxFSrMb7pfZci38JDUyXCCtFBqnw-gXgci_oiO_yfFI-LmLQ7us2weXnKnAaQPUnoAmXPCv8LzAZWsV8VC1sXLpFk_OnbW0qd9f7n8DDG4Ro7IycxzBFEbtk71xDf_1_Lrlofs0OTVIXntjoQQEqYf2sZDvFdnl6u-PGN7Odg72rjLBsnPBk_fuh0g4L7cQ7jwGkcwGsmboyjtWLMHBhN_ejrlIS3vljuVptTpmQ80bb4sHP91t7wfOnUL2BDQVTjMl7JagxeZM79",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBF8sXVvuOk0f9NI4A2ReRLinjoGIC-cnBXW6r8R6mPDg4z_GPlgdCy4Kwa8ia7JxRkfUVmz3T5eS9TSL184CJBaNNoCXOgDZFCtKstPa8L7VS8Ly6-ggnxJLb5rIjJDoTyKhw1oYIe5v2QMNYXDhFTzOQYb2FU4q8s7dQFuII3491ox9GXyj-O5gTjON9nvHENhRQhJYhpiH3cKK2FdeHJVJMeMhUOBOPub6tI6kLq1Z3_jlIG9giSEhZA6dW944n4vV7pMRBgR9cf",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-HS6WMsM-1ASuyYejMQ8-o3vV6RUyAZcNCuoI93EDXdMEwdlDHZcevIuUyhoipeAU4sSN9Nv924bzv8Gq4UPfDL2AWSV-4PktUseJZseptTFQa-Ql8UdIAs9uLwNw-D0Duda2DQ3RL46vChLCstiUqyyE24HpFfOpqv_LyUbEfXfPFGjEcZ5K4AsgghmiZoLuqN0mSajvgy92pTo7ifzdVT4D99URwogNb26O3GAXxjQvcCPARVK1kDIM31_mQiDvof3iQgPwTmLc",
    ],
  };

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 py-8 animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <a className="hover:text-primary transition-colors" href="/">
          Home
        </a>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <a className="hover:text-primary transition-colors" href="/shop">
          Handmade Goods
        </a>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-slate-900 dark:text-slate-100 font-medium">
          {productData.name}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Gallery Component */}
        <div className="lg:col-span-7">
          <ProductGallery images={productData.images} />
        </div>

        {/* Right: Info Component */}
        <div className="lg:col-span-5">
          <ProductInfo
            product={productData}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </div>
      </div>

      {/* Deep Details & Reviews */}
      <ProductExtraInfo />

      {/* Related Products Section */}
      <section className="mt-24 pb-24 border-t border-primary/10 pt-16">
        <h3 className="text-2xl font-bold mb-8">
          Complements the Heritage Tote
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <RelatedCard
            title="Slim Bi-Fold Wallet"
            price="85.00"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuA-p0UYN8jJZAphj9bOh95PnnGT-gUPjia_K_oOvhUYQ17J_dlBJrp10j9urY-qM7gJEQKJqmm8c1zgCcWDC_g1gsKhAh9zzi4RHE_t3HmFKxBLqxHNIKTe-jjDcWBDm3e9ypL-g5Mv_Xlez11Oiu-u8pN852cIrhkUlk2xHs7chQqMQVd7e2T8c3jN8-1_W-MRTzFWqq-HF1cQDnB-uEbarYmTxXg4iZK8jWGmncwlL9rQ6F13PePxxD-0_-40nKNcHq3opGPoxF1i"
          />
          <RelatedCard
            title="Artisan Key Fob"
            price="35.00"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDJCwEeaDgGH0GPkPF9L-r_J7i3drI5npQoqvh_sqkRHZ4kyjqah3EEv0_Wz1BtkNie_uOg5nnbWQ7YXkh8jqoXa8Ul5v4oCZ5qJ4a561bgd7-Laz0B2InCMh-rUx5OWl3IWjgOakrcrT_UX9y3LnY5MtD_SmqMF0vFFQb3cVLFrWDEqRYAzjPwrRECmBOtdI6tTx3OMkiNKf5GOxd25GbLS0JcFKh2apTwy8N2c0iCL7dtyBLGjO3HXpcxif47Lic9gNc2_6YxbHOM"
          />
          <RelatedCard
            title="Cord Organizer Set"
            price="45.00"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDEDNnXp_teaImWPCGKeUDTSAKJe87pH9ZlACYgGXQopUa_p3XpECfHDkmMkoyR8X7IcE7Pr-5FVemgkVRp_ofxOhlR7kUBl0ncqG7tMGrdAEga2ZP08aPRAQeETe6dsrNud6hxBY7Wlj2zokmedajUrw1aobD8IThGeJoYEq6TSvaffYEcOZwkX3GJUqVlgHCK4dy2Gqny9M10ytyTJhMZO4KJNt56ySFMNzTSGEda6DP31Eyh7MZd6BZVi0JH-p3NbV4ArNKvjRIU"
          />
          <RelatedCard
            title="Extra Wide Strap"
            price="60.00"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBUd2foUcpYCzfOjeElNV9tWL-OeWYhHImRah63NJpjZyBhfqHnAYkTqvowfEuRBEH9-eWpHoS9pKsNvI51o9ePtt1sVSdHRaWsmuYdGWWTi5k8BOUfd9NLNtizcNuENK2isd6Np0r9q2BaZ2yFAWSnSUd2kKgDI6NTSXMV7Z7KZ4sKzy3b3IoStzx1AyZ5UBJyBO-e4lirMEZksDD5qGihNstIluEoUnMWnE3CQvgH6KT0-yyMi697RjlQmSVPbn8UsqtvdxAwmfDQ"
          />
        </div>
      </section>
    </main>
  );
};

const RelatedCard = ({ title, price, img }) => (
  <div className="group cursor-pointer">
    <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden mb-3">
      <img
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        src={img}
        alt={title}
      />
    </div>
    <p className="text-sm font-bold">{title}</p>
    <p className="text-sm text-primary">${price}</p>
  </div>
);

export default ProductDetails;
