'use server'
import { drizzle } from 'drizzle-orm/postgres-js';
import { incident, type NewIncident } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL!);


export async function addNewIncident(description: string) {
	const newIncident: NewIncident = {
		description,
	};

	await db.insert(incident).values(newIncident)
}

export async function deleteIncident(id: number) {
	await db.delete(incident).where(eq(incident.id, id))
}
		
export async function getAllIncidentsOrderedDescending() {
	const incidents = await db.select().from(incident).orderBy(desc(incident.date))
	return incidents
}