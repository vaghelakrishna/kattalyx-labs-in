//import HeroSection from "../sections/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsComponent from "@/components/Testimonal";
import HowItWorksSection from "@/components/HowItWorks";
import FAQSection from "@/components/FAQ";
import MeetMentor from "@/sections/HomePage/MeetMentor";
import OurPartner from "@/sections/HomePage/OurPartner";
import StartLearningCTA from "@/sections/StartLearningCTA";
import HeroSection from "@/sections/HomePage/HeroSection";
import OurExpertise from "@/sections/HomePage/OurExpertise";
import EventSlider from "@/components/PastEventsSlider";
import UpComingEvent from "@/sections/HomePage/UpComingEvent";
import OurEcosystem from "@/sections/HomePage/OurEcosystem";


const HomePage: React.FC = () => {

  interface BlogPost {
    id: number;
    category: string;
    title: string;
    date: string;
    image: string;
    author?: {
      name: string;
      avatar: string;
    };
    featured: boolean;
  }

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      category: "BRANDING",
      title: "Why storytelling shapes brand success",
      date: "Dec 20, 2025",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800", // Placeholder orange aesthetic
      author: { name: "Mason Clark", avatar: "https://i.pravatar.cc/150?u=mason" },
      featured: true,
    },
    {
      id: 2,
      category: "DESIGN",
      title: "The future of scalable design systems in 2025",
      date: "Jan 2, 2026",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=400",
      featured: false,
    },
    {
      id: 3,
      category: "DEVELOPMENT",
      title: "Built for High-Performance in Framer",
      date: "Dec 6, 2025",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400",
      featured: false,
    },
  ];
  const featuredPost = blogPosts.find(post => post.featured);
  const secondaryPosts = blogPosts.filter(post => !post.featured);
  return (

    <div className="text-black min-h-screen">
      <Navbar />


      {/* Hero - Main value proposition */}
      <HeroSection />

      {/* <FeaturedProgramsSection /> */}
      {/* Social Proof - Trusted institutions */}
      <OurEcosystem />

      <OurExpertise />

      {/* How It Works - Process explanation */}
      <HowItWorksSection />

      {/* UpComing Events */}
      <UpComingEvent />


      <MeetMentor />

      <OurPartner />

      <EventSlider />

      {/* Testimonials - Social proof */}
      <TestimonialsComponent />

      <section className="bg-gray-50 py-16 px-4 font-sans">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-center mb-12 text-[#1a1a1a]">
            Latest blog
          </h2>

          {/* Outer Container */}
          <div className="bg-[#f2f2f2] p-6 rounded-[2rem] flex flex-col lg:flex-row gap-4">

            {/* Featured Large Card */}
            {featuredPost && (
              <div className="flex-1 bg-white rounded-3xl p-8 flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                      {featuredPost.category}
                    </span>
                    <h3 className="text-2xl font-semibold mt-4 mb-2 leading-tight max-w-[250px]">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-4">{featuredPost.date}</p>
                  </div>

                  <div className="flex items-center gap-3 mt-8">
                    <img
                      src={featuredPost.author?.avatar}
                      alt={featuredPost.author?.name}
                      className="w-10 h-10 rounded-full bg-gray-200"
                    />
                    <span className="font-medium text-sm text-gray-800">
                      {featuredPost.author?.name}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <img
                    src={featuredPost.image}
                    alt="Feature"
                    className="w-full h-full object-cover rounded-2xl min-h-[300px]"
                  />
                </div>
              </div>
            )}

            {/* Right Column Side Cards */}
            <div className="flex flex-col gap-4 w-full lg:w-[400px]">
              {secondaryPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-3xl p-6 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-3 leading-snug">
                      {post.title}
                    </h3>
                  </div>

                  <div className="flex items-end justify-between mt-4">
                    <p className="text-gray-400 text-sm">{post.date}</p>
                    <img
                      src={post.image}
                      alt="Blog thumbnail"
                      className="w-24 h-16 object-cover rounded-xl"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      {/* <CTA Section /> */}
      <StartLearningCTA />

      {/* FAQ - Common questions */}
      <FAQSection />

      <Footer />

    </div>
  );
};

export default HomePage;
