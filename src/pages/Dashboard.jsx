import MainLayout from "../layouts/MainLayout";

import { motion } from "framer-motion";

function Dashboard() {

  const userName =
    localStorage.getItem("orbit_name") || "Build your";

  const userGoal =
    localStorage.getItem("orbit_goal") ||
    "Build a frontend portfolio.";

  const continueLearning = () => {

    window.location.href = "/tracker";
  };

  return (

    <MainLayout>

      <div className="relative overflow-hidden">

        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-lime-300/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[180px] rounded-full"></div>

        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mb-14"
        >

          <p className="uppercase tracking-[0.25em] text-[#7d7d85] text-xs mb-5">

            Orbit LearnOS Platform

          </p>

          <h1 className="text-5xl md:text-7xl xl:text-[88px] leading-[0.92] tracking-[-0.06em] font-black max-w-6xl">

            {userName}
            <br />
            learning system.

          </h1>

        </motion.section>

        <section className="relative z-10 grid grid-cols-1 xl:grid-cols-[1.7fr_0.8fr] gap-7">

          <div className="space-y-7">

            <motion.div
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              whileHover={{
                scale: 1.01,
                y: -5,
              }}
              className="rounded-[36px] border border-white/10 bg-[#0d0d0f]/90 backdrop-blur-xl min-h-[360px] p-8 md:p-12 flex flex-col justify-between"
            >

              <div>

                <p className="uppercase tracking-[0.2em] text-xs text-[#9d9da4] mb-6">

                  Current Streak

                </p>

                <h2 className="text-5xl md:text-7xl font-black">

                  7 Days

                </h2>

              </div>

              <div className="flex items-end justify-between">

                <div>

                  <p className="text-[#7d7d85] mb-2 text-sm">
                    Consistency Score
                  </p>

                  <h3 className="text-4xl font-bold">
                    92%
                  </h3>

                </div>

                <motion.button
                  whileHover={{
                    scale: 1.06,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={continueLearning}
                  className="bg-lime-300 text-black px-7 py-4 rounded-2xl font-semibold"
                >

                  Continue

                </motion.button>

              </div>

            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

              <div className="rounded-[32px] bg-lime-300 text-black p-7 min-h-[260px]">

                <p className="uppercase tracking-[0.2em] text-xs mb-5 font-semibold">

                  Current Goal

                </p>

                <h2 className="text-3xl md:text-4xl font-black leading-tight">

                  {userGoal}

                </h2>

              </div>

              <div className="rounded-[32px] border border-white/10 bg-[#111214]/90 p-7 min-h-[260px]">

                <p className="uppercase tracking-[0.2em] text-xs text-[#7d7d85] mb-5">

                  Daily Motivation

                </p>

                <h2 className="text-2xl md:text-3xl font-black leading-tight">

                  Small progress compounds into mastery.

                </h2>

              </div>

            </div>

          </div>

          <div className="space-y-7">

            <div className="rounded-[32px] border border-white/10 bg-[#0d0d0f]/90 p-8">

              <p className="uppercase tracking-[0.2em] text-xs text-[#7d7d85] mb-7">

                Study Hours

              </p>

              <h2 className="text-5xl md:text-6xl font-black">

                128h

              </h2>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#0d0d0f]/90 p-8">

              <p className="uppercase tracking-[0.2em] text-xs text-[#7d7d85] mb-7">

                Courses

              </p>

              <h2 className="text-5xl md:text-6xl font-black">

                12

              </h2>

            </div>

          </div>

        </section>

      </div>

    </MainLayout>

  );
}

export default Dashboard;