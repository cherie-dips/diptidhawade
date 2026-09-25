export const navLinks = [
  { id: 1, name: "Projects", hash: "projects" },
  { id: 2, name: "Experience", hash: "experience" },
  { id: 3, name: "Contact", hash: "contact" },
];

// CV PDF: place your cv.pdf in public/assets/cv.pdf
export const cvPdfUrl = '/assets/cv.pdf';

// ─── Hero ─────────────────────────────────────────────────────────────────
export const heroContent = {
  title: 'Dipti Dhawade',
  tagline: 'Computer Science & Artificial Intelligence | Plaksha University',
  description: `I’m a CS & AI student at Plaksha University, focused on building software that turns research into real products. My work spans full-stack development, AI/ML systems, and low-level programming — I’ve shipped RAG-powered chatbots, trained lightweight deep learning models for edge deployment, and designed robotic grippers for underwater manipulation. I’m a C/C++ enthusiast currently building my own scripting language, and I care about writing code that doesn’t just run fast but actually makes an impact.`,

  accomplishments: [
    'Millennium Fellow - Millennium Campus Network × United Nations, 2024',
    'GWiST Member - DS Brar Centre for Girls & Women in STEM, Plaksha University',
    'OxNet Scholar - Pembroke College, Oxford University, 2020',
    'Young Scholars Program - Ashoka University, 2020',
    'Vice Head Girl - Jawahar Navodaya Vidyalaya Ahmednagar',
    'Taekwondo National Inter-School Sports Competitor - Competed among 600+ schools',
  ],
};

