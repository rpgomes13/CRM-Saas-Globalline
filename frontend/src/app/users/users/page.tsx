import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Users from "@/components/Users/Users";
import UsersComponent from "@/components/Users/Users";

const UsersPage = () => {
  
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Adicionar Usuários" />
      <Users />
    </DefaultLayout>
    
  );
};

export default UsersPage;
