import { Link } from "react-router-dom";

const ArtisanSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed lg:static lg:translate-x-0 z-40 w-64 bg-gray-50 border-r min-h-screen p-4 transition-transform duration-200 ease-in-out`}
      >
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <h3 className="font-semibold text-lg">Dashboard Menu</h3>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 hover:bg-gray-200 rounded"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h3 className="font-semibold text-lg mb-4 hidden lg:block">Dashboard Menu</h3>
        <ul className="space-y-2">
          <li><Link to="/dashboard" className="block p-2 rounded hover:bg-blue-100" onClick={() => setSidebarOpen && setSidebarOpen(false)}>Overview</Link></li>
          <li><Link to="/dashboard/analytics" className="block p-2 rounded hover:bg-blue-100" onClick={() => setSidebarOpen && setSidebarOpen(false)}>Analytics</Link></li>
          <li><Link to="/dashboard/projects" className="block p-2 rounded hover:bg-blue-100" onClick={() => setSidebarOpen && setSidebarOpen(false)}>Projects</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default ArtisanSidebar;
