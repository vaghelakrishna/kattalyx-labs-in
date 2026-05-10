import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This snaps the view to the top left of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Instant jump for better UX on page changes
    });
  }, [pathname]); // Runs every time the URL path changes

  return null;
};

export default ScrollToTop;