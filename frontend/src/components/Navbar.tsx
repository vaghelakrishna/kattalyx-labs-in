import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import kattalyx from "../assets/kattalyxlab-removebg-preview.png";
import watermark from "../assets/Watermark.webp";
import AnnouncementBar from "./ui/AnnouncementBar";



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const announcementMessages: Record<string, string> = {
    "/": "Discover the next generation ecosystem for institutions and students.",
    "/about-us": "Learn why thousands of students choose Kattalyx Labs for their growth.",
    "/collaborations": "See our powerful institutional collaborations",
    "/events": "Get upcoming events and workshops details for achievers.",
    "/blog": "Read inspiring stories, tips, and industry insights from our blog.",
    "/branding": "Explore our institutional branding services for visibility.",
    "/contact": "Need help? Reach out to our support team anytime.",
    // "/podcasting": "Stay updated with Kattalyx Labs podcasts.",
  };

  const announcementMessage = announcementMessages[location.pathname] ?? "Stay updated with Kattalyx Labs.";



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Fix: Menu open hone par header ko hide mat hone do
      if (isOpen) {
        setIsVisible(true);
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 150);

      lastScrollY.current = currentScrollY;
    };




    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]); // Added isOpen as dependency

  // Lock Body Scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);



  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Events", path: "/events" },
    { name: "Collaborations", path: "/collaborations" },
    { name: "Branding", path: "/branding" },
    // { name: "Podcasting", path: "/podcasting" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out ${isVisible || isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <AnnouncementBar message={announcementMessage} />

      <nav
        className={`w-full transition-all duration-500 ease-in-out ${isScrolled || isOpen
            ? "bg-white backdrop-blur-xl shadow-lg py-3 border-b border-gray-100"
            : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-8xl mx-auto px-6 relative z-[70]">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-1" onClick={() => setIsOpen(false)}>
              <img src={watermark} alt="Logo" className="h-8 w-8" />
              <img src={kattalyx} alt="Kattalyx Labs" className="h-8 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-3 py-2 text-sm font-medium transition-colors"
                >
                  <span className={`relative z-10 ${isActive(link.path) ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-600"}`}>
                    {link.name}
                  </span>
                  {isActive(link.path) && (
                    <motion.div layoutId="navbar-line" className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* User & Hamburger */}
            <div className="flex items-center space-x-4">

              {/* Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-800 relative z-[80] focus:outline-none"
              >
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
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-white z-[65] lg:hidden flex flex-col h-screen w-full pt-28 px-8"
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-bold ${isActive(link.path) ? "text-blue-600" : "text-gray-800"}`}
                  >
                    {link.name}
                  </Link>
                ))}

                <hr className="border-gray-100" />

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;