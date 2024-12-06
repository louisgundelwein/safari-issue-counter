ALTER TABLE "incidents" RENAME TO "incident";--> statement-breakpoint
ALTER TABLE "incident" ALTER COLUMN "date" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "incident" ALTER COLUMN "date" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "incident" ALTER COLUMN "description" SET NOT NULL;