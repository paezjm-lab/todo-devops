"use client";

import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask: Task = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const completeTask = (id: number) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <h1>My ToDo Application</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
          }}
        />

        <button onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul
        style={{
          marginTop: "30px",
          padding: 0,
        }}
      >
        {tasks.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "15px",
              listStyle: "none",
            }}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => completeTask(item.id)}
            />

            <span
              style={{
                flex: 1,
                textDecoration: item.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {item.text}
            </span>

            <button onClick={() => deleteTask(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}