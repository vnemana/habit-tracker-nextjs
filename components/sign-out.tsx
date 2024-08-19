import { signOut } from "@/auth"
import { Button } from "./ui/button"
 
export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
    <Button {...props}>Sign Out</Button>
    </form>
  )
}