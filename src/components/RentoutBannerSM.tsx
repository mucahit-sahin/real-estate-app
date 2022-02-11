import React from "react";
import { Link } from "react-router-dom";

export const RentoutBannerSM = () => {
  return (
    <div className="bg-slate-700 flex justify-center items-center py-4 px-4">
      <span className="text-white text-base md:text-2xl mr-4">
        Rent out your place and find your next tenant - for free
      </span>
      <Link
        to="/rent-out"
        className="bg-tango hover:bg-gray-300 text-white text-center font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Rent out now
      </Link>
    </div>
  );
};
