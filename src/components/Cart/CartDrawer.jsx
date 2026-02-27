import React, { useEffect } from "react";
import { useCart } from "../../context/CartContext";

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    isAutoDismissing,
    setIsAutoDismissing,
    updateQuantity,
    removeFromCart,
  } = useCart();

  // Handle auto-dismissal when an item is added
  useEffect(() => {
    let timer;
    if (isCartOpen && isAutoDismissing) {
      timer = setTimeout(() => {
        setIsCartOpen(false);
        setIsAutoDismissing(false);
      }, 5000); // Closes after 5 seconds of inactivity
    }
    return () => clearTimeout(timer);
  }, [isCartOpen, isAutoDismissing, setIsCartOpen, setIsAutoDismissing]);

  if (!isCartOpen) return null;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0,
  );
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const freeShippingThreshold = 250;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <>
      <div
        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60] transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <aside
        onMouseEnter={() => setIsAutoDismissing(false)} // Stop timer if user hovers
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-background-dark shadow-2xl z-[70] flex flex-col animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-primary/5">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold tracking-tight uppercase">
              Your Basket
            </h3>
            <span className="text-slate-400 font-light">
              ({totalItems} {totalItems === 1 ? "item" : "items"})
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-primary/5 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-slate-500">
              close
            </span>
          </button>
        </div>

        {/* Shipping Progress */}
        <div className="px-8 py-4 bg-primary/5">
          <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">
            {progress >= 100 ? "You've earned free shipping!" : "Almost there"}
          </p>
          {progress < 100 && (
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
              Add{" "}
              <span className="font-bold">
                ${(freeShippingThreshold - subtotal).toFixed(2)}
              </span>{" "}
              more for free global shipping.
            </p>
          )}
          <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full">
            <div
              className="h-full bg-primary rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto px-8 py-4 space-y-8 no-scrollbar">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdate={updateQuantity}
                onRemove={removeFromCart}
              />
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
              <span className="material-symbols-outlined text-6xl opacity-20">
                shopping_basket
              </span>
              <p className="font-display italic">Your basket is empty</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-8 py-8 border-t border-primary/5 space-y-6">
            <div className="space-y-2 font-display">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-primary/5 pt-4">
                <span>Total</span>
                <span className="text-primary">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg font-bold tracking-widest uppercase text-xs transition-transform active:scale-95 shadow-lg">
                Proceed to Checkout
              </button>
              {isAutoDismissing && (
                <div className="h-1 bg-primary/10 w-full rounded-full overflow-hidden">
                  <div className="h-full bg-primary animate-[shrink_5s_linear]" />
                </div>
              )}
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

const CartItem = ({ item, onUpdate, onRemove }) => (
  <div className="flex gap-6 items-start group animate-in fade-in slide-in-from-bottom-2">
    <div className="h-28 w-24 bg-background-light dark:bg-slate-800 rounded-lg flex-shrink-0 overflow-hidden">
      <img
        className="h-full w-full object-cover"
        src={item.image}
        alt={item.title}
      />
    </div>
    <div className="flex-1 flex flex-col h-28 justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h4 className="text-sm font-medium text-slate-800 dark:text-slate-100 uppercase tracking-wide truncate pr-4">
            {item.title}
          </h4>
          <button
            onClick={() => onRemove(item.id)}
            className="text-slate-300 hover:text-red-400 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">delete</span>
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-1 italic">{item.category}</p>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center border border-primary/10 rounded overflow-hidden">
          <button
            onClick={() => onUpdate(item.id, -1)}
            className="px-3 py-1 hover:bg-primary/5 text-slate-500 text-sm font-bold"
          >
            -
          </button>
          <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdate(item.id, 1)}
            className="px-3 py-1 hover:bg-primary/5 text-slate-500 text-sm font-bold"
          >
            +
          </button>
        </div>
        <p className="text-sm font-semibold">
          ${(parseFloat(item.price) * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  </div>
);

export default CartDrawer;
