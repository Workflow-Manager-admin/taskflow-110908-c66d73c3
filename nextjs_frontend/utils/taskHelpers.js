/**
 * @typedef {Object} Task
 * @property {string} id
 * @property {string} title
 * @property {boolean} is_complete
 * @property {string | null} due_date
 */

export function sortTasks(tasks, sortKey = "due_date", ascending = true) {
  if (!tasks) return [];
  return [...tasks].sort((a, b) => {
    if (sortKey === "due_date") {
      if (!a.due_date) return 1;
      if (!b.due_date) return -1;
      if (a.due_date === b.due_date) return 0;
      return (a.due_date > b.due_date ? 1 : -1) * (ascending ? 1 : -1);
    } else if (sortKey === "is_complete") {
      return (a.is_complete === b.is_complete)
        ? 0
        : (a.is_complete ? 1 : -1) * (ascending ? 1 : -1);
    } else {
      return 0;
    }
  });
}
