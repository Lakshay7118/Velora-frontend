import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

function Footer() {
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram size={16} />, 
      href: '#', 
      color: 'hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:border-transparent' 
    },
    { 
      name: 'Twitter', 
      icon: <Twitter size={16} />, 
      href: '#', 
      color: 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2]' 
    },
    { 
      name: 'Facebook', 
      icon: <Facebook size={16} />, 
      href: '#', 
      color: 'hover:bg-[#1877F2] hover:border-[#1877F2]' 
    },
    { 
      name: 'Youtube', 
      icon: <Youtube size={16} />, 
      href: '#', 
      color: 'hover:bg-[#FF0000] hover:border-[#FF0000]' 
    },
  ];

  return (
    <footer className="bg-black text-white py-10 border-t border-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Brand & Socials (Span 4) */}
          <div className="md:col-span-4 space-y-5">
            <h2 className="text-2xl font-black tracking-[0.2em] uppercase text-white">
              VELORA
            </h2>
            <p className="text-white text-xs leading-relaxed max-w-xs">
              Quality, minimalist design, and the perfect fit. <br />
              Your style, our statement.
            </p>
            
            {/* Social Icons with Brand Colors */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  aria-label={social.name}
                  className={`p-2 border border-white/20 rounded-full transition-all duration-300 flex items-center justify-center text-white ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Span 2) */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-bold mb-5 uppercase tracking-[0.2em] text-white">
              Collections
            </h3>
            <ul className="space-y-3 text-white text-xs">
              <li className="hover:text-gray-400 transition-colors"><Link to="/Shop">Men's Edition</Link></li>
              <li className="hover:text-gray-400 transition-colors"><Link to="/Shop">Women's Edition</Link></li>
              <li className="hover:text-gray-400 transition-colors"><Link to="/Shop">Signature Tees</Link></li>
            </ul>
          </div>

          {/* Support (Span 2) */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-bold mb-5 uppercase tracking-[0.2em] text-white">
              Support
            </h3>
            <ul className="space-y-3 text-white text-xs">
              <li className="hover:text-gray-400 transition-colors"><Link to="/Contact">Contact Us</Link></li>
              <li className="hover:text-gray-400 transition-colors"><Link to="/Shipping">Shipping</Link></li>
              <li className="hover:text-gray-400 transition-colors"><Link to="/Returns">Returns</Link></li>
            </ul>
          </div>

          {/* Newsletter (Span 4) */}
          <div className="md:col-span-4">
            <h3 className="text-[10px] font-bold mb-5 uppercase tracking-[0.2em] text-white">
              Newsletter
            </h3>
            <form className="relative group">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-white py-2 text-xs focus:outline-none transition-colors tracking-widest placeholder:text-gray-500 text-white uppercase"
              />
              <button 
                type="submit"
                className="absolute right-0 bottom-2 text-[10px] font-bold uppercase tracking-widest text-white hover:text-gray-400 transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white">
            © {new Date().getFullYear()} Velora World Wide.
          </p>
          
          {/* Payment Icons */}
          <div className="flex gap-4 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-2.5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-3.5" />
          </div>

          <div className="flex gap-6 text-[9px] uppercase tracking-[0.2em] text-white">
            <Link to="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;