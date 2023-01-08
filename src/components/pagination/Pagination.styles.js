import styled from "styled-components";

export const MainContainer = styled.div`
  width: 260px;
  margin: auto;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  color: #ddd;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 40px;
  border: 1px solid gray;
  box-shadow: rgba(250, 250, 250, 0.3) 0px 0px 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.7s ease;

  &:hover {
    box-shadow: rgba(76, 24, 60, 0.5) 1px 1px 7px 2px;
    border-color: rgba(39, 12, 30, 0.8);
    color: white;
  }
`;
export const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  word-spacing: 10px;
`;
