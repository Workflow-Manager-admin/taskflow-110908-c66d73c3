"use client";

import React, { useEffect, useState, useCallback } from "react";
import { supabase } from "../utils/supabaseClient";
import { sortTasks } from "../utils/taskHelpers";
import Layout from "./Layout";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

// PUBLIC_INTERFACE
/**
 * TaskApp contains all logic for CRUD operations, runs only in browser (client)
 */
export default function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [sortKey, setSortKey] = useState("due_date");
  const [loading, setLoading] = useState(true);

  // Fetch tasks from Supabase
  const fetchTasks = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("due_date", { ascending: true })
      .order("is_complete", { ascending: true });

    if (error) {
      setLoading(false);
      return;
    }
    setTasks(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  async function handleAddTask(task) {
    const { error } = await supabase.from("tasks").insert([task]);
    if (!error) fetchTasks();
  }

  async function handleEditTask(updated) {
    const { error } = await supabase
      .from("tasks")
      .update({
        title: updated.title,
        due_date: updated.due_date,
      })
      .eq("id", updated.id);

    if (!error) fetchTasks();
  }

  async function handleDeleteTask(task) {
    const { error } = await supabase.from("tasks").delete().eq("id", task.id);
    if (!error) fetchTasks();
  }

  async function handleToggleTask(task) {
    const { error } = await supabase
      .from("tasks")
      .update({ is_complete: !task.is_complete })
      .eq("id", task.id);

    if (!error) fetchTasks();
  }

  const sorted = sortTasks(tasks, sortKey);

  return (
    <Layout sortKey={sortKey} setSortKey={setSortKey}>
      <TaskForm onSubmit={handleAddTask} />
      <ul className="divide-y border bg-white rounded-md shadow">
        {loading ? (
          <li className="text-center py-8">Loading...</li>
        ) : sorted.length === 0 ? (
          <li className="text-center py-8 text-gray-400">No tasks yet. Add one!</li>
        ) : (
          sorted.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onToggle={handleToggleTask}
            />
          ))
        )}
      </ul>
    </Layout>
  );
}
