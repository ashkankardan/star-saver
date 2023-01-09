import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  color: #ddd;
  margin-top: 0;
  font-size: 15px;

  @media (min-width: 441px) {
    margin-left: 15px;
  }
`;

export const Label = styled.div``;

export const DropdownTop = styled.div`
  position: relative;
  width: 180px;
  margin-left: 10px;
  border: 1px solid darkgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 440px) {
    margin-top: 10px;
  }
`;

export const DropdownIcon = styled.div`
  transform: translateY(2px);
  z-index: -1;
`;

export const Selected = styled.div``;

export const DropdownList = styled.div`
  position: absolute;
  width: 180px;
  background: darkgray;
  color: black;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  padding: 5px 10px;
  box-sizing: border-box;
  top: 105px;
  border-radius: 5px;
  box-shadow: rgba(250, 250, 250, 0.5) 0px 0px 3px;

  @media (max-width: 440px) {
    top: 145px;
  }
`;

export const SortValue = styled.div`
  height: 20px;
  cursor: pointer;
`;
