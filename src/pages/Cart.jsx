import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-gray-600 text-lg">
              Your cart is currently empty.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-6 px-8 py-3 bg-black text-white"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-6 bg-white p-5 shadow-sm"
                >
                  <img
                    src={
                      item.image?.startsWith("http")
                        ? item.image
                        : `http://localhost:5000/${item.image}`
                    }
                    alt={item.name}
                    className="w-28 h-32 object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">₹{item.price}</p>

                    <div className="flex items-center gap-4 mt-4">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="w-8 h-8 border"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item._id)}
                        className="w-8 h-8 border"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-sm text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div className="bg-white p-6 shadow-sm h-fit">
              <h2 className="text-xl font-semibold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between font-semibold text-lg mb-6">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <Link to="/checkout">
                <button className="w-full py-3 bg-black text-white">
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
