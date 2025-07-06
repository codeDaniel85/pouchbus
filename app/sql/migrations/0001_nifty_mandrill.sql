CREATE TABLE "companies" (
	"company_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "companies_company_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"company_status" text DEFAULT 'active' NOT NULL,
	"company_business_number" text NOT NULL,
	"company_name" text NOT NULL,
	"company_address" text NOT NULL,
	"company_phone" text NOT NULL,
	"company_email" text,
	"company_website" text,
	"company_logo" text,
	"company_description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