export const plakshaUniversityUrl = 'https://www.plaksha.edu.in';
export const navBotWebsiteUrl = "https://navbot-web.onrender.com/";
export const notesWebsiteUrl = "https://cherie-dips.github.io/SDE-Prep/#road";
export const leetcodeUrl = "https://leetcode.com/u/LBQ7IYa12g/";
export const codechefUrl = "https://www.codechef.com/users/plaksha_cc_23";
export const githubUrl = "https://github.com/cherie-dips";
// ─── Travel Globe: cities (lat/lng, emoji) ─────────────────────────────────
export const cities = [
  {
    id: "london",
    name: "London",
    country: "UK",
    lat: 51.5074,
    lng: -0.1278,
    emoji: "🎡",
  },
  {
    id: "edinburgh",
    name: "Edinburgh",
    country: "Scotland",
    lat: 55.9533,
    lng: -3.1883,
    emoji: "🏰",
  },
  {
    id: "oxford",
    name: "Oxford",
    country: "UK",
    lat: 51.752,
    lng: -1.2577,
    emoji: "🎓",
  },
  {
    id: "brighton",
    name: "Brighton",
    country: "UK",
    lat: 50.8225,
    lng: -0.1372,
    emoji: "🎠",
  },
  {
    id: "noida",
    name: "Noida",
    country: "India",
    lat: 28.5355,
    lng: 77.391,
    emoji: "🏙️",
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    country: "India",
    lat: 30.7333,
    lng: 76.7794,
    emoji: "🌹",
  },
  {
    id: "pune",
    name: "Pune",
    country: "India",
    lat: 18.5204,
    lng: 73.8567,
    emoji: "🏯",
  },
  {
    id: "goa",
    name: "Goa",
    country: "India",
    lat: 15.2993,
    lng: 74.124,
    emoji: "🏖️",
  },
  {
    id: "bangalore",
    name: "Bangalore",
    country: "India",
    lat: 12.9716,
    lng: 77.5946,
    emoji: "🌿",
  },
  {
    id: "dehradun",
    name: "Dehradun",
    country: "India",
    lat: 30.3165,
    lng: 78.0322,
    emoji: "🏔️",
  },
  {
    id: "srikakulam",
    name: "Srikakulam",
    country: "India",
    lat: 18.2949,
    lng: 83.8938,
    emoji: "🌊",
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    country: "India",
    lat: 17.385,
    lng: 78.4867,
    emoji: "🕌",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    country: "India",
    lat: 19.076,
    lng: 72.8777,
    emoji: "🌆",
  },
  {
    id: "kolkata",
    name: "Kolkata",
    country: "India",
    lat: 22.5726,
    lng: 88.3639,
    emoji: "🌉",
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

// ─── Experience ──────────────────────────────────────────────────────────────
export const experiences = [
  {
    role: 'Research Intern',
    organization: 'Indian School of Business (ISB)',
    duration: 'June 2026 – July 2026',
    description:
      'Developed a multi-dimensional vulnerability profiling framework for ~7,000 rural blocks across India, integrating 30+ indicators across exposure, sensitivity, and adaptive capacity under Prof. Ashwini Chhatre. Processed block-level datasets from satellite/remote sensing sources (CROPGRIDS, CHIRPS, CHIRTS, SoilGrids) and government surveys to assess climate vulnerability across these units.',
    tags: ['Python', 'Google Earth Engine', 'Data Analysis'],
  },
  {
    role: 'Intern',
    organization: 'Reimagining Higher Education Foundation, Plaksha University',
    duration: 'Oct 2024 – May 2025',
    description:
      "Coordinated high-stake events like Founders' Day and Foundation Day at Plaksha University & conducted campus tours for founders, prospective students, and visitors. Researched and managed prospect donors list to support fundraising.",
    tags: ['Event Management', 'Fundraising'],
  },
  {
    role: 'Intern',
    organization: 'Centre for Thinking, Language and Communication (CTLC), Plaksha University',
    duration: 'Sep 2023 – May 2024',
    description:
      'Reviewed and synthesized scholarly literature to support academic research papers.',
    tags: ['Research', 'Academic Writing'],
  },
  {
    role: 'Intern',
    organization: 'Action in Rural Technology and Service (ARTS), Srikakulam, Andhra Pradesh',
    duration: 'June 2023 – July 2023',
    description:
      'Researched economic and financial literacy in rural and tribal Savara communities; developed a project enabling small business creation, loan access, and sustainable income generation using local resources.',
    tags: ['Social Impact', 'Research'],
  },
];

export const myProjects = [
  {
    title: 'NavBot — Chatbot for Any Website',
    desc: 'NavBot is an AI chatbot-as-a-service. Any website owner can add a smart Q&A chatbot to their site in under 5 minutes, no ML knowledge, no backend changes.',
    subdesc:
      'NavBot crawls your website, indexes the content into a vector database, and gives you a chatbot that answers only from your site\'s content with source links.',
    href: 'https://github.com/cherie-dips/NavBot',
    website: 'https://navbot-web.onrender.com/',
    spotlight: 'https://www.youtube.com/watch?v=dQ3EHuyKFAg',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'ChromaDB',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Sarvam API',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'RAG',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Grippers for Underwater Manipulation',
    desc: 'Designed and prototyped a general-purpose underwater gripper capable of grasping spherical, rigid, delicate, and slippery objects — addressing key challenges like water drag, surface slippage, and buoyancy.',
    subdesc:
      'Uses the fin-ray effect (inspired by ray-finned fish bone structure) for passive, load-distributing grasps. Designed and 3D printed in TPU/SLA, exploring worm-follower and rack-and-pinion actuation mechanisms for improved range and precision.\n🏆 3rd Place — SP Dutt Award For Innovation and Impact',
    href: 'https://github.com/cherie-dips/gripping-underwater',
    spotlight: 'https://www.youtube.com/watch?v=HWLXG5a1gso',
    website: 'https://cherie-dips.github.io/gripping-underwater/',
    tags: [
      {
        id: 1,
        name: '3D Design',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Soft Robotics',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Electronics',
        path: '/assets/typescript.png',
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
    title: 'Goal-Oriented Semantic Communication in Bandwidth-Constrained MARL',
    desc: 'An implementation of the Model-Based Dual-Policy (MBDP) algorithm (Su, Du & Deng, IEEE ICC 2025 Workshop), where cooperating agents learn both how to act and which semantic features to transmit to teammates under a wireless channel\'s byte budget. Evaluated on Cooperative Landmark Coverage and a custom continuous Predator-Prey environment, each trained for 150k episodes.',
    subdesc:
      'Each agent pairs a Bernoulli feature-mask communication policy with a navigation policy, trained with PPO + GAE and Lagrangian relaxation. On landmark coverage, MBDP beats no-comm, random, and cyclic baselines with 12.6% better reward while sending 34% fewer bytes.',
    href: 'https://github.com/Tanu-adhikari/MARL-Environment',
    spotlight: '/assets/projects/marl-predator-prey.gif',
    website: 'https://tanu-adhikari.github.io/MARL-Environment/',
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
      {
        id: 3,
        name: 'Multi-Agent RL',
        path: '/assets/typescript.png',
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