// prisma/seed/runSeed.ts
import { seedMembers } from './members';
import { seedLoans } from './loans';
import { seedInterestRates } from './interestRates';

async function runSeed() {
  try {
    console.log('🟢 Starting database seeding...');

    await seedMembers();
    await seedInterestRates();
    await seedLoans();

    console.log('🎉 All seeds completed successfully!');
    process.exit(0); // exit cleanly
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1); // exit with error code
  }
}

runSeed();