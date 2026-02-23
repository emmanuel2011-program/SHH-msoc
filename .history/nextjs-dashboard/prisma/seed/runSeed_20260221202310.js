const { seedMembers } = require('./members');
const { seedLoans } = require('./loans');
const { seedInterestRates } = require('./interestRates');

async function runSeed() {
  try {
    console.log('🌱 Starting seed...');

    await seedMembers();
    await seedInterestRates();
    await seedLoans();

    console.log('🎉 Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }
}

runSeed();