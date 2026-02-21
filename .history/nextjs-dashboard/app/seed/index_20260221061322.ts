import { seedMembers } from './members';
import { seedLoans } from './loans';

async function main() {
  await seedMembers();
  await seedLoans();
  console.log('Database seeded successfully!');
}

main()
  .catch((e) => console.error(e))
  .finally(() => process.exit());