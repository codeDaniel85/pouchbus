import { pgTable, text, bigint, timestamp } from "drizzle-orm/pg-core";

export const companies = pgTable("companies", {
    company_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
    company_status: text("company_status").notNull().default("active"),
    company_business_number: text("company_business_number").notNull(),
    company_name: text("company_name").notNull(),
    company_address: text("company_address").notNull(),
    company_phone: text("company_phone").notNull(),
    company_email: text("company_email"),
    company_website: text("company_website"),
    company_logo: text("company_logo"),
    company_description: text("company_description"),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
});
