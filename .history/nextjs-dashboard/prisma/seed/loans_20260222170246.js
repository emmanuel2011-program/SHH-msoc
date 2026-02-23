const db = require('../db');

const loansSeed = [
  {
    memberId: 1,
    loanAmount: 50000,
    requestDate: new Date('2026-02-01'),
    duration: 1,
    interestRate: 15,
    
    
  },
  {
    memberId: 2,
    loanAmount: 75000,
    requestDate: new Date('2026-01-15'),
    duration: 2,
    interestRate: 12.5,
    repaymentDate: new Date('2026-03-15'),
    status: 'Pending',
  },
];

async function seedLoans() {
  for (const loan of loansSeed) {
    await db.loan.create({ data: loan });
  }
  console.log('✅ Loans seeded');
}

module.exports = { seedLoans };