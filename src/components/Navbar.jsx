import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, User, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import CartDrawer from "./CartDrawer";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const linkStyles = ({ isActive }) =>
    isActive
      ? "text-black border-b border-black pb-1"
      : "text-gray-500 hover:text-black hover:border-b hover:border-black pb-1";

  return (
    <>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/">
            <h1 className="text-2xl font-extrabold tracking-[0.2em] uppercase">
              Velora
            </h1>
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest">
            <li><NavLink to="/" className={linkStyles}>Home</NavLink></li>
            <li><NavLink to="/shop" className={linkStyles}>Shop</NavLink></li>
            <li><NavLink to="/about" className={linkStyles}>Our Story</NavLink></li>
            <li><NavLink to="/contact" className={linkStyles}>Contact</NavLink></li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6 relative">

            {/* 🔐 AUTH SECTION */}
            {!user ? (
              <Link
                to="/login"
                className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-black"
              >
                <User size={16} />
                Login
              </Link>
            ) : (
              <div className="relative hidden md:block">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-700 hover:text-black"
                >
                  <User size={16} />
                  {user.name || user.email}
                  <ChevronDown size={14} />
                </button>

                {/* DROPDOWN */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-4 w-48 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden animate-fadeIn">
                    
                    <Link
                      to="/profile"
                      className="block px-5 py-3 text-sm hover:bg-gray-50"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      My Profile
                    </Link>

                    <Link
                      to="/orders"
                      className="block px-5 py-3 text-sm hover:bg-gray-50"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      My Orders
                    </Link>

                    <button
                      onClick={() => {
                        logout();
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-5 py-3 text-sm text-red-500 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* CART */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative"
            >
              <ShoppingBag className="w-6 h-6 text-gray-700 hover:text-black transition" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute w-full bg-white border-b transition-all ${
            isOpen
              ? "top-20 opacity-100"
              : "-top-96 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col p-6 space-y-4 text-sm font-bold uppercase tracking-widest text-center">

            {/* USER NAME (OPTIONAL NICE TOUCH) */}
            {user && (
              <li className="text-gray-400 text-xs">
                {user.name || user.email}
              </li>
            )}

            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

            {!user ? (
              <li>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/profile" onClick={() => setIsOpen(false)}>
                    My Profile
                  </Link>
                </li>

                <li>
                  <Link to="/orders" onClick={() => setIsOpen(false)}>
                    My Orders
                  </Link>
                </li>

                <li>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="text-red-500"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;