const ArtisanSidebar = () => {
  return (
    <aside className="w-64 bg-gray-50 border-r min-h-screen p-4">
      <h3 className="font-semibold text-lg mb-4">Dashboard Menu</h3>
      <ul className="space-y-2">
        <li><a href="/dashboard" className="block p-2 rounded hover:bg-blue-100">Overview</a></li>
        <li><a href="/dashboard/analytics" className="block p-2 rounded hover:bg-blue-100">Analytics</a></li>
        <li><a href="/dashboard/projects" className="block p-2 rounded hover:bg-blue-100">Projects</a></li>
      </ul>
    </aside>
  );
};

export default ArtisanSidebar;
