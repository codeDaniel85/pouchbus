import { sql } from "drizzle-orm";
import { pgEnum, pgPolicy, pgSchema, pgTable, serial, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { authenticatedRole, authUid } from "drizzle-orm/supabase";
import { roles } from "../roles/schema";

const users = pgSchema("auth").table("users", {
    id: uuid().primaryKey(),
});

export const signupType = pgEnum("signup_type", ["email", "google", "apple", "kakao", "naver"]);

export const profiles = pgTable("profiles", {
    user_id: uuid().primaryKey().references(() => users.id, { onDelete: "cascade" }),
    login_id: varchar("login_id", { length: 50 }).notNull().unique(),
    user_name: varchar("user_name", { length: 50 }).notNull(),
    phone_number: varchar("phone_number", { length: 20 }),
    avatar: text("avatar"),
    signup_type: signupType("signup_type").notNull().default("email"),
    devide_token: text("devide_token"),
    etc_1: text("etc_1"),
    etc_2: text("etc_2"),
    etc_3: text("etc_3"),
    etc_4: text("etc_4"),
    etc_5: text("etc_5"),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
}, (table) => [
    pgPolicy("profiles_select_policy", {
        as: "permissive",
        for: "select",
        to: authenticatedRole,
    })
]);

