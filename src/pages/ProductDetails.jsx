import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  ShoppingCart,
  ArrowLeft,
  ShieldCheck,
  Truck,
  RefreshCw,
  Minus,
  Plus,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ================= FETCH PRODUCT =================
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setProduct(res.data);
      } catch (error) {
        console.error("Product fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // ================= LOADING =================
  if (loading || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gray-100 border-t-black rounded-full animate-spin" />
      </div>
    );
  }

  // ================= QUANTITY =================
  const handleQuantity = (type) => {
    if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
    if (type === "inc" && quantity < product.stock)
      setQuantity(quantity + 1);
  };

  // ================= IMAGE FIX =================
  const imageUrl = product.image?.startsWith("http")
    ? product.image
    : `http://localhost:5000/${product.image}`;

  return (
    <>
      {/* CART DRAWER */}
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <div className="min-h-screen bg-white">
        {/* BACK BUTTON */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-black transition"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to shop</span>
          </button>
        </div>

        {/* PRODUCT SECTION */}
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 pb-24">
          
          {/* IMAGE */}
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-2xl">
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-3">
              {product.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {product.name}
            </h1>

            <p className="text-3xl font-light mb-6">
              ₹{product.price.toLocaleString()}
            </p>

            <p className="text-gray-600 leading-relaxed mb-10">
              {product.description}
            </p>

            {/* QUANTITY + STOCK */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center border rounded-full px-4 py-2">
                <button onClick={() => handleQuantity("dec")}>
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-semibold">
                  {quantity}
                </span>
                <button onClick={() => handleQuantity("inc")}>
                  <Plus size={18} />
                </button>
              </div>

              <span
                className={`text-sm font-medium ${
                  product.stock > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.stock > 0
                  ? `In Stock (${product.stock})`
                  : "Out of Stock"}
              </span>
            </div>

            {/* ADD TO CART */}
            <button
              disabled={product.stock === 0}
              onClick={() => {
                addToCart(product, quantity);
                setIsCartOpen(true);
              }}
              className={`w-full py-5 rounded-full uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition
                ${
                  product.stock > 0
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t">
              <div className="text-center">
                <Truck className="mx-auto mb-2" />
                <p className="text-xs uppercase">Fast Delivery</p>
              </div>
              <div className="text-center">
                <RefreshCw className="mx-auto mb-2" />
                <p className="text-xs uppercase">Easy Returns</p>
              </div>
              <div className="text-center">
                <ShieldCheck className="mx-auto mb-2" />
                <p className="text-xs uppercase">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
