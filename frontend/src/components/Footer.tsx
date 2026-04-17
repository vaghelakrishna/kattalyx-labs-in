import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import logo from "../assets/logo.png";

const links = {
  company: [
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Mentors", href: "/mentors" },
    { name: "Collaborations", href: "/collaborations" },
    { name: "Blog", href: "/blog" },
    { name: "online-classes", href: "/online-classes"},
    { name: "College Visits", href: "/college" },
    { name: "verifyCertificate", href: "/verify" },
  ],
  resources: [
    { name: "Events", href: "/events" },
    { name: "Portfolio", href: "/event-portfolio" },
    { name: "For Schools", href: "/school-dashboard" },
    { name: "For Speakers", href: "/speaker-dashboard" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION: NEWSLETTER / CALL TO ACTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <h4 className="text-4xl font-black   uppercase tracking-tighter mb-4 leading-none">
              Level up your <br /> <span className="text-blue-600">Inbox.</span>
            </h4>
            <p className="text-slate-500 text-sm font-medium">Join 5,000+ students receiving real-world skill updates.</p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-grow bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
            />
            <button className="bg-slate-900 text-white p-4 rounded-2xl hover:bg-blue-600 transition-all group">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 lg:gap-8 pb-20">

          {/* Brand & Mission */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="Kattalyx Labs Logo"
                className="w-12 h-12 transition-all"
              />
            </Link>

            <h3 className="font-bold mt-2">Kattalyx Labs Private Limited</h3>
            <p className="text-lg font-bold   uppercase tracking-tight mt-2 leading-tight max-w-xs">
              Building the World’s Largest <span className="text-blue-600">Real-World</span> Learning Ecosystem.
            </p>
            <div className="flex gap-4 mt-8">
              {[
                { icon: <FiLinkedin size={18} />, href: "https://linkedin.com" },
                { icon: <FiInstagram size={18} />, href: "https://instagram.com" },
                { icon: <FiTwitter size={18} />, href: "https://twitter.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Ecosystem</p>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Infrastructure</p>
            <ul className="space-y-4">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Location */}
          <div className="col-span-2 md:col-span-2">
            <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Status</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Active</span>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase leading-relaxed">
              C/o Manish Jain, Nai Mandi, Baraut, Baghpat, Uttar Pradesh 250611, India
            </p>

            <p className="text-[10px] font-bold text-slate-400 uppercase leading-relaxed"> <br />
              CIN: U85500UP2025PTC239031 <br />
              PAN: AAMCK4220H <br />
              TAN: MRTK09475E <br />
              Incorporation Date: 19th December 2025 <br />
              ROC: Kanpur</p>
          </div>

        </div>

        {/* BOTTOM LEGAL */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-blue-600 fill-blue-600" />
            <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
              © {new Date().getFullYear()} KATTALYX LABS
            </p>
          </div>

          <div className="flex gap-8">
            <Link to="/privacy-policy" className="text-[10px] font-black text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-all">Privacy Policy</Link>
            <Link to="/terms" className="text-[10px] font-black text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-all">Terms of Service</Link>

            <Link to="/refund-policy" className="text-[10px] font-black text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-all">Refund And Cancellation Policy</Link>
          </div>

          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
            Built for the 1%
          </p>
        </div>
      </div>
    </footer>
  );
}