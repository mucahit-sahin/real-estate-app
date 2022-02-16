import { GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";
import { useAppSelector } from "../store/hooks";

export const Map = () => {
  const [fakePlaces] = React.useState([
    {
      position: {
        lat: 40.7128,
        lng: -74.006,
      },
      key: "1",
      defaultAnimation: 2,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      name: "New York",
      description:
        "New York is a state in the Northeastern and Mid-Atlantic regions of the United States. Its ten boroughs, with the five boroughs in New York proper, constitute New York City. With an estimated 2018 population of about 16 million, New York is the most populous U.S. state, and the world's third-largest state by population.",
      price: "$1000",
    },
    {
      position: {
        lat: 40.7128,
        lng: -72.006,
      },
      key: "2",
      defaultAnimation: 2,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      name: "Red House",
      description:
        "New York is a state in the Northeastern and Mid-Atlantic regions of the United States. Its ten boroughs, with the five boroughs in New York proper, constitute New York City. With an estimated 2018 population of about 16 million, New York is the most populous U.S. state, and the world's third-largest state by population.",
      price: "$1500",
    },
    {
      position: {
        lat: 42.7128,
        lng: -72.006,
      },
      key: "3",
      defaultAnimation: 2,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      name: "White House",
      description:
        "New York is a state in the Northeastern and Mid-Atlantic regions of the United States. Its ten boroughs, with the five boroughs in New York proper, constitute New York City. With an estimated 2018 population of about 16 million, New York is the most populous U.S. state, and the world's third-largest state by population.",
      price: "$1200",
    },
  ]);

  const { lat, lng } = useAppSelector((state) => state.searchLocation);

  const [selectedPlace, setSelectedPlace] = React.useState<any | null>();
  return (
    <div
      className="flex-3"
      style={{
        height: "calc(100vh - 124px)",
      }}
    >
      <GoogleMap
        mapContainerClassName="w-full h-full"
        center={{ lat: lat, lng: lng }}
        zoom={10}
        options={{
          disableDefaultUI: true,
        }}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {fakePlaces.map((place) => (
          <Marker
            key={place.key}
            position={place.position}
            title={place.name}
            icon={{
              url: "https://www.apartments.com/a/272a9e/modules/searchmap/content/images/mappindefaultgreen.svg",
            }}
            onClick={() => setSelectedPlace(place)}
          />
        ))}
        {selectedPlace && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-2 z-10 w-full md:w-1/3 flex flex-row bg-white rounded shadow shadow-slate-400">
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
              src={selectedPlace.image}
              alt="logo"
              className="w-32 h-full object-contain rounded"
            />
            <div className="ml-4 flex flex-col">
              <h1 className="text-xl font-sans">{selectedPlace.name}</h1>
              <span className="text-tango font-bold text-xl">
                {selectedPlace.price}
              </span>
              <div className="flex flex-row mt-auto mb-1">
                <span className="text-gray-400 font-bold text-base">2 bed</span>
                <span className="ml-4 text-gray-400 font-bold text-base">
                  50m²
                </span>
              </div>
            </div>
          </div>
        )}
      </GoogleMap>
    </div>
  );
};
