
import { signIn } from "@/auth"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button className='p-4 w-1/2 bg-blue-500 text-white rounded-md hover:bg-blue-700' type="submit">Sign in with GitHub</button>
    </form>
  )
} 