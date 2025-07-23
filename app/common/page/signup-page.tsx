import { BusIcon } from "lucide-react"

import { SignupForm } from "~/common/components/form/signup-form"
import type { Route } from "./+types/signup-page"
import { makeSSRClient } from "../../supabase-client"
import { redirect } from "react-router"
import { z } from "zod"
import { getEmailExists } from "~/common/queries"

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
      emailRedirectTo: `${new URL(request.url).origin}/auth/callback`,
    }
  })
  if (signUpError) {
    console.log("Sign up error:", signUpError);
    return { signUpError: signUpError.message, formErrors: null }
  } else {
    console.log("Sign up success");
    return redirect("/", { headers })
  }
}

export default function SignupPage({ actionData }: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10" >
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <BusIcon className="size-4" />
          </div>
          Pouch Bus
        </a>
        <SignupForm actionData={actionData} />
      </div>
    </div >
  )
}
