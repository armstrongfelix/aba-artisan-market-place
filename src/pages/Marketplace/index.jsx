import { useState } from "react";
import ArtisanCard from "./ArtisanCard";
import FilterPanel from "./FilterPanel";
import SearchBar from "../../components/common/SearchBar";
import useFetchArtisans from "../../hooks/useFetchArtisans";

const MarketplacePage = () => {
  const { artisans, loading } = useFetchArtisans();
  const [search, setSearch] = useState("");

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Artisan Marketplace</h1>
      <div className="flex gap-4 mb-6">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="flex gap-6">
        <FilterPanel />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-60 bg-gray-200 animate-pulse rounded-lg" />)
            : artisans.map((artisan) => <ArtisanCard key={artisan.id} artisan={artisan} />)}
        </div>
      </div>
    </main>
  );
};

export default MarketplacePage;
