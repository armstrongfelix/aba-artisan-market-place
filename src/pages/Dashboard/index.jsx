import ArtisanSidebar from "../../components/layout/ArtisanSidebar";
import Analytics from "./Analytics";
import ProjectManagement from "./ProjectManagement";

const DashboardPage = () => {
  return (
    <div className="flex">
      <ArtisanSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <Analytics />
        <ProjectManagement />
      </main>
    </div>
  );
};

export default DashboardPage;
