import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import kattalyx from "../assets/kattalyxlab-removebg-preview.png";
import watermark from "../assets/Watermark.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/event" },
    { name: "Event Portfolio", path: "/event-portfolio" },
    { name: "Collaborations", path: "/collaborations" },
    { name: "Branding", path: "/branding", desc: "Build your brand identity" },
    { name: "Podcasting", path: "/podcasting", desc: "Your voice, your platform" },
    { name: "Blog", path: "/blog" },
    {name : "Contact Us", path: "/contact"}
  ];

  // const exploreLinks = [
  //   // { name: "College", path: "/college", desc: "Campus visits & founder meets" },
  //   // { name: "School", path: "/school", desc: "Programs for institutions" },
  //   { name: "Entrepreneurship", path: "/entrepreneurship", desc: "Launch your startup" },
  // ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setIsVisible(true), 150);
      lastScrollY.current = currentScrollY;
    };

    const handleClickOutside = () => {
      // Handle click outside logic if needed
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <nav
        className={`w-full transition-all duration-500 ease-in-out ${isScrolled || isOpen
          ? "bg-white shadow-lg py-3 border-b border-gray-100"
          : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-[70]">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1">
              <img src={watermark} alt="Logo" className="h-8 w-8" />
              <img src={kattalyx} alt="Kattalyx Labs" className="h-8 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-3 py-2 text-sm font-medium transition-colors outline-none"
                >
                  <span className={`relative z-10 ${isActive(link.path)
                    ? "text-blue-600 font-bold"
                    : isScrolled ? "text-gray-600 hover:text-blue-500" : "text-gray-800 hover:text-blue-600"
                    }`}>
                    {link.name}
                  </span>
                  {isActive(link.path) && (
                    <motion.div layoutId="navbar-active" className="absolute inset-0 bg-blue-50/50 rounded-lg -z-0" />
                  )}
                </Link>
              ))}

              {/* Explore Dropdown */}
              {/* <div className="relative" ref={exploreRef}>
                <button
                  onClick={() => setIsExploreOpen(!isExploreOpen)}
                  className={`px-3 py-2 text-sm font-medium transition-colors outline-none flex items-center gap-1 ${
                    isScrolled ? "text-gray-600 hover:text-blue-500" : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  Explore
                  <motion.svg
                    animate={{ rotate: isExploreOpen ? 180 : 0 }}
                    width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {isExploreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute left-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50"
                    >
                      <p className="px-5 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Our Ecosystem</p>
                      {exploreLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="flex items-start gap-3 px-5 py-3 hover:bg-blue-50 transition-colors group"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                          <div>
                            <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{link.name}</p>
                            <p className="text-xs text-slate-400">{link.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <Link to="/entrepreneurship">
                <button className="bg-blue-600 text-white px-6 py-2.5 text-sm font-bold rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-800 focus:outline-none relative z-[80]">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <motion.path fill="transparent" strokeWidth="2.5" stroke="currentColor" strokeLinecap="round"
                  animate={isOpen ? { d: "M 5 19 L 19 5" } : { d: "M 3 5 L 21 5" }} />
                <motion.path fill="transparent" strokeWidth="2.5" stroke="currentColor" strokeLinecap="round" d="M 3 12 L 21 12"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }} />
                <motion.path fill="transparent" strokeWidth="2.5" stroke="currentColor" strokeLinecap="round"
                  animate={isOpen ? { d: "M 5 5 L 19 19" } : { d: "M 3 19 L 21 19" }} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="fixed inset-0 bg-white z-[50] md:hidden flex flex-col h-screen w-full overflow-y-auto pt-28 px-8 pb-10"
            >
              <div className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-2xl font-bold transition-all ${isActive(link.path) ? "text-blue-600 translate-x-2" : "text-gray-800"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pt-4">Explore</p> */}
                {/* {exploreLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-2xl font-bold transition-all ${
                      isActive(link.path) ? "text-blue-600 translate-x-2" : "text-gray-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))} */}

                <hr className="my-4 border-gray-100" />
                <Link to="/entrepreneurship" className="bg-blue-600 text-white text-center py-4 rounded-2xl font-bold shadow-lg shadow-blue-100">
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
