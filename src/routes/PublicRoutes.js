import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "../pages/Index";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />

        {/* <Route path="*"><PageNotFound /></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
