import React from 'react';

function Contact() {
  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      
      {/* ================= HERO HEADER ================= */}
      <section className="relative py-32 bg-[#fafafa] overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute right-[-5%] top-[-10%] text-[20rem] font-black text-gray-200/30 select-none leading-none -z-0">
          @
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-black"></span>
              <span className="text-xs font-bold uppercase tracking-[0.5em] text-gray-400">
                Customer Care
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Let’s start a <br />
              <span className="font-serif italic font-light text-gray-400">conversation.</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed uppercase tracking-[0.15em] max-w-md">
              Whether you have a question about sizing, a recent order, or just want to share feedback—we’re listening.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Left: Contact Information */}
          <div className="lg:col-span-4 space-y-16">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-gray-400">
                Connect With Us
              </h2>
              <div className="space-y-10">
                <div className="group cursor-pointer">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 group-hover:text-black transition-colors">General Inquiries</h4>
                  <p className="text-xl font-medium border-b border-transparent group-hover:border-black inline-block transition-all duration-300">support@velora.com</p>
                </div>
                <div className="group cursor-pointer">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 group-hover:text-black transition-colors">Wholesale & Press</h4>
                  <p className="text-xl font-medium border-b border-transparent group-hover:border-black inline-block transition-all duration-300">studio@velora.com</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Visit Our Studio</h4>
                  <p className="text-gray-600 leading-relaxed text-lg italic font-serif">
                    124 Fashion District, <br />
                    Jaipur, Rajasthan, 302001
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-gray-100">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-black">
                Business Hours
              </h2>
              <div className="space-y-3 text-xs tracking-[0.2em] text-gray-500">
                <div className="flex justify-between max-w-[250px]">
                  <span>MON — FRI</span>
                  <span className="text-black font-bold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between max-w-[250px]">
                  <span>SAT — SUN</span>
                  <span className="text-black font-bold">11:00 - 16:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-[#fcfcfc] p-8 md:p-16 border border-gray-50 shadow-sm">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-black">
                The Inquiry Form
              </h2>
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. ARJUN MEHTA"
                      className="w-full bg-transparent border-b-2 border-gray-100 py-3 text-sm focus:outline-none focus:border-black transition-all duration-500 placeholder:text-gray-200 uppercase tracking-widest"
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="YOU@EXAMPLE.COM"
                      className="w-full bg-transparent border-b-2 border-gray-100 py-3 text-sm focus:outline-none focus:border-black transition-all duration-500 placeholder:text-gray-200 uppercase tracking-widest"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Reason for contact</label>
                  <select className="w-full bg-transparent border-b-2 border-gray-100 py-3 text-sm focus:outline-none focus:border-black transition-all duration-500 text-gray-500 uppercase tracking-widest appearance-none rounded-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Order Status</option>
                    <option>Returns & Exchanges</option>
                    <option>Collaborations</option>
                  </select>
                </div>

                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Message</label>
                  <textarea 
                    rows="4" 
                    required
                    placeholder="DESCRIBE YOUR REQUEST..."
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 text-sm focus:outline-none focus:border-black transition-all duration-500 placeholder:text-gray-200 uppercase tracking-widest resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end pt-4">
                  <button className="group relative overflow-hidden bg-black text-white px-16 py-5 text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 hover:pr-20 active:scale-95">
                    <span className="relative z-10">Send Message</span>
                    <span className="absolute right-8 opacity-0 group-hover:opacity-100 group-hover:right-10 transition-all duration-500">→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-32 bg-[#f4f1ee] text-gray-900 border-y border-black/5"> 
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="relative">
              <span className="text-black/20 text-7xl font-serif italic absolute -top-12 -left-4 select-none">Q&A</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.8] relative z-10">
                Common <br /> <span className="font-serif italic font-light lowercase text-gray-400">Queries</span>
              </h2>
            </div>
            <div className="max-w-xs space-y-4">
              <div className="h-[1px] w-12 bg-black"></div>
              <p className="text-gray-500 text-[10px] tracking-[0.3em] leading-relaxed uppercase">
                Find quick answers regarding our logistics, global reach, and return standards.
              </p>
            </div>
          </div>

          {/* Minimalist List Layout with Hover Reveals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { q: "Where is my order?", a: "Once shipped, you will receive a tracking link via email within 24-48 hours. Most orders arrive within 5-7 business days." },
              { q: "Do you ship worldwide?", a: "Yes, we ship to over 50 countries. International rates and duties are calculated live at checkout for transparency." },
              { q: "What is your return policy?", a: "We accept returns on all unworn, tagged items within 7 days of delivery. Process your return via our digital portal." }
            ].map((item, i) => (
              <div key={i} className="group relative">
                {/* Decorative Number */}
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-[10px] font-black tracking-widest text-black/20">0{i+1}</span>
                  <div className="h-[1px] flex-grow bg-black/5 group-hover:bg-black/20 transition-colors duration-500"></div>
                </div>
                
                <h4 className="font-bold uppercase tracking-[0.15em] text-sm mb-4 leading-snug group-hover:text-gray-500 transition-colors">
                  {item.q}
                </h4>
                
                <p className="text-gray-500 text-xs leading-relaxed tracking-wide font-medium italic font-serif">
                  {item.a}
                </p>

                {/* Subtle bottom accent */}
                <div className="mt-8 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER DECO ================= */}
      <div className="h-2 bg-gradient-to-r from-gray-100 via-black to-gray-100"></div>

    </div>
  );
}

export default Contact;