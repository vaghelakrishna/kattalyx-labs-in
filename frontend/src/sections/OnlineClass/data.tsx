// Shared data for OnlineClasses page sections
import { Activity, Box, Slack, Zap, Command } from 'lucide-react';

export interface Mentor {
  name: string;
  expert: string;
  company: string;
  lightColor: string;
  accent: string;
  border: string;
  text: string;
}

export const categories = [
  "AI & Machine Learning",
  "Career Counselling",
  "Coding & Tech Explorers",
  "Cyber Awareness",
  "Digital Marketing",
  "Emotional Intelligence",
  "Financial Literacy",
  "Leadership & Strategic Thinking",
  "Mental Health & Psychology",
  "Public Speaking",
  "Startup & Entrepreneurship",
  "Vedic Maths",
];

export const trendingSections = [
  {
    category: "AI & Machine Learning",
    classes: [
      {
        title: "AI/ML & ChatGPT Tools Mastery",
        provider: "21st Century Tech",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400",
        rating: 4.9,
        type: "Self-Paced",
      },
      {
        title: "Neural Networks Basics",
        provider: "Tech Explorers",
        img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=400",
        rating: 4.7,
        type: "Live",
      },
    ],
  },
  {
    category: "Financial Literacy",
    classes: [
      {
        title: "Stock Market & Compounding",
        provider: "Financial Adv.",
        img: "https://images.unsplash.com/photo-1611974714851-48206138d731?auto=format&fit=crop&w=400",
        rating: 4.8,
        type: "Masterclass",
      },
    ],
  },
];

export const curatedCurriculum = [
  {
    category: "Artificial Intelligence",
    classes: [
      {
        title: "Neural Architectures for Creative Media",
        provider: "OpenAI Labs",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400",
        type: "Advanced",
        rating: "4.9",
      },
      {
        title: "Large Language Model Fine-Tuning",
        provider: "DeepMind Academy",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400",
        type: "Professional",
        rating: "4.8",
      },
    ],
  },
  {
    category: "Financial Tech",
    classes: [
      {
        title: "Algorithmic Trading & Risk Analysis",
        provider: "Goldman Tech",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400",
        type: "Corporate",
        rating: "5.0",
      },
    ],
  },
];

export const allAvailableClasses = curatedCurriculum.flatMap((section) => section.classes);

export const upcomingClasses = [
  {
    title: "AI Strategy for Java Teams",
    provider: "DeepLearning.AI",
    type: "Executive Session",
    startDate: "Oct 20",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
  },
  {
    title: "Foundations of Agile with Java",
    provider: "Kattalyx",
    type: "Masterclass",
    startDate: "Oct 15",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800",
  },
  {
    title: "Java Data Analysis & SQL",
    provider: "Oracle",
    type: "Specialization",
    startDate: "Nov 02",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800",
  },
  {
    title: "Java Full Stack Developer",
    provider: "IBM",
    type: "Live Bootcamp",
    startDate: "Nov 15",
    img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800",
  },
  {
    title: "Java for Business Managers",
    provider: "Google",
    type: "Live Cohort",
    startDate: "Oct 12",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",
  },
  {
    title: "Spring Boot & Cloud Architecture",
    provider: "Kattalyx",
    type: "Live Series",
    startDate: "Nov 05",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
  },
];

export const mentors: Mentor[] = [
  {
    name: "David Wu",
    expert: "AI Specialist",
    company: "OpenAI",
    lightColor: "rgba(249, 115, 22, 0.1)",
    accent: "bg-orange-500",
    border: "hover:border-orange-200",
    text: "text-orange-500",
  },
  {
    name: "Elena Rodriguez",
    expert: "UX Director",
    company: "Airbnb",
    lightColor: "rgba(236, 72, 153, 0.1)",
    accent: "bg-pink-500",
    border: "hover:border-pink-200",
    text: "text-pink-500",
  },
  {
    name: "Marcus Thorne",
    expert: "Product Lead",
    company: "Meta",
    lightColor: "rgba(16, 185, 129, 0.1)",
    accent: "bg-emerald-500",
    border: "hover:border-emerald-200",
    text: "text-emerald-500",
  },
  {
    name: "Sarah Chen",
    expert: "Senior Architect",
    company: "Google",
    lightColor: "rgba(37, 99, 235, 0.1)",
    accent: "bg-blue-600",
    border: "hover:border-blue-200",
    text: "text-blue-600",
  },
];

export const partners = [
  {
    name: 'Asana',
    icon: <Zap size={24} className="text-rose-500" />,
    brand: 'Asana',
  },
  {
    name: 'Intercom',
    icon: <Activity size={24} className="text-blue-500" />,
    brand: 'Intercom',
  },
  {
    name: 'Linear',
    icon: <Command size={24} className="text-slate-900" />,
    brand: 'Linear',
  },
  {
    name: 'Notion',
    icon: <Box size={24} className="text-slate-900" />,
    brand: 'Notion',
  },
  {
    name: 'Slack',
    icon: <Slack size={24} className="text-purple-500" />,
    brand: 'Slack',
  },
];

export const liveLabsClasses = [
  {
    title: "Quantum UI Architectures",
    provider: "CyberDyne",
    category: "Design",
    price: "199",
    color: "bg-blue-600",
    lightColor: "bg-blue-50/80",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800",
  },
  {
    title: "Neural Network Alchemy",
    provider: "Vercel Elite",
    category: "Development",
    price: "249",
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50/80",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800",
  },
  {
    title: "Spatial Product Design",
    provider: "Visionary",
    category: "Product",
    price: "159",
    color: "bg-purple-600",
    lightColor: "bg-purple-50/80",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800",
  },
];