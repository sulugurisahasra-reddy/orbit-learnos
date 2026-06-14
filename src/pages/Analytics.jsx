import MainLayout from "../layouts/MainLayout";

import { motion } from "framer-motion";

function Analytics() {

  const subjects =
    JSON.parse(localStorage.getItem("orbit_subjects")) || [];

  return (

    <MainLayout>

      {/* HERO */}

      <motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-14"
      >

        <p className="uppercase tracking-[0.25em] text-[#7d7d85] text-xs mb-5">

          Analytics Overview

        </p>

        <h1 className="text-5xl md:text-7xl xl:text-[88px] leading-[0.92] tracking-[-0.06em] font-black max-w-6xl">

          Visualize your
          <br />
          consistency.

        </h1>

      </motion.section>

      {/* SUBJECT CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">

        {subjects.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 + index * 0.12 }}
            whileHover={{
              y: -8,
            }}
            className="rounded-[32px] border border-white/10 bg-[#0d0d0f]/90 p-8"
          >

            <p className="uppercase tracking-[0.2em] text-xs text-[#7d7d85] mb-6">

              Subject

            </p>

            <h2 className="text-3xl font-black mb-8">

              {item.name}

            </h2>

            <div className="h-3 rounded-full bg-white/10 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${item.progress}%`,
                }}
                transition={{ duration: 1 }}
                className="h-full bg-lime-300 rounded-full"
              />

            </div>

            <p className="mt-5 text-lime-300 font-bold text-xl">

              {item.progress}%

            </p>

          </motion.div>

        ))}

      </div>

      {/* GRAPH */}

      {subjects.length > 0 ? (

        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="rounded-[36px] border border-white/10 bg-[#0d0d0f]/90 p-10"
        >

          <div className="flex items-end justify-between gap-6 h-[420px]">

            {subjects.map((item, index) => (

              <div
                key={index}
                className="flex-1 flex flex-col items-center justify-end h-full"
              >

                {/* VALUE */}

                <p className="mb-4 text-lime-300 font-bold">

                  {item.progress}%

                </p>

                {/* BAR */}

                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: `${item.progress}%`,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="w-full max-w-[90px] bg-lime-300 rounded-t-[24px] shadow-[0_0_40px_rgba(163,230,53,0.35)]"
                />

                {/* LABEL */}

                <p className="mt-5 text-sm md:text-base font-medium text-center">

                  {item.name}

                </p>

              </div>

            ))}

          </div>

        </motion.div>

      ) : (

        <div className="rounded-[32px] border border-dashed border-white/10 p-14 text-center text-[#7d7d85]">

          No subjects added yet.

        </div>

      )}

    </MainLayout>

  );
}

export default Analytics;