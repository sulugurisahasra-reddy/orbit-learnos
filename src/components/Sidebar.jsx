import {
  LayoutDashboard,
  BookOpen,
  CheckSquare,
  BarChart3,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={18} />,
  },

  {
    name: "Tracker",
    path: "/tracker",
    icon: <BookOpen size={18} />,
  },

  {
    name: "Tasks",
    path: "/tasks",
    icon: <CheckSquare size={18} />,
  },

  {
    name: "Analytics",
    path: "/analytics",
    icon: <BarChart3 size={18} />,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: <Settings size={18} />,
  },
];

function Sidebar() {

  return (

    <aside className="w-[260px] min-h-screen border-r border-white/10 bg-[#050505] p-6 hidden md:flex flex-col justify-between">

      <div>

        {/* LOGO */}

        <div className="mb-14">

          <h1 className="text-4xl font-black tracking-[-0.08em] leading-none">

            Orbit
            <br />
            LearnOS

          </h1>

        </div>

        {/* NAV */}

        <div className="flex flex-col gap-4">

          {links.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 border ${
                  isActive
                    ? "bg-lime-300 text-black border-lime-300"
                    : "bg-[#0b0b0b] border-white/5 hover:border-lime-300 hover:bg-lime-300 hover:text-black"
                }`
              }
            >

              {item.icon}

              <span className="font-medium">

                {item.name}

              </span>

            </NavLink>

          ))}

        </div>

      </div>

      {/* PROFILE */}

      <div className="mt-10 rounded-[28px] border border-white/10 bg-[#0d0d0f] p-5">

        <p className="text-sm text-[#7d7d85] mb-2">

          Logged In As

        </p>

        <h2 className="text-xl font-bold break-words">

          {localStorage.getItem("orbit_name") || "Orbit User"}

        </h2>

      </div>

    </aside>

  );
}

export default Sidebar;