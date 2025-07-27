import { ConfettiButton } from "~/common/components/magicui/confetti";
import { Button } from "../components/ui/button";
import { data, Link, useNavigation } from "react-router";
import type { Route } from "./+types/home-page";
import { makeSSRClient } from "~/supabase-client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "../components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { BadgeCheck, ChevronsUpDown } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Bell } from "lucide-react";
import { LogOut } from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";


const loginData = {
    user: {
        name: "Daniel",
        email: "code.daniel85@gmail.com",
        avatar: "/user1.png",
    },
}

export const loader = async ({ request }: Route.LoaderArgs) => {
    const { client } = makeSSRClient(request);
    const { data: { user } } = await client.auth.getUser();
    return { user };
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    const isLoggedIn = loaderData.user !== null;
    const isMobile = useIsMobile();
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-background">
            {isLoggedIn ?
                (
                    <div className="absolute top-4 right-10 flex flex-row gap-4 z-10">
                        {/* <NavUser user={loginData.user} /> */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="flex items-center gap-2 px-3 py-2 h-auto"
                                >
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        <AvatarImage src={loginData.user.avatar} alt={loginData.user.name} />
                                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">{loginData.user.name}</span>
                                        {!isMobile && <span className="truncate text-xs">{loginData.user.email}</span>}
                                    </div>
                                    <ChevronsUpDown className="ml-auto size-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                side="bottom"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            <AvatarImage src={loginData.user.avatar} alt={loginData.user.name} />
                                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">{loginData.user.name}</span>
                                            {!isMobile && <span className="truncate text-xs">{loginData.user.email}</span>}
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <BadgeCheck />
                                        Account
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard />
                                        Billing
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Bell />
                                        Notifications
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link to="/logout-page" >
                                        <LogOut />
                                        Log out
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                )
                :
                (
                    <div className="absolute top-4 right-10 flex flex-row gap-4 z-10">
                        <Link to="/login-page" className="mt-4">
                            <Button variant="outline" className="text-violet-700 hover:text-violet-400 transition-all duration-300 font-bold hover:bg-violet-400 hover:text-white">Login</Button>
                        </Link >
                        <Link to="/agree-page" className="mt-4">
                            <Button variant="outline" className="text-violet-700 hover:text-violet-400 transition-all duration-300 font-bold hover:bg-violet-400 hover:text-white">Sign up</Button>
                        </Link>
                    </div >
                )
            }

            <h1 className="text-3xl mb-4 text-black">Welcome to <span className="text-3xl font-bold mb-4 text-violet-700">Pouch Bus</span></h1>
            {isLoggedIn ?
                (
                    <Link to="/dashboard-page" className="mt-4">
                        <ConfettiButton>시작하기</ConfettiButton>
                    </Link>
                )
                :
                (
                    <Link to="/login-page" className="mt-4">
                        <ConfettiButton>시작하기</ConfettiButton>
                    </Link>
                )
            }

        </main >
    );
} 