import React, { useState } from "react";
import {
  MainContainer,
  NoResult,
  NoResultTitle,
  OptionsRow,
  Options,
} from "./Stars.styles";
import { useDataContext } from "../../contexts/DataContext";
import { useFavoriteContext } from "../../contexts/FavoriteContext";
import StarItem from "./StarItem";
import Spinner from "../spinner/Spinner";
import Filter from "../filter/Filter";
import Sort from "../sort/Sort";
import useSortData from "../../hooks/useSortData";
import usePagination from "../../hooks/usePagination";
import { Pagination } from "../pagination/Pagination";

const Stars = () => {
  const [filterBy, setFilterBy] = useState("All");
  const [sortBy, setSortBy] = useState("Mass (Low to High)");

  const {
    dataState: { data },
  } = useDataContext();

  const {
    favoriteState: { favorite },
  } = useFavoriteContext();

  const { sortedData, sortedFavorite } = useSortData(data, favorite, sortBy);

  const { page, setPage, toDisplay, totalCount, totalPerPage } = usePagination(
    data,
    favorite,
    sortedData,
    sortedFavorite,
    filterBy,
    sortBy
  );

  return (
    <>
      {toDisplay ? (
        <>
          <OptionsRow>
            <Options>
              <Filter filterBy={filterBy} setFilterBy={setFilterBy} />
              <Sort sortBy={sortBy} setSortBy={setSortBy} />
            </Options>
          </OptionsRow>
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

      {filterBy === "Favorite" && favorite.length < 1 && (
        <NoResult>
          <NoResultTitle>No Favorites to Display!</NoResultTitle>
          <Spinner />
        </NoResult>
      )}
    </>
  );
};

export default Stars;
