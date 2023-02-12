import SideNav from "./sideNav";

const UsersLayout = async ({ children }) => {
  return (
    <div className="flex">
      <aside id="default-sidebar" className="bg-gray-50 z-40 w-64 h-screen transition-transform" aria-label="Sidebar">
        <SideNav />
      </aside>
      <div>{children}</div>
    </div>
  );
};

export default UsersLayout;
