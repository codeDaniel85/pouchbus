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
                  <BreadcrumbPage>Company</BreadcrumbPage>
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
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>업체명</TableHead>
                    <TableHead>주소</TableHead>
                    <TableHead>전화번호</TableHead>
                    <TableHead>업체 관리자</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Nomad Coders</TableCell>
                    <TableCell>서울특별시 강남구 역삼동</TableCell>
                    <TableCell>010-1234-5678</TableCell>
                    <TableCell>Bora</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>파우치버스</TableCell>
                    <TableCell>대전광역시 유성구 대전대로</TableCell>
                    <TableCell>010-1234-5678</TableCell>
                    <TableCell>다니엘</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>삼성전자</TableCell>
                    <TableCell>서울특별시 강남구 역삼동</TableCell>
                    <TableCell>010-1234-5678</TableCell>
                    <TableCell>조*호</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>네이버</TableCell>
                    <TableCell>경기도 성남시 분당구 정자동</TableCell>
                    <TableCell>010-1234-5678</TableCell>
                    <TableCell>이*준</TableCell>
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
