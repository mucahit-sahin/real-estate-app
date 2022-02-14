import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { openLoginModal, openSignupModal } from "../store/slices/ModalSlice";

export const Navbar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-tango flex flex-row">
      {/* Logo */}
      <div className="flex items-center justify-between flex-wrap p-3">
        <span className="text-white text-xl font-bold flex-row">
          <Link
            to="/"
            className="text-white text-xl font-bold flex flex-row items-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/602/602175.png"
              className="h-8 w-8"
              alt="home"
            />
            Real Estate
          </Link>
        </span>
      </div>
      {/* Navbar Menu */}
      <div className="flex items-center justify-between flex-wrap p-3 ml-auto mr-0">
        <ul className="flex flex-row list-reset text-base">
          <li className="flex items-center px-2 py-2">
            <Link to="/" className="text-white">
              List your property
            </Link>
          </li>
          <div className="bg-white block w-1 h-full"></div>
          <li className="flex items-center px-2 py-2">
            <button
              className="text-white "
              onClick={() => dispatch(openSignupModal())}
            >
              Register
            </button>
          </li>
          <li className="flex items-center px-2 py-2">
            <button
              className="text-white"
              onClick={() => dispatch(openLoginModal())}
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
