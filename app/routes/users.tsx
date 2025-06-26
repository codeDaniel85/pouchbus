import { AppSidebar } from "~/common/components/sidebar/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/common/components/ui/breadcrumb"
import { Separator } from "~/common/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/common/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/common/components/ui/table"
import { Button } from "~/common/components/ui/button"
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
import { Input } from "~/common/components/ui/input"
import { Label } from "~/common/components/ui/label"

export default function Page() {
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
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div> */}
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
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Address</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>john.doe@example.com</TableCell>
                    <TableCell>1234567890</TableCell>
                    <TableCell>1234567890</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Doe</TableCell>
                    <TableCell>jane.doe@example.com</TableCell>
                    <TableCell>1234567890</TableCell>
                    <TableCell>1234567890</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
