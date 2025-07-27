import { BusIcon, CheckCircle2Icon } from "lucide-react"

import { SignupForm } from "~/common/components/form/signup-form"
import type { Route } from "./+types/signup-page"
import { makeSSRClient } from "../../supabase-client"
import { useNavigate } from "react-router"
import { z } from "zod"
import { getEmailExists } from "~/common/queries"
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert"
import { useErrorMessage } from "../../hooks/use-error-message"
import { ErrorAlert } from "../components/ui/error-alert"

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  userName: z.string().min(1),
  phoneNumber: z.string().min(1),
})

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const userName = formData.get("userName");
  const phoneNumber = formData.get("phoneNumber");

  const { success, error, data } = formSchema.safeParse(Object.fromEntries(formData));

  if (!success) {
    return { formErrors: error.flatten().fieldErrors, signUpError: null }
  }

  const isEmailExists = await getEmailExists(request, { email: data.email })
  if (isEmailExists) {
    return { formErrors: { email: ["Email already exists"] }, signUpError: null }
  }

  const { client, headers } = makeSSRClient(request)
  const { error: signUpError } = await client.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        user_name: data.userName,
        phone_number: data.phoneNumber,
      },
      emailRedirectTo: `${new URL(request.url).origin}/welcome-page?email=${data.email}&name=${data.userName}`,
    }
  })
  if (signUpError) {
    console.log("Sign up error:", signUpError);
    return { signUpError: signUpError.message, formErrors: null }
  } else {
    console.log("Sign up success");
    return { signUpError: null, formErrors: null, success: true }
  }

}

export default function SignupPage({ actionData }: Route.ComponentProps) {
  const navigate = useNavigate();
  const { errorMessage, showError, clearError } = useErrorMessage();

  // 성공 상태일 때 Alert 표시 후 redirect
  if (actionData?.success) {
    setTimeout(() => {
      navigate("/");
    }, 3000); // 3초 후 redirect

    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
        <Alert className="max-w-sm">
          <CheckCircle2Icon className="h-4 w-4" />
          <AlertTitle>회원가입 성공!</AlertTitle>
          <AlertDescription>
            이메일을 확인하여 인증을 완료해주세요. 3초 후 홈페이지로 이동합니다.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10" >
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <BusIcon className="size-4" />
          </div>
          Pouch Bus
        </a>
        <ErrorAlert message={errorMessage} />
        <SignupForm actionData={actionData} />
      </div>
    </div >
  )
}
