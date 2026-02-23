// prisma/seed/members.ts
import { db } require('../..lib/db');

const membersSeed = [
  {
    fullName: 'Emmanuel Okoye',
    email: 'emmanuel@example.com',
    mobilePhone: '+2348050900409',
    address: 'Lagos, Nigeria',
    dateOfBirth: '1990-01-01',
    gender: 'Male',
  },
  {
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    mobilePhone: '+2348050900410',
    address: 'Abuja, Nigeria',
    dateOfBirth: '1992-05-15',
    gender: 'Female',
  },
];

async function seedMembers() {
  try {
    console.log('Seeding members...');
    for (const member of membersSeed) {
      await db.member.create({ data: member });
    }
    console.log('Members seeded successfully!');
  } catch (error) {
    console.error('Error seeding members:', error);
  }
}