import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { authOptions } from "./options";
import { env } from "@/lib/env";

if (!env.GITHUB_ID || !env.GITHUB_SECRET) {
  throw new Error("Missing env variables GITHUB_CLIENT_ID and GITHUB_SECRET");
}

const handler: AuthOptions = NextAuth(authOptions);
export { handler as GET, handler as POST };
