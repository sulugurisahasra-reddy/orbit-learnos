import MainLayout from "../layouts/MainLayout";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import {
  Plus,
  Trash2,
  TrendingUp,
} from "lucide-react";

function Tracker() {

  const [subjectInput, setSubjectInput] = useState("");

  const [subjects, setSubjects] = useState(
    JSON.parse(localStorage.getItem("orbit_subjects")) || [
      {
        name: "React",
        progress: 25,
      },
    ]
  );

  const [analysisType, setAnalysisType] =
    useState("Weekly");

  useEffect(() => {

    localStorage.setItem(
      "orbit_subjects",
      JSON.stringify(subjects)
    );

  }, [subjects]);

  // ADD SUBJECT

  const addSubject = () => {

    if (subjectInput.trim() === "") return;

    setSubjects([
      ...subjects,
      {
        name: subjectInput,
        progress: 0,
      },
    ]);

    setSubjectInput("");
  };

  // UPDATE PROGRESS

  const updateProgress = (index) => {

    const updated = [...subjects];

    if (updated[index].progress < 100) {

      updated[index].progress += 5;
    }

    if (updated[index].progress > 100) {

      updated[index].progress = 100;
    }

    setSubjects(updated);
  };

  // DELETE SUBJECT

  const deleteSubject = (index) => {

    const updated = [...subjects];

    updated.splice(index, 1);

    setSubjects(updated);
  };

  // DETAILS

  const showDetails = (subject) => {

    alert(
      `${subject.name}\n\nCurrent Progress: ${subject.progress}%`
    );
  };

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

          Learning Progress

        </p>

        <h1 className="text-5xl md:text-7xl xl:text-[88px] leading-[0.92] tracking-[-0.06em] font-black max-w-6xl">

          Track your
          <br />
          growth daily.

        </h1>

      </motion.section>

      {/* ANALYSIS SWITCH */}

      <div className="flex gap-4 mb-8 flex-wrap">

        {["Weekly", "Monthly", "Yearly"].map((item) => (

          <button
            key={item}
            onClick={() => setAnalysisType(item)}
            className={`px-6 py-3 rounded-2xl transition-all duration-300 ${
              analysisType === item
                ? "bg-lime-300 text-black"
                : "bg-[#0d0d0f] border border-white/10"
            }`}
          >

            {item}

          </button>

        ))}

      </div>

      {/* ANALYSIS CARD */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="rounded-[32px] border border-white/10 bg-[#0d0d0f]/90 p-8 mb-8"
      >

        <div className="flex items-center gap-4 mb-6">

          <div className="w-14 h-14 rounded-2xl bg-lime-300 text-black flex items-center justify-center">

            <TrendingUp size={24} />

          </div>

          <div>

            <p className="text-[#7d7d85] text-sm">

              Current Analysis

            </p>

            <h2 className="text-3xl font-black">

              {analysisType} Report

            </h2>

          </div>

        </div>

        <p className="text-[#9d9da4] text-lg leading-relaxed">

          {analysisType === "Weekly" &&
            "Your weekly consistency is improving steadily. Keep maintaining daily progress updates."}

          {analysisType === "Monthly" &&
            "Your monthly learning curve shows strong improvement in productivity and subject completion."}

          {analysisType === "Yearly" &&
            "Your yearly analytics indicate long-term consistency and continuous growth across subjects."}

        </p>

      </motion.div>

      {/* ADD SUBJECT */}

      <div className="rounded-[32px] border border-white/10 bg-[#0d0d0f]/90 p-6 mb-8 flex gap-4 flex-col md:flex-row">

        <input
          type="text"
          placeholder="Enter subject name..."
          value={subjectInput}
          onChange={(e) =>
            setSubjectInput(e.target.value)
          }
          className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
        />

        <button
          onClick={addSubject}
          className="bg-lime-300 text-black px-7 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3"
        >

          <Plus size={20} />

          Add Subject

        </button>

      </div>

      {/* SUBJECTS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

        {subjects.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              y: -8,
            }}
            className="rounded-[32px] border border-white/10 bg-[#0d0d0f]/90 p-8"
          >

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold">

                {item.name}

              </h2>

              <div className="text-2xl font-black text-lime-300">

                {item.progress}%

              </div>

            </div>

            {/* BAR */}

            <div className="h-3 rounded-full bg-white/10 overflow-hidden mb-8">

              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${item.progress}%`,
                }}
                transition={{ duration: 1 }}
                className="h-full bg-lime-300 rounded-full"
              />

            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4">

              <button
                onClick={() =>
                  updateProgress(index)
                }
                className="bg-lime-300 text-black px-6 py-3 rounded-2xl font-semibold"
              >

                +5% Progress

              </button>

              <button
                onClick={() =>
                  showDetails(item)
                }
                className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl"
              >

                Details

              </button>

              <button
                onClick={() =>
                  deleteSubject(index)
                }
                className="bg-red-500/10 border border-red-500/20 text-red-400 px-6 py-3 rounded-2xl flex items-center gap-3"
              >

                <Trash2 size={18} />

                Delete

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </MainLayout>

  );
}

export default Tracker;