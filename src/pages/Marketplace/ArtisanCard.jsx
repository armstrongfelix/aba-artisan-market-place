import VerificationStatus from "../../components/feedback/VerificationStatus";

const ArtisanCard = ({ artisan }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-40 bg-gray-300" />
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{artisan?.name || "Artisan Name"}</h3>
        <p className="text-sm text-gray-600">{artisan?.specialty || "Specialty"}</p>
        <VerificationStatus verified={artisan?.verified} />
        <a
          href={`/artisan/${artisan?.id}`}
          className="inline-block mt-2 text-blue-600 hover:underline text-sm"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default ArtisanCard;
