CREATE TYPE "public"."approval_status" AS ENUM('PENDING', 'APPROVED', 'REJECTED', 'CANCELLED');--> statement-breakpoint
CREATE TYPE "public"."role_id" AS ENUM('ROLE_USER', 'ROLE_DRIVER', 'ROLE_COMPANY_ADMIN', 'ROLE_SYSTEM_ADMIN');--> statement-breakpoint
CREATE TABLE "roles" (
	"role_id" "role_id" PRIMARY KEY NOT NULL,
	"role_name" text NOT NULL,
	"role_level" integer DEFAULT 0 NOT NULL,
	"role_description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_company_roles" (
	"user_id" uuid NOT NULL,
	"company_id" bigint NOT NULL,
	"role_id" "role_id" DEFAULT 'ROLE_USER' NOT NULL,
	"approval_status" "approval_status" DEFAULT 'PENDING' NOT NULL,
	"approval_reason" text,
	"approval_at" timestamp,
	"approval_by" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user_company_roles" ADD CONSTRAINT "user_company_roles_user_id_profiles_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("user_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_company_roles" ADD CONSTRAINT "user_company_roles_company_id_companies_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("company_id") ON DELETE cascade ON UPDATE no action;