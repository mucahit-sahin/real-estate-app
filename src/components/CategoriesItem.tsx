import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { addPropertyType } from "../store/slices/FilterPropertySlice";

export const CategoriesItem = ({
  name,
  value,
  icon,
}: {
  name: string;
  value?: string;
  icon: string;
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        if (value) {
          dispatch(addPropertyType(value));
        }
        navigate("/rent");
      }}
      className="flex p-4 items-center justify-center shadow shadow-slate-300 hover:shadow-slate-400 transition duration-500 ease-in-out"
    >
      <img className="h-12 w-12 mr-2" src={icon} alt="expand" />
      <span className="text-black font-bold text-lg">{name}</span>
    </div>
  );
};
