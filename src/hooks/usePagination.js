import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

const usePagination = (data, favorite, sortedData, sortedFavorite, filterBy, sortBy) => {
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
      setToDisplay(sortedFavorite.slice(startIndex, endIndex));
      setTotalCount(sortedFavorite.length);
    } else {
      setToDisplay(sortedData.slice(startIndex, endIndex));
    }
  }, [sortedData, sortedFavorite, filterBy, page, totalPerPage, sortBy]);

  useEffect(() => {
    if (!sortedData) return;
    if (filterBy === "Favorite") {
      setTotalCount(sortedFavorite.length);
      setPage(1);
    } else {
      setTotalCount(sortedData.length);
      setPage(1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy, sortedData, sortBy]);

  useEffect(() => {
    if (Math.ceil(totalCount / totalPerPage) < page) {
      setPage(page - 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalCount]);

  return { page, setPage, toDisplay, totalCount, totalPerPage };
};

export default usePagination;
