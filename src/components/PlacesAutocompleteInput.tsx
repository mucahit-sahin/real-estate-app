import { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { setLocation } from "../store/slices/FilterPropertySlice";
import geoCode from "../utils/geoCode";

const PlacesAutocompleteInput = ({
  className,
  itemClass,
  placeholder,
  itemsClass,
  value,
  navigatePath,
}: {
  className: string;
  itemClass: string;
  placeholder: string;
  itemsClass: string;
  value?: string;
  navigatePath?: string;
}) => {
  const [address, setAddress] = useState(value || "");
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSelect = async (address: string) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        if (navigatePath) {
          geoCode(latLng.lat.toString(), latLng.lng.toString()).then(
            (data: any) => {
              console.log(data);
              let recent;
              if (data.city) {
                recent = data.city;
              } else if (data.state) {
                recent = data.state;
              } else if (data.area) {
                recent = data.area;
              } else if (data.country) {
                recent = data.country;
              } else {
                recent = address;
              }
              if (localStorage.getItem("recentSearch")) {
                let recentSearch = JSON.parse(
                  localStorage.getItem("recentSearch") || "[]"
                );
                if (recentSearch.indexOf(data.city) === -1) {
                  recentSearch.push(recent);
                  localStorage.setItem(
                    "recentSearch",
                    JSON.stringify(recentSearch)
                  );
                }
              } else {
                localStorage.setItem("recentSearch", JSON.stringify([recent]));
              }
            }
          );
          navigate(`${navigatePath}?location=` + address.replaceAll(" ", "_"));
        } else {
          dispatch(
            setLocation({
              address,
              lat: latLng.lat,
              lng: latLng.lng,
            })
          );
        }
      });
  };
  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="relative w-full">
          <input
            {...getInputProps({
              placeholder: placeholder,
              className: className,
            })}
          />
          <div className={itemsClass}>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#d1d1d1", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    style,
                  })}
                  className={itemClass}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default PlacesAutocompleteInput;
