import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/home";
import MainAppTemplate from "../../templates/main_app";

const ContentHolder = () => {
  return (
    <MainAppTemplate>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Home /> */}
    </MainAppTemplate>
  );
};

export default ContentHolder;
