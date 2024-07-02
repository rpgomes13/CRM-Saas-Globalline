"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import Providers from "@/components/Providers";
import AppBar from "@/components/AppBar";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ECommerce from "@/components/Dashboard/E-commerce";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
//import { authOptions } from "./api/auth/[...nextauth]/route";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
 // const { data: session, status } = useSession();
  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  //const session = await getServerSession(authOptions);
  //console.log(session, "SESSION")


  // if(status === 'loading'){
  //   return <Loader />
  // }

    // if(!session) {
    //    return (
    //     <Providers>
    //       <AppBar />
    //     </Providers>
    //   )
    // }
 
/*   const session = await getServerSession();
  if(!session) {
    redirect("/login")
  } */
 // console.log(session)
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
          <Providers> 
            {children}
          </Providers> 
      </body>

    </html>
  );
}
