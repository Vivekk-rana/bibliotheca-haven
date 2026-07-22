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

const IMAGES = [
  "shan", "sunidhi", "shivam", "swapnal", "vivek",
  "nisha", "ravi", "aman", "dona", "vikas",
  "anand", "sahil", "monika",
];

const POSITIONS = [
  "President",
  "Vice President",
  "Secretary",
  "Joint Secretary",
  "Treasurer",
  "Editor-in-Chief",
  "Technical Head",
  "Media & Sponsorship Head",
  "Alumni In-Charge",
  "Public Relations Officer",
  "Event Coordinator",
  "Content Head",
];

const COMPANIES = [
  { company: "Google", designation: "Software Engineer" },
  { company: "Microsoft", designation: "Product Manager" },
  { company: "Amazon", designation: "Data Analyst" },
  { company: "Deloitte", designation: "Consultant" },
  { company: "Infosys", designation: "Software Engineer" },
  { company: "Penguin Random House", designation: "Editor" },
  { company: "TCS", designation: "Systems Analyst" },
  { company: "Wipro", designation: "Business Analyst" },
  { company: "Accenture", designation: "Associate Consultant" },
  { company: "Adobe", designation: "UX Designer" },
  { company: "The Times of India", designation: "Journalist" },
  { company: "HDFC Bank", designation: "Relationship Manager" },
  { company: "ICICI Bank", designation: "Content Strategist" },
  { company: "HarperCollins", designation: "Copy Editor" },
  { company: "The Hindu", designation: "Sub-Editor" },
];

const NAMES_BY_BATCH: Record<string, string[]> = {
  "2025-26": [
    "Shan Raj Gabriel Tigga", "Sunidhi Verma", "Shivam Pandey", "Aarav Mehta",
    "Ishita Sharma", "Rohan Gupta", "Priya Nair", "Kabir Sethi",
    "Ananya Iyer", "Devansh Roy", "Meera Kapoor",
  ],
  "2024-25": [
    "Swapnal Swami", "Vivek Anand", "Nisha Kumari", "Aditya Verma",
    "Sanya Malhotra", "Kartik Joshi", "Tanya Chatterjee", "Rahul Sinha",
    "Neha Agarwal", "Yash Raj", "Simran Kaur",
  ],
  "2023-24": [
    "Ravi Shankar Prasad", "Aman Kumar Rajak", "Dona Bhattacharjee",
    "Arjun Menon", "Pooja Rao", "Siddharth Bose", "Kritika Jain",
    "Harsh Vardhan", "Ritika Das", "Nikhil Bhatt", "Aisha Khan",
  ],
  "2022-23": [
    "Vikash Kumar Singh", "Anand Shreshtha", "Rhea Banerjee", "Manav Trivedi",
    "Shreya Ghosh", "Aryan Chopra", "Divya Pillai", "Karan Malhotra",
    "Sneha Reddy", "Vivaan Shah", "Tanvi Deshmukh",
  ],
  "2021-22": [
    "Sahil Singh", "Monika Kumari", "Rajat Khanna", "Alisha Fernandes",
    "Parth Goyal", "Nandini Saxena", "Ayaan Qureshi", "Kavya Ramesh",
    "Dev Patel", "Ira Sen", "Mohit Yadav",
  ],
};

export const alumni: Alumni[] = Object.entries(NAMES_BY_BATCH).flatMap(
  ([batch, names]) =>
    names.map((name, i) => {
      const pos = POSITIONS[i % POSITIONS.length];
      const job = COMPANIES[(i + batch.charCodeAt(2)) % COMPANIES.length];
      const img = IMAGES[(i + batch.charCodeAt(3)) % IMAGES.length];
      const slug = name.toLowerCase().replace(/[^a-z]+/g, ".");
      return {
        id: `${batch}-${i + 1}`,
        name,
        batch,
        societyPosition: pos,
        company: job.company,
        designation: job.designation,
        image: `/team/2022/${img}.jpeg`,
        linkedin: "https://linkedin.com",
        email: `${slug}@example.com`,
      };
    })
);
