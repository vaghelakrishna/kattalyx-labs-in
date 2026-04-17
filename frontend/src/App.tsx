import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import EventsPage from "./pages/AllEvents";
import CollegePage from "./pages/CollegePage";
import BrandingPage from "./pages/BrandingPage";
import PodcastingPage from "./pages/PodcastingPage";
import EntrepreneurshipPage from "./pages/EntrepreneurshipPage";
import EventPortfolio from "./pages/EventPortfolio";
import BlogPage from "./pages/BlogPage";
import ScrollToTop from "./components/ScrollToTop";
import CollaborationsPage from "./pages/CollaborationsPage";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/event" element={<EventsPage />} />
        <Route path="/event-portfolio" element={<EventPortfolio />} />
        <Route path="/collaborations" element={<CollaborationsPage />} />
        <Route path="/college" element={<CollegePage />} />
        {/* <Route path="/school" element={<SchoolPage />} /> */}
        <Route path="/branding" element={<BrandingPage />} />
        <Route path="/podcasting" element={<PodcastingPage />} />
        <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />

        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
};

export default App;
