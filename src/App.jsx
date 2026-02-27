import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import ShopPage from "./pages/ShopPage";
import ProductDetails from "./pages/ProductDetails";
import CartDrawer from "./components/Cart/CartDrawer";

/**
 * App Component
 * Acts as the root of the application, managing global styling,
 * the CartProvider context, and the primary routing table.
 */
export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
          {/* Global Navigation */}
          <Navbar />

          {/* The CartDrawer now handles both the full basket view 
            and the 'quick preview' notification logic when items are added.
          */}
          <CartDrawer />

          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              {/* Landing Page */}
              <Route path="/" element={<HomePage />} />

              {/* Brand Story & Artisan Heritage */}
              <Route path="/about" element={<StoryPage />} />

              {/* Product Collections Grid */}
              <Route path="/shop" element={<ShopPage />} />

              {/* Dynamic Product Details - accessible via Product ID */}
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
