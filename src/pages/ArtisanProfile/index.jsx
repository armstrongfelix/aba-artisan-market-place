import PortfolioGallery from "./PortfolioGallery";
import ReviewSection from "./ReviewSection";
import VerificationStatus from "../../components/feedback/VerificationStatus";

const ArtisanProfilePage = () => {
  const artisan = {
    name: "Chidi Okonkwo",
    specialty: "Interior Decorator",
    verified: true,
    bio: "Over 15 years of experience in high-end interior design and decoration in Aba.",
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-8 text-center sm:text-left">
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 rounded-full flex-shrink-0" />
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{artisan.name}</h1>
          <p className="text-gray-600 text-base sm:text-lg">{artisan.specialty}</p>
          <VerificationStatus verified={artisan.verified} />
          <p className="mt-2 text-gray-700">{artisan.bio}</p>
        </div>
      </div>
      <PortfolioGallery />
      <ReviewSection />
    </main>
  );
};

export default ArtisanProfilePage;
