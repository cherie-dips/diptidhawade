// Nav: About (no hash in URL), Projects, Contact, Notes (route)
export const navLinks = [
  { id: 1, name: "About", hash: "hero" },
  { id: 2, name: "Projects", hash: "projects" },
  { id: 3, name: "Contact", hash: "contact" },
  { id: 4, name: "Notes", path: "/notes" },
];

// CV PDF: place your cv.pdf in public/assets/cv.pdf
export const cvPdfUrl = '/assets/cv.pdf';

// ─── Hero ─────────────────────────────────────────────────────────────────
export const heroContent = {
  title: 'Dipti Dhawade',
  tagline: 'Computer Science & Artificial Intelligence | Plaksha University',
  description:
    'I am a third year student pursuing my BTech in Computer Science and Artificial Intelligence at Plaksha University, I have worked on projects ranging from autonomous underwater vehicles to lightweight text segmentation models. Beyond code, I am passionate about community impact.',
  accomplishments: [
    'Millennium Fellow - Millennium Campus Network × United Nations, 2024',
    'GWiST Member - DS Brar Centre for Girls & Women in STEM, Plaksha University',
    'OxNet Scholar - Pembroke College, Oxford University, 2020',
    'Young Scholars Program - Ashoka University, 2020',
    'Vice Head Girl - Jawahar Navodaya Vidyalaya Ahmednagar',
    'Taekwondo National Inter-School Sports Competitor - Represented my school against 600+ schools',
  ],
};

export const plakshaUniversityUrl = 'https://www.plaksha.edu.in';
// ─── Travel Globe: cities (lat/lng, photos, emoji) ─────────────────────────
export const cities = [
  {
    id: "london",
    name: "London",
    country: "UK",
    lat: 51.5074,
    lng: -0.1278,
    photos: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80",
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&q=80",
    ],
    emoji: "🎡",
  },
  {
    id: "edinburgh",
    name: "Edinburgh",
    country: "Scotland",
    lat: 55.9533,
    lng: -3.1883,
    photos: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80",
    ],
    emoji: "🏰",
  },
  {
    id: "oxford",
    name: "Oxford",
    country: "UK",
    lat: 51.752,
    lng: -1.2577,
    photos: [
      "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?w=600&q=80",
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80",
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&q=80",
    ],
    emoji: "🎓",
  },
  {
    id: "brighton",
    name: "Brighton",
    country: "UK",
    lat: 50.8225,
    lng: -0.1372,
    photos: [
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&q=80",
      "https://images.unsplash.com/photo-1558618047-f4e60cde8811?w=600&q=80",
      "https://images.unsplash.com/photo-1596394723269-b2cbca4e6313?w=600&q=80",
    ],
    emoji: "🎠",
  },
  {
    id: "noida",
    name: "Noida",
    country: "India",
    lat: 28.5355,
    lng: 77.391,
    photos: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&q=80",
    ],
    emoji: "🏙️",
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    country: "India",
    lat: 30.7333,
    lng: 76.7794,
    photos: [
      "https://images.unsplash.com/photo-1617195737496-bc30194e3a19?w=600&q=80",
      "https://images.unsplash.com/photo-1624367407685-7f3d7c6f9f62?w=600&q=80",
      "https://images.unsplash.com/photo-1626015365107-39ea66c87f21?w=600&q=80",
    ],
    emoji: "🌹",
  },
  {
    id: "pune",
    name: "Pune",
    country: "India",
    lat: 18.5204,
    lng: 73.8567,
    photos: [
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80",
      "https://images.unsplash.com/photo-1601314002592-b8734bca6604?w=600&q=80",
      "https://images.unsplash.com/photo-1590766940554-b8ad5be21018?w=600&q=80",
    ],
    emoji: "🏯",
  },
  {
    id: "goa",
    name: "Goa",
    country: "India",
    lat: 15.2993,
    lng: 74.124,
    photos: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600&q=80",
      "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?w=600&q=80",
    ],
    emoji: "🏖️",
  },
  {
    id: "bangalore",
    name: "Bangalore",
    country: "India",
    lat: 12.9716,
    lng: 77.5946,
    photos: [
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80",
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&q=80",
    ],
    emoji: "🌿",
  },
  {
    id: "dehradun",
    name: "Dehradun",
    country: "India",
    lat: 30.3165,
    lng: 78.0322,
    photos: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&q=80",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
    ],
    emoji: "🏔️",
  },
  {
    id: "srikakulam",
    name: "Srikakulam",
    country: "India",
    lat: 18.2949,
    lng: 83.8938,
    photos: [
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=600&q=80",
      "https://images.unsplash.com/photo-1559628233-100c798642d8?w=600&q=80",
      "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=600&q=80",
    ],
    emoji: "🌊",
  },
  {
    id: "jaipur",
    name: "Jaipur",
    country: "India",
    lat: 26.9124,
    lng: 75.7873,
    photos: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    ],
    emoji: "🏰",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    country: "India",
    lat: 19.076,
    lng: 72.8777,
    photos: [
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80",
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&q=80",
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
    ],
    emoji: "🌆",
  },
  {
    id: "kolkata",
    name: "Kolkata",
    country: "India",
    lat: 22.5726,
    lng: 88.3639,
    photos: [
      "https://images.unsplash.com/photo-1558431382-27e303142255?w=600&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
      "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=600&q=80",
    ],
    emoji: "🌉",
  },
];

