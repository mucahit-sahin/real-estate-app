import React from "react";

export const CategoriesFilter = ({
  categoryIsOpen,
  category,
  setCategory,
}: {
  categoryIsOpen: boolean;
  category: string[];
  setCategory: (category: string[]) => void;
}) => {
  const changeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setCategory([...category, name]);
    } else {
      setCategory(category.filter((c) => c !== name));
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
            name="apartments"
            value="apartments"
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
            name="rooms"
            value="rooms"
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
            name="houses"
            value="houses"
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
            name="cabins"
            value="cabins"
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
