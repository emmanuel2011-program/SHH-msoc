async function listActivities() {
  const data = await sql`
    SELECT members.name, loans.amount, loans.date
    FROM members
    JOIN loans ON members.id = loans.member_id
    WHERE loans.amount > 0;
  `;
  return data;
}