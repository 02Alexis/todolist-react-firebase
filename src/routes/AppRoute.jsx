import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import "../index.css"

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
