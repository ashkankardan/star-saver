import styled from "styled-components";

export const MainContainer = styled.div`
  background: #270c1e;
  width: 100%;
  border-radius: 5px;
  box-shadow: rgba(39, 12, 30, 0.5) 1px 1px 7px 2px;
  padding: 10px;
  box-sizing: border-box;
  color: lightgray;
  cursor: pointer;
  transition: 0.6s ease;

  @media (max-width: 540px) {
    max-width: 400px;
    margin: auto;
  }

  &:hover {
    box-shadow: rgba(76, 24, 60, 0.5) 1px 1px 7px 2px;
    background: rgba(39, 12, 30, 0.8);
  }
`;

export const FavoriteRow = styled.div`
  display: flex;
  justify-content: end;
  font-weight: bold;
  text-align: right;
`;

export const FavoriteIcon = styled.div`
  font-size: 20px;
  color: gray;

  &.selected {
    color: lightgray;
  }
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: lightgray;
`;

export const DetailTitle = styled.p`
  display: flex;
  font-weight: bold;
`;

export const DetailDescription = styled.p`
  display: flex;
`;
