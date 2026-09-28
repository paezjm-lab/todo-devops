"use client";

import { useState } from "react";

export default function AddTask() {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    alert("Task added: " + task);
    setTask("");
  };

  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Add Task</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginTop: "20px",
        }}
      />

      <br />

      <button
        type="button"
        onClick={addTask}
        style={{
          padding: "10px 20px",
          marginTop: "15px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
    </main>
  );
}