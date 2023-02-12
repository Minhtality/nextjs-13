import { getUserById } from "@/lib/prisma/users";
import UserContent from "./userContent";

const Page = async ({ params }) => {
  const { user } = await getUserById(params.userId);
  return <UserContent user={user} />;
};

export default Page;
