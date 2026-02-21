// lib/db.ts
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

// Use global variable in dev to prevent multiple connections during hot reload
const db = global.prisma || new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL, // Neon connection string from .env
    },
  },
});

if (process.env.NODE_ENV !== 'production') global.prisma = db;

export default db;