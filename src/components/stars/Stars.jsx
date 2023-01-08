import React, { useState, useEffect } from "react";
import { MainContainer, NoResult, NoResultTitle } from "./Stars.styles";
import { useDataContext } from "../../contexts/DataContext";
import { useFavoriteContext } from "../../contexts/FavoriteContext";
import StarItem from "./StarItem";
import Spinner from "../spinner/Spinner";
import Sort from "../sort/Sort";
import useWindowSize from "../../hooks/useWindowSize";
import usePagination from "../../hooks/usePagination";
import { Pagination } from "../pagination/Pagination";

const Stars = () => {
  const [sortBy, setSortBy] = useState("All");

  const {
    dataState: { data },
  } = useDataContext();

  const {
    favoriteState: { favorite },
  } = useFavoriteContext();

  const {page, setPage, toDisplay, totalCount, totalPerPage} = usePagination(data, favorite, sortBy)

  const windowSize = useWindowSize();

  useEffect(() => {
    console.log("windowSize from comp", windowSize);
  }, [windowSize]);

  // useEffect(() => {
  //   console.log(data);
  // }, []);

  // ------------
  // const [page, setPage] = useState(1);
  // const [toDisplay, setToDisplay] = useState();
  // const [totalCount, setTotalCount] = useState(1);
  // const [totalPerPage, setTotalPerPage] = useState(3);

  // useEffect(()=>{
  //   setTotalPerPage(windowSize)
  // }, [windowSize])

  // useEffect(() => {
  //   if (!data) return;

  //   const startIndex = totalPerPage * (page - 1);
  //   const endIndex = totalPerPage * page;

  //   if (sortBy === "Favorite") {
  //     setToDisplay(favorite.slice(startIndex, endIndex));
  //     setTotalCount(favorite.length);
  //   } else {
  //     setToDisplay(data.slice(startIndex, endIndex));
  //   }
  // }, [data, favorite, sortBy, page, totalPerPage]);

  // useEffect(() => {
  //   if (!data) return;
  //   if (sortBy === "Favorite") {
  //     setTotalCount(favorite.length);
  //     setPage(1);
  //   } else {
  //     setTotalCount(data.length);
  //     setPage(1);
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [sortBy, data]);

  // useEffect(() => {
  //   if (Math.ceil(totalCount / totalPerPage) < page) {
  //     setPage(page - 1);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [totalCount]);

  // useEffect(() => {
  //   console.log("toDisplay", toDisplay);
  //   console.log("data", data);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [toDisplay]);

  return (
    <>
      {toDisplay ? (
        <>
          <Sort sortBy={sortBy} setSortBy={setSortBy} />
          <MainContainer>
            {toDisplay.map((item) => {
              return <StarItem key={item.id} character={item} />;
            })}
          </MainContainer>
          {totalCount && (
            <Pagination
              page={page}
              setPage={setPage}
              totalCount={totalCount}
              totalPerPage={totalPerPage}
            />
          )}
        </>
      ) : (
        <Spinner />
      )}

      {sortBy === "Favorite" && favorite.length < 1 && (
        <NoResult>
          <NoResultTitle>No Favorites to Display!</NoResultTitle>
          <Spinner />
        </NoResult>
      )}
    </>
  );
};

export default Stars;
