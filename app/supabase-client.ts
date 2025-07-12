import { createBrowserClient, createServerClient, parseCookieHeader, serializeCookieHeader } from "@supabase/ssr";
import type { Database } from "../database.types";

export const browserClient = createBrowserClient<Database>(
    import.meta.env.VITE_SUPABASE_URL!,
    import.meta.env.VITE_SUPABASE_ANON_KEY!
);

export const makeSSRClient = (request: Request) => {
    const headers = new Headers();
    const serverSideClient = createServerClient<Database>(
        import.meta.env.VITE_SUPABASE_URL!,
        import.meta.env.VITE_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll: () => {
                    const cookies = parseCookieHeader(request.headers.get("cookie") ?? "");
                    // undefined 값을 빈 문자열로 변환하여 타입 안전성 확보
                    return cookies.map(cookie => ({
                        name: cookie.name,
                        value: cookie.value ?? ""
                    }));
                },
                setAll: (cookiesToSet: Array<{ name: string; value: string; options?: any }>) => {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        headers.append("Set-Cookie", serializeCookieHeader(name, value, options));
                    });
                }
            }
        }
    );
    return {
        client: serverSideClient,
        headers
    }
}

