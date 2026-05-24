export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  type: "Full-time" | "Part-time" | "Contract";
};

//  Hardcoded job data - 10 jobs minimum
export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "₦400,000",
    description:
      "Build the visual and interactive parts of websites and applications that users directly see. Build responsive UIs using React, TypeScript and other programming languages.",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Dev Solutions",
    location: "Enugu",
    salary: "₦300,000",
    description:
      "Build and maintain the behind-the-scenes server-side technology of software, websites, and apps. Develop APIs with Node.js and PostgreSQL.",
    type: "Full-time",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Hub",
    location: "Lagos",
    salary: "₦250,000",
    description: "Design user-centered interfaces and prototypes.",
    type: "Contract",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "DataWise",
    location: "Abuja",
    salary: "₦390,000",
    description:
      "Gather, clean, and interpret raw data to help solve any organisational problems. Analyze datasets and create dashboards in PowerBI.",
    type: "Full-time",
  },
  {
    id: 5,
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Remote",
    salary: "₦490,000",
    description:
      "Create, test, and maintain software applications tailored specifically for smartphones and tablets. Build cross-platform apps with React Native.",
    type: "Full-time",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Cloud9",
    location: "Lagos",
    salary: "₦900,000",
    description:
      "Manage the entire software lifecycle by automating code development, testing, infrastructure deployment, security enforcement, and continuous system monitoring. Manage CI/CD pipelines and AWS infrastructure.",
    type: "Full-time",
  },
  {
    id: 7,
    title: "Content Writer",
    company: "Flow",
    location: "Remote",
    salary: "₦180,000",
    description: "Write SEO-optimized blog posts and copy.",
    type: "Part-time",
  },
  {
    id: 8,
    title: "Product Manager",
    company: "LaunchPad",
    location: "Enugu",
    salary: "₦700,000",
    description: "Lead product roadmap and cross-functional teams.",
    type: "Full-time",
  },
  {
    id: 9,
    title: "QA Engineer",
    company: "Degxify",
    location: "Remote",
    salary: "₦275,000",
    description: "Automate and run manual tests for web apps.",
    type: "Contract",
  },
  {
    id: 10,
    title: "Graphic Designer",
    company: "PixelLab",
    location: "Lagos",
    salary: "₦250,000",
    description: "Create branding and marketing assets.",
    type: "Part-time",
  },
];
