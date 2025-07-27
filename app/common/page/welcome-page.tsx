import { Resend } from "resend";
import { WelcomeEmail } from "../components/form/mail-welcome-form";
import type { Route } from "./+types/welcome-page";
import { redirect } from "react-router";
import { makeSSRClient } from "../../supabase-client";

const client = new Resend(process.env.RESEND_API_KEY);

export const loader = async ({ request, params }: Route.LoaderArgs) => {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");
    const name = url.searchParams.get("name");

    console.log("welcome page", email, name);

    // // Supabase 클라이언트 생성
    // const { client: supabaseClient } = makeSSRClient(request);

    // // 현재 인증된 사용자 정보 가져오기
    // const { data: { user } } = await supabaseClient.auth.getUser();

    // if (!user) {
    //     console.log("No authenticated user found");
    //     return redirect("/");
    // }

    // // 사용자 프로필 정보 가져오기
    // const { data: profile } = await supabaseClient
    //     .from('profiles')
    //     .select('user_name')
    //     .eq('user_id', user.id)
    //     .single();

    const username = name ? name : email?.split('@')[0] || '사용자';
    const userEmail = email;

    if (!userEmail) {
        console.log("No email found for user");
        return redirect("/");
    }

    try {
        const data = await client.emails.send({
            from: "Pouch Bus <mail.pouchbus@mail.pouchbus.com>",
            to: [userEmail],
            subject: "[Welcome] '파우치버스' 고된 출퇴근길, 작은 변화의 시작",
            react: <WelcomeEmail username={username} />,
        });
        console.log("Welcome email sent successfully:", data);
    } catch (error) {
        console.error("Failed to send welcome email:", error);
    }

    return redirect("/");
}
