import MainLayout from "../layouts/MainLayout";

import { motion } from "framer-motion";

import {
  Moon,
  Bell,
  Shield,
  Palette,
  Laptop,
  Sparkles,
} from "lucide-react";

import { useEffect, useState } from "react";

function Settings() {

  const [name, setName] = useState(
    localStorage.getItem("orbit_name") || ""
  );

  const [goal, setGoal] = useState(
    localStorage.getItem("orbit_goal") || ""
  );

  useEffect(() => {

    localStorage.setItem("orbit_name", name);

    localStorage.setItem("orbit_goal", goal);

  }, [name, goal]);

  const [darkMode, setDarkMode] = useState(true);

  const [notifications, setNotifications] = useState(true);

  const [focusMode, setFocusMode] = useState(false);

  const [aiMode, setAiMode] = useState(true);

  const [privacy, setPrivacy] = useState(true);

  const [sync, setSync] = useState(false);

  const settings = [
    {
      title: "Appearance",
      description: "Toggle between dark and light mode.",
      icon: <Palette size={20} />,
      state: darkMode,
      action: () => setDarkMode(!darkMode),
    },

    {
      title: "Notifications",
      description: "Enable productivity reminders.",
      icon: <Bell size={20} />,
      state: notifications,
      action: () => setNotifications(!notifications),
    },

    {
      title: "Device Sync",
      description: "Sync your workspace across devices.",
      icon: <Laptop size={20} />,
      state: sync,
      action: () => setSync(!sync),
    },

    {
      title: "Privacy",
      description: "Secure your learning workspace.",
      icon: <Shield size={20} />,
      state: privacy,
      action: () => setPrivacy(!privacy),
    },

    {
      title: "Focus Mode",
      description: "Reduce distractions while studying.",
      icon: <Moon size={20} />,
      state: focusMode,
      action: () => setFocusMode(!focusMode),
    },

    {
      title: "AI Assistant",
      description: "Enable smart productivity insights.",
      icon: <Sparkles size={20} />,
      state: aiMode,
      action: () => setAiMode(!aiMode),
    },
  ];

  return (

    <MainLayout>

      <motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-14"
      >

        <p className="uppercase tracking-[0.25em] text-[#7d7d85] text-xs mb-5">

          Interactive Settings

        </p>

        <h1 className="text-5xl md:text-7xl xl:text-[88px] leading-[0.92] tracking-[-0.06em] font-black max-w-6xl">

          Customize your
          <br />
          workspace.

        </h1>

      </motion.section>

      {/* USER */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="rounded-[32px] border border-white/10 bg-[#0d0d0f]/90 p-8 mb-8"
      >

        <h2 className="text-3xl font-black mb-8">

          User Details

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="text"
            placeholder="Enter your goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

        </div>

      </motion.div>

      {/* SETTINGS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

        {settings.map((item, index) => (

          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 + index * 0.12 }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className={`rounded-[32px] border p-8 transition-all duration-500 ${
              item.state
                ? "border-lime-300/30 bg-[#111214]"
                : "border-white/10 bg-[#0d0d0f]"
            }`}
          >

            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                item.state
                  ? "bg-lime-300 text-black"
                  : "bg-white/5 text-white"
              }`}
            >

              {item.icon}

            </div>

            <h2 className="text-2xl font-bold mb-4">

              {item.title}

            </h2>

            <p className="text-[#8d8d95] leading-relaxed text-sm md:text-base mb-8">

              {item.description}

            </p>

            <button
              onClick={item.action}
              className={`relative w-[90px] h-[44px] rounded-full transition-all duration-500 ${
                item.state
                  ? "bg-lime-300"
                  : "bg-white/10"
              }`}
            >

              <motion.div
                layout
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                className={`absolute top-[5px] w-[34px] h-[34px] rounded-full ${
                  item.state
                    ? "bg-black right-[5px]"
                    : "bg-white left-[5px]"
                }`}
              />

            </button>

          </motion.div>

        ))}

      </div>

    </MainLayout>

  );
}

export default Settings;