import React from "react";
import { Routes, Route } from "react-router-dom";
import { Categories } from "./components/Categories";
import { Navbar } from "./components/Navbar";
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
              <Categories />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
