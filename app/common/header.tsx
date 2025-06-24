import { BusIcon } from "lucide-react";
import { Link } from "react-router";

export function Header() {
    return (
        <header className="w-full h-16 flex items-center px-4 shadow bg-white">
            <Link to="/" className="flex items-center">
                {/* <img
                    src="/"
                    alt="PouchBus Logo"
                    className="h-10 w-auto"
                /> */}
                <label className="flex items-center cursor-pointer text-violet-700 hover:text-violet-400 transition-all duration-300">
                    <BusIcon className="size-10" />
                    <h1 className="text-2xl font-bold mx-2">Pouch Bus</h1>
                </label>
            </Link>
        </header>
    );
}