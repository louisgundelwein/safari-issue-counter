import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

async function main() {
	const databaseUrl = process.env.DATABASE_URL;
	if (!databaseUrl) {
		throw new Error('DATABASE_URL is not defined');
	}
	const client = postgres(databaseUrl);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const db = drizzle({ client });
}

main();
