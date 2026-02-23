const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

module.exports = db;