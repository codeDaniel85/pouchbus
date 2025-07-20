import { makeSSRClient } from "../supabase-client"

export const getEmailExists = async (request: Request, { email }: { email: string }) => {
    const { client } = makeSSRClient(request)
    const { error } = await client.from("profiles").select("login_id").eq("login_id", email).single()
    if (error) {
        return false;
    }
    return true;
}
