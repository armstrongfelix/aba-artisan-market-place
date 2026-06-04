const specialties = ["Interior Decorator", "Welder", "Fashion Designer", "Structural Fabricator", "Carpenter"];

const FilterPanel = () => {
  return (
    <aside className="w-64 flex-shrink-0">
      <h3 className="font-semibold mb-3">Filter by Specialty</h3>
      <ul className="space-y-2">
        {specialties.map((s) => (
          <li key={s}>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-blue-600" />
              <span className="text-sm">{s}</span>
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FilterPanel;
