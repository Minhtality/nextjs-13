import Image from "next/image";

const User = ({ user }) => {
  return (
    <section>
      <h1>{user?.name}</h1>
      <Image src={user?.imageUrl} alt={user?.name} width={200} height={200} />
      <p>{user?.email}</p>
    </section>
  );
};

export default User;
