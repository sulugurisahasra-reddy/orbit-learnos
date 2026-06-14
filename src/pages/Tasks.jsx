import MainLayout from "../layouts/MainLayout";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import {
  Plus,
  Trash2,
  CheckCircle2,
} from "lucide-react";

function Tasks() {

  const [taskInput, setTaskInput] = useState("");

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("orbit_tasks")) || [
      {
        text: "Build React Dashboard UI",
        completed: false,
      },
    ]
  );

  useEffect(() => {

    localStorage.setItem(
      "orbit_tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);

  const addTask = () => {

    if (taskInput.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: taskInput,
        completed: false,
      },
    ]);

    setTaskInput("");
  };

  const deleteTask = (index) => {

    const updated = [...tasks];

    updated.splice(index, 1);

    setTasks(updated);
  };

  const toggleTask = (index) => {

    const updated = [...tasks];

    updated[index].completed =
      !updated[index].completed;

    setTasks(updated);
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

          Productivity Tasks

        </p>

        <h1 className="text-5xl md:text-7xl xl:text-[88px] leading-[0.92] tracking-[-0.06em] font-black max-w-6xl">

          Organize your
          <br />
          workflow.

        </h1>

      </motion.section>

      {/* INPUT */}

      <div className="rounded-[32px] border border-white/10 bg-[#0d0d0f]/90 p-6 mb-8 flex gap-4 flex-col md:flex-row">

        <input
          type="text"
          placeholder="Enter task..."
          value={taskInput}
          onChange={(e) =>
            setTaskInput(e.target.value)
          }
          className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
        />

        <button
          onClick={addTask}
          className="bg-lime-300 text-black px-7 py-4 rounded-2xl font-semibold flex items-center gap-3 justify-center"
        >

          <Plus size={20} />

          Add Task

        </button>

      </div>

      {/* TASKS */}

      <div className="space-y-6">

        {tasks.length === 0 ? (

          <div className="rounded-[32px] border border-dashed border-white/10 p-12 text-center text-[#7d7d85]">

            No tasks added yet.

          </div>

        ) : (

          tasks.map((task, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{
                scale: 1.01,
                x: 8,
              }}
              className={`rounded-[32px] border p-7 flex items-center justify-between transition-all duration-500 ${
                task.completed
                  ? "border-lime-300/30 bg-[#111214]"
                  : "border-white/10 bg-[#0d0d0f]/90"
              }`}
            >

              <div className="flex items-center gap-5">

                <button
                  onClick={() =>
                    toggleTask(index)
                  }
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    task.completed
                      ? "bg-lime-300 text-black"
                      : "bg-white/5"
                  }`}
                >

                  <CheckCircle2 size={22} />

                </button>

                <div>

                  <h2
                    className={`text-lg md:text-2xl font-semibold ${
                      task.completed
                        ? "line-through text-[#7d7d85]"
                        : ""
                    }`}
                  >

                    {task.text}

                  </h2>

                  <p className="text-sm text-[#7d7d85] mt-2">

                    {task.completed
                      ? "Completed"
                      : "Pending"}

                  </p>

                </div>

              </div>

              <button
                onClick={() =>
                  deleteTask(index)
                }
                className="bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-3 rounded-2xl flex items-center gap-3"
              >

                <Trash2 size={18} />

                Delete

              </button>

            </motion.div>

          ))

        )}

      </div>

    </MainLayout>

  );
}

export default Tasks;