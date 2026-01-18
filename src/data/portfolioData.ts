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
  name: "Karthik Vajjha",
  role: "Web Developer",
  tagline: "Computer Science undergraduate and a Full-stack developer skilled in Next.js, Reactjs , Node.js, and Python , with hands-on experience building AI-driven and ML-based web applications. Passionate about creating scalable, real- world solutions through hackathons, projects, and end-to-end product design.",
  ctaButtons: [
    { label: "View Projects", href: "#projects" },
    { label: "Get in Touch", href: "mailto:vajjhakarthik@gmail.com" },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "Gamified Financial Fraud Awareness Platform",
    description: "An interactive, gamified platform to promote financial fraud awareness using an infinite runner and quiz-based challenges, integrated with user blogs, diaries, and profile-following features to encourage community engagement. Optimized state management and rendering performance with Zustand and lazy loading, reducing UI latency by 35% and page load times by 25%, while delivering a sleek, fully responsive interface built with Tailwind CSS.",
    techStack: [
  "React",
  "Phaser.js",
  "Express.js",
  "Node.js",
  "MongoDB",
  "Zustand",
  "Tailwind CSS",
  "Redis"
]
,
    githubUrl: "https://github.com/karthikvajjha/FinancialFraud",
    liveUrl: "https://financialfraud-frontend.netlify.app",
  },
  {
    id: 2,
    title: "Blog - Diary",
    description: "A full-stack platform that enables users to author, edit, and organize blogs and private diaries, complemented by interactive social features such as following, commenting, and liking posts. Optimized frontend rendering and API response times through state caching and efficient component updates, improving overall application responsiveness by 30%.",
    techStack: [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Zustand",
  "Tailwind CSS",
  "Redis"
]
,
    githubUrl: "https://github.com/karthikvajjha/Whisper",
    liveUrl: "https://spectacular-elf-faf6cc.netlify.app",
  },
  {
    id: 3,
    title: "Typing Speed Test",
    description: "A full-stack typing speed test application with real-time WPM and accuracy tracking, leaderboard rankings, and personalized user profiles, while optimizing frontend rendering and API response times through state caching and efficient component updates to improve overall application responsiveness by 30%.",
    techStack: [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Zustand",
  "Tailwind CSS",
  "Redis"
]
,
    githubUrl: "https://github.com/karthikvajjha/Typecast",
    liveUrl: null,
  },
  {
    id: 4,
    title: "Autism Spectrum Disorder Detection",
    description: "A machine learning–powered web application that enables users to upload CSV datasets with dynamic preprocessing, including encoding, imputation, and feature scaling, while integrating multiple machine learning models and scalers to support customizable classification and deliver real-time ASD predictions with interactive class probability visualizations through a streamlined user interface.",
    techStack : [
  "Python",
  "Streamlit",
]
,
    githubUrl: "https://github.com/karthikvajjha/Autismdetection",
    liveUrl: null,
  },
  {
    id: 5,
    title: "AQI Prediction",
    description:  "A machine learning–driven Air Quality Index (AQI) prediction system using historical air pollution data. The project involves data preprocessing, feature engineering from date attributes, and training multiple regression models (Linear Regression, Decision Tree, and Random Forest) to select the best-performing model based on R² score. The trained model is deployed using a Flask web application that accepts real-time pollutant inputs and returns predicted AQI values through a user-friendly interface, enabling practical and accessible air quality assessment.",
    techStack : [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Flask",
  "Joblib",
  "HTML",
  "CSS"
]
,
    githubUrl: "https://github.com/karthikvajjha/AQIprediction",
    liveUrl: null,
  },
];

export const achievementsData = [
  {
    id: 1,
    year: "2025",
    title: "College Codeathon Winner",
    description: "two-time college codeathon winner"
  },
  {
    id: 2,
    year: "2024",
    title: "Inter College Coding Competition",
    description: "Winner of the Reverse-Coding contest . Runner-up in codeathon ",
  },
  {
    id: 3,
    year: "2025",
    title: "Knight Badge in Leetcode",
    description: "Contest rating of 1850+ on leetcode",
  },
];

export const skillsData = {
  languages : ["Python" , "Javascript" , "Java" , "C" , "C++" , "SQL"],
  tools : ["Git" , "Docker" , "Redis" , "Postman" , "Insomnia"],
  "libraries & frameworks" : ["Reactjs" , "Nextjs" , "Nodejs" , "Expressjs" , "TailwindCSS"],
  databases : ["MySQL" , "MongoDB"],
};

export const experienceData = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Srikari Impetus Solutions",
    duration: "Aug 2025 - Oct 2025",
    points: [
      "Worked on internal projects involving API integration, UI design, and backend routing, applying optimization techniques to improve responsiveness and load times. ",
      "Gained practical exposure to full-stack web development and real-world software delivery processes including version control (Git), code reviews, and agile development practices. ",
      "Developed a deeper understanding of debugging, performance optimization, and deployment pipelines",
    ],
  },
];

export const personalData = {
  bio: "When I'm not coding, you'll find me exploring movies and sports , experimenting with film photography, or diving into a good book . I believe great software comes from understanding people first and technology second.",
  interests: ["Sports", "Photography", "Reading", "Open Source"],
  approach: "I value clean code, thoughtful design, and building products that genuinely help people. Every project is an opportunity to learn something new.",
};
