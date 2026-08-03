import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";

export default {
  providers: [GitHub],
  pages: { signIn: "/login" },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const protectedRoute = nextUrl.pathname.startsWith("/dashboard") || nextUrl.pathname.startsWith("/settings");
      return protectedRoute ? Boolean(auth?.user) : true;
    },
  },
} satisfies NextAuthConfig;
