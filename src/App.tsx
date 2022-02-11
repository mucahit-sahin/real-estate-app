import React from "react";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./components/Categories";
import { Footer } from "./components/Footer";
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
              <SearchLocation />
              <RentoutBannerSM />
              <Categories />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
