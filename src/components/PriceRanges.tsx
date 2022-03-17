import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setPrice } from "../store/slices/FilterPropertySlice";

export const PriceRanges = ({ priceIsOpen }: { priceIsOpen: boolean }) => {
  const dispatch = useAppDispatch();
  const { minPrice, maxPrice } = useAppSelector((state) => state.filters);

  const [minPriceInput, setMinPriceInput] = React.useState<string>(
    minPrice === 0 ? "" : minPrice.toString()
  );
  const [maxPriceInput, setMaxPriceInput] = React.useState<string>(
    maxPrice === 0 ? "" : maxPrice.toString()
  );

  //min max size controls
  const checkAndSetPrice = () => {
    if (
      parseInt(minPriceInput) > parseInt(maxPriceInput) &&
      maxPriceInput !== ""
    ) {
      var tmp = maxPriceInput;
      setMaxPriceInput(minPriceInput);
      setMinPriceInput(tmp);
    }
    if (minPriceInput === "") {
      dispatch(setPrice({ minPrice: 0, maxPrice: parseInt(maxPriceInput) }));
    } else if (maxPriceInput === "") {
      dispatch(setPrice({ minPrice: parseInt(minPriceInput), maxPrice: 0 }));
    } else {
      dispatch(
        setPrice({
          minPrice: parseInt(minPriceInput),
          maxPrice: parseInt(maxPriceInput),
        })
      );
    }
  };

  const clearPrice = () => {
    dispatch(setPrice({ minPrice: 0, maxPrice: 0 }));
    setMinPriceInput("");
    setMaxPriceInput("");
  };
  return (
    <>
      <div
        className={`absolute top-full left-0 bg-white rounded shadow z-50 md:mt-2 p-3 ${
          priceIsOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex flex-row">
            <input
              className="appearance-none rounded border border-gray-300 bg-white w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-tango"
              type="text"
              placeholder="Min"
              value={minPriceInput}
              onChange={(e) => setMinPriceInput(e.target.value)}
              pattern="[0-9]*"
            />
            <input
              className="appearance-none rounded border border-gray-300 bg-white w-full text-gray-700 ml-auto py-1 px-2 leading-tight focus:outline-none focus:border-tango"
              type="text"
              placeholder="Max"
              value={maxPriceInput}
              onChange={(e) => setMaxPriceInput(e.target.value)}
              pattern="[0-9]*"
            />
          </div>
          <div className="flex flex-row">
            <button
              className="flex flex-1 justify-center bg-tango hover:bg-tango-dark text-white mr-2 mt-2 py-1 rounded focus:outline-none focus:shadow-outline"
              onClick={() => checkAndSetPrice()}
            >
              Set
            </button>
            <button
              className="flex flex-1 justify-center bg-tango hover:bg-tango-dark text-white text-center mt-2 py-1 rounded focus:outline-none focus:shadow-outline"
              onClick={() => clearPrice()}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
