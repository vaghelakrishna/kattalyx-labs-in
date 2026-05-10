import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import FAQSection from '@/components/FAQ';

// --- Types ---
interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  content?: string;
}

interface BlogOfMonth {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  excerpt: string;
  content?: string;
}

interface latestFeed {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  excerpt: string;
  content?: string;
}

const BlogOfMonth: BlogOfMonth[] = [
  {
    id: 101,
    title: "Comparing Chicago's Top UI/UX Agencies in 2026: Pricing, Services, and Expertise",
    category: "Business",
    date: "10 Jan, 2026",
    author: "Ravi Talajiya",
    imageUrl: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop",
    excerpt: "An analysis of the midwest's premier design firms and their shift towards AI-integrated workflows."
  },
  {
    id: 102,
    title: "Master Enterprise UX Design: Challenges, Best Practices & Insights",
    category: "UI/UX",
    date: "29 Oct, 2025",
    author: "Nitin Rafaliya",
    imageUrl: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2071&auto=format&fit=crop",
    excerpt: "Strategies for managing complex data visualization and user permissions in global enterprise tools."
  },


];


// --- Separate Data for the "Latest" Section ---
const latestFeed: latestFeed[] = [
  {
    id: 101,
    title: "Comparing Chicago's Top UI/UX Agencies in 2026: Pricing, Services, and Expertise",
    category: "Business",
    date: "10 Jan, 2026",
    author: "Ravi Talajiya",
    imageUrl: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop",
    excerpt: "An analysis of the midwest's premier design firms and their shift towards AI-integrated workflows."
  },
  {
    id: 102,
    title: "Master Enterprise UX Design: Challenges, Best Practices & Insights",
    category: "UI/UX",
    date: "29 Oct, 2025",
    author: "Nitin Rafaliya",
    imageUrl: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2071&auto=format&fit=crop",
    excerpt: "Strategies for managing complex data visualization and user permissions in global enterprise tools."
  },


];

// --- Mock Data ---
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI Integration in Blockchain",
    category: "Technology",
    date: "Feb 12, 2026",
    excerpt: "Exploring the intersection of decentralized ledgers and generative artificial intelligence.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    content: "Detailed content about AI and Blockchain goes here. This technology is revolutionizing data security and educational transparency by providing immutable records of achievement."
  },
  {
    id: 2,
    title: "Scaling Web3 Ecosystems for the Next Billion Users",
    category: "Ecosystem",
    date: "Feb 10, 2026",
    excerpt: "How infrastructure improvements are clearing the path for mass adoption in 2026.",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    content: "Scaling remains the core challenge for decentralized networks. By utilizing Layer 2 solutions, we can handle the throughput required for global EdTech platforms."
  },
  {
    id: 3,
    title: "Security Best Practices for Smart Contract Devs",
    category: "Development",
    date: "Feb 05, 2026",
    excerpt: "Essential patterns and auditing steps to ensure your protocol remains robust.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    content: "Security is a culture, not a feature. We deep dive into Reentrancy attacks and how modern compilers are helping developers stay safe."
  },
  {
    id: 4,
    title: "Advanced React Patterns for 2026",
    category: "Development",
    date: "Jan 28, 2026",
    excerpt: "Deep dive into server components and specialized hooks for education platforms.",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    content: "React Server Components have changed the way we think about data fetching. Learn how to optimize your dashboard for speed."
  },
  {
    id: 5,
    title: "Digital Literacy in Modern Schools",
    category: "Education",
    date: "Jan 20, 2026",
    excerpt: "How curriculum changes are helping students navigate the age of AI safely.",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    content: "Education is no longer just about information; it's about verification. Students need tools to distinguish between human and AI content."
  },
  {
    id: 6,
    title: "Decentralized Identity in Education",
    category: "Ecosystem",
    date: "Jan 15, 2026",
    excerpt: "Using DID to verify student credentials without a central authority.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    content: "DIDs allow students to own their academic transcripts. No more waiting for registrar offices to mail paper documents."
  },
];

