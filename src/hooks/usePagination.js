import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

const usePagination = (
  data,
  favorite,
  sortedData,
  sortedFavorite,
  filterBy,
  sortBy,
  searchedValue
) => {
  const [page, setPage] = useState(1);
  const [toDisplay, setToDisplay] = useState();
  const [totalCount, setTotalCount] = useState(1);
  const [totalPerPage, setTotalPerPage] = useState(3);

  const windowSize = useWindowSize();

  useEffect(() => {
    setTotalPerPage(windowSize);
  }, [windowSize]);

  useEffect(() => {
    if (!sortedData) return;

    const startIndex = totalPerPage * (page - 1);
    const endIndex = totalPerPage * page;

    if (filterBy === "Favorite") {
      const searched = sortedFavorite.filter(
        (item) =>
          item.name.toLowerCase().includes(searchedValue.toLowerCase()) ||
          item.character.toLowerCase().includes(searchedValue.toLowerCase())
      );
      setToDisplay(searched.slice(startIndex, endIndex));
      setTotalCount(searched.length);
    } else {
      const searched = sortedData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchedValue.toLowerCase()) ||
          item.character.toLowerCase().includes(searchedValue.toLowerCase())
      );
      setToDisplay(searched.slice(startIndex, endIndex));
      setTotalCount(searched.length);
    }
  }, [
    sortedData,
    sortedFavorite,
    filterBy,
    page,
    totalPerPage,
    sortBy,
    searchedValue,
  ]);

  useEffect(() => {
    if (!sortedData) return;
    if (filterBy === "Favorite") {
      const searched = sortedFavorite.filter(
        (item) =>
          item.name.toLowerCase().includes(searchedValue.toLowerCase()) ||
          item.character.toLowerCase().includes(searchedValue.toLowerCase())
      );
      setTotalCount(searched.length);
      setPage(1);
    } else {
      const searched = sortedData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchedValue.toLowerCase()) ||
          item.character.toLowerCase().includes(searchedValue.toLowerCase())
      );
      setTotalCount(searched.length);
      setPage(1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy, sortedData, sortBy]);

  useEffect(() => {
    if (Math.ceil(totalCount / totalPerPage) < page) {
      setPage(page - 1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalCount, searchedValue, toDisplay]);

  return { page, setPage, toDisplay, totalCount, totalPerPage };
};

export default usePagination;
