import { redirect } from "react-router";
import type { Route } from "./+types/logout-page";
import { makeSSRClient } from "~/supabase-client";


export const loader = async ({ request }: Route.LoaderArgs) => {
    const { client, headers } = makeSSRClient(request);
    await client.auth.signOut();
    return redirect("/",
        //{ headers: { "Set-Cookie": "" } }
        { headers }
    );
}
