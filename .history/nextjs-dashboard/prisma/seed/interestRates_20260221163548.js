// prisma/seed/interestRates.ts
const { db } = require('../../lib/db');


export const interestRatesSeed = [
  { rate: 12.5 },
  { rate: 13 },
  { rate: 15 },
];

export async function seedInterestRates() {
  try {
    console.log('Seeding interest rates...');
    for (const interest of interestRatesSeed) {
      await db.interestRate.create({
        data: interest,
      });
    }
    console.log('Interest rates seeded successfully!');
  } catch (error) {
    console.error('Error seeding interest rates:', error);
  }
}