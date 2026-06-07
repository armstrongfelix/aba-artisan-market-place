const specialties = ["Interior Decorator", "Welder", "Fashion Designer", "Structural Fabricator", "Carpenter"];

const FilterPanel = () => {
  return (
    <aside className="w-full lg:w-64 bg-gray-50 rounded-lg p-4">
      <h3 className="font-semibold mb-3">Filter by Specialty</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
        {specialties.map((s) => (
          <label key={s} className="flex items-center gap-2 cursor-pointer py-1">
            <input type="checkbox" className="accent-blue-600" />
            <span className="text-sm whitespace-nowrap">{s}</span>
          </label>
        ))}
      </div>
    </aside>
  );
};

export default FilterPanel;
