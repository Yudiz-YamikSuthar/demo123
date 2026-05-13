import { LucideIcon, Home, Users, BookOpen, Heart, GraduationCap, Briefcase, Clock, Phone } from 'lucide-react';

export interface SiteConfig {
  id: string;
  name: string;
  logo: string;
  domain: string;
  tagline: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
    emergencyPhone?: string;
    mapUrl?: string;
    socialMedia?: { platform: string; url: string }[];
  };
  homepage: {
    heroTitle: string;
    heroSubtitle: string;
    welcomeText: string;
    imageUrl: string;
    stats: { label: string; value: string }[];
    testimonials: { author: string; text: string }[];
  };
  staff: StaffMember[];
  photos: { url: string; caption: string; category: string }[];
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface SharedContent {
  programs: (ContentSection & { schedule?: { time: string; activity: string }[] })[];
  philosophy: {
    title: string;
    subtitle?: string;
    content: string;
    coreValues: { title: string; desc: string }[];
    mission: string;
    pillars: { title: string; desc: string; icon: string }[];
  };
  admissions: {
    title: string;
    subtitle?: string;
    content: string;
    steps: { step: number; detail: string }[];
    faqs: { q: string; a: string }[];
    tuition: { tier: string; price: string; details: string }[];
  };
  careers: {
    title: string;
    subtitle?: string;
    content: string;
    benefits: string[];
    openings: { title: string; type: string }[];
    testimonials: { quote: string; author: string }[];
  };
}

export interface ContentSection {
  title: string;
  subtitle?: string;
  content: string;
  icon?: string;
}

export const SHARED_CONTENT: SharedContent = {
  programs: [
    { 
      title: "Infant & Toddler", 
      subtitle: "Ages 18 months - 3 years",
      content: "A nurturing environment for the smallest explorers, focused on building trust, independence, and sensory development in a beautiful classroom setting.",
      icon: "Heart",
      schedule: [
        { time: "8:00 AM", activity: "Morning Welcome" },
        { time: "9:00 AM", activity: "Work Cycle" },
        { time: "11:30 AM", activity: "Outdoor Play" }
      ]
    },
    { 
      title: "Primary (3-6 Years)", 
      subtitle: "The Iconic Montessori Classroom",
      content: "Children develop concentration, coordination, and independence through hands-on work with specialized materials in language and math.",
      icon: "GraduationCap",
      schedule: [
        { time: "8:30 AM", activity: "Individual Work" },
        { time: "11:00 AM", activity: "Circle Time" }
      ]
    },
    { 
      title: "Elementary", 
      subtitle: "A Cosmic Education",
      content: "Expanding curiosity through a curriculum that connects children to the history of the universe and human society.",
      icon: "BookOpen"
    }
  ],
  philosophy: {
    title: "Philosophy & Method",
    subtitle: "Education for Life",
    mission: "To inspire human potential and nurture a lifelong love of learning within an inclusive, diverse community.",
    content: "Our approach honors each child's unique journey. Dr. Maria Montessori believed that children learn best in an environment prepared with beauty and order.",
    coreValues: [
      { title: "Respect", desc: "For oneself, others, and the environment." },
      { title: "Independence", desc: "Encouraging children to 'do it themselves'." },
      { title: "Community", desc: "Fostering collaboration across age groups." }
    ],
    pillars: [
      { title: "Prepared Environment", desc: "Classrooms designed for the child.", icon: "Layers" },
      { title: "Multi-Age Play", desc: "Learning from peers of different ages.", icon: "Users" },
      { title: "The Guide", desc: "Teachers who observe and facilitate.", icon: "Search" }
    ]
  },
  admissions: {
    title: "Join Our Community",
    subtitle: "Enrolling for 2026-2027",
    content: "We welcome families who seek a progressive, child-centered education. Our admissions process is designed to ensure a good fit.",
    steps: [
      { step: 1, detail: "Schedule a private tour of our campus." },
      { step: 2, detail: "Submit your application for enrollment." },
      { step: 3, detail: "Family interview and child classroom observation." }
    ],
    faqs: [
      { q: "What are your enrollment dates?", a: "We have rolling admissions throughout the year depending on space." },
      { q: "Is prior Montessori experience required?", a: "No, we welcome children from all educational backgrounds." }
    ],
    tuition: [
      { tier: "Full Day", price: "$1,800/mo", details: "7:30 AM - 6:00 PM" },
      { tier: "Half Day", price: "$1,200/mo", details: "8:30 AM - 12:30 PM" }
    ]
  },
  careers: {
    title: "Join Our Faculty",
    subtitle: "Grow with Us",
    content: "We are always looking for passionate educators who are dedicated to the Montessori philosophy. Our school offers a supportive environment.",
    benefits: ["Full Health Insurance", "Retirement 401k", "Professional Development Stipends"],
    openings: [
      { title: "Lead Primary Guide", type: "Full-Time" },
      { title: "Assistant Toddler Teacher", type: "Part-Time" }
    ],
    testimonials: [
      { quote: "Working here has changed my approach to child development.", author: "Ms. Linda, Lead Guide" }
    ]
  }
};

