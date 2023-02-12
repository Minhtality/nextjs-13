import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-stone-100 py-12">
      <nav className="center">
        <ul className="flex justify-center gap-8">
          <li>
            <Link
              href="/"
              className="text-sm font-medium uppercase text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-sm font-medium uppercase text-gray-500 hover:text-gray-900"
              href="/users"
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
