import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import ShopPage from "./pages/ShopPage";
import ProductDetails from "./pages/ProductDetails";
import CartDrawer from "./components/Cart/CartDrawer"; // Import the Drawer

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      {/* We pass setIsCartOpen to Navbar to trigger the drawer */}
      <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
        <Navbar onCartClick={() => setIsCartOpen(true)} />

        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<StoryPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
