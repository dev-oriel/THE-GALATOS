import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen">
      {/* Focused Header */}
      <header className="border-b border-primary/10 bg-white dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="text-primary transition-transform group-hover:rotate-180 duration-500">
              <span className="material-symbols-outlined text-3xl">
                temp_preferences_custom
              </span>
            </div>
            <h1 className="text-xl  font-bold tracking-tight uppercase">
              THE GALATOS
            </h1>
          </Link>
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span>Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left Side: Forms */}
        <div className="flex-1 px-6 py-12 lg:pr-16 lg:border-r border-primary/10">
          <div className="max-w-xl ml-auto">
            <nav className="flex items-center gap-2 text-sm mb-8 text-slate-500 font-medium uppercase tracking-widest text-[10px]">
              <span className="text-primary font-bold">Information</span>
              <span className="material-symbols-outlined text-xs">
                chevron_right
              </span>
              <span>Shipping</span>
              <span className="material-symbols-outlined text-xs">
                chevron_right
              </span>
              <span>Payment</span>
            </nav>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Email Address
                  </label>
                  <input
                    className="w-full border-primary/20 bg-white dark:bg-white/5 p-4 rounded-lg focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="email@example.com"
                    type="email"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    className="rounded border-primary/30 text-primary focus:ring-primary"
                    id="newsletter"
                    type="checkbox"
                  />
                  <label
                    className="text-sm text-slate-600 dark:text-slate-400"
                    htmlFor="newsletter"
                  >
                    Email me with news and offers
                  </label>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="First Name" />
                <InputGroup label="Last Name" />
                <div className="col-span-2">
                  <InputGroup
                    label="Address"
                    placeholder="Street and house number"
                  />
                </div>
                <div className="col-span-2">
                  <InputGroup label="Apartment, suite, etc. (optional)" />
                </div>
                <InputGroup label="City" />
                <InputGroup label="Postal Code" />
              </div>
            </section>

            <div className="flex items-center justify-between mt-12 pt-8 border-t border-primary/10">
              <Link
                className="flex items-center gap-2 text-primary text-sm font-semibold"
                to="/shop"
              >
                <span className="material-symbols-outlined text-sm">
                  arrow_back
                </span>
                Return to shop
              </Link>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Continue to shipping
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <aside className="flex-1 px-6 py-12 lg:pl-16 bg-slate-50 dark:bg-white/5">
          <div className="max-w-md mr-auto">
            <h2 className="font-serif text-2xl font-bold mb-8 text-slate-900 dark:text-white">
              Order Summary
            </h2>

            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 no-scrollbar">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center animate-in fade-in slide-in-from-right-4"
                >
                  <div className="relative w-20 h-24 bg-white dark:bg-slate-800 rounded-lg overflow-hidden shrink-0 shadow-sm">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover"
                      src={item.image}
                    />
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-md">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm text-slate-900 dark:text-slate-100">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs">{item.category}</p>
                  </div>
                  <span className="font-medium text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-2 mb-8 border-y border-primary/10 py-6">
              <input
                className="flex-1 border-primary/20 bg-white dark:bg-white/5 p-3 rounded-lg focus:ring-primary outline-none text-sm"
                placeholder="Discount code"
                type="text"
              />
              <button className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/20 transition-colors">
                Apply
              </button>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 font-medium">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                <span>Shipping</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-primary">
                  Calculated at next step
                </span>
              </div>
            </div>

            <div className="flex justify-between items-end pt-4 border-t-2 border-primary/10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Total
                </span>
                <p className="text-[10px] text-slate-400 italic">
                  Including taxes
                </p>
              </div>
              <span className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary">
                  eco
                </span>
                <div>
                  <p className="text-sm font-bold mb-1">
                    Plastic-Free Packaging
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
                    Your order will be shipped using 100% recycled materials as
                    part of our commitment to the Earth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-primary/10 text-slate-400 text-[10px] uppercase tracking-widest flex justify-between">
        <p>© 2026 Handmade Goods. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">
            Refund policy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Privacy policy
          </a>
        </div>
      </footer>
    </div>
  );
};

// Internal sub-component for inputs
const InputGroup = ({ label, placeholder = "" }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
      {label}
    </label>
    <input
      className="w-full border border-primary/20 bg-white dark:bg-white/5 p-4 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
      placeholder={placeholder}
      type="text"
    />
  </div>
);

export default CheckoutPage;
