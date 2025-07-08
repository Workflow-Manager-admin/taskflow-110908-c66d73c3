import React from "react";

// PUBLIC_INTERFACE
/**
 * App layout with header, content slot, and footer.
 */
const Layout = ({ children, sortKey, setSortKey }) => (
  <div className="min-h-screen flex flex-col">
    <header className="bg-primary text-white p-4 flex flex-col md:flex-row justify-between items-center gap-2">
      <h1 className="text-xl font-bold">Taskify</h1>
      <div className="flex items-center gap-4">
        <label className="text-xs mr-2">Sort by:</label>
        <select
          className="p-1 rounded text-black"
          value={sortKey}
          onChange={e => setSortKey(e.target.value)}
          aria-label="Sort tasks"
        >
          <option value="due_date">Due date</option>
          <option value="is_complete">Completion</option>
        </select>
      </div>
    </header>
    <main className="flex-1 p-4 max-w-xl mx-auto w-full">{children}</main>
    <footer className="text-center text-gray-400 text-sm py-2">Taskify &copy; 2024</footer>
  </div>
);

export default Layout;
