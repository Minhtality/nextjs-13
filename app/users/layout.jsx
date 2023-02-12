import SideNav from "./sideNav";

const UsersLayout = async ({ children }) => {
  return (
    <div>
      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <SideNav />
      </aside>
      <div className="p-4 sm:ml-64">{children}</div>
    </div>
  );
};

export default UsersLayout;
