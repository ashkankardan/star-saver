import React from "react";
import DataContextProvider from "../../contexts/DataContext";
import PublicRoutes from "../../routes/PublicRoutes";
import Layout from "../../layouts/Layouts";
import { AppContainer } from "./MainFunctional.styles";
import FavoriteContextProvider from "../../contexts/FavoriteContext";

function MainFunctional() {
  return (
    <AppContainer className="App">
      <DataContextProvider>
        <FavoriteContextProvider>
          <Layout>
            <PublicRoutes />
          </Layout>
        </FavoriteContextProvider>
      </DataContextProvider>
    </AppContainer>
  );
}

export default MainFunctional;
