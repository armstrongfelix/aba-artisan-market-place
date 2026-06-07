const PortfolioGallery = () => {
  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Portfolio</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-32 sm:h-40 bg-gray-200 rounded-lg" />
        ))}
      </div>
    </section>
  );
};

export default PortfolioGallery;
