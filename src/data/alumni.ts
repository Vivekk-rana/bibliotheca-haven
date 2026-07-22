export interface Alumni {
  id: string;
  name: string;
  batch: string;
  societyPosition: string;
  company: string;
  designation: string;
  image: string;
  linkedin: string;
  email: string;
}

export const BATCHES = [
  "2025-26",
  "2024-25",
  "2023-24",
  "2022-23",
  "2021-22",
] as const;

export const alumni: Alumni[] = [
  // 2025-26
  {
    id: "2526-1",
    name: "Shan Raj Gabriel Tigga",
    batch: "2025-26",
    societyPosition: "President",
    company: "Google",
    designation: "Software Engineer",
    image: "/team/2022/shan.jpeg",
    linkedin: "https://linkedin.com",
    email: "shan@example.com",
  },
  {
    id: "2526-2",
    name: "Sunidhi Verma",
    batch: "2025-26",
    societyPosition: "Vice President",
    company: "Microsoft",
    designation: "Product Manager",
    image: "/team/2022/sunidhi.jpeg",
    linkedin: "https://linkedin.com",
    email: "sunidhi@example.com",
  },
  {
    id: "2526-3",
    name: "Shivam Pandey",
    batch: "2025-26",
    societyPosition: "Secretary",
    company: "Amazon",
    designation: "Data Analyst",
    image: "/team/2022/shivam.jpeg",
    linkedin: "https://linkedin.com",
    email: "shivam@example.com",
  },

  // 2024-25
  {
    id: "2425-1",
    name: "Swapnal Swami",
    batch: "2024-25",
    societyPosition: "President",
    company: "Deloitte",
    designation: "Consultant",
    image: "/team/2022/swapnal.jpeg",
    linkedin: "https://linkedin.com",
    email: "swapnal@example.com",
  },
  {
    id: "2425-2",
    name: "Vivek Anand",
    batch: "2024-25",
    societyPosition: "Vice President",
    company: "Infosys",
    designation: "Software Engineer",
    image: "/team/2022/vivek.jpeg",
    linkedin: "https://linkedin.com",
    email: "vivek@example.com",
  },
  {
    id: "2425-3",
    name: "Nisha Kumari",
    batch: "2024-25",
    societyPosition: "Editor-in-Chief",
    company: "Penguin Random House",
    designation: "Editor",
    image: "/team/2022/nisha.jpeg",
    linkedin: "https://linkedin.com",
    email: "nisha@example.com",
  },

  // 2023-24
  {
    id: "2324-1",
    name: "Ravi Shankar Prasad",
    batch: "2023-24",
    societyPosition: "Treasurer",
    company: "TCS",
    designation: "Systems Analyst",
    image: "/team/2022/ravi.jpeg",
    linkedin: "https://linkedin.com",
    email: "ravi@example.com",
  },
  {
    id: "2324-2",
    name: "Aman Kumar Rajak",
    batch: "2023-24",
    societyPosition: "Joint Treasurer",
    company: "Wipro",
    designation: "Business Analyst",
    image: "/team/2022/aman.jpeg",
    linkedin: "https://linkedin.com",
    email: "aman@example.com",
  },
  {
    id: "2324-3",
    name: "Dona Bhattacharjee",
    batch: "2023-24",
    societyPosition: "Alumni In-Charge",
    company: "Accenture",
    designation: "Associate Consultant",
    image: "/team/2022/dona.jpeg",
    linkedin: "https://linkedin.com",
    email: "dona@example.com",
  },

  // 2022-23
  {
    id: "2223-1",
    name: "Vikash Kumar Singh",
    batch: "2022-23",
    societyPosition: "Technical Head",
    company: "Adobe",
    designation: "Software Engineer",
    image: "/team/2022/vikas.jpeg",
    linkedin: "https://linkedin.com",
    email: "vikash@example.com",
  },
  {
    id: "2223-2",
    name: "Anand Shreshtha",
    batch: "2022-23",
    societyPosition: "Media & Sponsorship Head",
    company: "The Times of India",
    designation: "Journalist",
    image: "/team/2022/anand.jpeg",
    linkedin: "https://linkedin.com",
    email: "anand@example.com",
  },

  // 2021-22
  {
    id: "2122-1",
    name: "Sahil Singh",
    batch: "2021-22",
    societyPosition: "Public Relations Officer",
    company: "HDFC Bank",
    designation: "Relationship Manager",
    image: "/team/2022/sahil.jpeg",
    linkedin: "https://linkedin.com",
    email: "sahil@example.com",
  },
  {
    id: "2122-2",
    name: "Monika Kumari",
    batch: "2021-22",
    societyPosition: "Public Relations Officer",
    company: "ICICI Bank",
    designation: "Content Strategist",
    image: "/team/2022/monika.jpeg",
    linkedin: "https://linkedin.com",
    email: "monika@example.com",
  },
];
