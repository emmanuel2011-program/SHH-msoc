import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  migrations: {
    path: "./prisma/migrations",
  },
  adapter: {
    provider: "postgresql",
    url: process.env.DATABASE_URL!, // <-- Neon URL from .env
  },
});