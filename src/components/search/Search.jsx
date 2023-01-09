import React from "react";
import {
  MainContainer,
  SearchContainer,
  SearchIconContainer,
  SearchInput,
} from "./Search.styles";
import { FaSearch } from "react-icons/fa";

const Search = ({ searchedValue, setSearchedValue }) => {
  const handleChange = (e) => {
    setSearchedValue(e.target.value);
  };

  return (
    <MainContainer>
      <SearchContainer>
        <SearchIconContainer>
          <FaSearch />
        </SearchIconContainer>
        <SearchInput type="text" name="search" onChange={handleChange} />
      </SearchContainer>
    </MainContainer>
  );
};

export default Search;
