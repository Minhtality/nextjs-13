import Image from 'next/image';

const User = ({ user }) => {
	return (
		// <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
		// 	<h1>{user?.name}</h1>
		// 	<Image className="rounded-full w-100 h-100" src={user?.imageUrl} alt={user?.name} width={200} height={200} />
		// 	<p>{user?.email}</p>
		// </div>
			<div className="p-4 rounded-lg mt-14">
				<div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
					<p className="text-2xl text-gray-400 dark:text-gray-500">Hello</p>
				</div>
				<div className="grid grid-cols-2 gap-4 mb-4">
					<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
				</div>
				<div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
					<p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
					<div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
						<p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
					</div>
				</div>
			</div>
	);
};

export default User;
