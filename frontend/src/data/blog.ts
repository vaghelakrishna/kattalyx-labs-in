export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  author?: string;
  imageUrl: string;
  excerpt: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 101,
    title: "Comparing Chicago's Top UI/UX Agencies in 2026: Pricing, Services, and Expertise",
    category: "Business",
    date: "10 Jan, 2026",
    author: "Ravi Talajiya",
    imageUrl: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop",
    excerpt: "An analysis of the midwest's premier design firms and their shift towards AI-integrated workflows.",
    content: "In this article, we examine how UI/UX agencies are evolving to meet new product requirements and digital trust standards. The 2026 buyer is smarter, faster, and more metric-driven, so teams must adapt their delivery models accordingly."
  },
  {
    id: 102,
    title: "Master Enterprise UX Design: Challenges, Best Practices & Insights",
    category: "UI/UX",
    date: "29 Oct, 2025",
    author: "Nitin Rafaliya",
    imageUrl: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2071&auto=format&fit=crop",
    excerpt: "Strategies for managing complex data visualization and user permissions in global enterprise tools.",
    content: "Enterprise UX is about balancing stakeholder needs, accessibility, and performance. In this piece, we share how to keep workflows intuitive while still supporting powerful enterprise features."
  },
  {
    id: 1,
    title: "The Future of AI Integration in Blockchain",
    category: "Technology",
    date: "Feb 12, 2026",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    excerpt: "Exploring the intersection of decentralized ledgers and generative artificial intelligence.",
    content: "Detailed content about AI and Blockchain goes here. This technology is revolutionizing data security and educational transparency by providing immutable records of achievement."
  },
  {
    id: 2,
    title: "Scaling Web3 Ecosystems for the Next Billion Users",
    category: "Ecosystem",
    date: "Feb 10, 2026",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    excerpt: "How infrastructure improvements are clearing the path for mass adoption in 2026.",
    content: "Scaling remains the core challenge for decentralized networks. By utilizing Layer 2 solutions, we can handle the throughput required for global EdTech platforms."
  },
  {
    id: 3,
    title: "Security Best Practices for Smart Contract Devs",
    category: "Development",
    date: "Feb 05, 2026",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    excerpt: "Essential patterns and auditing steps to ensure your protocol remains robust.",
    content: "Security is a culture, not a feature. We deep dive into Reentrancy attacks and how modern compilers are helping developers stay safe."
  },
  {
    id: 4,
    title: "Advanced React Patterns for 2026",
    category: "Development",
    date: "Jan 28, 2026",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    excerpt: "Deep dive into server components and specialized hooks for education platforms.",
    content: "React Server Components have changed the way we think about data fetching. Learn how to optimize your dashboard for speed."
  },
  {
    id: 5,
    title: "Digital Literacy in Modern Schools",
    category: "Education",
    date: "Jan 20, 2026",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755978927d7?auto=format&fit=crop&q=80&w=800",
    excerpt: "How curriculum changes are helping students navigate the age of AI safely.",
    content: "Education is no longer just about information; it's about verification. Students need tools to distinguish between human and AI content."
  },
  {
    id: 6,
    title: "Decentralized Identity in Education",
    category: "Ecosystem",
    date: "Jan 15, 2026",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    excerpt: "Using DID to verify student credentials without a central authority.",
    content: "DIDs allow students to own their academic transcripts. No more waiting for registrar offices to mail paper documents."
  }
];

export const BlogOfMonth: BlogPost[] = blogPosts.slice(0, 2);
export const latestFeed: BlogPost[] = blogPosts.slice(0, 2);
export const allBlogPosts: BlogPost[] = blogPosts;
