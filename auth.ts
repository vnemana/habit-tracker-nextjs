import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt";
import Facebook from "next-auth/providers/facebook";
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

// Extend the JWT type to include the custom id field
interface CustomJWT extends JWT {
  id?: string;
  provider?: string;
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Google, Facebook, GitHub],
  callbacks: {
    jwt({ token, account, profile }) {
      if (account && profile) {
        token.id = (profile.sub) ? profile.sub : ""+profile.id;
        token.provider = account.provider;
      }
      return token
    },
    session({session, token}) {
      return { ...session,
        user: { ...session.user,
          id: (token as CustomJWT).id,
          provider: token.provider,
        }
      }
    }
  },
})