"use client";

import React, { useState } from "react";
import Button from "./Button";

// PUBLIC_INTERFACE
/**
 * TaskForm component for adding a new task
 * @param {object} props
 * @param {Function} props.onSubmit
 */
const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title: title.trim(), due_date: dueDate, is_complete: false });
    setTitle("");
    setDueDate("");
  }

  return (
    <form className="flex flex-col md:flex-row gap-2 mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        className="border p-2 rounded flex-1"
        value={title}
        required
        maxLength={100}
        onChange={e => setTitle(e.target.value)}
        aria-label="Task Title"
      />
      <input
        type="date"
        className="border p-2 rounded"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
        aria-label="Due Date"
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;
