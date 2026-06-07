const ProjectManagement = () => {
  const projects = [
    { id: 1, client: "Mrs. Obi", status: "In Progress" },
    { id: 2, client: "Mr. Eze", status: "Completed" },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="hidden sm:block">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2">Client</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="px-4 py-2">{p.client}</td>
                  <td className="px-4 py-2">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sm:hidden space-y-3 p-4">
          {projects.map((p) => (
            <div key={p.id} className="border rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">{p.client}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  p.status === "Completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                }`}>{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;
