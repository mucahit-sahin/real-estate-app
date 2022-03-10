import { useEffect } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Categories } from "./components/Categories";
import { FilterSearch } from "./components/FilterSearch";
import { Footer } from "./components/Footer";
import List from "./components/List";
import LoginModal from "./components/LoginModal";
import { Map } from "./components/Map";
import { Navbar } from "./components/Navbar";
import RegisterModal from "./components/RegisterModal";
import { RentoutBannerSM } from "./components/RentoutBannerSM";
import { SearchLocation } from "./components/SearchLocation";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { loadUser } from "./store/slices/UserSlice";

import "swiper/css";
import "swiper/css/pagination";
import RentOut from "./components/RentOut";
import Profile from "./components/Profile";
import CreateProperty from "./components/CreateProperty";
import Loading from "./components/Loading";
import Alert from "./components/Alert";
import PropertyDetail from "./components/PropertyDetail";
import EditProperty from "./components/EditProperty";

function App() {
  const { isLoginOpen, isSignupOpen } = useAppSelector((state) => state.modals);
  const { data, loading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

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
                  <List />
                </div>
              </>
            }
          />
          <Route
            path="rent-out"
            element={
              <>
                <RentOut />
                <Footer />
              </>
            }
          />
          <Route
            path="create-property"
            element={
              data ? (
                <>
                  <CreateProperty />
                  <Footer />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="property/:id"
            element={
              <>
                <PropertyDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="property/:id/edit"
            element={
              <>
                <EditProperty />
                <Footer />
              </>
            }
          />
          <Route
            path="profile"
            element={
              data ? (
                <>
                  <Profile />
                  <Footer />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Route>
      </Routes>

      {/* Login Modal */}
      {isLoginOpen && <LoginModal />}
      {/* Register Modal */}
      {isSignupOpen && <RegisterModal />}
      {/* Loading */}
      {loading && <Loading />}

      {/* Alert */}
      <Alert />
    </div>
  );
}

export default App;
