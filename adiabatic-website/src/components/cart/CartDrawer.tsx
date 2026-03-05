"use client";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
    const {
        items,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        totalPrice,
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] animate-fade-in"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed top-0 right-0 h-full w-full max-w-md bg-primary-dark border-l border-white/10 z-[70] flex flex-col shadow-2xl shadow-black/50 animate-slide-in-right">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary-green/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="font-heading font-bold text-white text-lg">Your Cart</h2>
                            <p className="text-xs text-neutral-500">{totalItems} item{totalItems !== 1 ? "s" : ""}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors"
                        aria-label="Close cart"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                <svg className="w-10 h-10 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-heading font-semibold text-neutral-400 mb-1">Cart is empty</h3>
                            <p className="text-sm text-neutral-600 mb-6">Add battery products to get started</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="px-6 py-2.5 glass text-sm text-white rounded-lg hover:bg-white/10 transition-all"
                            >
                                Browse Products
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div
                                    key={item.product.id}
                                    className="glass rounded-xl p-4 hover:border-white/10 transition-all"
                                >
                                    <div className="flex gap-4">
                                        {/* Product Image Placeholder */}
                                        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary-green/10 to-secondary-blue/10 flex items-center justify-center shrink-0 border border-white/5">
                                            <svg className="w-8 h-8 text-primary-green/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>

                                        {/* Details */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-heading font-semibold text-white leading-tight truncate">
                                                {item.product.name}
                                            </h4>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-xs font-mono text-primary-green">
                                                    {item.product.voltage}
                                                </span>
                                                <span className="text-neutral-600">•</span>
                                                <span className="text-xs text-neutral-500">{item.product.capacity}</span>
                                            </div>

                                            {/* Price + Quantity */}
                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center gap-1">
                                                    <span className="text-sm font-bold text-white">
                                                        ₹{item.product.salePrice.toLocaleString("en-IN")}
                                                    </span>
                                                    <span className="text-[10px] text-neutral-500 line-through">
                                                        ₹{item.product.originalPrice.toLocaleString("en-IN")}
                                                    </span>
                                                </div>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-0.5 bg-white/5 rounded-lg">
                                                    <button
                                                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                        className="w-7 h-7 flex items-center justify-center rounded-l-lg hover:bg-white/10 text-neutral-400 hover:text-white transition-colors text-sm"
                                                        aria-label="Decrease quantity"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-mono text-white">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                        className="w-7 h-7 flex items-center justify-center rounded-r-lg hover:bg-white/10 text-neutral-400 hover:text-white transition-colors text-sm"
                                                        aria-label="Increase quantity"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Remove */}
                                        <button
                                            onClick={() => removeFromCart(item.product.id)}
                                            className="self-start p-1 text-neutral-600 hover:text-red-400 transition-colors"
                                            aria-label="Remove item"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t border-white/10 px-6 py-5 space-y-4">
                        {/* Summary */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-neutral-400">Subtotal ({totalItems} items)</span>
                                <span className="text-white font-semibold">₹{totalPrice.toLocaleString("en-IN")}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-neutral-400">Shipping</span>
                                <span className="text-primary-green text-xs font-medium">Calculated at checkout</span>
                            </div>
                            <div className="h-px bg-white/10 my-2" />
                            <div className="flex justify-between">
                                <span className="text-white font-heading font-semibold">Total</span>
                                <span className="text-xl font-heading font-bold text-white">
                                    ₹{totalPrice.toLocaleString("en-IN")}
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <button className="w-full px-6 py-3.5 bg-primary-green text-primary-dark font-semibold rounded-lg hover:bg-primary-green-dim transition-all duration-300 hover:shadow-xl hover:shadow-primary-green/20 flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            Proceed to Checkout
                        </button>
                        <button
                            onClick={clearCart}
                            className="w-full px-6 py-2.5 text-sm text-neutral-500 hover:text-red-400 transition-colors"
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
