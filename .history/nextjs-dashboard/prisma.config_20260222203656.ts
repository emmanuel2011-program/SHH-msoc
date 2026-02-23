import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  migrations: {
    path: "./prisma/migrations",
  },
  db: {
    // Use `adapter` for a PostgreSQL connection
    adapter: process.env.DATABASE_URL!,
  },
});