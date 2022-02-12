import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Categories } from "./components/Categories";
import { FilterSearch } from "./components/FilterSearch";
import { Footer } from "./components/Footer";
import { Map } from "./components/Map";
import { Navbar } from "./components/Navbar";
import { RentoutBannerSM } from "./components/RentoutBannerSM";
import { SearchLocation } from "./components/SearchLocation";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route
            index
            element={
              <>
                <SearchLocation />
                <RentoutBannerSM />
                <Categories />
              </>
            }
          />
          <Route
            path="rent"
            element={
              <>
                <FilterSearch />
              </>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
