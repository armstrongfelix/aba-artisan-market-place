import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <section className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Featured Artisans</h2>
        <p className="text-sm sm:text-base text-gray-600">Discover verified master craftsmen from Aba.</p>
      </section>
    </main>
  );
};

export default HomePage;
