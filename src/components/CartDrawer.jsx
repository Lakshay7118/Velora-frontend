import { X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartDrawer({ open, onClose }) {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-[998]"
      />

      {/* DRAWER */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[999] shadow-2xl flex flex-col">
        
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <h2 className="text-lg font-bold uppercase tracking-widest">
            Your Cart
          </h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 && (
            <p className="text-gray-400 text-center mt-20">
              Your cart is empty
            </p>
          )}

          {cartItems.map((item) => (
            <div key={item._id} className="flex gap-4 border-b pb-4">
              <img
                src={
                  item.image?.startsWith("http")
                    ? item.image
                    : `http://localhost:5000/${item.image}`
                }
                alt={item.name}
                className="w-20 h-24 object-cover"
              />

              <div className="flex-1">
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  ₹{Number(item.price || 0).toLocaleString()}
                </p>
                <p className="text-xs text-gray-400">
                  Qty: {item.quantity}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item._id)}
                className="text-xs text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        {cartItems.length > 0 && (
          <div className="border-t px-6 py-5">
            <div className="flex justify-between font-bold mb-4">
              <span>Total</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>

            <Link
              to="/checkout"
              onClick={onClose}
              className="block w-full text-center py-3 bg-black text-white tracking-widest hover:bg-gray-800 transition"
            >
              CHECKOUT
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDrawer;
