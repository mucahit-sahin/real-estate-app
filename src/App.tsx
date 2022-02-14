import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Categories } from "./components/Categories";
import { FilterSearch } from "./components/FilterSearch";
import { Footer } from "./components/Footer";
import LoginModal from "./components/LoginModal";
import { Map } from "./components/Map";
import { Navbar } from "./components/Navbar";
import RegisterModal from "./components/RegisterModal";
import { RentoutBannerSM } from "./components/RentoutBannerSM";
import { SearchLocation } from "./components/SearchLocation";
import { useAppSelector } from "./store/hooks";

function App() {
  const { isLoginOpen, isSignupOpen } = useAppSelector((state) => state.modals);
  return (
    <div className="flex flex-col ">
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
                <Footer />
              </>
            }
          />
          <Route
            path="rent"
            element={
              <>
                <FilterSearch />
                <div className="flex-1 flex  flex-row">
                  <Map />
                  <div className=" md:flex-2">List</div>
                </div>
              </>
            }
          />
        </Route>
      </Routes>

      {/* Login Modal */}
      {isLoginOpen && <LoginModal />}
      {/* Register Modal */}
      {isSignupOpen && <RegisterModal />}
    </div>
  );
}

export default App;
