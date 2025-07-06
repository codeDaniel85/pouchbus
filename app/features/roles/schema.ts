import { pgTable, pgEnum, text, bigint, timestamp, integer, uuid } from "drizzle-orm/pg-core";
import { profiles } from "../users/schema";
import { companies } from "../companies/schema";

export const userRoles = pgEnum("role_id", ["ROLE_USER", "ROLE_DRIVER", "ROLE_COMPANY_ADMIN", "ROLE_SYSTEM_ADMIN"]);
export const approvalStatus = pgEnum("approval_status", ["PENDING", "APPROVED", "REJECTED", "CANCELLED"]);

export const roles = pgTable("roles", {
    role_id: userRoles().primaryKey(),
    role_name: text("role_name").notNull(),
    role_level: integer("role_level").notNull().default(0),
    role_description: text("role_description"),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
});

export const userCompanyRoles = pgTable("user_company_roles", {
    user_id: uuid("user_id").notNull().references(() => profiles.user_id, { onDelete: "cascade" }),
    company_id: bigint({ mode: "number" }).notNull().references(() => companies.company_id, { onDelete: "cascade" }),
    role_id: userRoles().notNull().default("ROLE_USER"),
    approval_status: approvalStatus().notNull().default("PENDING"),
    approval_reason: text("approval_reason"),
    approval_at: timestamp("approval_at"),
    approval_by: text("approval_by"),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
});
