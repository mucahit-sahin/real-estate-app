import { useState } from "react";
import PlacesAutocompleteInput from "./PlacesAutocompleteInput";
import { RecentSearchLocationItem } from "./RecentSearchLocationItem";

export const SearchLocation = () => {
  const [recentSearch, setRecentSearch] = useState(
    localStorage.getItem("recentSearch") || "[]"
  );
  return (
    <div className="bg-tango flex w-full">
      <div className="flex flex-col mx-auto sm:w-1/3 my-5 md:my-8 lg:my-10">
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center text-white text-xl font-bold">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            Find your perfect home
          </h1>
          <p className="text-white text-base mt-4">
            We have more than 1000 properties for you to choose.
          </p>
        </div>
        {/* Search Input */}
        <div className="flex flex-col items-center justify-center text-center text-white text-xl font-bold mt-6 mx-1">
          <PlacesAutocompleteInput
            className=" bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg focus:rounded-bl-none focus:rounded-br-none py-2 px-4 block w-full appearance-none leading-normal text-black placeholder:text-base"
            itemsClass="absolute w-full shadow-lg"
            itemClass=" p-2 text-gray-600 font-normal text-base"
            placeholder="Search for a location"
            navigatePath="/rent"
          />
        </div>
        {/* Recent Searches */}
        <div className="flex flex-col w-full text-white mt-4 ">
          {JSON.parse(recentSearch).length > 0 ? (
            <div className="flex flex-row items-center">
              <span className="text-white text-sm md:text-base lg:text-xl ">
                Recent Searches
              </span>
              <button
                className="ml-2"
                onClick={() => {
                  localStorage.removeItem("recentSearch");
                  setRecentSearch("[]");
                }}
              >
                <span className="underline text-white text-base">Clear</span>
              </button>
            </div>
          ) : null}
          <div className="grid grid-cols-4 gap-4 py-2">
            {JSON.parse(recentSearch)
              .reverse()
              .map((item: any) => (
                <RecentSearchLocationItem
                  key={item}
                  name={item}
                  url={"/rent?location=" + item.replaceAll(" ", "_")}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
