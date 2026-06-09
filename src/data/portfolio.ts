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
