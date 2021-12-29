import { Link } from "react-router-dom";
import { WrapperProps } from "../utils/wrapper.interface";

export function SidebarWrapper({ children }: WrapperProps) {
  return <div className="relative min-h-screen md:flex">{children}</div>;
}

export function MobileMenu(props: any) {
  const { setSidebar } = props;
  const toggleSidebar = () => {
    setSidebar((isOpen: any) => !isOpen);
  };

  return (
    <div className="bg-sidebar text-gray-100 flex justify-between md:hidden">
      {/* logo */}
      <Link to="/office">
        <a className="block p-4 text-white font-bold">BiD-Me</a>
      </Link>

      {/* mobile menu button */}
      <button
        className="p-4 focus:outline-none focus:bg-gray-700"
        onClick={() => toggleSidebar()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}

export function DesktopWrapper(props: any) {
  const { isOpen, children } = props;
  return (
    <div
      className={
        "bg-sidebar text-gray-100 w-64 space-y-6 pl-2 py-7 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out " +
        (isOpen ? "-translate-x-full" : "")
      }
    >
      {children}
    </div>
  );
}

export function SidebarLogo() {
  return (
    <Link to="/office">
      <a className="text-white flex items-center space-x-2 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="text-2xl font-extrabold">BiD-ME</span>
      </a>
    </Link>
  );
}

export function SidebarNavigation() {
  return (
    <nav>
      <Link to="/office">
        <a className="block py-2.5 px-4 roouded transition duration-200 hover:bg-blue-600 hover:text-white">
          메인
        </a>
      </Link>
      <Link to="/office">
        <a className="block py-2.5 px-4 roouded transition duration-200 hover:bg-blue-600 hover:text-white">
          키워드 관리
        </a>
      </Link>
      <Link to="/office">
        <a className="block py-2.5 px-4 roouded transition duration-200 hover:bg-blue-600 hover:text-white">
          북마크 관리
        </a>
      </Link>
      <Link to="/office">
        <a className="block py-2.5 px-4 roouded transition duration-200 hover:bg-blue-600 hover:text-white">
          회원정보 관리
        </a>
      </Link>
    </nav>
  );
}
