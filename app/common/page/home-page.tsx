import { ConfettiButton } from "~/common/components/magicui/confetti";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export default function HomePage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-background">

            <div className="absolute top-4 right-10 flex flex-row gap-4 z-10">
                <Link to="/login-page" className="mt-4">
                    <Button variant="outline" className="text-violet-700 hover:text-violet-400 transition-all duration-300 font-bold hover:bg-violet-400 hover:text-white">Login</Button>
                </Link>
                <Link to="/agree-page" className="mt-4">
                    <Button variant="outline" className="text-violet-700 hover:text-violet-400 transition-all duration-300 font-bold hover:bg-violet-400 hover:text-white">Sign up</Button>
                </Link>
            </div>

            <h1 className="text-3xl mb-4 text-black">Welcome to <span className="text-3xl font-bold mb-4 text-violet-700">Pouch Bus</span></h1>

            <Link to="/dashboard-page" className="mt-4">
                <ConfettiButton>시작하기</ConfettiButton>
            </Link>

        </main>
    );
} 