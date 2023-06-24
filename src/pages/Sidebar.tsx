import { ImProfile } from "react-icons/im";
import { MdDashboardCustomize } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

import { MdSchool } from "react-icons/md";
const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/" || "/dashboard",
      icon: <MdDashboardCustomize />,
    },
    {
      id: "district",
      label: "District Schools",
      path: "/dashboard/district",
      icon: <ImProfile />,
    },
    {
      id: "marks",
      label: "School",
      path: "//dashboard/marks",
      icon: <MdSchool />,
    },
  ];

  return (
    <div className="w-64 fixed top-14 left-0 z-40">
      <aside
        id="logo-sidebar"
        className={`h-screen transition-transform py-4  bg-white border-r border-gray-200 sm:translate-x-0 `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            {navItems.map((navItem) => (
              <li key={navItem.id}>
                <Link
                  to={navItem.path}
                  className={`${
                    location.pathname === navItem.path ? "bg-indigo-100" : ""
                  } flex items-center p-2 text-indigo-500 rounded-lg dark:text-indigo hover:bg-indigo-100 dark:hover:bg-stale-200`}
                >
                  {navItem.icon}
                  <span className="ml-3">{navItem.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
