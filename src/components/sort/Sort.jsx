import React, { useState, useEffect, useRef } from "react";
import {
  DropdownIcon,
  DropdownList,
  DropdownTop,
  Label,
  MainContainer,
  Selected,
  SortValue,
  Title,
} from "./Sort.styles";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Sort = ({ sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortValues = ["All", "Favorite"];

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
      <Label>Sort:</Label>
      <DropdownTop onClick={() => setIsOpen(!isOpen)} ref={dropdownRef}>
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
