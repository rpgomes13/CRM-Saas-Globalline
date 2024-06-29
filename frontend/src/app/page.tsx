import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useRouter } from "next/router";

export default function Dashboard() {
 
  return (
    <>
      <DefaultLayout>
        <ECommerce />
       </DefaultLayout>
    </>
  );
}
