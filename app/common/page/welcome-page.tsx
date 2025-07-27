import { Resend } from "resend";
import { WelcomeEmail } from "../components/form/mail-welcome-form";
import type { Route } from "./+types/welcome-page";


const client = new Resend(process.env.RESEND_API_KEY);

export const loader = async ({ params }: Route.LoaderArgs) => {
    console.log("welcome page");
    const data = await client.emails.send({
        from: "Pouch Bus <mail.pouchbus@mail.pouchbus.com>",
        to: ["code.daniel85@gmail.com"],
        subject: "[파우치버스] 고된 출퇴근길, 작은 변화의 시작",
        react: <WelcomeEmail username={"Daniel85"} />,
    });
    return Response.json({ data, error: null });
}
