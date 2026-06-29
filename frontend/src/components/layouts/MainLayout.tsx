import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <main className="main-content">
      <Outlet /> {/* The active page renders here */}
    </main>
  );
}
