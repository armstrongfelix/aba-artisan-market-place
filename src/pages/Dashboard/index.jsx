import { useState } from "react";
import ArtisanSidebar from "../../components/layout/ArtisanSidebar";
import Analytics from "./Analytics";
import ProjectManagement from "./ProjectManagement";

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex relative min-h-[calc(100vh-4rem)]">
      <ArtisanSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="flex-1 p-4 sm:p-6 min-w-0">
        <div className="flex items-center gap-3 mb-6">
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        </div>
        <Analytics />
        <ProjectManagement />
      </main>
    </div>
  );
};

export default DashboardPage;
