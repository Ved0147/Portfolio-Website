export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
  skills: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const experiences: Experience[] = [
  {
    period: "Jan 2026 - Present",
    role: "Implementation Consultant Intern",
    company: "Thoughtspark",
    location: "Surat, Gujarat",
    highlights: [
      "Gather and analyze client requirements for enterprise Product Information Management solutions.",
      "Configure business rules, validation logic, workflows, UI settings, and data models in Syndigo.",
      "Support data governance and role-based authorization across entities and attributes.",
    ],
    skills: ["Syndigo", "PIM", "Data modeling", "Requirements analysis"],
  },
  {
    period: "Aug 2024 - Oct 2025",
    role: ".NET Developer",
    company: "Kombee Global",
    location: "Surat, Gujarat",
    highlights: [
      "Contributed to end-to-end development of Philips SmartConnect and owned key backend modules.",
      "Supported development work for Exxon Mobil's enterprise platform.",
      "Delivered maintainable MVC solutions in Agile teams through sprint reviews and code reviews.",
    ],
    skills: ["ASP.NET", "C#", "MVC", "REST APIs", "Agile"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    skills: ["C#", "ASP.NET Core", ".NET MVC", "RESTful APIs", "MVC architecture"],
  },
  {
    title: "Data",
    skills: ["MySQL", "SQL Server", "Data models", "Validation logic", "PIM / MDM"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "Responsive UI"],
  },
  {
    title: "Delivery",
    skills: ["Git", "Postman", "Syndigo", "Agile", "Requirements analysis"],
  },
];

export const education = [
  {
    period: "2024 - Present",
    degree: "MSc.IT",
    school: "Veer Narmad South Gujarat University",
    detail: "Currently pursuing",
  },
  {
    period: "2021 - 2024",
    degree: "BSc.IT",
    school: "Veer Narmad South Gujarat University",
    detail: "CGPA 7.2 / 10",
  },
] as const;
export const project = [
  {
    title: "AI Resume Assistant",
    type: "Cloud + AI Project",
    description:
      "Firestore-powered chatbot that answers recruiter questions about skills, projects and experience.",

    technologies: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "Firestore"
    ],

    features: [
      "Chatbot UI",
      "Dynamic Firestore data",
      "Recruiter Q&A",
      "Cloud integration"
    ]
  },

  {
    title: "Portfolio Website",
    type: "Cloud Hosted Portfolio",

    description:
      "Personal portfolio website hosted on Google Cloud Storage with modern UI and analytics.",

    technologies: [
      "React",
      "TypeScript",
      "Google Cloud Storage"
    ],

    features: [
      "Responsive design",
      "Cloud hosting",
      "Resume download",
      "Project showcase"
    ]
  },

  {
    title: "Visitor Counter API",
    type: "Backend Cloud Project",

    description:
      "ASP.NET Core API integrated with Firestore that powers the live visitor analytics displayed on this portfolio.",

    technologies: [
      "ASP.NET Core",
      "Firestore",
      "Google Cloud"
    ],

    features: [
      "Realtime analytics",
      "Firestore integration",
      "REST API",
      "Cloud authentication"
    ]
  },

  {
    title: "EBookStore",

    type: "Full Stack Application",

    description:
      "Amazon-style digital bookstore with authentication, shopping cart and admin workflows.",

    technologies: [
      "C#",
      ".NET MVC",
      "MySQL",
      "JavaScript"
    ],

    features: [
      "Authentication",
      "Shopping cart",
      "Admin dashboard",
      "Dynamic catalog"
    ]
  }
];

