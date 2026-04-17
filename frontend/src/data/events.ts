import Event1 from '@/assets/events/Event1.webp';
import Event2 from '@/assets/events/Event2.webp';
import Event3 from '@/assets/events/Event3.webp';
import Event4 from '@/assets/events/Event4.webp';
import Event5 from '@/assets/events/Event5.webp';
import Event6 from '@/assets/events/Event6.webp';
import Event7 from '@/assets/events/Event7.webp';
import Event8 from '@/assets/events/Event8.webp';
import Event10 from '@/assets/events/Event10.webp';
import Event11 from '@/assets/events/Event11.webp';
import Event12 from '@/assets/events/Event12.webp';
import Event15 from '@/assets/events/Event15.webp';
import Event16 from '@/assets/events/Event16.webp';
import DU1 from '@/assets/events/DU1.webp';
import DU2 from '@/assets/events/DU2.webp';
import DU3 from '@/assets/events/DU3.webp';
import DU4 from '@/assets/events/DU4.webp';
import DU5 from '@/assets/events/DU5.webp';

export interface EducationEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  category: string;
  location: string;
  segment: 'School' | 'College' | 'University';
  image: string;
  description?: string;
}

export interface PortfolioEvent {
  id: number;
  title: string;
  location: string;
  date: string;
  image?: string;
  img?: string;
  desc: string;
}

export const SCHOOL_EVENTS: EducationEvent[] = [
  {
    id: '1',
    title: 'AI & LinkedIn Masterclass',
    date: 'July 14, 2025',
    time: '10:00 AM',
    category: 'AI & Leadership',
    location: 'Growell Girls School, Baraut',
    segment: 'School',
    image: Event1,
    description: 'AI fundamentals, LinkedIn branding, and career pathways shaped by AI.',
  },
  {
    id: '2',
    title: 'AI & LinkedIn for Faculty',
    date: 'July 16, 2025',
    time: '11:00 AM',
    category: 'Faculty Training',
    location: 'Growell CoEd School, Baraut',
    segment: 'School',
    image: Event2,
    description: 'AI implications in education, LinkedIn growth, and mentoring skills.',
  },
  {
    id: '3',
    title: 'Startup & Business Conference',
    date: 'August 6, 2025',
    time: '09:30 AM',
    category: 'Entrepreneurship',
    location: 'Growell CoEd School, Baraut',
    segment: 'School',
    image: Event3,
    description: 'Startup fundamentals, business strategy, branding, and networking.',
  },
  {
    id: '4',
    title: 'Unlocking Human OS - From Habits to Higher Self',
    date: 'August 12, 2025',
    time: '01:00 PM',
    category: 'Mindset',
    location: 'Doon School, Baraut',
    segment: 'School',
    image: Event4,
    description: 'Habit building, emotional intelligence, and resilience training.',
  },
  {
    id: '5',
    title: 'The DeCode - Cyber Awareness & Social Digital Ethics',
    date: 'August 13, 2025',
    time: '11:00 AM',
    category: 'Cybersecurity',
    location: 'Growell Girls School, Baraut',
    segment: 'School',
    image: Event5,
    description: 'Cyber hygiene, online threats, digital reputation, and ethics.',
  },
  {
    id: '6',
    title: 'HackProof - Hack the Hackers',
    date: 'August 20, 2025',
    time: '02:00 PM',
    category: 'Cybersecurity',
    location: 'Growell Co-ed School, Baraut',
    segment: 'School',
    image: Event7,
    description: 'Real-life cybercrime simulations and digital self-protection skills.',
  },
  {
    id: '7',
    title: 'Personality Development Demo',
    date: 'August 22, 2025',
    time: '10:30 AM',
    category: 'Personal Growth',
    location: 'Godwin School, Kirthal, Uttar Pradesh',
    segment: 'School',
    image: Event10,
    description: 'Self-awareness, communication, resilience, and confidence building.',
  },
  {
    id: '8',
    title: 'Project UTurn - From Pressure to Purpose',
    date: 'August 25, 2025',
    time: '12:00 PM',
    category: 'Wellbeing',
    location: 'Takshashila World School, Ambehta, Saharanpur',
    segment: 'School',
    image: Event11,
    description: 'Positive habits, emotional intelligence, and purpose discovery.',
  },
  {
    id: '9',
    title: 'Persona X - Unmute Yourself',
    date: 'September 1, 2025',
    time: '11:00 AM',
    category: 'Communication',
    location: 'Cambridge Public School, Baraut',
    segment: 'School',
    image: Event12,
    description: 'Public speaking, teamwork, presentation skills, and leadership.',
  },
  {
    id: '10',
    title: 'Cyber Shield - Shield Your Clicks, Secure Your Future',
    date: 'September 11, 2025',
    time: '10:00 AM',
    category: 'Cybersecurity',
    location: 'PM Shri Kendriya Vidyalaya, Baoli, Baghpat',
    segment: 'School',
    image: Event15,
    description: 'Data protection, device safety, and secure digital habits.',
  },
  {
    id: '11',
    title: 'Evarire - Women Empowerment & Menstrual Hygiene',
    date: 'September 16, 2025',
    time: '01:00 PM',
    category: 'Health & Empowerment',
    location: 'PM Shri Kendriya Vidyalaya, Baoli, Baghpat',
    segment: 'School',
    image: Event16,
    description: 'Menstrual health, body positivity, and gender-inclusive conversations.',
  },
  {
    id: '12',
    title: 'AIgnition - Igniting the Future of AI',
    date: 'September 24, 2025',
    time: '10:30 AM',
    category: 'AI Education',
    location: 'PM Shri Kendriya Vidyalaya, Baoli',
    segment: 'School',
    image: DU1,
    description: 'AI fundamentals, education impact, and hands-on future-readiness.',
  },
  {
    id: '13',
    title: 'Founder Fiesta',
    date: 'November 17, 2025',
    time: '02:00 PM',
    category: 'Entrepreneurship',
    location: 'Lakshya Public School, Baghpat',
    segment: 'School',
    image: DU3,
    description: 'Startup fundamentals, branding, and entrepreneurial mindset for students.',
  },
  {
    id: '14',
    title: 'Dream Direction Drive',
    date: 'December 2, 2025',
    time: '11:00 AM',
    category: 'Career Guidance',
    location: 'Maharaja Agrasen Public School, Noida',
    segment: 'School',
    image: DU4,
    description: 'Stream alignment, skill-based jobs, and future-ready career clarity.',
  }
];

