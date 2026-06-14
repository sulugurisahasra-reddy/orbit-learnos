import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {

  // USER INFO

  const [name, setName] = useState(
    localStorage.getItem("orbit_name") || ""
  );

  const [goal, setGoal] = useState(
    localStorage.getItem("orbit_goal") || ""
  );

  // SUBJECTS

  const [subjects, setSubjects] = useState(
    JSON.parse(localStorage.getItem("orbit_subjects")) || [
      {
        title: "React",
        progress: 80,
      },
      {
        title: "Python",
        progress: 65,
      },
    ]
  );

  // TASKS

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("orbit_tasks")) || []
  );

  // SETTINGS

  const [darkMode, setDarkMode] = useState(true);

  // SAVE TO LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem("orbit_name", name);

    localStorage.setItem("orbit_goal", goal);

    localStorage.setItem(
      "orbit_subjects",
      JSON.stringify(subjects)
    );

    localStorage.setItem(
      "orbit_tasks",
      JSON.stringify(tasks)
    );

  }, [name, goal, subjects, tasks]);

  return (
    <UserContext.Provider
      value={{

        name,
        setName,

        goal,
        setGoal,

        subjects,
        setSubjects,

        tasks,
        setTasks,

        darkMode,
        setDarkMode,

      }}
    >

      {children}

    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}