import Agentes from "@/components/Agentes/Agentes";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Users from "@/components/Users/Users";
import UsersComponent from "@/components/Users/Users";

const AgentesPage = () => {
  
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Adicionar Agentes" />
      <Agentes />
    </DefaultLayout>
    
  );
};

export default AgentesPage;