export const COLLEGE_EVENTS: EducationEvent[] = [
  {
    id: '1',
    title: 'Campus Tech Fest',
    date: '01 Apr',
    time: '02:00 PM',
    category: 'Technology',
    location: 'Amity University',
    segment: 'College',
    image: Event5,
    description: 'Industry-ready innovation demos and campus collaboration.',
  },
  {
    id: '2',
    title: 'College Entrepreneurship Forum',
    date: '15 Apr',
    time: '04:00 PM',
    category: 'Business',
    location: 'IIT Delhi',
    segment: 'College',
    image: Event6,
    description: 'Startup mentoring, investor readiness, and networking for college founders.',
  },
  {
    id: '3',
    title: 'Research Collaboration Day',
    date: '28 Apr',
    time: '11:00 AM',
    category: 'Research',
    location: 'BITS Pilani',
    segment: 'College',
    image: Event7,
    description: 'Academic research showcases and cross-campus collaborations.',
  },
  {
    id: '4',
    title: 'Campus Career Fair',
    date: '10 May',
    time: '12:00 PM',
    category: 'Career',
    location: 'Symbiosis',
    segment: 'College',
    image: Event8,
    description: 'Employer meet-and-greets, internships, and placement readiness.',
  },
  {
    id: '5',
    title: 'AI Bootcamp - Vertex AI & Google Agent Kit',
    date: 'September 27, 2025',
    time: '10:00 AM',
    category: 'AI Training',
    location: 'KIET Group of Institutions',
    segment: 'College',
    image: DU2,
    description: 'Hands-on Vertex AI training for student developers.',
  }
];

export const UNI_EVENTS: EducationEvent[] = [
  {
    id: 'uni-1',
    title: 'Entrepreneurship Unplugged: From Idea to Execution',
    date: 'April 1, 2026',
    time: '10:00 AM',
    category: 'Entrepreneurship',
    location: 'North Campus, DSE',
    segment: 'University',
    image: DU3,
    description: 'An immersive session at MBA IB, Department of Commerce, focused on decoding the nuances of real-world building and the intent required to scale beyond academic theory.',
  },
  {
    id: 'uni-2',
    title: 'AI Bootcamp: Vertex AI & Google Agent Kit',
    date: 'July 14, 2025',
    time: '10:00 AM',
    category: 'Generative AI',
    location: 'Innovation Hub',
    segment: 'University',
    image: Event15,
    description: 'Recipient of the KITE Institution Event Speaking Award for delivering an intensive bootcamp on building autonomous agents using Vertex AI and Google Agent Kit.',
  },
  {
    id: 'uni-3',
    title: 'Raising Capital and Finance Management for Start-ups',
    date: 'April 13, 2026',
    time: '10:00 AM',
    category: 'Finance & Startups',
    location: 'Auditorium, ABESIT',
    segment: 'University',
    image: Event15,
    description: 'A workshop that bridged Jobs vs Startups while teaching funding strategies, financial frameworks, and early-stage capital planning.',
  }
];

export const TOP_EVENTS: PortfolioEvent[] = [
  {
    id: 1,
    title: 'AI & LinkedIn Masterclass',
    location: 'Growell Girls School, Baraut',
    date: 'July 14, 2025',
    image: Event1,
    desc: 'AI fundamentals, LinkedIn branding, and career pathways shaped by AI.',
  },
  {
    id: 3,
    title: 'Startup & Business Conference',
    location: 'Growell CoEd School, Baraut',
    date: 'August 6, 2025',
    image: Event3,
    desc: 'Startup fundamentals, business strategy, branding, networking, digital marketing, and soft skills.',
  }
];

