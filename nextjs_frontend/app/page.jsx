"use client";

import dynamic from "next/dynamic";
const TaskApp = dynamic(() => import("../components/TaskApp"), { ssr: false });

export default function HomePage() {
  return <TaskApp />;
}
