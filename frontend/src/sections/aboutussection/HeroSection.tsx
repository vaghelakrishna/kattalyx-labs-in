import { ChevronRight } from 'lucide-react';
const HeroSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-24 px-6 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 block mb-6">
            KATTALYX LABS
          </span>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-8">
            Discover our journey and <br /> what drives us
          </h2>

          {/* Trust Avatars */}
        </div>
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

          {/* Main Brand Image Card */}
          <div className="md:col-span-8 rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              alt="Our Team"
              className="w-full h-full object-cover min-h-[450px]"
            />
          </div>

          {/* Stats/Infographic Card */}
          <div className="md:col-span-4 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm flex flex-col justify-center">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-inner">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Growth</span>
                <span className="text-[10px] bg-white px-2 py-1 rounded-md border border-slate-100 text-slate-400">Monthly</span>
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-6">85%</h3>

              {/* Simple CSS Bar Chart */}
              <div className="flex items-end justify-between h-32 gap-2">
                {[40, 70, 50, 60, 90, 80].map((height, i) => (
                  <div key={i} className="flex-1 bg-blue-100 rounded-t-full relative group">
                    <div
                      className="bg-blue-600 rounded-t-full absolute bottom-0 w-full transition-all duration-700"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-8 text-center text-sm text-slate-500 font-medium">
              Consistent value delivery across all sectors.
            </p>
          </div>

        </div>

        {/* Bottom CTA (Optional) */}
        <div className="mt-12 flex justify-center">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-slate-800 transition-all group">
            Learn More About Us
            <div className="bg-white/10 rounded-full p-1 group-hover:translate-x-1 transition-transform">
              <ChevronRight size={18} />
            </div>
          </button>
        </div>

      </div>
    </section>
  )
}

export default HeroSection;