import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};
