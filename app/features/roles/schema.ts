import { pgTable, pgEnum, text, bigint, timestamp, integer, uuid, pgPolicy } from "drizzle-orm/pg-core";
import { profiles } from "../users/schema";
import { companies } from "../companies/schema";
import { authUid, authenticatedRole } from 'drizzle-orm/supabase';
import { sql } from "drizzle-orm";

export const userRoles = pgEnum("role_id", ["ROLE_USER", "ROLE_DRIVER", "ROLE_COMPANY_ADMIN", "ROLE_SYSTEM_ADMIN"]);
export const approvalStatus = pgEnum("approval_status", ["PENDING", "APPROVED", "REJECTED", "CANCELLED"]);

export const roles = pgTable("roles", {
    role_id: userRoles().primaryKey(),
    role_name: text("role_name").notNull(),
    role_level: integer("role_level").notNull().default(0),
    role_description: text("role_description"),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
}, (table) => [
    pgPolicy("role_insert_policy", {
        as: "permissive",
        for: "insert",
        to: authenticatedRole,
        withCheck: sql`EXISTS (
            SELECT 1 FROM user_company_roles ucr 
            JOIN roles r ON ucr.role_id = r.role_id 
            WHERE ucr.user_id = ${authUid} 
            AND r.role_id = 'ROLE_SYSTEM_ADMIN'
        )`,
    }),
    pgPolicy("role_update_policy", {
        as: "permissive",
        for: "update",
        to: authenticatedRole,
        withCheck: sql`EXISTS (
            SELECT 1 FROM user_company_roles ucr 
            JOIN roles r ON ucr.role_id = r.role_id 
            WHERE ucr.user_id = ${authUid} 
            AND r.role_id = 'ROLE_SYSTEM_ADMIN'
        )`,
    }),
    pgPolicy("role_delete_policy", {
        as: "permissive",
        for: "delete",
        to: authenticatedRole,
        using: sql`EXISTS (
            SELECT 1 FROM user_company_roles ucr 
            JOIN roles r ON ucr.role_id = r.role_id 
            WHERE ucr.user_id = ${authUid} 
            AND r.role_id = 'ROLE_SYSTEM_ADMIN'
        )`,
    }),
    pgPolicy("role_select_policy", {
        as: "permissive",
        for: "select",
        to: authenticatedRole,
        using: sql`EXISTS (
            SELECT 1 FROM user_company_roles ucr 
            WHERE ucr.role_id = ${table.role_id} 
            AND ucr.user_id = ${authUid}
        )`,
    }),
]);

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
}, (table) => [
    pgPolicy("user_company_roles_insert_policy", {
        as: "permissive",
        for: "insert",
        to: authenticatedRole,
        withCheck: sql`EXISTS (
            SELECT 1 FROM user_company_roles ucr 
            JOIN roles r ON ucr.role_id = r.role_id 
            WHERE ucr.user_id = ${authUid} 
            AND r.role_id IN ('ROLE_SYSTEM_ADMIN', 'ROLE_COMPANY_ADMIN')
        )`,
    }),
    pgPolicy("user_company_roles_update_policy", {
        as: "permissive",
        for: "update",
        to: authenticatedRole,
        withCheck: sql`EXISTS (
            SELECT 1 FROM user_company_roles ucr 
            JOIN roles r ON ucr.role_id = r.role_id 
            WHERE ucr.user_id = ${authUid} 
            AND r.role_id IN ('ROLE_SYSTEM_ADMIN', 'ROLE_COMPANY_ADMIN')
        )`,
    }),
    pgPolicy("user_company_roles_delete_policy", {
        as: "permissive",
        for: "delete",
        to: authenticatedRole,
        using: sql`EXISTS (
            SELECT 1 FROM user_company_roles ucr 
            JOIN roles r ON ucr.role_id = r.role_id 
            WHERE ucr.user_id = ${authUid} 
            AND r.role_id IN ('ROLE_SYSTEM_ADMIN', 'ROLE_COMPANY_ADMIN')
        )`,
    }),
    pgPolicy("user_company_roles_select_policy", {
        as: "permissive",
        for: "select",
        to: authenticatedRole,
        using: sql`EXISTS (
            SELECT 1 FROM user_company_roles ucr 
            JOIN roles r ON ucr.role_id = r.role_id 
            WHERE ucr.user_id = ${authUid} 
            AND r.role_id IN ('ROLE_SYSTEM_ADMIN', 'ROLE_COMPANY_ADMIN')
        )`,
    }),
]);
