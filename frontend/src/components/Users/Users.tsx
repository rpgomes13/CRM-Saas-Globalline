import Image from "next/image"
import Link from "next/link"

const Users: React.FC = () => {
    const users = [
        {
            id: "1",
            img: "/images/user/user-05.png",
            username: "John Doe",
            email: "john.doe@example.com",
            created: new Date("2023-01-15"),
            isAdmin: true,
            isActive: true,
          },
          {
            id: "2",
            img: "/images/user/user-04.png",
            username: "Jane Smith",
            email: "jane.smith@example.com",
            created: new Date("2023-02-20"),
            isAdmin: false,
            isActive: true,
          },
          {
            id: "3",
            img: "/images/user/user-01.png",
            username: "Bob Johnson",
            email: "bob.johnson@example.com",
            created: new Date("2023-03-25"),
            isAdmin: false,
            isActive: false,
          },
          {
            id: "4",
            img: "/images/user/user-02.png", // No image available
            username: "Alice Brown",
            email: "alice.brown@example.com",
            created: new Date("2023-04-10"),
            isAdmin: true,
            isActive: true,
          },
          {
            id: "5",
            img: "/images/user/user-03.png",
            username: "Charlie Green",
            email: "charlie.green@example.com",
            created: new Date("2023-05-05"),
            isAdmin: false,
            isActive: false,
          }  
     ]

     const deleteUser = () => {
        console.log("delete user")
     }
return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
     <div className="flex items-center justify-between gap-3 sm:flex-nowrap">
      <div className="flex items-center gap-3 sm:gap-5">
        <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
          <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
        </span>
        <div className="w-full">
          <p className="font-semibold text-primary">Gerenciamento de usuários</p>
          <p className="text-sm font-medium">Adicionar, visualizar e excluir usuários</p>
        </div>
      </div>
      <div className="flex justify-end">
        <Link href="/dashboard/users/add">
          <button className="px-2 py-2 bg-[#5d57c9] text-white rounded cursor-pointer shadow-card hover:bg-indigo-700">
            Add User
          </button>
        </Link>
      </div>
    </div>
        <div className="overflow-x-auto overflow-y-auto max-h-80 mt-5">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <td className="p-2">Nome</td>
                <td className="p-2">Email</td>
                <td className="p-2">Criado</td>
                <td className="p-2">Role</td>
                <td className="p-2">Status</td>
                <td className="p-2">Ação</td>
              </tr>
            </thead>
            <tbody>
              {users.slice(0, 4).map((user) => (
                <tr key={user.id}>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={user.img || "/noavatar.png"}
                        alt=""
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      {user.username}
                    </div>
                  </td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2 text-sm">{user.created.toDateString().slice(4, 16)}</td>
                  <td className="p-2">{user.isAdmin ? "Admin" : "Client"}</td>
                  <td className="p-2">{user.isActive ? "active" : "passive"}</td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <Link href={`/dashboard/users/${user.id}`}>
                        <button className="p-1.5 bg-teal-500 text-white rounded cursor-pointer">
                        Visualizar
                        </button>
                      </Link>
                      <form> 
                        <input type="hidden" name="id" value={user.id} />
                        <button className="p-1.5 bg-red text-white rounded cursor-pointer">
                        Excluir
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <Pagination count={count} /> */}
      </div>
    )
}

export default Users