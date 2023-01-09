import { useState, useEffect } from "react";

const useSortData = (data, favorite, sortBy) => {
  const [sortedData, setSortedData] = useState();
  const [sortedFavorite, setSortedFavorite] = useState();

  useEffect(() => {
    if ((!data, !favorite)) return;

    if (sortBy === "Mass (High to Low)") {
      setSortedData(data.sort((a, b) => b.mass - a.mass));
      setSortedFavorite(favorite.sort((a, b) => b.mass - a.mass));
    } else if (sortBy === "Mass (Low to High)") {
      setSortedData(data.sort((a, b) => a.mass - b.mass));
      setSortedFavorite(favorite.sort((a, b) => a.mass - b.mass));
    }
  }, [data, favorite, sortBy]);

  return { sortedData, sortedFavorite };
};

export default useSortData;
