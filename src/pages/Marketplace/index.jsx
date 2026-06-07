import { useState } from "react";
import ArtisanCard from "./ArtisanCard";
import FilterPanel from "./FilterPanel";
import SearchBar from "../../components/common/SearchBar";
import useFetchArtisans from "../../hooks/useFetchArtisans";

const MarketplacePage = () => {
  const { artisans, loading } = useFetchArtisans();
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Artisan Marketplace</h1>
        <button
          className="lg:hidden flex items-center gap-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg px-3 py-2 hover:bg-blue-50 self-start sm:self-auto"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          {filterOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>
      <div className="flex gap-4 mb-6">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className={`${filterOpen ? "block" : "hidden"} lg:block w-full lg:w-64 flex-shrink-0`}>
          <FilterPanel />
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-60 bg-gray-200 animate-pulse rounded-lg" />)
            : artisans.map((artisan) => <ArtisanCard key={artisan.id} artisan={artisan} />)}
        </div>
      </div>
    </main>
  );
};

export default MarketplacePage;
