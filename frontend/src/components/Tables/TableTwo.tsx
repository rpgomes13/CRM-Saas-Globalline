import Image from "next/image";
import { Product } from "@/types/product";

const productData: Product[] = [
  {
    image: "/images/user/user-02.png",
    name: "Mariya Desoja",
    category: "Empresa 01",
    price: 47,
    sold: 3.5,
    profit: 5,
  },
  {
    image: "/images/user/user-03.png",
    name: "Robert Jhon",
    category: "Empresa 02",
    price: 30,
    sold: 3.9,
    profit: 4,
  },
  {
    image: "/images/user/user-05.png",
    name: "Henry Dholi",
    category: "Empresa 03",
    price: 60,
    sold: 4.9,
    profit: 5,
  },
  {
    image: "/images/user/user-04.png",
    name: "Cody Fisher",
    category: "Empresa 04",
    price: 70,
    sold: 3.8,
    profit: 4,
  },
];

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
    <div className="px-4 py-4 md:px-6 xl:px-7.5">
      <h4 className="text-xl font-semibold text-black dark:text-white">
        Agentes 
      </h4>
    </div>
    <div className="grid grid-cols-6 border-stroke px-4 py-2.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 bg-gray-2 dark:bg-meta-4">
  <div className="col-span-3 flex items-center">
    <p className="font-medium text-sm sm:text-base md:text-lg">Nome</p>
  </div>
  <div className="col-span-2 hidden items-center sm:flex">
    <p className="font-medium text-sm sm:text-base md:text-lg">Empresa</p>
  </div>
  <div className="col-span-1 flex items-center">
  <p className="font-medium text-sm sm:text-base md:text-lg break-all">Total <p>Ligações</p></p>
</div>
  <div className="col-span-1 flex items-center">
    <p className="font-medium text-sm sm:text-base md:text-lg">Nota Média</p>
  </div>
  <div className="col-span-1 flex items-center">
    <p className="font-medium text-sm sm:text-base md:text-lg">Nota Máxima</p>
  </div>
</div>
  
    {productData.map((product, key) => (
      <div
        className="grid grid-cols-6 border-stroke px-4 py-2.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 mb-2"
        key={key}
      >
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <Image
                src={product.image}
                width={60}
                height={50}
                alt="Product"
              />
            </div>
            <p className="text-sm text-black dark:text-white">
              {product.name}
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">
            {product.category}
          </p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">
            {product.price}
          </p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">{product.sold}</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-meta-3">{product.profit}</p>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default TableTwo;
