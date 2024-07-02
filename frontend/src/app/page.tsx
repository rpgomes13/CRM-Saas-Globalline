import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { getServerSession } from "next-auth";
//import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AppBar from "@/components/AppBar";
import { authOptions } from "./utils/authOptions";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default async function Home() {
   const session = await getServerSession(authOptions);
   if (!session) {
   /* return (
      <>
      <AppBar />
      </>
    ) */  
    redirect('/auth/signin');
  }
  return (
    <>
      {/* <DefaultLayout>
        <ECommerce />
      </DefaultLayout> */}
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
