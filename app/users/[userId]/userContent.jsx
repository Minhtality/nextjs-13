import Image from "next/image";
import Tweet from "./tweet";

const User = ({ user }) => {
  return (
    <div className="p-4 mt-14">
      <div className="flex flex-col items-center justify-center">
        <Image
          className="rounded-full w-100 h-100"
          src={user?.imageUrl}
          alt={user?.name}
          width={200}
          height={200}
        />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-2">
          {user?.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{user?.email}</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-2">
          Tweets
        </h1>
        <ul>
          {user?.tweets?.map((tw) => (
            <Tweet key={tw.id} tweet={tw} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
