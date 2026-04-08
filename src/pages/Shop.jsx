import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";
import { ChevronDown, ShoppingBag } from "lucide-react";

function Shop() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("newest");
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://velora-backend-production-3e79.up.railway.app/api/products");
        const data = Array.isArray(res.data) ? res.data : res.data.products;
        setProducts(data);
      } catch (err) {
        console.error("Fetch error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const finalProducts = [...products]
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  return (
    <>
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <section className="min-h-screen bg-white text-gray-900 pt-32 pb-20">
        {/* HEADER */}
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            Velora{" "}
            <span className="text-gray-200 italic font-extralight">Shop</span>
          </h1>

          <div className="flex items-center gap-2 border-b border-black pb-1">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-transparent text-[11px] uppercase font-bold outline-none cursor-pointer appearance-none pr-4"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-wrap gap-8 border-y border-gray-100 py-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] uppercase tracking-[0.2em] ${
                  activeCategory === cat
                    ? "text-black font-bold border-b-2 border-black"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex justify-center py-40">
              <div className="w-10 h-10 border-4 border-gray-100 border-t-black rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
              {finalProducts.map((product) => {
                const imageUrl = product.image?.startsWith("http")
                  ? product.image
                  : `https://velora-backend-production-3e79.up.railway.app/${product.image}`;

                return (
                  <div key={product._id} className="group">
                    <Link to={`/product/${product._id}`}>
                      <div className="relative overflow-hidden aspect-[3/4] bg-gray-100 mb-6 cursor-pointer">
                        <img
                          src={imageUrl}
                          alt={product.name}
                          className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${
                            product.stock === 0
                              ? "grayscale opacity-50"
                              : ""
                          }`}
                        />

                        {/* QUICK ADD OVERLAY */}
                        {product.stock > 0 && (
                          <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                addToCart(product, 1);
                                setIsCartOpen(true);
                              }}
                              className="pointer-events-auto w-full bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] py-4 hover:bg-gray-800 transition flex items-center justify-center gap-2"
                            >
                              <ShoppingBag size={14} />
                              Quick Add
                            </button>
                          </div>
                        )}
                      </div>
                    </Link>

                    <Link to={`/product/${product._id}`}>
                      <h3 className="text-[12px] font-bold uppercase hover:text-gray-500 transition">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-[13px] font-medium text-gray-900">
                      ₹{product.price.toLocaleString()}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Shop;
