import Image from 'next/image';

const User = ({ user }) => {
	return (
		<div>
			<h1>{user?.name}</h1>
			<Image className="rounded-full w-100 h-100" src={user?.imageUrl} alt={user?.name} width={200} height={200} />
			<p>{user?.email}</p>
		</div>
	);
};

export default User;
