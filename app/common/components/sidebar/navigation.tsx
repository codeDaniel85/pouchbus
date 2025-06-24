import { Link } from "react-router";

export default function Navigation() {
    return (
        <nav>
            <div>
                <Link to="/" className="font-bold tracking-tight text-2xl text-violet-500 hover:text-violet-600 hover:underline hover:underline-offset-4 
                transition-all duration-300 mx-3">Pouch</Link>
            </div>
        </nav>
    );
} 