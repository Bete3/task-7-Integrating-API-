import type { Job } from "@/types/job"

export const jobsData: Job[] = [
  {
    id: "1",
    title: "Social media manager",
    company: {
      name: "ABC Media",
      logo: "/logos/abc-media.png", // ← Your ABC Media logo
    },
    location: "Addis Ababa",
    description:
      "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers.",
    responsibilities: [
      "Interpret data, analyze results using statistical techniques and provide ongoing reports",
      "Develop and implement databases, data collection systems, data analytics, and other strategies",
      "Acquire data from primary or secondary data sources and maintain databases/data systems",
      "Identify, analyze, and interpret trends or patterns in complex data sets",
      "Filter and clean data by reviewing computer reports, printouts, and performance indicators",
    ],
    idealCandidate: [
      "Strong analytical skills with the ability to collect, organize, analyze, and disseminate significant amounts of information",
      "Technical expertise regarding data models, database design development, data mining, and segmentation techniques",
      "Excellent written and verbal communication skills",
      "Ability to work independently and as part of a team",
    ],
    workType: "In person",
    postedDate: "Mar 10, 2023",
    deadline: "Apr 1, 2023",
    startDate: "Apr 15, 2023",
    endDate: "Oct 15, 2023",
    categories: ["Data Science", "Analytics"],
    requiredSkills: ["SQL", "Python", "Excel", "Statistical Analysis"],
    tags: ["In person", "Education", "IT"],
  },
  {
    id: "2",
    title: "Web developer",
    company: {
      name: "Tech Solutions",
      logo: "/logos/tech-solutions.png", // ← Your Tech Solutions logo
    },
    location: "Lagos, Nigeria",
    description:
      "We are looking for a skilled Web Developer to join our dynamic team. You will be responsible for developing and maintaining web applications, ensuring optimal performance and user experience. The ideal candidate should have strong technical skills and a passion for creating innovative web solutions.",
    responsibilities: [
      "Develop and maintain responsive web applications using modern frameworks",
      "Collaborate with designers and backend developers to implement user interfaces",
      "Optimize applications for maximum speed and scalability",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and contribute to team knowledge sharing",
    ],
    idealCandidate: [
      "Bachelor's degree in Computer Science or related field",
      "Proficiency in HTML, CSS, JavaScript, and modern frameworks",
      "Experience with version control systems like Git",
      "Strong problem-solving skills and attention to detail",
      "Ability to work in an agile development environment",
    ],
    workType: "Remote",
    postedDate: "Mar 15, 2023",
    deadline: "Apr 10, 2023",
    startDate: "May 1, 2023",
    endDate: "Dec 31, 2023",
    categories: ["Web Development", "Frontend"],
    requiredSkills: ["JavaScript", "React", "CSS", "HTML", "Git"],
    tags: ["Remote", "Technology", "Full-time"],
  },
  {
    id: "3",
    title: "Data Analyst",
    company: {
      name: "DataCorp",
      logo: "/logos/datacorp.png", // ← Your DataCorp logo
    },
    location: "Nairobi, Kenya",
    description:
      "As a Data Analyst, you will be responsible for analyzing data sets to identify trends, patterns, and insights that can help inform business decisions. You will work closely with different departments to gather and interpret data, create reports, and provide recommendations based on your findings.",
    responsibilities: [
      "Collect, process, and analyze large datasets from various sources",
      "Create comprehensive reports and visualizations to communicate findings",
      "Identify trends, patterns, and anomalies in data",
      "Collaborate with stakeholders to understand business requirements",
      "Maintain data quality and ensure accuracy of analysis",
    ],
    idealCandidate: [
      "Bachelor's degree in Statistics, Mathematics, or related field",
      "Strong analytical and problem-solving skills",
      "Proficiency in data analysis tools and programming languages",
      "Experience with data visualization tools",
      "Excellent communication and presentation skills",
    ],
    workType: "Hybrid",
    postedDate: "Mar 20, 2023",
    deadline: "Apr 15, 2023",
    startDate: "May 15, 2023",
    endDate: "Nov 15, 2023",
    categories: ["Data Science", "Analytics"],
    requiredSkills: ["Python", "SQL", "Tableau", "Excel", "Statistics"],
    tags: ["Hybrid", "Data", "Analytics"],
  },
  {
    id: "4",
    title: "UX/UI Designer",
    company: {
      name: "Design Studio",
      logo: "/logos/design-studio.png", // ← Your Design Studio logo
    },
    location: "Cape Town, South Africa",
    description:
      "We are seeking a creative UX/UI Designer to join our team. You will be responsible for creating intuitive and visually appealing user interfaces for web and mobile applications. The ideal candidate should have a strong portfolio showcasing their design skills and understanding of user experience principles.",
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Collaborate with developers to ensure design implementation",
      "Stay updated with design trends and best practices",
    ],
    idealCandidate: [
      "Bachelor's degree in Design, HCI, or related field",
      "Strong portfolio demonstrating UX/UI design skills",
      "Proficiency in design tools like Figma, Sketch, or Adobe Creative Suite",
      "Understanding of user-centered design principles",
      "Excellent visual design and typography skills",
    ],
    workType: "In person",
    postedDate: "Mar 25, 2023",
    deadline: "Apr 20, 2023",
    startDate: "Jun 1, 2023",
    endDate: "Dec 1, 2023",
    categories: ["Design", "UX/UI"],
    requiredSkills: ["Figma", "Sketch", "Adobe Creative Suite", "Prototyping", "User Research"],
    tags: ["In person", "Design", "Creative"],
  },
  {
    id: "5",
    title: "Marketing Specialist",
    company: {
      name: "Growth Marketing",
      logo: "/logos/growth-marketing.png", // ← Your Growth Marketing logo
    },
    location: "Accra, Ghana",
    description:
      "Join our marketing team as a Marketing Specialist where you will develop and execute marketing campaigns across various channels. You will be responsible for creating engaging content, managing social media presence, and analyzing campaign performance to drive business growth.",
    responsibilities: [
      "Develop and execute integrated marketing campaigns",
      "Create compelling content for various marketing channels",
      "Manage social media accounts and online presence",
      "Analyze campaign performance and provide insights",
      "Collaborate with sales team to generate qualified leads",
    ],
    idealCandidate: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "Experience with digital marketing tools and platforms",
      "Strong writing and communication skills",
      "Creative thinking and problem-solving abilities",
      "Analytical mindset with attention to detail",
    ],
    workType: "Remote",
    postedDate: "Mar 30, 2023",
    deadline: "Apr 25, 2023",
    startDate: "Jun 15, 2023",
    endDate: "Jan 15, 2024",
    categories: ["Marketing", "Digital Marketing"],
    requiredSkills: ["Google Analytics", "Social Media Marketing", "Content Creation", "SEO", "Email Marketing"],
    tags: ["Remote", "Marketing", "Digital"],
  },
]
