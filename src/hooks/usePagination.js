import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

const usePagination = (data, favorite, sortBy) => {
  const [page, setPage] = useState(1);
  const [toDisplay, setToDisplay] = useState();
  const [totalCount, setTotalCount] = useState(1);
  const [totalPerPage, setTotalPerPage] = useState(3);

  const windowSize = useWindowSize();

  useEffect(() => {
    setTotalPerPage(windowSize);
  }, [windowSize]);

  useEffect(() => {
    if (!data) return;

    const startIndex = totalPerPage * (page - 1);
    const endIndex = totalPerPage * page;

    if (sortBy === "Favorite") {
      setToDisplay(favorite.slice(startIndex, endIndex));
      setTotalCount(favorite.length);
    } else {
      setToDisplay(data.slice(startIndex, endIndex));
    }
  }, [data, favorite, sortBy, page, totalPerPage]);

  useEffect(() => {
    if (!data) return;
    if (sortBy === "Favorite") {
      setTotalCount(favorite.length);
      setPage(1);
    } else {
      setTotalCount(data.length);
      setPage(1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, data]);

  useEffect(() => {
    if (Math.ceil(totalCount / totalPerPage) < page) {
      setPage(page - 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalCount]);

  return { page, setPage, toDisplay, totalCount, totalPerPage };
};

export default usePagination;
