import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      
      {/* ================= HERO / TITLE ================= */}
      <section className="py-20 bg-[#fbfbfb] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">
            Our Journey
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Designed for the <span className="font-serif italic font-light">Individual.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed">
            Velora was founded on a simple premise: clothes should be a canvas for your 
            personality, not a distraction from it.
          </p>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Left: Artistic Image Composition */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-gray-200 z-0"></div>
            <img
              src="/images/Velorapic.jpeg"
              alt="Velora Craftsmanship"
              className="relative z-10 w-full h-[600px] object-cover shadow-2xl rounded-sm"
              onError={(e) => {e.target.src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}}
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight uppercase">The Velora Philosophy</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                We noticed a gap in the world of streetwear—it was either too loud or too low quality. 
                Velora was born to bridge that gap. We create <span className="text-black font-semibold">Statement Tees</span> 
                that combine high-end fabric with minimalist expression.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-3 text-black">The Quality</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We use 100% premium organic cotton. Our fabrics are pre-shrunk and treated 
                  for a buttery-soft feel that lasts through every wash.
                </p>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-3 text-black">The Design</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our prints are cured at high temperatures to ensure they never crack or peel. 
                  Minimalist, bold, and timeless.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <blockquote className="text-xl italic font-serif text-gray-700">
                "Clothes don't make the person; the person makes the statement. We just provide the ink."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE VELORA STANDARD (PROCESS) ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-gray-400 mb-16">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", label: "Sourcing", detail: "Ethically grown long-staple cotton." },
              { step: "02", label: "Crafting", detail: "Precision cutting for the perfect fit." },
              { step: "03", label: "Printing", detail: "Eco-friendly, long-lasting screen inks." },
              { step: "04", label: "Quality Check", detail: "Hand-inspected before it leaves us." }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <span className="text-6xl font-black text-gray-100 absolute -top-8 left-1/2 -translate-x-1/2 group-hover:text-gray-200 transition-colors">{item.step}</span>
                <div className="relative z-10">
                  <h3 className="font-bold uppercase tracking-widest text-black mb-2">{item.label}</h3>
                  <p className="text-gray-500 text-xs">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Inclusivity", 
                desc: "Our fits are truly unisex. We design for every body, every gender, and every style preference." 
              },
              { 
                title: "Sustainability", 
                desc: "From plastic-free packaging to ethically sourced cotton, we care about our footprint." 
              },
              { 
                title: "Individuality", 
                desc: "We don't follow trends. We create pieces that help you stand out by being yourself." 
              },
            ].map((value, idx) => (
              <div key={idx} className="p-8 border border-gray-800 hover:border-gray-400 transition-all duration-500 group">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wider group-hover:text-gray-300">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOUNDER'S NOTE ================= */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200" alt="Founder" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold italic font-serif">A Note from the Founder</h3>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed italic">
          "Velora started in a small apartment with a single screen-printing kit and a desire to make clothes 
          that felt like a second skin. Today, our community spans across the globe, but our goal remains the same: 
          quality over quantity, and style over status."
        </p>
        <p className="mt-6 font-bold uppercase tracking-[0.2em] text-sm text-black">— Lakshya Mehra , Founder of Velora</p>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 text-center bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-tighter">Join the Movement</h2>
          <p className="text-gray-500 mb-10">Sign up for exclusive drops and early access to our limited runs.</p>
          <Link to="/Shop">
            <button className="px-12 py-4 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Shop The Collection
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default About;