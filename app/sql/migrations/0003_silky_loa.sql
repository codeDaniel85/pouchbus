ALTER TABLE "companies" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "roles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "user_company_roles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "profiles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE POLICY "companies_select_policy" ON "companies" AS PERMISSIVE FOR SELECT TO "authenticated" USING (EXISTS (
    SELECT 1 FROM user_company_roles ucr 
    JOIN roles r ON ucr.role_id = r.role_id 
    WHERE ucr.company_id = companies.company_id 
    AND ucr.user_id = auth.uid() 
    AND r.role_id IN ('ROLE_SYSTEM_ADMIN', 'ROLE_COMPANY_ADMIN')
));--> statement-breakpoint
CREATE POLICY "companies_insert_policy" ON "companies" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (EXISTS (
    SELECT 1 FROM user_company_roles ucr 
    JOIN roles r ON ucr.role_id = r.role_id 
    WHERE ucr.user_id = auth.uid() 
    AND r.role_id = 'ROLE_SYSTEM_ADMIN'
));--> statement-breakpoint
CREATE POLICY "companies_update_policy" ON "companies" AS PERMISSIVE FOR UPDATE TO "authenticated" WITH CHECK (EXISTS (
    SELECT 1 FROM user_company_roles ucr 
    JOIN roles r ON ucr.role_id = r.role_id 
    WHERE ucr.company_id = companies.company_id 
    AND ucr.user_id = auth.uid() 
    AND r.role_id IN ('ROLE_SYSTEM_ADMIN', 'ROLE_COMPANY_ADMIN')
));--> statement-breakpoint
CREATE POLICY "companies_delete_policy" ON "companies" AS PERMISSIVE FOR DELETE TO "authenticated" USING (EXISTS (
    SELECT 1 FROM user_company_roles ucr 
    JOIN roles r ON ucr.role_id = r.role_id 
    WHERE ucr.company_id = companies.company_id 
    AND ucr.user_id = auth.uid() 
    AND r.role_id = 'ROLE_SYSTEM_ADMIN'
));--> statement-breakpoint
CREATE POLICY "role_insert_policy" ON "roles" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (EXISTS (
    SELECT 1 FROM user_company_roles ucr 
    JOIN roles r ON ucr.role_id = r.role_id 
    WHERE ucr.user_id = auth.uid() 
    AND r.role_id = 'ROLE_SYSTEM_ADMIN'
));--> statement-breakpoint
CREATE POLICY "role_update_policy" ON "roles" AS PERMISSIVE FOR UPDATE TO "authenticated" WITH CHECK (EXISTS (
    SELECT 1 FROM user_company_roles ucr 
    JOIN roles r ON ucr.role_id = r.role_id 
    WHERE ucr.user_id = auth.uid() 
    AND r.role_id = 'ROLE_SYSTEM_ADMIN'
));--> statement-breakpoint
CREATE POLICY "role_delete_policy" ON "roles" AS PERMISSIVE FOR DELETE TO "authenticated" USING (EXISTS (
    SELECT 1 FROM user_company_roles ucr 
    JOIN roles r ON ucr.role_id = r.role_id 
    WHERE ucr.user_id = auth.uid() 
    AND r.role_id = 'ROLE_SYSTEM_ADMIN'
));--> statement-breakpoint
CREATE POLICY "role_select_policy" ON "roles" AS PERMISSIVE FOR SELECT TO "authenticated" USING (EXISTS (
    SELECT 1 FROM user_company_roles ucr 
    WHERE ucr.role_id = roles.role_id 
    AND ucr.user_id = auth.uid()
));--> statement-breakpoint
CREATE POLICY "user_company_roles_insert_policy" ON "user_company_roles" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (EXISTS (
    SELECT 1 FROM user_company_roles ucr 
    JOIN roles r ON ucr.role_id = r.role_id 
    WHERE ucr.user_id = auth.uid() 
    AND r.role_id IN ('ROLE_SYSTEM_ADMIN', 'ROLE_COMPANY_ADMIN')
));--> statement-breakpoint
CREATE POLICY "user_company_roles_update_policy" ON "user_company_roles" AS PERMISSIVE FOR UPDATE TO "authenticated" WITH CHECK (EXISTS (
    SELECT 1 FROM user_company_roles ucr 
    JOIN roles r ON ucr.role_id = r.role_id 
    WHERE ucr.user_id = auth.uid() 
    AND r.role_id IN ('ROLE_SYSTEM_ADMIN', 'ROLE_COMPANY_ADMIN')
));--> statement-breakpoint
CREATE POLICY "user_company_roles_delete_policy" ON "user_company_roles" AS PERMISSIVE FOR DELETE TO "authenticated" USING (EXISTS (
    SELECT 1 FROM user_company_roles ucr 
    JOIN roles r ON ucr.role_id = r.role_id 
    WHERE ucr.user_id = auth.uid() 
    AND r.role_id IN ('ROLE_SYSTEM_ADMIN', 'ROLE_COMPANY_ADMIN')
));--> statement-breakpoint
CREATE POLICY "user_company_roles_select_policy" ON "user_company_roles" AS PERMISSIVE FOR SELECT TO "authenticated" USING (EXISTS (
    SELECT 1 FROM user_company_roles ucr 
    JOIN roles r ON ucr.role_id = r.role_id 
    WHERE ucr.user_id = auth.uid() 
    AND r.role_id IN ('ROLE_SYSTEM_ADMIN', 'ROLE_COMPANY_ADMIN')
));--> statement-breakpoint
CREATE POLICY "profiles_select_policy" ON "profiles" AS PERMISSIVE FOR SELECT TO "authenticated" USING ("profiles"."user_id" = auth.uid());