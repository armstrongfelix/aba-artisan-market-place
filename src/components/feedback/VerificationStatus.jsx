const VerificationStatus = ({ verified }) => {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
        verified
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      <span className={`w-2 h-2 rounded-full ${verified ? "bg-green-500" : "bg-yellow-500"}`} />
      {verified ? "Verified" : "Pending Verification"}
    </span>
  );
};

export default VerificationStatus;
