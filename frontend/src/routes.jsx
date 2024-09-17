import React from "react";
import { Route, Routes } from "react-router-dom";

import Mainpage from "./pages/mainpage";
import Login from "./pages/login";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />;
      <Route path="/login" element={<Login />} />;
    </Routes>
  );
}

export default MainRoutes;
