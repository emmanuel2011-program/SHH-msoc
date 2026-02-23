const db = require('../db');

const membersSeed = [
  {
    fullName: 'Emmanuel Okoye',
    email: 'emmanuel@example.com',
    mobilePhone: '+2348050900409',
    address: 'Lagos, Nigeria',
    dateOfBirth: new Date('1990-01-01'),
    gender: 'Male',
  },
  {
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    mobilePhone: '+2348050900410',
    address: 'Abuja, Nigeria',
    dateOfBirth: new Date('1992-05-15'),
    gender: 'Female',
  },
];

async function seedMembers() {
  for (const member of membersSeed) {
    await db.member.create({ data: member });
  }
  console.log('✅ Members seeded');
}

module.exports = { seedMembers };