import React, { useState, useEffect, useRef } from "react";
import {
  DropdownIcon,
  DropdownList,
  DropdownTop,
  Label,
  MainContainer,
  Selected,
  FilterValue,
} from "./Filter.styles";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Filter = ({ filterBy, setFilterBy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const filterValues = ["All", "Favorite"];

  const dropdownRef = useRef();

  useEffect(() => {
    // if(!isOpen) return
    const handleToggleDropdown = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleToggleDropdown);

    return () => window.removeEventListener("click", handleToggleDropdown);
  }, [isOpen]);

  return (
    <MainContainer>
      <Label>Filter:</Label>
      <DropdownTop onClick={() => setIsOpen(!isOpen)} ref={dropdownRef}>
        <Selected>{filterBy}</Selected>
        <DropdownIcon>
          {isOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}
        </DropdownIcon>
      </DropdownTop>
      {isOpen && (
        <DropdownList>
          {filterValues.map((value, i) => {
            return (
              <FilterValue key={i} onClick={() => setFilterBy(value)}>
                {value}
              </FilterValue>
            );
          })}
        </DropdownList>
      )}
    </MainContainer>
  );
};

export default Filter;
