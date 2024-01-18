This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `app/api/hello.ts`.

The `app/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React app.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## OFF SaasS Build & Deploy

Overview
Welcome to the "regusync" project, a comprehensive chat application with PDF integration. This project is designed to provide a seamless chat experience where users can upload PDF files, create chats around them, and interact with an AI assistant. The AI assistant uses the OpenAI API to generate responses based on the chat context. The application also includes a subscription feature, where users can subscribe to access premium features. The subscription process is handled using Stripe for payments and webhooks for event processing.

hi this is a test change!

Technologies and Frameworks
Next.js
React
TypeScript
Tailwind CSS
Clerk
Drizzle ORM
PostgreSQL
AWS SDK
OpenAI API
Stripe
Axios
Pinecone
Drizzle-kit
OpenAI Edge
Neon Database Serverless
Drizzle-orm/neon-http
@tanstack/react-query
@clerk/nextjs
clsx
tailwind-merge
Installation
Follow the steps below to install and setup the project:

Clone the repository

Open your terminal and run the following command:

git clone https://github.com/modish0161/regusync.git
Navigate to the project directory

cd regusync
Install Node.js

The project requires Node.js version 13.4.19 or later. You can download it from here.

Install the required dependencies

Run the following command to install all the required dependencies:

npm install
This will install all the dependencies listed in the package.json file, including Next.js, React, React DOM, Axios, Stripe, Tailwind CSS, and other specific dependencies such as "@aws-sdk/client-s3" and "@clerk/nextjs".

Setup environment variables

Create a .env file in the root directory of your project and add the required environment variables.

Run the project

Now, you can run the project using the following command:

npm run dev
Open http://localhost:3000 with your browser to see the result.
