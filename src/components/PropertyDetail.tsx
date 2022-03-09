import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProperty } from "../store/slices/PropertySlice";
import { GoogleMap, Marker } from "@react-google-maps/api";
import Loading from "./Loading";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const PropertyDetail = () => {
  const dispatch = useAppDispatch();
  const { property, loading } = useAppSelector((state) => state.property);
  const { id } = useParams();

  const [isReadMore, setIsReadMore] = useState(true);

  useEffect(() => {
    if (id) {
      dispatch(getProperty(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  if (!property) {
    return null;
  }

  return (
    <div className="flex flex-col relative">
      {/* Image Slider */}
      <div
        className="flex flex-row"
        style={{
          height: "calc(100vh - 94px)",
        }}
      >
        <Swiper modules={[Pagination]} pagination={true}>
          <SwiperSlide>
            <img
              className="w-full h-full object-contain"
              src="https://bostadsportal-se.imgix.net/fd85dfc6efb6f59f7265d9c4d9884d03?auto=compress,enhance,format&h=590"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-contain"
              src="https://bostadsportal-se.imgix.net/fd85dfc6efb6f59f7265d9c4d9884d03?auto=compress,enhance,format&h=590"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Content */}
      <div className="flex flex-row w-full max-w-5xl mx-auto px-2 md:px-0">
        <div className="flex-3 flex flex-col">
          <div className="flex flex-row justify-between">
            <span className="text-base">
              {property.country + " > "}
              {property.state === property.city
                ? property.city
                : property.state + " > " + property.city}
              {" > " + property.area}
            </span>
          </div>
          <div className="flex flex-row justify-between py-1">
            <h1 className="text-2xl font-bold">
              {property.bedrooms} Bedroom, {property.bathrooms} Bathroom{" "}
              {property.squareMeters} m²
            </h1>
          </div>
          <div className="flex flex-row justify-between py-1">
            <span className="text-gray-600">{property.address}</span>
          </div>
          {/* Title */}
          <div className="flex flex-row justify-between py-1">
            <h2 className="text-2xl font-bold">{property.title}</h2>
          </div>
          {/* Description */}
          <div className="flex flex-row justify-between py-1">
            <p className="text-base">
              {isReadMore
                ? property.description?.substring(0, 200) || ""
                : property.description}
              <span
                onClick={() => setIsReadMore(!isReadMore)}
                className="text-blue-500 cursor-pointer"
              >
                {isReadMore ? " ...read more" : " show less"}
              </span>
            </p>
          </div>
          {/* table */}
          <div className="flex flex-col justify-between py-1">
            {/* title */}
            <div className="flex flex-col justify-between py-2">
              <h3 className="text-2xl font-bold">About property</h3>
              {/* border */}
              <div className="w-1/4 h-1 bg-tango"></div>
            </div>
            <table className="table-fixed border-collapse border border-slate-400 w-full">
              <tbody>
                <tr>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    Property Type
                  </td>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    {property.propertyType}
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    Price
                  </td>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    {property.price} kr
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    Size
                  </td>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    {property.squareMeters} m²
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    Bedrooms
                  </td>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    {property.bedrooms}
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    Bathrooms
                  </td>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    {property.bathrooms}
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    Is Cat Friendly
                  </td>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    {property.isCatfriendly ? "Yes" : "No"}
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    Is Dog Friendly
                  </td>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    {property.isDogfriendly ? "Yes" : "No"}
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    Is Smoking Friendly
                  </td>
                  <td className="text-gray-600 border border-slate-300 p-2">
                    {property.isSmokingfriendly ? "Yes" : "No"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="hidden flex-1 sm:flex flex-col h-min -mt-28 p-4 z-20 bg-white rounded-2xl shadow-lg shadow-gray-400">
          <span>Per Month</span>
          <span className="text-2xl font-bold">{"$ " + property.price}</span>
          <div className="flex flex-row justify-between py-1">
            <span className="text-gray-400">Publisher:</span>
            <span className="text-gray-400">
              {property.user?.fullname || ""}
            </span>
          </div>
          {/* phone */}
          <button className="flex flex-row items-center justify-between bg-blue-500 hover:bg-blue-700 text-white font-bold mb-2 py-2 px-4 rounded-full">
            <FaPhone />
            <span className="text-white">{property.phoneNumber}</span>
          </button>
          {/* contact */}
          <div className="flex flex-row justify-between">
            <a
              href={"mailto:" + property.email}
              className="flex flex-row items-center justify-between w-full bg-tango hover:bg-opacity-90 text-white text-center font-bold py-2 px-4 rounded-full"
            >
              <FaEnvelope />
              <span>Contact</span>
            </a>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 flex flex-row justify-between p-1 w-full h-20 bg-white border-t z-20 sm:hidden">
          <div className="flex flex-col justify-between">
            <span className="text-base font-bold">Per Month</span>
            <span className="text-2xl font-bold">{"$ " + property.price}</span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col items-center justify-center mr-1">
              <button className="flex flex-row items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <FaPhone />
                <span className="ml-1 text-white">{property.phoneNumber}</span>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <a
                href={"mailto:" + property.email}
                className="w-full text-center bg-tango hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-full"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="flex flex-row justify-between py-1">
        <GoogleMap
          mapContainerStyle={{
            height: "300px",
            width: "100%",
          }}
          zoom={17}
          center={{
            lat: property.latitude,
            lng: property.longitude,
          }}
          options={{
            disableDefaultUI: true,
          }}
        >
          <Marker
            position={{
              lat: property.latitude,
              lng: property.longitude,
            }}
          />
        </GoogleMap>
      </div>
    </div>
  );
};

export default PropertyDetail;
