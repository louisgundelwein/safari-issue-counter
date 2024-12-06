
//add schema here
//get type of schema with: type SchemaType = typeof schema.$ inferSelect or type NewSchemaType = typeof schema.$ inferInsert

import { pgTable, serial, text, date } from 'drizzle-orm/pg-core';

export const incident = pgTable('incident', {
	id: serial('id').primaryKey(),
	date: date({ mode: 'date' }).defaultNow().notNull(),
	description: text('description').notNull(),
});

export type Incident = typeof incident.$inferSelect
export type NewIncident = typeof incident.$inferInsert
//  db:generate: drizzle-kit generate:pg,
//  db:drop: drizzle-kit drop,
//  db:migrate: tsx ./src/db/migrate.ts,
//  db:push: drizzle-kit push:pg,
//  db:studio: drizzle-kit studio,

		
