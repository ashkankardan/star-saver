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

export const TopRow = styled.div`
  transform: translateY(-20px);
`;

export const OptionsRow = styled.div`
  display: flex;
  justify-content: end;

  @media (min-width: 441px) and (max-width: 540px) {
    justify-content: center;
  }
`;

export const Options = styled.div`
  display: flex;

  @media (max-width: 440px) {
    flex-direction: column;
  }
`;

export const NoResult = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 50px;
  text-align: center;
`;

export const NoResultTitle = styled.div`
  font-family: fantasy;
  color: white;
`;
