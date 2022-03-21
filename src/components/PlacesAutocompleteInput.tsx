import { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { setLocation } from "../store/slices/FilterPropertySlice";

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
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const handleSelect = async (address: string) => {
    geocodeByAddress(address)
      .then((results) => {
        console.log(results);
        return getLatLng(results[0]);
      })
      .then((latLng) => {
        dispatch(setLocation({ address, lat: latLng.lat, lng: latLng.lng }));
        if (navigatePath) {
          navigate(navigatePath);
        }
      })
      .catch((error) => console.error("Error", error));
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
