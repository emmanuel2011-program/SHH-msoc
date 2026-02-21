import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listActivities() {
  const data = await sql`
    SELECT members.name, loans.amount, loans.date
    FROM members
    JOIN loans ON members.id = loans.member_id
    WHERE loans.amount > 0;
  `;
  return data;
}

export async function GET() {
  
  
  try {
  	return Response.json(await listInvoices());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}
