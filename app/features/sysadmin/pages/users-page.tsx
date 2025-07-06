import React from "react"
import { AppSidebar } from "~/common/components/sidebar/app-sidebar"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "~/common/components/ui/button"
import { Checkbox } from "~/common/components/ui/checkbox"
import { Input } from "~/common/components/ui/input"
import { Label } from "~/common/components/ui/label"
import { Separator } from "~/common/components/ui/separator"
import { DataTable } from "~/common/components/table/datatable-form"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/common/components/ui/dropdown-menu"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "~/common/components/ui/breadcrumb"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "~/common/components/ui/sidebar"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/common/components/ui/dialog"
import {
    type ColumnDef,
} from "@tanstack/react-table"
import { getUsers } from "../queries"
import { useLoaderData } from "react-router";
import type { User } from "@supabase/supabase-js"
import type { Route } from "./+types/users-page"


// const data: Properties[] = [
//     // {
//     //     id: "m5gr84i9",
//     //     name: "김철수",
//     //     email: "ken99@example.com",
//     //     phone: "010-1111-5678",
//     // },
//     // {
//     //     id: "3u1reuv4",
//     //     name: "김영희",
//     //     email: "Abe45@example.com",
//     //     phone: "010-2222-5678",
//     // },
//     // {
//     //     id: "derv1ws0",
//     //     name: "이철수",
//     //     email: "Monserrat44@example.com",
//     //     phone: "010-3333-5678",
//     // },
//     // {
//     //     id: "5kma53ae",
//     //     name: "박영희",
//     //     email: "Silas22@example.com",
//     //     phone: "010-4444-5678",
//     // },
//     // {
//     //     id: "bhqecj4p",
//     //     name: "최철수",
//     //     email: "carmella@example.com",
//     //     phone: "010-5555-5678",
//     // },
// ]

// 1. 타입 정의
export interface columnProps {
    user_id: string;
    user_name: string;
    login_id: string;
    created_at: string;
}

// 2. columns 정의
export const columns: ColumnDef<columnProps>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "user_name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("user_name")}</div>
        ),
    },
    {
        accessorKey: "login_id",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("login_id")}</div>,
    },
    {
        accessorKey: "created_at",
        header: "Created At",
        cell: ({ row }) => <div className="lowercase">{row.getValue("created_at")}</div>,
        //header: () => <div className="text-right">Phone Number</div>,
        // cell: ({ row }) => {
        //     const phone = parseFloat(row.getValue("phone"))
        //     // Format the amount as a dollar amount
        //     const formatted = new Intl.NumberFormat("en-US", {
        //         style: "currency",
        //         currency: "USD",
        //     }).format(Amount)
        //     return <div className="text-right font-medium">{formatted}</div>
        // },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const properties = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(properties.user_id)}
                        >
                            Copy Users ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Users details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

// 3. loader에서 users 반환
export const loader = async () => {
    const users = await getUsers(); // columnProps[]
    return { users };
}

// 4. 컴포넌트에서 사용
export default function Page({ loaderData }: Route.ComponentProps) {
    const users = loaderData.users as columnProps[];
    console.log("users.length() = " + users.length + "\nloaderData = " + users)
    const filterColumns = [
        { key: "user_name", placeholder: "이름으로 검색..." },
        { key: "login_id", placeholder: "이메일로 검색..." },
        // { key: "created_at", placeholder: "가입일로 검색..." },
    ]

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        System Admin
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Users</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row items-center justify-between p-4">
                                <h1 className="text-2xl text-violet-700 font-bold">전체 회원관리</h1>
                                <Dialog>
                                    <form>
                                        <DialogTrigger asChild>
                                            <Button className="flex flex-row gap-4 z-10">회원추가</Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>신규 회원 등록</DialogTitle>
                                                <DialogDescription>
                                                    신규 회원을 등록합니다.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4">
                                                <div className="grid gap-3">
                                                    <Label htmlFor="name-1">Name</Label>
                                                    <Input id="name-1" name="name" placeholder="이름을 입력해주세요." />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="username-1">Email</Label>
                                                    <Input id="username-1" name="username" placeholder="user@pouch.com" />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="username-1">Phone</Label>
                                                    <Input id="username-1" name="username" placeholder="010-1234-5678" />
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <DialogClose asChild>
                                                    <Button variant="outline">취소</Button>
                                                </DialogClose>
                                                <Button type="submit">등록</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </form>
                                </Dialog>
                            </div>
                            {/* 회원 목록 table */}
                            <DataTable data={users} columns={columns} filterColumns={filterColumns} />

                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
