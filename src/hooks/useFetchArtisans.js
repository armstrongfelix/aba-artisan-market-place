import { useState, useEffect } from "react";
import { fetchArtisans } from "../services/artisanService";

const useFetchArtisans = () => {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArtisans()
      .then(setArtisans)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { artisans, loading, error };
};

export default useFetchArtisans;
