import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Artisans</h2>
        <p className="text-gray-600">Discover verified master craftsmen from Aba.</p>
      </section>
    </main>
  );
};

export default HomePage;
