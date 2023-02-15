import { getUsers } from "@/lib/prisma/users";
import Link from "next/link";

const Users = async () => {
  const { users } = await getUsers();
  return (
    <>
      <h1 className="text-2xl text-center font-bold text-gray-800 dark:text-gray-200 mt-2">
        users
      </h1>
      {users?.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-4 cursor-pointer border-gray-200 border rounded-lg dark:border-gray-700 mt-5"
        >
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="text-sm font-medium uppercase text-gray-500 hover:text-gray-900"
          >
            {user.name}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Users;
