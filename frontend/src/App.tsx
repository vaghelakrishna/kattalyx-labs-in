import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import BrandingPage from "./pages/BrandingPage";
import PodcastingPage from "./pages/PodcastingPage";
import EntrepreneurshipPage from "./pages/EntrepreneurshipPage";
import EventPortfolio from "./pages/EventPortfolio";
import BlogPage from "./pages/BlogPage";
import ScrollToTop from "./components/ScrollToTop";
import CollaborationsPage from "./pages/CollaborationsPage";
import ContactPage from "./pages/ContactUsPage";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/events" element={<EventPortfolio />} />
        <Route path="/collaborations" element={<CollaborationsPage />} />        <Route path="/branding" element={<BrandingPage />} />
        <Route path="/podcasting" element={<PodcastingPage />} />
        <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />

        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
