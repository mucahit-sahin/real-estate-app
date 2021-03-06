import { GoogleMap, Marker } from "@react-google-maps/api";
import React, { useEffect } from "react";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setLocation } from "../store/slices/FilterPropertySlice";
import { getProperties } from "../store/slices/PropertySlice";
import { Property } from "../types/propertyTypes";
import { useQuery } from "../utils/useQuery";

export const Map = () => {
  const dispatch = useAppDispatch();
  const {
    lat,
    lng,
    maxBedrooms,
    maxPrice,
    minBedrooms,
    minPrice,
    propertyType,
  } = useAppSelector((state) => state.filters);
  const { properties } = useAppSelector((state) => state.property);
  const query = useQuery();

  const [selectedPlace, setSelectedPlace] = React.useState<Property | null>();

  useEffect(() => {
    dispatch(
      getProperties({
        maxBedrooms,
        minBedrooms,
        maxPrice,
        minPrice,
        propertyType,
      })
    );
  }, [dispatch, maxBedrooms, minBedrooms, maxPrice, minPrice, propertyType]);

  useEffect(() => {
    if (query.get("location")) {
      geocodeByAddress(query.get("location") || "")
        .then((results) => {
          return getLatLng(results[0]);
        })
        .then((latLng) => {
          dispatch(
            setLocation({
              address: query.get("location")?.replaceAll("_", " ") || "",
              lat: latLng.lat,
              lng: latLng.lng,
            })
          );
        })
        .catch((error) => console.error("Error", error));
    }
  }, [dispatch, query]);

  return (
    <div
      className="flex-3"
      style={{
        height: "calc(100vh - 124px)",
      }}
    >
      <GoogleMap
        mapContainerClassName="w-full h-full"
        center={{ lat, lng } || { lat: 0, lng: 0 }}
        zoom={10}
        options={{
          disableDefaultUI: true,
        }}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {properties.map((place) => (
          <Marker
            key={place._id}
            position={{ lat: place.latitude, lng: place.longitude }}
            title={place.title}
            icon={{
              url: "https://www.apartments.com/a/272a9e/modules/searchmap/content/images/mappindefaultgreen.svg",
            }}
            onClick={() => setSelectedPlace(place)}
          />
        ))}
        {selectedPlace && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-2 z-10 w-full md:w-1/2 lg:w-1/3 flex flex-row bg-white rounded shadow shadow-slate-400">
            <div
              className="absolute -right-2 -top-2 w-10 h-10 rounded-full bg-tango flex items-center justify-center text-white"
              onClick={() => setSelectedPlace(null)}
            >
              <svg width="1em" height="1em" viewBox="0 0 16 16">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M9.414 8l4.243 4.243a1 1 0 01-1.414 1.414L8 9.414l-4.243 4.243a1 1 0 01-1.414-1.414L6.586 8 2.343 3.757a1 1 0 111.414-1.414L8 6.586l4.243-4.243a1 1 0 111.414 1.414L9.414 8z"
                ></path>
              </svg>
            </div>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/1259/1259768.png"}
              alt="logo"
              className="w-32 h-full object-contain rounded"
            />
            <div className="ml-4 flex flex-col">
              <h1 className="text-xl font-sans break-words">
                {selectedPlace.title}
              </h1>
              <span className="text-tango font-bold text-xl">
                {selectedPlace.price}
              </span>
              <div className="flex flex-row mt-auto mb-1">
                <span className="text-gray-400 font-bold text-base">
                  {selectedPlace.bedrooms} bed
                </span>

                <span className="ml-4 text-gray-400 font-bold text-base">
                  {selectedPlace.squareMeters}m??
                </span>
              </div>
            </div>
          </div>
        )}
      </GoogleMap>
    </div>
  );
};
