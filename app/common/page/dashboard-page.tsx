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
import { Card, CardContent } from "~/common/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/common/components/ui/carousel"

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
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
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
                <h1 className="text-2xl text-violet-700 font-bold">Dashboard</h1>
                {/* <Dialog>
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
                </Dialog> */}
              </div>
              {/* <Table>
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
              </Table> */}
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                h1 : Title
              </h1>
              <p className="text-muted-foreground text-xl">
                p (text-muted-foreground text-xl): Description
              </p>

              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 pt-4">
                h2 : Title
              </h2>
              <p className="leading-7">
                p : Description
              </p>
              <blockquote className="border-l-2 pl-6 italic">
                &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
                it&apos;s only fair that they should pay for the privilege.&quot;
              </blockquote>

              <div className="my-6 w-full overflow-y-auto p-4">
                <table className="w-full">
                  <thead>
                    <tr className="even:bg-muted m-0 border-t p-0">
                      <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        King's Treasury
                      </th>
                      <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        People's happiness
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="even:bg-muted m-0 border-t p-0">
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Empty
                      </td>
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Overflowing
                      </td>
                    </tr>
                    <tr className="even:bg-muted m-0 border-t p-0">
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Modest
                      </td>
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Satisfied
                      </td>
                    </tr>
                    <tr className="even:bg-muted m-0 border-t p-0">
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Full
                      </td>
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Ecstatic
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-sm"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider >
  )
}
