import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 sm:py-16 md:py-20 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Find Verified Master Artisans in Aba
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
        Connect with skilled interior decorators, welders, fashion designers, and fabricators — all verified and ready for your next project.
      </p>
      <Link
        to="/marketplace"
        className="inline-block bg-white text-blue-600 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-100 transition text-sm sm:text-base"
      >
        Browse Artisans
      </Link>
    </section>
  );
};

export default HeroSection;
