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
import { Form, useNavigation } from "react-router"
import type { Route } from "../../page/+types/signup-page"
import { LoaderCircle } from "lucide-react"
import { useErrorMessage } from "../../../hooks/use-error-message"
import { ErrorAlert } from "../ui/error-alert"

export function SignupForm({
  actionData,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { actionData: Route.ComponentProps["actionData"] }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting" || navigation.state === "loading";
  const { errorMessage, showError, clearError, validateRequired, validateEmail, validatePassword, validatePhoneNumber } = useErrorMessage();
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
          <Form method="post">
            <div className="grid gap-6">
              <ErrorAlert message={errorMessage} />
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="pouch@gmail.com"
                    required
                  />
                </div>
                {actionData && "formErrors" in actionData && actionData?.formErrors?.email && (
                  <p className="text-red-500 text-sm">{actionData.formErrors.email}</p>
                )}
                {actionData && "signUpError" in actionData && actionData?.signUpError && (
                  <p className="text-red-500 text-sm">{actionData.signUpError}</p>
                )}
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
                {actionData && "formErrors" in actionData && (
                  <p className="text-red-500">{actionData?.formErrors?.password}</p>
                )}
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="userName">Name</Label>
                  <Input
                    name="userName"
                    id="userName"
                    type="text"
                    placeholder="이름을 입력해주세요."
                    required
                  />
                </div>
                {actionData && "formErrors" in actionData && (
                  <p className="text-red-500">{actionData?.formErrors?.userName}</p>
                )}
                <div className="grid gap-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    name="phoneNumber"
                    id="phoneNumber"
                    type="text"
                    placeholder="010-1234-5678"
                    required
                  />
                </div>
                {actionData && "formErrors" in actionData && (
                  <p className="text-red-500">{actionData?.formErrors?.phoneNumber}</p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? <LoaderCircle className="size-4 animate-spin" /> : "Sign Up"}
              </Button>
              <div className="text-center text-sm">
                이미 Pouch Bus 회원이신가요?{" "}
                <a href="/login-page" className="underline underline-offset-4">
                  Login
                </a>
              </div>
            </div>
          </Form>
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
