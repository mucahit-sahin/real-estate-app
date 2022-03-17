import React from "react";
import { useAppDispatch } from "../store/hooks";
import {
  addPropertyType,
  removePropertyType,
} from "../store/slices/FilterPropertySlice";

export const CategoriesFilter = ({
  categoryIsOpen,
  category,
}: {
  categoryIsOpen: boolean;
  category: string[];
}) => {
  const dispatch = useAppDispatch();

  const changeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      dispatch(addPropertyType(name));
    } else {
      dispatch(removePropertyType(name));
    }
  };
  return (
    <div
      className={`absolute top-full left-0 w-full bg-white rounded shadow z-50 md:mt-2 p-3 ${
        categoryIsOpen ? "block" : "hidden"
      }`}
    >
      {/* Categories Checkboxes */}
      <div className="flex flex-col">
        {/*Category Checkbox*/}
        <div className="flex flex-row items-center mb-1">
          <input
            className="rounded mr-3 h-4 w-4"
            type="checkbox"
            id="apartments"
            name="Apartment"
            value="Apartment"
            onChange={(e) => changeCheckbox(e)}
          />
          <label className="text-gray-700" htmlFor="apartments">
            Apartments
          </label>
        </div>
        <div className="flex flex-row items-center mb-1">
          <input
            className="rounded mr-3 h-4 w-4"
            type="checkbox"
            id="rooms"
            name="Room"
            value="Room"
            onChange={(e) => changeCheckbox(e)}
          />
          <label className="text-gray-700" htmlFor="rooms">
            Rooms
          </label>
        </div>
        <div className="flex flex-row items-center mb-1">
          <input
            className="rounded mr-3 h-4 w-4"
            type="checkbox"
            id="houses"
            name="House"
            value="House"
            onChange={(e) => changeCheckbox(e)}
          />
          <label className="text-gray-700" htmlFor="houses">
            Houses
          </label>
        </div>
        <div className="flex flex-row items-center mb-1">
          <input
            className="rounded mr-3 h-4 w-4"
            type="checkbox"
            id="cabins"
            name="Cabin"
            value="Cabin"
            onChange={(e) => changeCheckbox(e)}
          />
          <label className="text-gray-700" htmlFor="cabins">
            Cabins
          </label>
        </div>
      </div>
    </div>
  );
};