const BlogPage: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleViewLesson = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGrid = () => {
    setSelectedPost(null);
  };


  const [searchTerm, setSearchTerm] = useState("");


  // Filter logic for search
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="w-full bg-[#FCFCFC] text-slate-900 font-sans min-h-screen">
        {!selectedPost ? (
          <>
            {/* --- HERO SECTION --- */}
            <section className="relative w-full bg-white text-slate-900 overflow-hidden border-b border-slate-100 pt-25 md:pt-0">
              <div className="max-w-7xl mx-auto flex flex-col min-h-[auto] md:min-h-[400px]">

                {/* Top Section: Title Area */}
                <div className="w-full px-6 py-10 md:pt-34 md:px-4 flex flex-col items-start justify-center relative group border-b border-slate-50">

                  {/* Background Glow - Mobile par thoda chota kiya hai */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-blue-50/60 rounded-full blur-3xl -z-10" />

                  <div className="relative inline-block w-fit">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-none">
                      Blog<span className="text-blue-600">.</span>
                    </h1>
                  </div>

                  <div className="w-full flex flex-col md:flex-row ">
                    {/* Description Area */}
                    <div className="flex-1 py-8 md:py-10 flex flex-col items-start text-left bg-[#fdfdfd]/50 md:bg-[#fdfdfd]">
                      <div className="max-w-xl">
                        <h2 className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3 md:mb-4">
                          Masterclass Resources
                        </h2>
                        <p className="text-lg md:text-3xl text-slate-600 font-medium leading-tight">
                          Deepen your <span className="text-slate-900 underline decoration-blue-500/30 decoration-4 md:decoration-8 underline-offset-4">knowledge</span>.
                          <br className="hidden md:block" />
                          <span className="mt-2 block md:inline">Latest news, insights and tips from the team.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* --- blog of Month   SECTION --- */}
            <section className="w-full py-20 px-8  bg-white">
              <div className="max-w-7xl mx-auto">

                <div className="flex justify-between items-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    Blog of Month
                  </h2>
                  <div className="w-2.5 h-2.5 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {BlogOfMonth.slice(0, visibleCount).map((post) => (
                    <article
                      key={post.id}
                      className="group relative aspect-[16/9] overflow-hidden rounded-[2rem] cursor-pointer bg-slate-900 shadow-2xl"
                    >
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                        {/* Metadata Bar */}
                        <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                            <span>{post.category}</span>
                            <span className="text-white/40">/</span>
                            <span className="text-white/70 font-medium">{post.date}</span>
                          </div>
                          <div className="text-xs text-white/70 font-medium lowercase">
                            by <span className="text-white font-bold capitalize">{post.author}</span>
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-[1.1] tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                          {post.title}
                        </h3>
                      </div>
                    </article>
                  ))}
                </div>


              </div>
            </section>

            {/* --- LATEST ON THE BLOG SECTION --- */}
            <section className="w-full py-20 px-8  bg-white">
              <div className="max-w-7xl mx-auto">

                <div className="flex justify-between items-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    Latest on the blog!
                  </h2>
                  <div className="w-2.5 h-2.5 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {latestFeed.slice(0, visibleCount).map((post) => (
                    <article
                      key={post.id}
                      className="group relative aspect-[16/9] overflow-hidden rounded-[2rem] cursor-pointer bg-slate-900 shadow-2xl"
                    >
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                        {/* Metadata Bar */}
                        <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                            <span>{post.category}</span>
                            <span className="text-white/40">/</span>
                            <span className="text-white/70 font-medium">{post.date}</span>
                          </div>
                          <div className="text-xs text-white/70 font-medium lowercase">
                            by <span className="text-white font-bold capitalize">{post.author}</span>
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-[1.1] tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                          {post.title}
                        </h3>
                      </div>
                    </article>
                  ))}
                </div>


              </div>
            </section>

            {/* --- GRID VIEW SECTION --- */}
            {/* <section className="pb-24 bg-[#FCFCFC]">
              <div className="max-w-7xl mx-auto px-8 ">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 pt-16 gap-6">
                  <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                      More Great Reads!
                    </h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                  </div>

                  <div className="relative w-full md:w-96">
                    <input
                      type="text"
                      placeholder="Search blog..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-full shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {filteredPosts.slice(0, visibleCount).map((post) => (
                    <article
                      key={post.id}
                      onClick={() => handleViewLesson(post)}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-6 shadow-sm border border-slate-100">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex justify-between items-center mb-3 px-2">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
                          <span className="text-slate-500">{post.category}</span>
                          <span>/</span>
                          <span>{post.date}</span>
                        </div>
                        <div className="text-[11px] font-medium text-slate-400">
                          by <span className="text-slate-600 font-bold">{post.author || "Ravi Talajiya"}</span>
                        </div>
                      </div>

                      <h3 className="px-2 text-xl font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </article>
                  ))}
                </div>

                {visibleCount < filteredPosts.length && (
                  <div className="mt-20 flex justify-center">
                    <button
                      onClick={() => setVisibleCount(prev => prev + 3)}
                      className="group relative px-12 py-4 bg-black rounded-full overflow-hidden text-white transition-all duration-300 hover:shadow-xl active:scale-95"
                    >
                      <span className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest">
                        Explore More Articles
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </section> */}

            {/* --- GRID VIEW --- */}
            <section className="px-8 md:px-20 pb-24 bg-[#FCFCFC]">
              <div className="flex flex-col md:flex-row justify-between items-center mb-16 pt-16 gap-6">
                <div className="text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                    More Great Reads!
                  </h2>
                  <div className="h-1 w-20 bg-blue-600 rounded-full" />
                </div>

                {/* Search Bar - Styled like Reference Image */}
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    placeholder="Search blog..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-full shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredPosts.slice(0, visibleCount).map((post) => (
                  <article
                    key={post.id}
                    onClick={() => handleViewLesson(post)}
                    className="group relative bg-white border border-slate-200 rounded-3xl p-4 transition-all duration-500 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] cursor-pointer"
                  >
                    <div className="absolute top-0 left-10 right-10 h-1 bg-slate-100 rounded-b-full overflow-hidden">
                      <div className="h-full w-1/3 bg-blue-500 transition-all duration-700 group-hover:w-full" />
                    </div>
                    <div className="relative aspect-[16/11] overflow-hidden rounded-2xl mb-6">
                      <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold px-4 py-2 rounded-lg shadow-sm">{post.category}</span>
                      </div>
                    </div>
                    <div className="px-2 pb-4 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4 text-xs font-semibold text-slate-400 uppercase tracking-tighter">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-[10px]">EDU</div>
                        {post.date} • 5 Min Read
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">{post.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">View Lesson</span>
                        <div className="w-10 h-10  flex items-center justify-center transition-all duration-300 ">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 group-hover:text-blue-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* --- LOAD MORE LOGIC (Strictly 3 at a time) --- */}
              {visibleCount < blogPosts.length && (
                <div className="mt-20 flex justify-center">
                  <button
                    onClick={handleLoadMore}
                    className="group relative px-12 py-4 bg-black border-2 border-slate-900 rounded-full overflow-hidden text-white transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    <div className="absolute inset-0 w-0 bg-slate-900 transition-all duration-300 ease-out group-hover:w-full -z-10" />
                    <span className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest">
                      Explore More Blog
                    </span>
                  </button>
                </div>
              )}
            </section>
          </>
        ) : (
          /* --- DETAIL VIEW --- */
          <div className="pt-32 pb-24 px-8  animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="max-w-4xl mx-auto">
              <button
                onClick={handleBackToGrid}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors mb-12 text-sm font-bold uppercase tracking-widest"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Journey
              </button>

              <div className="flex items-center gap-4 mb-6">
                <span className="bg-blue-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                  {selectedPost.category}
                </span>
                <span className="text-slate-400 text-sm">{selectedPost.date}</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-12 leading-tight">
                {selectedPost.title}
              </h1>

              <div className="aspect-video rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border border-slate-100">
                <img src={selectedPost.imageUrl} className="w-full h-full object-cover" alt="Detail" />
              </div>

              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
                <p className="text-2xl text-slate-900 font-light mb-12 border-l-4 border-blue-500 pl-8">
                  {selectedPost.excerpt}
                </p>
                <div className="space-y-6 text-lg">
                  <p>{selectedPost.content}</p>
                  <p>In this comprehensive lesson, we explore the fundamental shifts happening in {selectedPost.category}. Our goal is to provide students with actionable insights that bridge the gap between theory and real-world application.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <FAQSection/>
      <Footer />
    </>
  );
};

export default BlogPage;


