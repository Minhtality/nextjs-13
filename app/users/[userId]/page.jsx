import { getUserById, getUsers } from "@/lib/prisma/users";
import UserContent from "./UserContent";

export async function generateStaticParams() {
  const { users } = await getUsers();
  return users.map((user) => ({
    userId: user.id,
  }));
}

const Page = async ({ params }) => {
  const { user } = await getUserById(params.userId);
  return <UserContent user={user} />;
};

export default Page;
