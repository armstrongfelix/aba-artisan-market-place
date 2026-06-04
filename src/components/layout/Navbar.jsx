const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600">Aba Artisan Portfolio</div>
      <ul className="flex gap-6">
        <li><a href="/" className="hover:text-blue-600">Home</a></li>
        <li><a href="/marketplace" className="hover:text-blue-600">Marketplace</a></li>
        <li><a href="/dashboard" className="hover:text-blue-600">Dashboard</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
