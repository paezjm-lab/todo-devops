"use client";

import { useState } from "react";

export default function AddTask() {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;

    alert(`Task added: ${task}`);
    setTask("");
  };

  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <h1>Add Task</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      />

      <button onClick={addTask}>
        Add Task
      </button>
    </main>
  );
}