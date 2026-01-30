export type PackageType = 'entrepreneur' | 'creator' | 'teacher' | 'leader';
export const PACKAGE_HIERARCHY: PackageType[] = ['entrepreneur', 'creator', 'teacher', 'leader'];

export interface QuizOption {
  text: string;
  package: PackageType;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "What describes you best right now?",
    options: [
      { text: "Running a one-to-one business (coaching, healing, consulting)", package: "entrepreneur" },
      { text: "Creating art or content and building audience", package: "creator" },
      { text: "Selling courses or digital products", package: "teacher" },
      { text: "Managing community and team", package: "leader" },
    ],
  },
  {
    question: "Where are you in your journey?",
    options: [
      { text: "Building foundation (need structure from start)", package: "entrepreneur" },
      { text: "Creating proven impact and income (ready to systematize)", package: "entrepreneur" },
      { text: "Scaling existing offers (need them connected)", package: "teacher" },
      { text: "Running full ecosystem (courses + community + team)", package: "leader" },
    ],
  },
  {
    question: "How do people find you?",
    options: [
      { text: "Local presence, referrals, google", package: "entrepreneur" },
      { text: "Own web page, Google", package: "creator" },
      { text: "Web page, Social Media", package: "creator" },
      { text: "Internet, My Online Community", package: "leader" },
    ],
  },
  {
    question: "What matters most right now?",
    options: [
      { text: "Getting professionally organized", package: "entrepreneur" },
      { text: "Managing my Social Media and web presence", package: "creator" },
      { text: "Building my course platform", package: "teacher" },
      { text: "Scaling with team and community", package: "leader" },
    ],
  },
];

export interface PackageInfo {
  name: string;
  price: string;
  whyItFits: string;
  whatsIncluded: string[];
  whatChanges: string;
}

export const packageDetails: Record<PackageType, PackageInfo> = {
  entrepreneur: {
    name: "Entrepreneur Package",
    price: "$59/month",
    whyItFits: "You're running a coaching, consulting, or service business and need a professional operating backbone without complexity you don't need yet.",
    whatsIncluded: [
      "Complete contact management",
      "Text & Email marketing & automations",
      "Scheduling with automated booking",
      "Payment processing & invoicing",
      "Forms, quizzes & surveys"
    ],
    whatChanges: "Your booking process runs itself. Clients book, pay, get reminders and invoices automatically. Your Sundays come back.",
  },
  creator: {
    name: "Creator Package",
    price: "$99/month",
    whyItFits: "You're creating content, building your brand, and growing your audience. You need web presence and social management without hiring a team.",
    whatsIncluded: [
      "Everything in Entrepreneur, PLUS:",
      "Website & landing page builder",
      "WordPress connection",
      "Social media planner"
    ],
    whatChanges: "Your content flows systematically. Your owned audience grows while you create. Your reputation builds while you sleep.",
  },
  teacher: {
    name: "Teacher Package",
    price: "$149/month",
    whyItFits: "You're moving beyond one-to-one. You have (or want) courses, memberships, or group programs and need complete infrastructure to scale teaching.",
    whatsIncluded: [
      "Everything in Creator, PLUS:",
      "Course hosting & delivery",
      "Complete sales funnel builder",
      "Membership platform (Kajabi-comparable)"
    ],
    whatChanges: "Your knowledge becomes a product. Your one hour reaches 100 people. Your courses sell while you sleep, delivered automatically.",
  },
  leader: {
    name: "Leader Package",
    price: "$198/month",
    whyItFits: "You're building community, managing a team, and running sophisticated sales processes. You need enterprise-level infrastructure without enterprise cost.",
    whatsIncluded: [
      "Everything in Teacher, PLUS:",
      "Community platform (Skool-comparable)",
      "Sales pipeline management",
      "Team collaboration tools"
    ],
    whatChanges: "Your community thrives in one space. Your team operates from shared systems. Your business runs whether you're present or not.",
  },
};

export function getHighestPackage(packages: PackageType[]): PackageType {
  let highestIndex = 0;
  for (const pkg of packages) {
    const index = PACKAGE_HIERARCHY.indexOf(pkg);
    if (index > highestIndex) highestIndex = index;
  }
  return PACKAGE_HIERARCHY[highestIndex];
}
