import React, { Component, type ComponentProps } from "react"
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
import { getCompanies } from "../queries"
import type { Route } from "./+types/companys-page"

// const data: Properties[] = [
//     {
//         company_id: "m5gr84i9",
//         company_name: "노마드코더",
//         company_code: "1234567890",
//         company_address: "서울시 강남구 역삼동",
//         company_tel: "010-1111-5678",
//     },
//     {
//         company_id: "3u1reuv4",
//         company_name: "파우치치",
//         company_code: "1234567890",
//         company_address: "서울시 강남구 역삼동",
//         company_tel: "010-2222-5678",
//     },
//     {
//         company_id: "derv1ws0",
//         company_name: "카카오",
//         company_code: "1234567890",
//         company_address: "서울시 강남구 역삼동",
//         company_tel: "010-3333-5678",
//     },
//     {
//         company_id: "5kma53ae",
//         company_name: "테슬라",
//         company_code: "1234567890",
//         company_address: "서울시 강남구 역삼동",
//         company_tel: "010-4444-5678",
//     },
//     {
//         company_id: "bhqecj4p",
//         company_name: "현대자동차",
//         company_code: "1234567890",
//         company_address: "서울시 강남구 역삼동",
//         company_tel: "010-5555-5678",
//     },
// ]

// 1. 타입 정의
export interface columnProps {
    company_id: number
    company_status: string
    company_business_number: string
    company_name: string
    company_address: string
    company_phone: string
    created_at: string
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
        accessorKey: "company_name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Company Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("company_name")}</div>
        ),
    },
    {
        accessorKey: "company_address",

        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Company Address
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("company_address")}</div>,
    },
    {
        accessorKey: "company_phone",
        header: () => <div>Company Tel Number</div>,
        cell: ({ row }) => <div className="lowercase">{row.getValue("company_phone")}</div>,
    },
    {
        accessorKey: "company_id",
        header: () => <div className="text-right">Company ID</div>,
        cell: ({ row }) => <div className="lowercase text-right">{row.getValue("company_id")}</div>,
    },
    {
        id: "company_id2",
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
                    <DropdownMenuContent align="start">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(properties.company_business_number)}
                        >
                            Copy Company Business No.
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Company details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

// 3. loader에서 companies 반환
export const loader = async () => {
    const company = await getCompanies();
    return { company }
}

// 4. 컴포넌트에서 사용용
export default function Page({ loaderData }: Route.ComponentProps) {
    const companies = loaderData.company as columnProps[];

    const filterColumns = [
        { key: "company_name", placeholder: "업체명으로 검색..." },
        { key: "company_business_number", placeholder: "사업자번호로 검색..." },
        { key: "company_address", placeholder: "업체주소로 검색..." },
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
                                <h1 className="text-2xl text-violet-700 font-bold">전체 업체관리</h1>
                                <Dialog>
                                    <form>
                                        <DialogTrigger asChild>
                                            <Button className="flex flex-row gap-4 z-10">업체등록</Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>신규 업체 등록</DialogTitle>
                                                <DialogDescription>
                                                    신규 업체를 등록합니다.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4">
                                                <div className="grid gap-3">
                                                    <Label htmlFor="name-1">업체명</Label>
                                                    <Input id="name-1" name="name" placeholder="업체명을 입력해주세요." />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="username-1">주소</Label>
                                                    <Input id="username-1" name="username" placeholder="주소를 입력해주세요." />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="username-1">전화번호</Label>
                                                    <Input id="username-1" name="username" placeholder="010-1234-5678" />
                                                </div>
                                                <div className="grid gap-3">
                                                    <Label htmlFor="username-1">업체 관리자</Label>
                                                    <Input id="username-1" name="username" placeholder="업체 관리자 ID를 검색하세요." />
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
                            {/* 업체 목록 table */}
                            <DataTable data={companies} columns={columns} filterColumns={filterColumns} />

                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
