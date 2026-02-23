// prisma/seed/runSeed.js
const { seedMembers } = require('./members');
const { seedLoans } = require('./loans');
const { seedInterestRates } = require('./interestRates');

async function runSeed() {
  try {
    console.log('🟢 Starting database seeding...');
    await seedMembers();
    await seedInterestRates();
    await seedLoans();
    console.log('🎉 All seeds completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

runSeed();