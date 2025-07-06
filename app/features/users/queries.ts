import { profiles } from "./schema";
import supabaseClient from "../../supabase-client";

export const getUsers = async () => {
    const { data, error } = await supabaseClient.from("profiles").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return data;
};

export const getUserById = async (id: string) => {
    const { data, error } = await supabaseClient.from("profiles").select("*").eq("user_id", id).single();
    if (error) throw error;
    return data;
};
