import React from "react";
import Header from "../components/header/Header";
import MainNav from "../components/nav/MainNav";
import { ContentContainer } from "./Layouts.styles";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <ContentContainer>
      <MainNav />
      {children}
      </ContentContainer>
    </div>
  );
};

export default Layout;
