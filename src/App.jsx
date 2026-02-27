import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"; // Updated to match refactored name
import ShopPage from "./pages/ShopPage";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";
import CartDrawer from "./components/Cart/CartDrawer";

/**
 * AppLayout manages the conditional visibility of global UI elements.
 * In the focused checkout flow, Navbar, Cart, and Footer are hidden
 * to minimize user distraction and exit points.
 */
const AppLayout = ({ children }) => {
  const location = useLocation();
  const isCheckout = location.pathname === "/checkout";

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
      {/* Conditionally render UI based on route */}
      {!isCheckout && <Navbar />}
      {!isCheckout && <CartDrawer />}

      <main className="grow">{children}</main>

      {!isCheckout && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </AppLayout>
      </Router>
    </CartProvider>
  );
}
