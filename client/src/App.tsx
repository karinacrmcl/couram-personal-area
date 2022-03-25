import React, { useEffect } from "react";
import { Route, Router, Routes, useLocation } from "react-router";
import { Menu } from "./components/menu";
import HeaderContainer from "./containers/header";
import AllCountries from "./pages/all-countries";
import ExploreMore from "./pages/explore";
import Favourites from "./pages/favourites";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import ExtendedInfoProvider from "./provider/extended-info";
import "./shared/styles/global.scss";

function App() {
  return (
    <>
      <div className="container">
        <HeaderContainer />
        <ExtendedInfoProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="all-countries" element={<AllCountries />} />
            <Route path="explore-more" element={<ExploreMore />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ExtendedInfoProvider>
      </div>
    </>
  );
}

export default App;
