import { authOptions } from "@/app/utils/authOptions";
import { NextAuthOptions} from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"; 



const handler = NextAuth(authOptions) as never;

export { handler as GET, handler as POST }; 
