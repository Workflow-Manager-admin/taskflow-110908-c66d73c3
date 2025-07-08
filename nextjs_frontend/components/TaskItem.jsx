"use client";

import React, { useState } from "react";
import Button from "./Button";

// PUBLIC_INTERFACE
/**
 * TaskItem component displays a task with controls
 * @param {object} props
 * @param {object} props.task
 * @param {Function} props.onEdit
 * @param {Function} props.onDelete
 * @param {Function} props.onToggle
 */
const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState({ title: task.title, due_date: task.due_date || "" });

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit({ ...task, ...draft });
    setEditing(false);
  };

  return (
    <li className="flex gap-2 items-center border-b py-2">
      <input
        type="checkbox"
        checked={!!task.is_complete}
        onChange={() => onToggle(task)}
        className="form-checkbox accent-primary h-5 w-5"
        aria-label="Toggle completed"
      />
      {editing ? (
        <form className="flex flex-col md:flex-row gap-2 flex-1" onSubmit={handleEditSubmit}>
          <input
            type="text"
            className="border p-1 rounded flex-1"
            value={draft.title}
            onChange={e => setDraft(d => ({ ...d, title: e.target.value }))}
            required
            maxLength={100}
            aria-label="Edit Title"
          />
          <input
            type="date"
            className="border p-1 rounded"
            value={draft.due_date ? draft.due_date.substring(0, 10) : ""}
            onChange={e => setDraft(d => ({ ...d, due_date: e.target.value }))}
            aria-label="Edit Due Date"
          />
          <Button type="submit">Save</Button>
          <Button type="button" onClick={() => setEditing(false)} className="bg-secondary text-primary">Cancel</Button>
        </form>
      ) : (
        <div className="flex-1 flex items-center gap-2">
          <span
            className={`flex-1 ${task.is_complete ? "line-through text-gray-400" : ""}`}
          >{task.title}</span>
          {task.due_date && (
            <span className="text-xs text-gray-500">due {task.due_date.substring(0, 10)}</span>
          )}
          <Button type="button" onClick={() => setEditing(true)}>
            Edit
          </Button>
          <Button type="button" onClick={() => onDelete(task)} className="bg-red-500">
            Delete
          </Button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
