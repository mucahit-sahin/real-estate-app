import React from "react";

export const NumberofBedrooms = ({
  bedroomIsOpen,
  minBedrooms,
  maxBedrooms,
  setMinBedrooms,
  setMaxBedrooms,
}: {
  bedroomIsOpen: boolean;
  minBedrooms: number;
  maxBedrooms: number;
  setMinBedrooms: React.Dispatch<React.SetStateAction<number>>;
  setMaxBedrooms: React.Dispatch<React.SetStateAction<number>>;
}) => {
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
      setMinBedrooms(0);
    } else {
      setMinBedrooms(parseInt(minBedroomsInput));
    }
    if (maxBedroomsInput === "") {
      setMaxBedrooms(0);
    } else {
      setMaxBedrooms(parseInt(maxBedroomsInput));
    }
  };

  const clearBedroom = () => {
    setMinBedrooms(0);
    setMaxBedrooms(0);
    setMinBedroomsInput("");
    setMaxBedroomsInput("");
  };
  return (
    <div
      className={`absolute top-full left-0 bg-white rounded shadow z-50 mt-2 p-3 ${
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
