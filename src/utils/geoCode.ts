
import Geocode from "react-geocode";



const geoCode = (lat: string, lng: string) => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY || "");
    Geocode.enableDebug();
    return Geocode.fromLatLng(lat, lng).then(
        response => {
            const address = response.results[0].formatted_address;
            const addressArray = response.results[0].address_components;
            let city = "";
            let area = "";
            let state = "";
            let country = "";
            addressArray.forEach((element: any) => {
                //country
                if (element.types[0] === "country") {
                    country = element.long_name;
                    
                }
                //state
                else if (element.types[0] === "administrative_area_level_1") {
                    state = element.long_name;
                }
                //area
                else if (element.types[0] === "administrative_area_level_2") {
                    area = element.long_name;
                }
                //city
                else if (element.types[0] === "locality") {
                    city = element.long_name;
                }
            });
            if (city === "" ) {
                city = state;
            }
            console.log("address", address);
            console.log("area", area);
            console.log("city", city);
            console.log("state", state);
            console.log("country", country);
            return {
                area: area,
                address: address,
                city: city,
                state: state,
                country: country,
            }
        },
        error => {
            console.error(error);
        }
    );
}

export default geoCode;