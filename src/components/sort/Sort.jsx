import React, { useState, useEffect, useRef } from "react";
import {
  DropdownIcon,
  DropdownList,
  DropdownTop,
  Label,
  MainContainer,
  Selected,
  SortValue,
} from "./Sort.styles";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Sort = ({ sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortValues = ["Mass (Low to High)", "Mass (High to Low)"];

  const sortDropdownRef = useRef();

  useEffect(() => {
    const handleToggleDropdown = (e) => {
      if (!sortDropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleToggleDropdown);

    return () => window.removeEventListener("click", handleToggleDropdown);
  }, [isOpen]);

  return (
    <MainContainer>
      <Label>Sort:</Label>
      <DropdownTop onClick={() => setIsOpen(!isOpen)} ref={sortDropdownRef}>
        <Selected>{sortBy}</Selected>
        <DropdownIcon>
          {isOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}
        </DropdownIcon>
      </DropdownTop>
      {isOpen && (
        <DropdownList>
          {sortValues.map((value, i) => {
            return (
              <SortValue key={i} onClick={() => setSortBy(value)}>
                {value}
              </SortValue>
            );
          })}
        </DropdownList>
      )}
    </MainContainer>
  );
};

export default Sort;
