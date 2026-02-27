import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import ShopPage from "./pages/ShopPage";
import ProductDetails from "./pages/ProductDetails"; // Import the details page

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<StoryPage />} />
            <Route path="/shop" element={<ShopPage />} />
            {/* Dynamic route for products */}
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
