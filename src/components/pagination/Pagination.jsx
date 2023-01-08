import React from "react";
import { Button, MainContainer, PageNumber } from "./Pagination.styles";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export const Pagination = ({ page, setPage, totalCount, totalPerPage }) => {
  const handlePrev = () => {
    if (page - 1 !== 0) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page + 1 !== Math.ceil(totalCount / totalPerPage) + 1) {
      setPage(page + 1);
    }
  };
  return (
    <MainContainer>
      <Button onClick={handlePrev}>
        <AiFillCaretLeft />
      </Button>

      <PageNumber>
        {" "}
        {page} of {Math.ceil(totalCount / totalPerPage)}
      </PageNumber>

      <Button onClick={handleNext}>
        <AiFillCaretRight />
      </Button>
    </MainContainer>
  );
};
