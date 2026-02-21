import { db } from '@/lib/db';

export const membersSeed = [
  {
    firstName: 'Emmanuel',
    lastName: 'Okoye',
    email: 'emmanuel@example.com',
    membershipType: 'Standard',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    membershipType: 'Premium',
  },
];

export async function seedMembers() {
  for (const member of membersSeed) {
    await db.member.create({ data: member });
  }
  console.log('Members seeded successfully!');
}