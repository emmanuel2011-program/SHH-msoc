// prisma/db.js
import { PrismaClient } from "@prisma/client";

// Use the DATABASE_URL from your .env
export const db = new PrismaClient({
  // Prisma 7 expects either 'adapter' or 'accelerateUrl' internally
  // For normal Postgres, you can just use the default constructor
});

// Optional: gracefully disconnect Prisma when the app exits
process.on("exit", async () => {
  await db.$disconnect();
});