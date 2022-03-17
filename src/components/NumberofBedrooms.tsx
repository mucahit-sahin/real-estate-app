import React from "react";
import { useAppDispatch } from "../store/hooks";
import { setBedrooms } from "../store/slices/FilterPropertySlice";

export const NumberofBedrooms = ({
  bedroomIsOpen,
  minBedrooms,
  maxBedrooms,
}: {
  bedroomIsOpen: boolean;
  minBedrooms: number;
  maxBedrooms: number;
}) => {
  const dispatch = useAppDispatch();

  const [minBedroomsInput, setMinBedroomsInput] = React.useState<string>(
    minBedrooms === 0 ? "" : minBedrooms.toString()
  );
  const [maxBedroomsInput, setMaxBedroomsInput] = React.useState<string>(
    maxBedrooms === 0 ? "" : maxBedrooms.toString()
  );
  const checkAndSetBedroom = () => {
    if (parseInt(minBedroomsInput) > parseInt(maxBedroomsInput)) {
      var tmp = maxBedroomsInput;
      setMaxBedroomsInput(minBedroomsInput);
      setMinBedroomsInput(tmp);
    }
    if (minBedroomsInput === "") {
      dispatch(
        setBedrooms({ minBedrooms: 0, maxBedrooms: parseInt(maxBedroomsInput) })
      );
    } else if (maxBedroomsInput === "") {
      dispatch(
        setBedrooms({ minBedrooms: parseInt(minBedroomsInput), maxBedrooms: 0 })
      );
    } else {
      dispatch(
        setBedrooms({
          minBedrooms: parseInt(minBedroomsInput),
          maxBedrooms: parseInt(maxBedroomsInput),
        })
      );
    }
  };

  const clearBedroom = () => {
    dispatch(setBedrooms({ minBedrooms: 0, maxBedrooms: 0 }));
    setMinBedroomsInput("");
    setMaxBedroomsInput("");
  };
  return (
    <div
      className={`absolute top-full left-0 bg-white rounded shadow z-50 md:mt-2 p-3 ${
        bedroomIsOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col">
        <div className="flex flex-row">
          <input
            className="appearance-none rounded border border-gray-300 bg-white w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-tango"
            type="text"
            placeholder="Min"
            pattern="[0-9]*"
            value={minBedroomsInput}
            onChange={(e) => setMinBedroomsInput(e.target.value)}
          />
          <input
            className="appearance-none rounded border border-gray-300 bg-white w-full text-gray-700 ml-auto py-1 px-2 leading-tight focus:outline-none focus:border-tango"
            type="text"
            placeholder="Max"
            pattern="[0-9]*"
            value={maxBedroomsInput}
            onChange={(e) => setMaxBedroomsInput(e.target.value)}
          />
        </div>
        <div className="flex flex-row">
          <button
            className="flex flex-1 justify-center bg-tango hover:bg-tango-dark text-white mr-2 mt-2 py-1 rounded focus:outline-none focus:shadow-outline"
            onClick={() => checkAndSetBedroom()}
          >
            Set
          </button>
          <button
            className="flex flex-1 justify-center bg-tango hover:bg-tango-dark text-white text-center mt-2 py-1 rounded focus:outline-none focus:shadow-outline"
            onClick={() => clearBedroom()}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
