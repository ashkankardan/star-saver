import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const SearchContainer = styled.div`
  width: 400px;
  height: 50px;
  border: 3px solid #270c1e;
  border-radius: 40px;
  padding: 10px 30px 10px 25px;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  margin: auto;
  display: flex;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const SearchIconContainer = styled.div`
  color: #270c1e;
  height: 100%;
  font-size: 20px;
  transform: translateY(1.5px);
  margin-right: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: black;
  color: #ddd;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  transform: translateY(-2px);
`;