// ─── Notes: four sections — PDFs from Supabase only, viewed in-app ───
export const FOLDER_TYPES = ["Class Notes", "Tutorials/Assignments", "Exam Practice", "Past Papers"];
export const FOLDER_SLUGS = {
  "Class Notes": "class-notes",
  "Tutorials/Assignments": "tutorials-assignments",
  "Exam Practice": "exam-practice",
  "Past Papers": "past-papers",
};
export const SLUG_TO_FOLDER = Object.fromEntries(
  Object.entries(FOLDER_SLUGS).map(([name, slug]) => [slug, name])
);

export const notesCategories = [
  {
    id: "plaksha-university",
    title: "Plaksha University | CSAI",
    subheading: null,
    image: "/assets/notes/plaksha.png",
    subjectLabels: ["Machine Learning", "Deep Learning", "Design and Analysis of Algorithms", "Theory of Computation", "Foundations of Computer Systems", "Computer Networks", "Discrete Maths"],
    subjects: [
      {
        id: "machine-learning",
        name: "Machine Learning",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "deep-learning",
        name: "Deep Learning",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "design-analysis-algorithms",
        name: "Design and Analysis of Algorithms",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "theory-of-computation",
        name: "Theory of Computation",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "foundations-computer-systems",
        name: "Foundations of Computer Systems",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "computer-networks",
        name: "Computer Networks",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "discrete-maths",
        name: "Discrete Maths",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "operating-systems",
        name: "Operating Systems",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "database-management-systems",
        name: "Database Management Systems",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "Reinforcement Learning",
        name: "Reinforcement Learning",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      }
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    subheading: null,
    image: "/assets/notes/software-dev.png",
    subjectLabels: ["React.js", "MERN Stack", "JavaScript", "System Design"],
    subjects: [
      {
        id: "react-js",
        name: "React.js",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "mern-stack",
        name: "MERN Stack",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "javascript",
        name: "JavaScript",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "system-design",
        name: "System Design",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
    ],
  },
  {
    id: "gate",
    title: "GATE | CSE",
    subheading: null,
    image: "/assets/notes/gate.png",
    subjectLabels: ["C Programming", "Mathematics", "DSA", "Computer Organization", "Operating Systems", "Databases"],
    subjects: [
      {
        id: "c-programming",
        name: "C Programming",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "mathematics",
        name: "Mathematics",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "dsa",
        name: "DSA",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "computer-organization",
        name: "Computer Organization",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "operating-systems",
        name: "Operating Systems",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
      {
        id: "databases",
        name: "Databases",
        folders: { "Class Notes": [], "Tutorials/Assignments": [], "Exam Practice": [], "Past Papers": [] },
      },
    ],
  },
];

// ─── Contact ───────────────────────────────────────────
// Each link can have icon: 'linkedin' | 'github' | 'email' for logo display
export const contact = {
  email: 'diptidhawade2002@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dipti-dhawade-927a29214/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/cherie-dips', icon: 'github' },
  ],
};

export const myProjects = [
  {
    title: 'GWiST Groq Chatbot — API Workshop Demo',
    desc: 'A minimal yet functional React chatbot built using the Groq API, developed as part of a technical workshop organized by the DS Brar Centre for Girls and Women in STEM (GWiST) at Plaksha University.',
    subdesc:
      'Designed to introduce participants to LLM-powered application development, the app demonstrates real-time AI chat interaction using Groq\'s inference API — built with React, Vite, and JavaScript, keeping the setup lightweight and beginner-friendly for workshop attendees.',
    href: 'https://github.com/cherie-dips/gwist-techWorkshop',
    spotlight: '/assets/projects/gwist-chatbot.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Groq API',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Vite',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Mobile-Hi-SAM — Lightweight Text Segmentation',
    desc: 'A parameter-efficient hierarchical text segmentation model designed for edge deployment. Integrates MobileSAM\'s TinyViT encoder and Hi-SAM pipeline with a custom hierarchical decoder for word, line, and paragraph segmentation on the HierText dataset.',
    subdesc:
      'Achieved ~62% of Hi-SAM\'s Panoptic Quality (PQ) using only 12.6M parameters — an ≈98% reduction in model size — making it viable for on-device inference. Built with Python and PyTorch under Prof. Anupam Sobti.',
    href: 'https://github.com/cherie-dips/DL_Project',
    texture: '/assets/projects/mobile-hi-sam.mp4',
    thumbnail: '/assets/projects/mobile-hi-sam.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'PyTorch',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'NoteScanner — RAG-Powered Handwritten Notes Assistant',
    desc: 'An application that lets students chat with their own handwritten course material. Uses OCR to extract content from notes, stores vector embeddings in ChromaDB, and leverages GroqLLM via a RAG-based pipeline to answer natural language queries.',
    subdesc:
      'Built with Python, FastAPI, React, ChromaDB, and Docker, NoteScanner bridges the gap between physical notes and intelligent retrieval — making studying more interactive and efficient.',
    href: 'https://github.com/cherie-dips/NoteScanner',
    spotlight: '/assets/projects/note-scanner.png?v=2',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'FastAPI',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'React',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Docker',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Chronic Wound Status Assessment using AI',
    desc: 'An AI-based chronic wound monitoring system that uses microscopic images of pH-sensitive hydrogels to enable real-time, non-invasive pH estimation for chronic wound assessment.',
    subdesc:
      'Developed under Prof. Siddharth and Prof. Rucha Joshi, the pipeline implements ResNet-18 feature extraction combined with Random Forest classification to ensure robustness against imaging variability — enabling accessible, label-free wound diagnostics.',
    href: 'https://github.com/cherie-dips/MLPR_Project',
    spotlight: '/assets/projects/chronic-wound.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'OpenCV',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'PyTorch',
        path: '/assets/typescript.png',
      },
    ],
  },
];