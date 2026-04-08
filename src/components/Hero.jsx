import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Hero() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://velora-backend-production-3e79.up.railway.app/api/products");
        const data = Array.isArray(res.data) ? res.data : res.data.products;
        setProducts(data.slice(0, 4));
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="w-full bg-white text-gray-900 selection:bg-black selection:text-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#f9f9f9] overflow-hidden">
        {/* Subtle Background Text Deco */}
        <div className="absolute top-10 left-10 text-[10rem] font-black text-gray-200/40 select-none leading-none -z-0">
          2026
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-8 bg-black"></span>
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-gray-500">
                New Collection 2026
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight">
              Made To <br /> 
              <span className="text-gray-400 italic font-serif font-light">Move</span>
            </h1>

            <p className="text-lg text-gray-500 max-w-sm leading-relaxed border-l-2 border-black pl-6">
              Engineering premium comfort for the modern lifestyle. Minimalist aesthetics meets maximum durability.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <Link to="/shop">
                <button className="px-10 py-5 bg-black text-white text-xs font-bold tracking-[0.2em] hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
                  SHOP NOW
                </button>
              </Link>
              <Link to="/about">
                <button className="px-10 py-5 border border-black/10 text-xs font-bold tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500">
                  OUR STORY
                </button>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 border border-gray-200 translate-x-8 translate-y-8 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700"></div>
            <img
              src="/images/Velorapic.jpeg"
              onError={(e) =>
                (e.target.src =
                  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f")
              }
              className="w-full h-[600px] object-cover shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              alt="Hero"
            />
          </div>
        </div>
      </section>

      {/* ================= BRANDS ================= */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-2xl font-black tracking-tighter">NIKE</span>
          <span className="text-2xl font-black tracking-tighter">ADIDAS</span>
          <span className="text-2xl font-black tracking-tighter">PUMA</span>
          <span className="text-2xl font-black tracking-tighter">ZARA</span>
          <span className="text-2xl font-black tracking-tighter">GUCCI</span>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-2 text-black">Trending Now</h2>
            <div className="h-1 w-12 bg-black"></div>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
            <span>View All</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>

        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-black"></div>
          </div>
        )}

        {!loading && products.length === 0 && (
          <p className="text-center py-20 text-gray-400 italic">Currently curating our next drop...</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((p) => (
            <div key={p._id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative mb-6">
                <Link to={`/product/${p._id}`}>
                  <img
                    src={p.image || "https://via.placeholder.com/400"}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    alt={p.name}
                  />
                </Link>
                
                {/* Overlay Button */}
                <Link
                  to={`/product/${p._id}`}
                  className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <button className="bg-white text-black text-[10px] font-black tracking-widest px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    QUICK VIEW
                  </button>
                </Link>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors uppercase text-sm tracking-wider">{p.name}</h3>
                <p className="text-gray-400 font-medium">₹{p.price.toLocaleString('en-IN')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">The Voice of Our Community</h2>
            <p className="text-gray-400">Join thousands of satisfied customers worldwide.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Amazing quality! The fit is perfect for my daily runs.", "Feels incredibly premium. Better than the big luxury brands.", "Worth every rupee. The attention to detail is unmatched."].map(
              (r, i) => (
                <div key={i} className="bg-white/5 p-10 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, star) => (
                      <span key={star} className="text-yellow-500 text-xs">★</span>
                    ))}
                  </div>
                  <p className="text-lg italic text-gray-300 mb-8 leading-relaxed">"{r}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-gray-500"></div>
                    <h4 className="font-bold uppercase text-[10px] tracking-[0.2em] text-gray-400">Verified Buyer</h4>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 overflow-hidden flex justify-center items-center bg-white">
        <div className="absolute inset-0 bg-[#ece8e1] opacity-50"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-gray-900">
            Elevate Your <br/> Everyday.
          </h2>
          <p className="text-gray-600 mb-12 max-w-md mx-auto leading-relaxed">
            Don't settle for the ordinary. Experience the perfect blend of innovation and craftsmanship.
          </p>

          <Link to="/shop">
            <button className="group relative px-14 py-5 bg-black text-white font-bold tracking-[0.3em] overflow-hidden">
              <span className="relative z-10">SHOP COLLECTION</span>
              <div className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Hero;