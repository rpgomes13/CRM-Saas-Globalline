import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/logo/globalline.png",
    name: "Parceiro 01",
    visitors: 20,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/logo/globalline.png",
    name: "Parceiro 02",
    visitors: 10,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/logo/globalline.png",
    name: "Parceiro 03",
    visitors: 12,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/logo/globalline.png",
    name: "Parceiro 04",
    visitors: 40,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  }
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-1.5 pt-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
    <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
      Principais Parceiros
    </h4>
    <div className="flex flex-col">
      <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
        <div className="p-2.5 xl:p-4">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            Parceiro
          </h5>
        </div>
        <div className="p-2.5 text-center xl:p-4">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            Agentes
          </h5>
        </div>
        <div className="p-2.5 text-center xl:p-4">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            Receitas
          </h5>
        </div>
        <div className="hidden p-2.5 text-center sm:block xl:p-4">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
             Ligações
          </h5>
        </div>
        <div className="hidden p-2.5 text-center sm:block xl:p-4">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
             Conversão
          </h5>
        </div>
      </div>
  
      {brandData.map((brand, key) => (
        <div
          className={`grid grid-cols-3 sm:grid-cols-5 ${
            key === brandData.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
          }`}
          key={key}
        >
          <div className="flex items-center gap-3 p-2.5 xl:p-4">
            <div className="flex-shrink-0">
              <Image src={brand.logo} alt="Brand" width={48} height={48} />
            </div>
            <p className="hidden text-black dark:text-white sm:block">
              {brand.name}
            </p>
          </div>
  
          <div className="flex items-center justify-center p-2.5 xl:p-4">
            <p className="text-black dark:text-white">{brand.visitors}</p>
          </div>
  
          <div className="flex items-center justify-center p-2.5 xl:p-4">
            <p className="text-meta-3">R${brand.revenues}</p>
          </div>
  
          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-4">
            <p className="text-black dark:text-white">{brand.sales}</p>
          </div>
  
          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-4">
            <p className="text-meta-5">{brand.conversion}%</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default TableOne;
