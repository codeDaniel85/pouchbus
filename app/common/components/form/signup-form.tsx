import { cn } from "~/lib/utils"
import { Button } from "~/common/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card"
import { Input } from "~/common/components/ui/input"
import { Label } from "~/common/components/ui/label"
import { ShineBorder } from "~/common/components/ui/shine-border"
import { BorderBeam } from "../ui/border-beam"

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="relative overflow-hidden">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            아래 정보들을 입력하여 회원가입을 진행해주세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="pouch@gmail.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="이름을 입력해주세요."
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="text"
                    placeholder="010-1234-5678"
                    required
                  />
                </div>

              </div>
              <Button type="submit" className="w-full">
                Sign up
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="/login-page" className="underline underline-offset-4">
                  Login
                </a>
              </div>
            </div>
          </form>
        </CardContent>
        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-violet-700 to-transparent"
        />
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