export const POPULAR_EVENTS: PortfolioEvent[] = [
  { id: 1, title: 'AI & LinkedIn Masterclass', img: Event1, desc: 'AI fundamentals, LinkedIn branding, and career pathways shaped by AI.', date: 'July 14, 2025', location: 'Growell Girls School, Baraut' },
  { id: 2, title: 'AI & LinkedIn for Faculty', img: Event2, desc: 'AI implications in education, LinkedIn for faculty growth, and student mentoring skills.', date: 'July 16, 2025', location: 'Growell CoEd School, Baraut' },
  { id: 3, title: 'Startup & Business Conference', img: Event3, desc: 'Startup fundamentals, business strategy, branding, networking, digital marketing, and soft skills.', date: 'August 6, 2025', location: 'Growell CoEd School, Baraut' },
  { id: 4, title: 'Unlocking Human OS - From Habits to Higher Self', img: Event4, desc: 'Habit building, emotional intelligence, IKIGAI, mental health, and peer-pressure management.', date: 'August 12, 2025', location: 'Doon School, Baraut' },
  { id: 5, title: 'The DeCode - Cyber Awareness & Social Digital Ethics', img: Event5, desc: 'Cyber hygiene, online threats, digital reputation, and ethical behavior online.', date: 'August 13, 2025', location: 'Growell Girls School, Baraut' },
  { id: 6, title: 'The Human Toolkit - Control, Connect, Conquer', img: Event6, desc: 'Focus, communication, emotional intelligence, mental health, IKIGAI, and confidence for younger students.', date: 'August 18, 2025', location: 'Global Kids (Kidzee), Baraut' },
  { id: 7, title: 'HackProof - Hack the Hackers', img: Event7, desc: 'Cybercrime tactics, hacker psychology, real-life simulations, and digital self-protection.', date: 'August 20, 2025', location: 'Growell Co-ed School, Baraut' },
  { id: 8, title: 'The Cadet Code - Communicate, Confidence & Control', img: Event8, desc: 'Sense control, confidence-building, communication, and emotional intelligence in a small-group workshop.', date: 'August 21, 2025', location: 'Saifia Institute, Baraut' },
  { id: 9, title: 'Personality Development Demo', img: Event10, desc: 'Self-awareness, communication, resilience, and foundation skills for longer workshops.', date: 'August 22, 2025', location: 'Godwin School, Kirthal, Uttar Pradesh' },
  { id: 10, title: 'Project UTurn - From Pressure to Purpose', img: Event11, desc: 'Self-management, positive habits, emotional intelligence, and purpose discovery at scale.', date: 'August 25, 2025', location: 'Takshashila World School, Ambehta, Saharanpur' },
  { id: 11, title: 'Persona X - Unmute Yourself', img: Event12, desc: 'Public speaking, leadership, teamwork, presentation skills, and self-expression.', date: 'September 1, 2025', location: 'Cambridge Public School, Baraut' },
  { id: 12, title: 'Cyber Shield - Shield Your Clicks, Secure Your Future', img: Event15, desc: 'Cybercrime, data protection, device safety, digital ethics, and cybersecurity career inspiration.', date: 'September 11, 2025', location: 'PM Shri Kendriya Vidyalaya, Baoli, Baghpat' },
  { id: 13, title: 'Evarire - Women Empowerment & Menstrual Hygiene', img: Event16, desc: 'Menstrual health, body positivity, gender inclusivity, and empowered conversations.', date: 'September 16, 2025', location: 'PM Shri Kendriya Vidyalaya, Baoli, Baghpat' },
  { id: 14, title: 'AIgnition - Igniting the Future of AI', img: DU1, desc: 'AI fundamentals, education impact, hands-on exercises, and future-readiness for faculty.', date: 'September 24, 2025', location: 'PM Shri Kendriya Vidyalaya, Baoli' },
  { id: 15, title: 'AI Bootcamp - Vertex AI & Google Agent Kit', img: DU2, desc: 'Vertex AI and Google Agent Kit training for college students building intelligent systems.', date: 'September 27, 2025', location: 'KIET Group of Institutions' },
  { id: 16, title: 'Founder Fiesta', img: DU3, desc: 'Startup fundamentals, business strategy, branding, networking, and entrepreneurial mindset.', date: 'November 17, 2025', location: 'Lakshya Public School, Baghpat' },
  { id: 17, title: 'Dream Direction Drive', img: DU4, desc: 'Career clarity, stream alignment, skill-based jobs, and emerging field guidance.', date: 'December 2, 2025', location: 'Maharaja Agrasen Public School, Noida' },
  { id: 18, title: 'Collaboration Catalyst', img: DU5, desc: 'Strategic partnerships, peer learning, and institutional networking.', date: 'December 10, 2025', location: 'Andrews Public School, Noida' }
];
