const Analytics = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500 text-sm">Profile Views</p>
          <p className="text-2xl font-bold">127</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500 text-sm">Booking Requests</p>
          <p className="text-2xl font-bold">14</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500 text-sm">Completed Projects</p>
          <p className="text-2xl font-bold">9</p>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
