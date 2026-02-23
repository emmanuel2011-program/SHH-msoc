import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // ❌ This no longer works

export const db = new PrismaClient();