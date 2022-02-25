import React from "react";
import { useAppSelector } from "../store/hooks";
import { CategoriesFilter } from "./CategoriesFilter";
import { NumberofBedrooms } from "./NumberofBedrooms";
import PlacesAutocompleteInput from "./PlacesAutocompleteInput";
import { PriceRanges } from "./PriceRanges";

export const FilterSearch = () => {
  const [priceIsOpen, setPriceIsOpen] = React.useState(false);
  const [bedroomIsOpen, setBedroomIsOpen] = React.useState(false);
  const [categoryIsOpen, setCategoryIsOpen] = React.useState(false);

  const { address } = useAppSelector((state) => state.searchLocation);
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(0);
  const [minBedrooms, setMinBedrooms] = React.useState<number>(0);
  const [maxBedrooms, setMaxBedrooms] = React.useState<number>(0);
  const [category, setCategory] = React.useState<string[]>([]);

  const priceStatus = () => {
    if (maxPrice !== 0 && minPrice > maxPrice) {
      var tmp = maxPrice;
      setMaxPrice(minPrice);
      setMinPrice(tmp);
    }
    if (minPrice === 0 && maxPrice === 0) {
      return "Price Ranges";
    } else if (minPrice === 0 && maxPrice !== 0) {
      return `<$${maxPrice}`;
    } else if (minPrice !== 0 && maxPrice === 0) {
      return `$${minPrice}<`;
    } else {
      return `$${minPrice} - $${maxPrice}`;
    }
  };
  const bedroomStatus = () => {
    if (maxBedrooms !== 0 && minBedrooms > maxBedrooms) {
      var tmp = maxBedrooms;
      setMaxBedrooms(minBedrooms);
      setMinBedrooms(tmp);
    }
    if (minBedrooms === 0 && maxBedrooms === 0) {
      return "Bedrooms";
    } else if (minBedrooms === 0 && maxBedrooms !== 0) {
      return `<${maxBedrooms} Beds`;
    } else if (minBedrooms !== 0 && maxBedrooms === 0) {
      return `${minBedrooms}< Beds`;
    } else {
      return `${minBedrooms} - ${maxBedrooms} Beds`;
    }
  };
  return (
    <div className="flex flex-col md:flex-row flex-1 p-3 bg-gray-200">
      {/* Search Input*/}
      <div className="flex w-full md:w-1/4 md:mr-3">
        <PlacesAutocompleteInput
          className="appearance-none rounded bg-white w-full text-gray-700 mr-2 py-2 px-2 leading-tight focus:outline-none"
          itemsClass="absolute w-full shadow-lg z-50"
          itemClass=" p-2 text-gray-600 font-normal text-base"
          placeholder="Search for a location"
          value={address}
        />
      </div>
      {/*Price Range*/}
      <div
        className="flex relative md:mr-3 mt-2 md:mt-0"
        onClick={() => setPriceIsOpen(true)}
      >
        <div
          className={` w-full md:w-40  flex flex-row items-center rounded  hover:bg-tango  hover:text-white py-2 px-2 leading-tight focus:outline-none ${
            minPrice === 0 && maxPrice === 0
              ? "bg-white text-gray-700"
              : "bg-tango text-white"
          }`}
        >
          {priceStatus()}
          <img
            className="ml-auto w-3 h-3 "
            src="https://www.svgrepo.com/show/80156/down-arrow.svg"
            alt="down arrow"
          />
        </div>
        {/* Price Range Modal */}
        <PriceRanges
          priceIsOpen={priceIsOpen}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>
      {/*Bedrooms*/}
      <div
        className="flex relative md:mr-3 mt-2 md:mt-0"
        onClick={() => setBedroomIsOpen(true)}
      >
        <div
          className={` w-full md:w-40  flex flex-row items-center rounded  hover:bg-tango  hover:text-white p-2 leading-tight focus:outline-none ${
            minBedrooms === 0 && maxBedrooms === 0
              ? "bg-white text-gray-700"
              : "bg-tango text-white"
          }`}
        >
          {bedroomStatus()}
          <img
            className="ml-auto w-3 h-3 "
            src="https://www.svgrepo.com/show/80156/down-arrow.svg"
            alt="down arrow"
          />
        </div>
        {/* Number of Bedrooms Modal */}
        <NumberofBedrooms
          bedroomIsOpen={bedroomIsOpen}
          minBedrooms={minBedrooms}
          maxBedrooms={maxBedrooms}
          setMinBedrooms={setMinBedrooms}
          setMaxBedrooms={setMaxBedrooms}
        />
      </div>
      {/* Categories */}
      <div
        className="flex relative md:mr-3 mt-2 md:mt-0"
        onClick={() => setCategoryIsOpen(true)}
      >
        <div className=" w-full md:w-40  flex flex-row items-center bg-white rounded  hover:bg-tango  hover:text-white p-2 leading-tight focus:outline-none">
          Categories
          <img
            className="ml-auto w-3 h-3 "
            src="https://www.svgrepo.com/show/80156/down-arrow.svg"
            alt="down arrow"
          />
        </div>
        {/* Categories Modal */}
        <CategoriesFilter
          categoryIsOpen={categoryIsOpen}
          category={category}
          setCategory={setCategory}
        />
      </div>

      {/* Close Modals */}
      <div
        className={`absolute left-0 top-0 w-screen h-screen z-49 ${
          priceIsOpen || bedroomIsOpen || categoryIsOpen ? "block" : "hidden"
        }`}
        onClick={() => {
          setPriceIsOpen(false);
          setBedroomIsOpen(false);
          setCategoryIsOpen(false);
        }}
      ></div>
    </div>
  );
};
