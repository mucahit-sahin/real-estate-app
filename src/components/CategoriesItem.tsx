import React from "react";
import { Link } from "react-router-dom";

export const CategoriesItem = ({
  name,
  url,
  icon,
}: {
  name: string;
  url: string;
  icon: string;
}) => {
  return (
    <Link
      to={url}
      className="flex p-4 items-center justify-center shadow shadow-slate-300 hover:shadow-slate-400 transition duration-500 ease-in-out"
    >
      <img className="h-12 w-12 mr-2" src={icon} alt="expand" />
      <span className="text-black font-bold text-lg">{name}</span>
    </Link>
  );
};
