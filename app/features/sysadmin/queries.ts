import { profiles } from "../users/schema";
import supabaseClient from "../../supabase-client";

export const getUsers = async () => {
    const { data, error } = await supabaseClient.from("profiles").select("user_id, user_name, login_id, created_at")
        .order("created_at", { ascending: false });
    console.log(data, error)
    if (error) throw error;
    return data;
};

export const getUserById = async (id: string) => {
    const { data, error } = await supabaseClient.from("profiles").select("*").eq("user_id", id).single();
    if (error) throw error;
    return data;
};

export const getCompanies = async () => {
    const { data, error } = await supabaseClient.from("companies").select("*")
        .order("created_at", { ascending: false });
    console.log(data, error)
    if (error) throw error;
    return data;
}