export const SITES: Record<string, SiteConfig> = {
  brightonview: {
    id: "brightonview",
    name: "Brighton View Montessori",
    domain: "brightonview.net",
    tagline: "Nurturing curiosity in Brighton View",
    logo: "/input_file_0.png",
    colors: {
      primary: "#30AADD",
      secondary: "#f5f5f0",
      accent: "#5A5A40",
      bg: "#f5f5f0"
    },
    contact: {
      address: "123 Brighton St, City, ST 12345",
      phone: "(555) 123-4567",
      email: "hello@brightonview.net",
      hours: "Mon-Fri: 7:30 AM - 6:00 PM",
      emergencyPhone: "(555) 999-0000",
      mapUrl: "https://maps.google.com/...",
      socialMedia: [{ platform: "Instagram", url: "#" }]
    },
    homepage: {
      heroTitle: "A Natural Way to Learn",
      heroSubtitle: "Welcome to Brighton View",
      welcomeText: "Located in the heart of our community, Brighton View offers a serene and engaging environment for children to thrive.",
      imageUrl: "https://images.unsplash.com/photo-1540479859555-17af430c0b40?auto=format&fit=crop&q=80&w=1200",
      stats: [
        { label: "Teacher Ratio", value: "8:1" },
        { label: "Student Capacity", value: "120" }
      ],
      testimonials: [
        { author: "Parents of Leo", text: "The transition was so smooth. We love the focus on independence." }
      ]
    },
    staff: [
      {
        id: "bv-1",
        name: "Sarah Johnson",
        role: "School Director",
        bio: "Sarah has 20 years of experience in Montessori education.",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
      },
      {
        id: "bv-2",
        name: "Ms. Elena",
        role: "Lead Primary Guide",
        bio: "Elena specializes in sensorial development.",
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
      }
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1564429234817-393df4286b2d?auto=format&fit=crop&q=80&w=600", caption: "Our Main Entrance", category: "Exteriors" },
      { url: "https://images.unsplash.com/photo-1588075792225-7833a697669d?auto=format&fit=crop&q=80&w=600", caption: "The Toddler Room", category: "Classrooms" },
      { url: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80&w=600", caption: "Outdoor Play Space", category: "Playgrounds" }
    ]
  },
  parkview: {
    id: "parkview",
    name: "Parkview Montessori",
    domain: "parkviewmontessori.net",
    tagline: "Growing together at Parkview",
    logo: "/input_file_1.png",
    colors: {
      primary: "#30AADD",
      secondary: "#F0EAD6",
      accent: "#3E5C76",
      bg: "#F0EAD6"
    },
    contact: {
      address: "456 Parkview Ln, City, ST 67890",
      phone: "(555) 987-6543",
      email: "info@parkviewmontessori.net",
      hours: "Mon-Fri: 8:00 AM - 5:30 PM",
      emergencyPhone: "(555) 888-1111",
      mapUrl: "https://maps.google.com/...",
      socialMedia: [{ platform: "Facebook", url: "#" }]
    },
    homepage: {
      heroTitle: "Inspiring Future Leaders",
      heroSubtitle: "Welcome to Parkview",
      welcomeText: "Parkview Montessori provides a modern, bright facility right next to the park, emphasizing nature-based learning.",
      imageUrl: "https://images.unsplash.com/photo-1502086223501-7ea2442d42df?auto=format&fit=crop&q=80&w=1200",
      stats: [
        { label: "Acreage", value: "2.5" },
        { label: "Garden Beds", value: "15" }
      ],
      testimonials: [
        { author: "The Miller Family", text: "Having the park right next door makes every day an adventure." }
      ]
    },
    staff: [
      {
        id: "pv-1",
        name: "Mr. Thomas",
        role: "Campus Manager",
        bio: "Thomas handles operations and community outreach.",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
      },
      {
        id: "pv-2",
        name: "Ms. Jasmine",
        role: "Toddler Lead",
        bio: "Ms. Jasmine is passionate about early childhood.",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
      }
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600", caption: "Library Corner", category: "Classrooms" },
      { url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600", caption: "Art Studio", category: "Classrooms" },
      { url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600", caption: "East Campus Gate", category: "Exteriors" }
    ]
  }
};
