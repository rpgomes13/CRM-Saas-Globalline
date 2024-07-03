import { NextAuthOptions} from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"; 
import { AuthOptions } from 'next-auth';

async function refreshToken(token: JWT): Promise<JWT> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        authorization: `Refresh ${token.backendTokens.refreshToken}`,
      },
    });
  
    const response = await res.json();
  
    return {
      ...token,
      backendTokens: response,
    };
  }

export const authOptions: NextAuthOptions = {
    providers:[
     CredentialsProvider({
         name: "Credentials",
         credentials: {
             email: {
                 label: "Email",
                 type: "text",
                 placeholder: "jsmith",
             },
             password: { label: "Password", type: "password"},
         },
         async authorize(credentials, req){
             if (!credentials?.email || !credentials?.password) return null;
             const { email, password } = credentials;
             const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                 { method: "POST",
                   body: JSON.stringify({
                     email,
                     password, 
                 }),
                 headers: {
                      "Content-Type": "application/json",
                 },
             });
             if (res.status == 401) {
                 console.log(res.statusText); 
               return null;
             }
             const user = await res.json();
 
             return user;
         }, 
     }),
    ], 
 
    callbacks: {
     async jwt({ token, user }) {
         if(user) return { ...token, ...user};
         
          if (new Date().getTime() < token.backendTokens.expiresIn)
             return token;
 
         return await refreshToken(token); 
     },
    // secret: process.env.NEXTAUTH_URL,
 
     async session({ token, session }) {
         session.user = token.user; 
         session.backendTokens = token.backendTokens;
         //console.log(session, "SESSION--")
         return session;
     }, 
    }, 
   
 }