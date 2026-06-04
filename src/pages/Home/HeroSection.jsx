const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Find Verified Master Artisans in Aba
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Connect with skilled interior decorators, welders, fashion designers, and fabricators — all verified and ready for your next project.
      </p>
      <a
        href="/marketplace"
        className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
      >
        Browse Artisans
      </a>
    </section>
  );
};

export default HeroSection;
