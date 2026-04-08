function Career() {
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">
            Careers at <span className="underline underline-offset-8">Velora</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join our team and help shape the future of modern fashion.
            At Velora, we value creativity, passion, and growth.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="bg-white p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Why Work With Velora?
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>✔ Creative & collaborative work culture</li>
            <li>✔ Opportunity to grow with a fast-growing brand</li>
            <li>✔ Work on real-world fashion & e-commerce projects</li>
            <li>✔ Flexible work environment</li>
          </ul>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Open Positions
          </h2>

          <div className="space-y-6">
            
            {/* Job Card */}
            <div className="bg-white p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-medium">
                  Frontend Developer (React)
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Experience: 0–2 Years · Location: Remote
                </p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-2 bg-black text-white text-sm tracking-widest hover:bg-gray-900 transition">
                Apply Now
              </button>
            </div>

            <div className="bg-white p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-medium">
                  Graphic Designer
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Experience: 1–3 Years · Location: On-site
                </p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-2 bg-black text-white text-sm tracking-widest hover:bg-gray-900 transition">
                Apply Now
              </button>
            </div>

            <div className="bg-white p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-medium">
                  E-commerce Manager
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Experience: 2+ Years · Location: Jaipur
                </p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-2 bg-black text-white text-sm tracking-widest hover:bg-gray-900 transition">
                Apply Now
              </button>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Don’t see a role that fits?
          </h2>
          <p className="text-gray-600 mt-3">
            Send your resume to <strong>careers@velora.com</strong>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Career;
