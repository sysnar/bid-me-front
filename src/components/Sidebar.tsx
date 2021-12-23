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
      <a href="#" className="block p-4 text-white font-bold">
        BiD-Me
      </a>

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
    <a href="#" className="text-white flex items-center space-x-2 px-4">
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
  );
}

export function SidebarNavigation() {
  return (
    <nav>
      <a
        href=""
        className="block py-2.5 px-4 roouded transition duration-200 hover:bg-blue-600 hover:text-white"
      >
        Home
      </a>
      <a
        href=""
        className="block py-2.5 px-4 roouded transition duration-200 hover:bg-blue-600 hover:text-white"
      >
        About
      </a>
      <a
        href=""
        className="block py-2.5 px-4 roouded transition duration-200 hover:bg-blue-600 hover:text-white"
      >
        Features
      </a>
      <a
        href=""
        className="block py-2.5 px-4 roouded transition duration-200 hover:bg-blue-600 hover:text-white"
      >
        Pricing
      </a>
    </nav>
  );
}
