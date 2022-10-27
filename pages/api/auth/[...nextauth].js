import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: '/auth',
    signOut: '/auth'
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.role = user.role; // Add role value to user object so it is passed along with session
      session.user.canbedeleted = user.canbedeleted;
      session.user.joined = user.joined;
      return session;
    },
  },
})