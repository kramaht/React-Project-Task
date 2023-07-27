import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/Task";
export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        description: task.description,
        id: tasks.length,
      },
    ]);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => taskId !== task.id));
  };

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
