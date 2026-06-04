const ProjectManagement = () => {
  const projects = [
    { id: 1, client: "Mrs. Obi", status: "In Progress" },
    { id: 2, client: "Mr. Eze", status: "Completed" },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
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
    </section>
  );
};

export default ProjectManagement;
