// Portfolio data - edit this file to customize your portfolio content

export const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "personal", label: "Personal" },
];

export const heroData = {
  name: "Alex Chen",
  role: "Web Developer",
  tagline: "Building thoughtful digital experiences with clean code and modern design.",
  ctaButtons: [
    { label: "View Projects", href: "#projects" },
    { label: "Get in Touch", href: "mailto:hello@alexchen.dev" },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern shopping experience with real-time inventory and seamless checkout flow.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and intuitive drag-and-drop.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Data visualization platform with custom charts and automated reporting.",
    techStack: ["React", "D3.js", "Python", "FastAPI"],
    githubUrl: "https://github.com",
    liveUrl: null,
  },
];

export const achievementsData = [
  {
    id: 1,
    year: "2024",
    title: "AWS Solutions Architect Certified",
    description: "Professional certification for cloud architecture",
  },
  {
    id: 2,
    year: "2023",
    title: "Open Source Contributor",
    description: "Top contributor to React ecosystem projects",
  },
  {
    id: 3,
    year: "2023",
    title: "Tech Conference Speaker",
    description: "Presented on modern frontend architecture",
  },
  {
    id: 4,
    year: "2022",
    title: "Hackathon Winner",
    description: "First place at Regional Dev Summit",
  },
];

export const skillsData = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  backend: ["Node.js", "Python", "Go", "REST APIs", "GraphQL"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  tools: ["Git", "Docker", "AWS", "Figma", "CI/CD"],
};

export const experienceData = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Co.",
    duration: "2022 - Present",
    points: [
      "Led development of customer-facing web applications",
      "Mentored junior developers and established coding standards",
      "Improved site performance by 40% through optimization",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Agency",
    duration: "2020 - 2022",
    points: [
      "Built and maintained client projects from concept to deployment",
      "Collaborated with design team to implement responsive interfaces",
      "Integrated third-party APIs and payment systems",
    ],
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "StartUp Labs",
    duration: "2018 - 2020",
    points: [
      "Developed features for SaaS platform using React",
      "Participated in agile development processes",
      "Contributed to internal tooling and documentation",
    ],
  },
];

export const personalData = {
  bio: "When I'm not coding, you'll find me exploring hiking trails, experimenting with film photography, or diving into a good book about design systems. I believe great software comes from understanding people first and technology second.",
  interests: ["Hiking", "Photography", "Reading", "Open Source"],
  approach: "I value clean code, thoughtful design, and building products that genuinely help people. Every project is an opportunity to learn something new.",
};
