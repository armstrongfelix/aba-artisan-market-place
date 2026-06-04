const CustomButton = ({ children, variant = "primary", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
