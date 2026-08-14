export const skills = {
  Backend: [
    { name: "PHP", level: 92 },
    { name: "Laravel", level: 95 },
    { name: "Node.js", level: 60 },
    { name: "React", level: 80 },
    { name: "REST APIs", level: 94 },
    { name: "JWT / Sanctum", level: 90 },
  ],
  Database: [
    { name: "MySQL", level: 90 },
    { name: "Redis", level: 82 },
    { name: "PostgreSQL", level: 74 },
    { name: "Query Optimization", level: 85 },
  ],
  DevOps: [
    { name: "Docker", level: 78 },
    { name: "Linux / Nginx", level: 76 },
    { name: "Portainer", level: 50 },
    { name: "Queue Workers", level: 84 },
  ],
  Tools: [
    { name: "Git / GitHub", level: 92 },
    { name: "Postman", level: 90 },
    { name: "Laragon / WSL2", level: 85 },
    { name: "PHPUnit", level: 72 },
  ],
};

export const projects = [
  {
    title: "Padma Vajra Online Class Booking System",
    description:
      "A full-featured booking platform for classes, retreats and pilgrimages with role-based admin panels, email verification, and moderated content workflows.",
    tech: ["Laravel", "React", "Sanctum", "Spatie Roles", "MySQL"],
    // github: "https://github.com/junetshakya",
    // demo: "#",
    image:
      "linear-gradient(135deg, rgba(69,224,208,0.18), rgba(140,123,246,0.12))",
  },
  {
    title: "Online Account Opening API",
    description:
      "RESTful API for a digital account opening system with KYC verification, document uploads, application tracking, and secure authentication designed for banking workflows.",
    tech: ["Laravel", "MySQL", "Redis", "Sanctum", "REST API"],
    // github: "https://github.com/junetshakya",
    // demo: "#",
    image:
      "linear-gradient(135deg, rgba(140,123,246,0.2), rgba(240,180,121,0.1))",
  },
  {
    title: "Minesweeper Game",
    description:
      "A classic Minesweeper game built with Python featuring an interactive GUI, random mine generation, recursive cell revealing, flag placement, and win/loss detection with optimized game logic.",
    tech: ["Python", "Tkinter", "NumPy", "Random"],
    // github: "https://github.com/junetshakya",
    // demo: "#",
    image:
      "linear-gradient(135deg, rgba(76,175,80,0.14), rgba(33,150,243,0.14))",
  },
  {
    title: "E-commerce Storefront API",
    description:
      "RESTful e-commerce backend with a complete CRUD system for products, categories, carts, and orders. Built during my early Laravel internship, featuring repository-pattern architecture, secure authentication, inventory management, and scalable API design.",
    tech: ["Laravel", "MySQL", "REST APIs", "Sanctum"],
    // github: "https://github.com/junetshakya",
    // demo: "#",
    image:
      "linear-gradient(135deg, rgba(240,180,121,0.14), rgba(69,224,208,0.1))",
  },
  {
    title: "Fake Logo Detection",
    description:
      "Machine learning-based logo authenticity detection system trained on a Kaggle dataset to identify genuine and counterfeit brand logos. Built with image preprocessing, feature extraction, model training, and prediction capabilities for accurate logo verification.",
    tech: ["Python", "TensorFlow", "OpenCV", "NumPy", "Kaggle Dataset"],
    image:
      "linear-gradient(135deg, rgba(140,123,246,0.14), rgba(69,224,208,0.12))",
  },
  {
    title: "Weather Forecast App",
    description:
      "Android weather application that delivers real-time weather conditions and forecasts using the OpenWeather API. Features location-based weather, city search, dynamic weather icons, and a clean Material Design interface.",
    tech: ["Java", "Android Studio", "OpenWeather API", "Retrofit", "XML"],
    image:
      "linear-gradient(135deg, rgba(69,224,208,0.14), rgba(76,175,80,0.12))",
  },
];

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Amnil Technologies",
    period: "2025/09/26 – 2026/04/10",
    points: [
      "Built and maintained secure REST APIs for digital banking systems",
      "Collaborated closely with frontend teams on integration contracts",
      "Optimized MySQL queries and indexing for high-traffic endpoints",
    ],
  },
  {
    role: "Laravel Developer Intern",
    company: "Studio Matrix",
    period: "2023/12/12 – 2024/06/12",
    points: [
      "Developed e-commerce backend features using Laravel",
      "Implemented authentication flows and order processing logic",
      "Worked across the stack to ship customer-facing features",
    ],
  },
];

export const services = [
  {
    title: "REST API Development",
    desc: "Versioned, documented APIs designed for stability and easy client integration.",
  },
  {
    title: "Laravel Backend Development",
    desc: "Clean, maintainable Laravel applications using repository and service patterns.",
  },
  {
    title: "Database Design",
    desc: "Schema design, indexing strategy and query optimization for MySQL & PostgreSQL.",
  },
  {
    title: "Authentication Systems",
    desc: "Sanctum, JWT and role-based access control with Spatie permissions.",
  },
  {
    title: "Redis Integration",
    desc: "Caching, queues and rate limiting for faster, more resilient applications.",
  },
  {
    title: "Performance Optimization",
    desc: "Profiling and tuning backend systems to cut latency under real load.",
  },
];

export const techStack = [
  "PHP",
  "Laravel",
  "Node.js",
  "React",
  "MySQL",
  "Redis",
  "Docker",
  "Git",
  "Nginx",
  "PostgreSQL",
  "JWT",
  "REST",
];

export const stats = [
  { label: "Repositories", value: "40+" },
  { label: "Contributions / yr", value: "600+" },
  { label: "Years experience", value: "3+" },
  { label: "APIs shipped", value: "25+" },
];

export const testimonials = [
  {
    quote:
      "Junet consistently delivered clean, well-tested backend code and communicated blockers early — a genuinely reliable engineer.",
    name: "Senior Engineer",
    role: "Amnil Technologies",
  },
  {
    quote:
      "He has a strong sense for API design and database structure. Our integration work was smooth because of his clear contracts.",
    name: "Frontend Lead",
    role: "Amnil Technologies",
  },
  {
    quote:
      "Fast learner, meticulous about edge cases, and always left the codebase better than he found it.",
    name: "Project Mentor",
    role: "Studio Matrix",
  },
];
