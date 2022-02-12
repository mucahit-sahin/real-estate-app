import React from "react";
import { NumberofBedrooms } from "./NumberofBedrooms";
import { PriceRanges } from "./PriceRanges";

export const FilterSearch = () => {
  const [priceIsOpen, setPriceIsOpen] = React.useState(false);
  const [bedroomIsOpen, setBedroomIsOpen] = React.useState(false);

  const [location, setLocation] = React.useState("");
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(0);
  const [minBedrooms, setMinBedrooms] = React.useState<number>(0);
  const [maxBedrooms, setMaxBedrooms] = React.useState<number>(0);

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
    <div className="flex flex-row flex-1 p-3 bg-gray-200">
      {/* Search Input*/}
      <div className="flex">
        <input
          className="appearance-none rounded bg-white w-full text-gray-700 mr-2 py-2 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      {/*Price Range*/}
      <div className="flex relative mr-3 " onClick={() => setPriceIsOpen(true)}>
        <div
          className={`w-40 rounded  hover:bg-tango  hover:text-white py-2 px-2 leading-tight focus:outline-none ${
            minPrice === 0 && maxPrice === 0
              ? "bg-white text-gray-700"
              : "bg-tango text-white"
          }`}
        >
          {priceStatus()}
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
        className="flex flex-row relative mr-3"
        onClick={() => setBedroomIsOpen(true)}
      >
        <div
          className={`w-40 rounded  hover:bg-tango  hover:text-white py-2 px-2 leading-tight focus:outline-none ${
            minBedrooms === 0 && maxBedrooms === 0
              ? "bg-white text-gray-700"
              : "bg-tango text-white"
          }`}
        >
          {bedroomStatus()}
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

      {/* Close Modals */}
      <div
        className={`absolute left-0 top-0 w-screen h-screen z-49 ${
          priceIsOpen || bedroomIsOpen ? "block" : "hidden"
        }`}
        onClick={() => {
          setPriceIsOpen(false);
          setBedroomIsOpen(false);
        }}
      ></div>
    </div>
  );
};
