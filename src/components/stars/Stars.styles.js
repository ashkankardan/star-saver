import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const OptionsRow = styled.div`
  display: flex;
  justify-content: end;
`;

export const Options = styled.div`
  display: flex;
`;

export const NoResult = styled.div`
  width: 100;
  margin: auto;
  margin-top: 50px;
`;

export const NoResultTitle = styled.div`
  font-family: fantasy;
  color: white;
`;
