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
import StoryPage from "./pages/StoryPage";
import ShopPage from "./pages/ShopPage";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";
import CartDrawer from "./components/Cart/CartDrawer";

const AppLayout = ({ children }) => {
  const location = useLocation();
  // We hide the UI if we are on the /checkout page
  const isCheckout = location.pathname === "/checkout";

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
      {!isCheckout && <Navbar />}
      {!isCheckout && <CartDrawer />}

      <main className="flex-grow">{children}</main>

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
            <Route path="/about" element={<StoryPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </AppLayout>
      </Router>
    </CartProvider>
  );
}
