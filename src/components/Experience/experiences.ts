import { Experience } from "@/types/Experience";

export const experiences: Experience[] = [
  {
    company: "Zittle",
    role: "Software Developer",
    period: "Jul 2025 – Present",
    isCurrent: true,
    highlights: [
      "Architected a multi-service AWS serverless backend with Lambda, Step Functions, SQS and EventBridge.",
      "Led code reviews, architecture decisions and feature planning across the engineering team.",
      "Owned the WhatsApp food-ordering flow end-to-end, with in-chat payments and POS-synced menus.",
      "Shipped MCP servers with OAuth 2.1 so ChatGPT users can search, book and buy in chat.",
      "Built an AI Instagram DM booking agent on OpenAI that turns conversations into confirmed bookings.",
      "Led Airbnb and Google Calendar two-way sync with conflict-aware slot management.",
      "Built Razorpay subscriptions, partial payments, refunds and concurrency-safe ticket blocking.",
      "Automated hotel reconciliation with a regex parser pipeline, cutting AI parsing cost to zero.",
      "Optimized MongoDB queries and API payloads, shrinking responses ~30% and speeding queries ~25%.",
    ],
  },
];
