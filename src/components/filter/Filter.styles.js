import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  color: #ddd;
  margin-top: 0;
  transform: translateY(-20px);
  font-size: 15px;
  text-transform: capitalize;
`;

export const Label = styled.div``;

export const DropdownTop = styled.div`
  position: relative;
  width: 120px;
  margin-left: 10px;
  border: 1px solid darkgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
`;

export const DropdownIcon = styled.div`
  transform: translateY(2px);
`;

export const Selected = styled.div``;

export const DropdownList = styled.div`
  position: absolute;
  width: 120px;
  background: darkgray;
  color: black;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  padding: 5px 10px;
  box-sizing: border-box;
  top: 35px;
  border-radius: 5px;
  box-shadow: rgba(250, 250, 250, 0.3) 0px 0px 5px;
  z-index: 1000;
`;

export const FilterValue = styled.div`
  height: 20px;
  cursor: pointer;
`;