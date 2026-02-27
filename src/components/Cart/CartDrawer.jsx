import React from "react";

const CartDrawer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60] transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-background-dark shadow-2xl z-[70] flex flex-col animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-primary/5">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold tracking-tight">
              Your Basket
            </h3>
            <span className="text-slate-400 font-light">(2 items)</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-background-light dark:hover:bg-primary/10 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-slate-500">
              close
            </span>
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-8 py-4 bg-primary/5">
          <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">
            Almost there
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
            Add <span className="font-bold">$45.00</span> more for free global
            shipping.
          </p>
          <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto px-8 py-4 space-y-8">
          <CartItem
            title="Ceramic Studio Vase"
            price={85.0}
            variant="Matte Bone White / Medium"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBsGJRauQVWIijq1-2Uwsp2NVeOowppusSwim7a0dEcnDi63vs9Dn2Y7LLVBt5ONBRNJ1gL-ZmyJh4YCF8iDiqmYVO6AcGQc__u1O21XlX2iOvdszPw28M-bWGSG2Vz7yf2rLiqo5xVwFViB-cgxuSm4jlRD-OOvCU1Wt_MJ2WfoQiHEyiZ2EYgY4aXJ1KdPQuPP2D8p9Ec9VI8bHwG2sd0mDZMFqb6QOe6j5mLvPKl_KmXtzOZFqaOSUg7Gq6iKv-stNyvk-0BaXqj"
          />
          <CartItem
            title="Woven Linen Throw"
            price={120.0}
            variant="Organic Sand / Large"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBfWCbdB4as8Fx24lSog1KzHyOTG1M1cyrBxl-ufzMY0YuuBggNevumfha3VnqYcOaK9g5wVdCfQRX-pVz24RhRdbTjZtpI2IbvKgA2QhVuPYV52sfgq0FR3euS1WYCqG99e_UNMT70PpyG6d6H1TCyfi5INr1GlFbeBVU6H-gmIh_hzzuOubmVyoocrDAl_t3kRh_2M9YIWf9CxiQls6Qlczvnk4qvS5iAMGtz4Lbt8TQXYgSY9MLNLpiRN07W7MBGUZK_HtJ7nMID"
          />
        </div>

        {/* Drawer Footer */}
        <div className="px-8 py-8 border-t border-primary/5 space-y-6">
          <div className="space-y-2 font-display">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-medium">$205.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t border-primary/5 pt-4">
              <span>Total</span>
              <span className="text-primary">$205.00</span>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg font-bold tracking-widest uppercase text-xs transition-colors shadow-lg active:scale-[0.98]">
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full bg-transparent hover:bg-primary/5 text-slate-800 dark:text-slate-200 py-3 rounded-lg font-medium text-xs transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

const CartItem = ({ title, price, variant, img }) => (
  <div className="flex gap-6 items-start group">
    <div className="h-28 w-24 bg-background-light dark:bg-slate-800 rounded-lg flex-shrink-0 overflow-hidden">
      <img className="h-full w-full object-cover" src={img} alt={title} />
    </div>
    <div className="flex-1 flex flex-col h-28 justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h4 className="text-sm font-medium text-slate-800 dark:text-slate-100 uppercase tracking-wide">
            {title}
          </h4>
          <button className="text-slate-400 hover:text-red-400 transition-colors">
            <span className="material-symbols-outlined text-lg">delete</span>
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-1 italic">{variant}</p>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center border border-primary/10 rounded overflow-hidden">
          <button className="px-3 py-1 hover:bg-primary/5 text-slate-500 text-sm font-bold">
            -
          </button>
          <span className="px-3 py-1 text-sm font-medium">1</span>
          <button className="px-3 py-1 hover:bg-primary/5 text-slate-500 text-sm font-bold">
            +
          </button>
        </div>
        <p className="text-sm font-semibold">${price.toFixed(2)}</p>
      </div>
    </div>
  </div>
);

export default CartDrawer;
