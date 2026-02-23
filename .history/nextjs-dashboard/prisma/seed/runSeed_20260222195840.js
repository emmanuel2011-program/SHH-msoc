const { db } = require("../../app/lib/db");

const membersSeed = [
  { name: "Emmanuel Okoye", email: "emmanuel@example.com", phone: "+2348050900409" },
  { name: "Jane Doe", email: "jane@example.com", phone: "+2348050900410" },
];

async function main() {
  for (const member of membersSeed) {
    await db.member.create({ data: member });
  }
  console.log("✅ Members seeded");
}

main()
  .catch((e) => console.error(e))
  .finally(() => db.$disconnect());