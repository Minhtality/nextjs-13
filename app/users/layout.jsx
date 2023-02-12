import SideNav from "./sideNav";

const UsersLayout = async ({ children }) => {
  return (
    <section className="flex">
      <aside className="w-1/4">
        <SideNav />
      </aside>
      <main>{children}</main>
    </section>
  );
};

export default UsersLayout;
