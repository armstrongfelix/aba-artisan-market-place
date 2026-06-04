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
      <div className="flex items-start gap-6 mb-8">
        <div className="w-32 h-32 bg-gray-300 rounded-full" />
        <div>
          <h1 className="text-3xl font-bold">{artisan.name}</h1>
          <p className="text-gray-600 text-lg">{artisan.specialty}</p>
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
