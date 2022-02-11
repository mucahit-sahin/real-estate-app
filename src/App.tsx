import React from "react";
import { Routes, Route } from "react-router-dom";
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
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
