import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "../../../database.types";

export const getUsers = async (client: SupabaseClient<Database>) => {
    const { data, error } = await client.from("profiles").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return data;
};

export const getUserById = async (client: SupabaseClient<Database>, { id }: { id: string }) => {
    const { data, error } = await client.from("profiles").select("*").eq("user_id", id).single();
    if (error) throw error;
    return data;
};
