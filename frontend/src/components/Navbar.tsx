import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import kattalyx from "../assets/kattalyxlab-removebg-preview.png";
import watermark from "../assets/Watermark.png";
import AnnouncementBar from "./ui/AnnouncementBar";

interface User {
  name: string;
  role: 'Admin' | 'SuperAdmin' | 'User';
  avatar?: string;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEventMobileOpen, setIsEventMobileOpen] = useState(false);

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  const announcementMessages: Record<string, string> = {
    "/": "Welcome to Kattalyx Labs! Discover the latest programs and events.",
    "/about": "Learn why thousands of students choose Kattalyx Labs for their growth.",
    "/modules": "Explore our cutting-edge modules designed for future-ready skills.",
    "/collaborations": "See our powerful collaborations and global partners.",
    "/event": "Join upcoming events and workshops curated for achievers.",
    "/event-portfolio": "Browse our event portfolio and success stories.",
    "/mentors": "Find the perfect mentor to accelerate your learning journey.",
    "/blog": "Read inspiring stories, tips, and industry insights from our blog.",
    "/online-classes": "Access live classes and expert-led sessions anytime, anywhere.",
    "/college": "Discover our college visit programs and admission support.",
    "/branding": "Explore our institutional branding services for visibility, digital marketing and brand value.",
    "/contact": "Need help? Reach out to our support team anytime.",
    "/login": "Log in to continue your journey with Kattalyx Labs.",
    "/register": "Register now to unlock exclusive courses and events.",
    "/privacy-policy": "Read how we protect your data and build trust with every interaction.",
    "/terms": "Review the terms and conditions that govern our services.",
    "/refund-policy": "Learn about our refund and cancellation policy before you enroll.",
    "/verify": "Verify your certificate quickly with our trusted system.",
  };

  const getAnnouncementMessage = (pathname: string) => {
    if (pathname.startsWith("/mentors/")) {
      return "Meet our mentor and discover expertise tailored to your goals.";
    }
    if (pathname.startsWith("/events/")) {
      return "View event details and secure your spot today.";
    }
    if (pathname.startsWith("/settings") || pathname === "/speaker-profile" || pathname === "/school-settings" || pathname === "/school-profile") {
      return "Manage your profile and settings from one convenient place.";
    }
    return announcementMessages[pathname] ?? "Stay updated with the latest announcements from Kattalyx Labs.";
  };

  const announcementMessage = getAnnouncementMessage(location.pathname);

  const getInitials = (name: string) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Shadow logic
      setIsScrolled(currentScrollY > 50);

      // Hide/Show logic on scroll
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

    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
        setIsLoggedIn(true);
      } catch { localStorage.clear(); }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
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
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setIsProfileOpen(false);
    setIsEventMobileOpen(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUser(null);
    setIsOpen(false);
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/event" },
    { name: "Event Portfolio", path: "/event-portfolio" },
    { name: "Collaborations", path: "/collaborations" },
    { name: "Branding", path: "/branding", desc: "Build your brand identity" },
    { name: "Podcasting", path: "/podcasting", desc: "Your voice, your platform" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" }
  ];



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
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
            <Link to="/" className="flex items-center space-x-1">
              <img src={watermark} alt="Logo" className="h-8 w-8" />
              <img src={kattalyx} alt="Kattalyx Labs" className="h-8 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-2">
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
                    <>
                      <motion.div layoutId="navbar-active" className="absolute inset-0 bg-blue-50/50 rounded-lg -z-0" />
                      <motion.div layoutId="navbar-line" className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full" />
                    </>
                  )}
                </Link>
              ))}


            </div>

            {/* User Section (Desktop) */}
            <div className="hidden lg:flex items-center">
              {!isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <Link to="/login" className="text-sm font-bold text-gray-700 hover:text-blue-600">SIGN IN</Link>
                  <Link to="/register">
                    <button className="bg-blue-600 text-white px-6 py-2.5 text-sm font-bold rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">SIGN UP</button>
                  </Link>
                </div>
              ) : (
                <div className="relative" ref={dropdownRef}>
                  <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 border-2 border-white shadow-md flex items-center justify-center text-white font-bold overflow-hidden transition-transform group-hover:scale-110">
                      {user?.avatar ? <img src={user.avatar} alt="P" className="w-full h-full object-cover" /> : getInitials(user?.name || "")}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 overflow-hidden"
                      >
                        <div className="px-5 py-3 border-b border-gray-50 bg-gray-50/50">
                          <p className="text-sm font-bold text-gray-900 truncate">{user?.name}</p>
                          <p className="text-[10px] uppercase tracking-wider font-bold text-blue-600 mt-0.5">{user?.role}</p>
                        </div>
                        <Link to="/profile" className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50">My Profile</Link>
                        <button onClick={handleLogout} className="w-full text-left px-5 py-2.5 text-sm text-red-600 hover:bg-red-50 font-bold">Logout</button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gray-800 focus:outline-none relative z-[80]">
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

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="fixed inset-0 bg-white z-[70] lg:hidden flex flex-col h-screen w-full overflow-y-auto pt-32 px-8 pb-10"
            >
              {/* User Section (Mobile) */}
              {isLoggedIn && (
                <div className="flex items-center space-x-4 mb-8 p-5 bg-blue-50 rounded-3xl border border-blue-100">
                  <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg overflow-hidden">
                    {user?.avatar ? <img src={user.avatar} className="w-full h-full object-cover" /> : getInitials(user?.name || "")}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">{user?.name}</p>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">{user?.role}</p>
                  </div>
                </div>
              )}

              {/* Navigation Links (Mobile) */}
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

                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setIsEventMobileOpen((prev) => !prev)}
                    className={`w-full flex items-center justify-between text-left text-2xl font-bold transition-all}`}
                  >
                    <span>Events</span>
                    <span className="text-3xl">{isEventMobileOpen ? "−" : "+"}</span>
                  </button>


                </div>

                <hr className="my-4 border-gray-100" />

                {/* Auth Buttons (Mobile) */}
                {!isLoggedIn ? (
                  <div className="flex flex-col space-y-4 pt-2">
                    <Link to="/login" className="text-xl font-bold text-gray-700">SIGN IN</Link>
                    <Link to="/register" className="bg-blue-600 text-white text-center py-4 rounded-2xl font-bold shadow-lg shadow-blue-100">
                      SIGN UP
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-4 pt-2">
                    <Link to="/profile" className="text-xl font-bold text-gray-700">My Profile</Link>
                    <button onClick={handleLogout} className="text-left text-xl font-bold text-red-600">
                      Logout  
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;