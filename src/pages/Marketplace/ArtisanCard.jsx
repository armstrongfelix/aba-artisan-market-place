import { Link } from "react-router-dom";
import VerificationStatus from "../../components/feedback/VerificationStatus";

const ArtisanCard = ({ artisan }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-32 sm:h-40 bg-gray-300" />
      <div className="p-3 sm:p-4 space-y-2">
        <h3 className="font-semibold text-base sm:text-lg truncate">{artisan?.name || "Artisan Name"}</h3>
        <p className="text-sm text-gray-600 truncate">{artisan?.specialty || "Specialty"}</p>
        <VerificationStatus verified={artisan?.verified} />
        <Link
          to={`/artisan/${artisan?.id}`}
          className="inline-block mt-2 text-blue-600 hover:underline text-sm font-medium"
        >
          View Profile &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ArtisanCard;
