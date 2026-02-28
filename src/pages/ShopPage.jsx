import React from "react";
import ProductCard from "../components/Shop/ProductCard";
import Pagination from "../components/Shared/Pagination";

const ShopPage = () => {
  // Real data structure for your artisan products
  const products = [
    {
      id: "heritage-leather-tote",
      title: "Heritage Leather Tote",
      category: "Handmade Goods",
      price: "245.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAo0d-zEY9uvrM-25XamIwkWdSPqfuH1kZpJ03IsoHbRFEF3uNOWVROYYjD-ErgiYBJS2vJM-IAutDgBZd4mlFVT6CM6h4xYFjFw8A11rfSopQurQcGHq9b9tRYva22pCm0cHMuSMQUP40YE6G3zmnRWbpBIU3UzyCCt1z1DgQCMYlKOESLovptNkowyULeyGe5yWOu4BL1JWVVqrI02Qo17dPNdk9ar__0JEJ7JMVSqvHb5ClIEsTccYg5ybLmlXtGdWA6gly9SF5A",
      isLimited: true,
      hasQuickAdd: true,
    },
    {
      id: "hand-thrown-vase",
      title: "Hand-thrown Earth Vase",
      category: "Matte Ceramic",
      price: "128.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCOPvNR0llDknzAWvxerT2lmLsfaERu-zYTfjwKNT2Wh37RgnYuiqyzFzi7rFHXkifMjSEZchLaSkjynCzO-TnOpcZY6r6WNJ5n-dsaACeuylbXIUMMOCeBRvSHwDgF0M_BmpzRo2lRzYbE0RKeT25guL0OK_QDlAx6NuCUXmdvywvQ1tw6-pdDWB5VxljpBRHy4cCxrJrFWF5_eGG0moXzpJePBVsw8dx6tR3Fk8m1LzJiI0yfg4Qu_4jvtGpXnk6x7vJV_mwsRxIH",
      hasQuickAdd: true,
    },
    {
      id: "frayed-linen-throw",
      title: "Frayed Linen Throw",
      category: "Sustainable Textile",
      price: "85.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDpq2FvUhGYwPTu9x0KmsPHS5dGsJUm2SfskwPB9cgRSNvKqjkYkNKAOWeamSKW0G-iNe1jh6RQc0Lw8pCcnT5pnShyJBOsmwhmhNft5SXg-n8eYMekaW2TlyLdug2ZOTZtraL9RnKa6RCSBGR8SS_Q6e4kZcw7UbqaaOWe4MoZuwkDKEAdwXWTSyPsI0HCuG2GNDD20r_RCMq7NqjOqsrfsuptWZJlUG6MEefWT2FeqpDzAUZCTZar9YYwcIfnm66Vo1OaVh2z8X6v",
      isLimited: true,
    },
    {
      id: "sculptural-stool",
      title: "The Sculptural Stool",
      category: "Solid White Oak",
      price: "420.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAVmEXoxNn4ECcyzN5opPhibbOCH1NRVPdnIFKrgz98FefrdF4Ku8MULAJuZWJiMncE5k27SGSDVL6YRQTxXsjbpt9tiY8KpDTQ-yStJRLG2A57fVrjmBg9T44fdqWtVEy4qxpavDRY3jT2Wv_05dtut5GOwrHFbcU5pgcVm7lqAe72Zv2pvFsgn4wJNb8JNC3MphWI3D3X8gDI5IC9lvtWevMLPd2lSi7lvOp-oKHpdK5yhKO2a-5NgtGYOsZ-EUEZTnQohOu3fvLm",
    },
    {
      id: "orbital-pendant",
      title: "Orbital Brass Pendant",
      category: "Brushed Metal",
      price: "210.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuClD065kWxU6RGt4q1_FO5x-dUbrBJyqHK4NcYSklhOeCfBbk2pC3Yegwl2jA5rkbDgtXFs5ROrZ6H5p_cQvESpPMseitTSpEh3PGmK8040GMIyOF_Fbxx2TZu7oGERURO_MsqcS0s0aPbLkLs0I9J5LE15H2BFojyeIhkvKCfHMSSCZGDjGNFe0Xh6FF0Y7d5czPuTk1GQGnKRVhIq87utefZ3bPfXP2VADU0I2gChGkkEFtT_eDHRksuZvN_jiOOfUVs1FfQWdv6m",
    },
    {
      id: "nesting-bowls",
      title: "Nesting Clay Bowls",
      category: "Tableware",
      price: "72.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDXWaf9BBJ_hg1nEvqNx9UG6XuQqjrg3gBNOTcBbDR039ZxdkN6V_hVBaUnHAOH4P_VJBvfH_-FUuJDm4vQf5iKBzK9XkQZtg2h2nxkUjTHJt2Sd6Od9zi7apaTvR2hmAaFSykIs4vlNJ-2YqIM3w3V8xAy9dsRd6IHaZl8r6r_cUgQvkiC1CXsbu82GDnUQDYuQIfghVaPn468HgBetWyxnrD7c9xGLjIa5iHQMsi-b28fulOgGwQ8nePqxl8Xt7suWOgxqo4ZnjNl",
    },
    {
      id: "vertex-ring",
      title: "Vertex 18k Ring",
      category: "Fine Jewelry",
      price: "280.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBLUuKxV4lkPfQtKNWZfGCH5l9NSFysHeVmobV7XudTFnAkB_0uaiJ4CZGIqvthSWLUJbbGorrVofsRvRfUSNqAk7FtulGMRmKKdj5yiMPOEMRBxg6jXM47EW0SjFjOVTF0JA_Z1svQXZi8j4-CWHrRC1YFj_G073RumQlFGMus7gh2JABRR9DV6vWRk4cBpY95Inatj1Ekou1Zz9q0XrbMS6txgKXFJeJ0zcrXy3W4mnWK5EJADQZBm2BdmwpTQ4vjF_-zMImcwuXI",
      isLimited: true,
    },
    {
      id: "merino-scarf",
      title: "Chunky Merino Scarf",
      category: "Winter Textile",
      price: "95.00",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC4mvdCti2OsXK6u-6h81L5wkxy8xuavtl9W5JT2chQtU50Ot0MIXGAz3DZ7fOPIM86yG6YkKanxx2RDRKTlybXTUH_y96jQInAxXEH2V-W6llgWbWGxY7vU-y-WaSaLETQol8NRYp11ZrQblv2hR5Jy4Nk4z6l_dxylamXsdRh4UcoSnNp3_5zbf69k_qXw6dRdUolHPVy35sLPOv8NVAXnB_MLNPXaYXcgsNHFXYXa1XUw9uHL4xSntqLtc90wbOnlwlVhGHzCwQG",
    },
  ];

  return (
    <main className="mx-auto w-full max-w-7xl px-6 lg:px-12 py-12 animate-in fade-in duration-500">
      {/* Category Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            Handmade{" "}
            <span className="text-primary italic font-medium">Essentials</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            A curated collection small-batch ceramic, wood, and textile goods
            crafted by independent artisans from around the globe.
          </p>
        </div>
        <div className="flex items-center gap-4 pb-2">
          <button className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest border-b border-primary pb-1 hover:text-primary transition-colors">
            Refine{" "}
            <span className="material-symbols-outlined text-sm">tune</span>
          </button>
        </div>
      </div>

      {/* Minimalist Filters Row */}
      <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar">
        {[
          "All Arrivals",
          "Ceramics",
          "Textiles",
          "Bags",
          "Jewelry",
          "Accessories",
        ].map((filter, i) => (
          <button
            key={filter}
            className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-all ${
              i === 0
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-white dark:bg-background-dark border border-primary/10 hover:bg-primary/5"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* The Actual Working Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <Pagination totalPages={5} />
    </main>
  );
};

export default ShopPage;
