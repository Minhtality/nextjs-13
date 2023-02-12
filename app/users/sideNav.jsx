import { getUsers } from "@/lib/prisma/users";
import Link from "next/link";

const Users = async () => {
  const { users } = await getUsers();
  return (
    <>
      <h1>users</h1>
      {users?.map((user) => (
        <Link
          key={user.id}
          href={`/users/${user.id}`}
          className="text-sm font-medium uppercase text-gray-500 hover:text-gray-900"
        >
          {user.name}
        </Link>
      ))}
    </>
  );
};

export default Users;
