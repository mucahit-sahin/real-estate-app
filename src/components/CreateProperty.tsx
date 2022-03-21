import { GoogleMap, Marker } from "@react-google-maps/api";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { AlertType, showAlert } from "../store/slices/AlertSlice";
import { createProperty } from "../store/slices/PropertySlice";
import { PropertyFormData } from "../types/propertyTypes";
import geoCode from "../utils/geoCode";
import Loading from "./Loading";
import PlacesAutocompleteInput from "./PlacesAutocompleteInput";

const CreateProperty = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PropertyFormData>();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.property);
  const { lat, lng } = useAppSelector((state) => state.filters);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<PropertyFormData> = (
    data: PropertyFormData
  ) => {
    console.log(data);
    dispatch(createProperty(data));
    if (error === null) {
      dispatch(
        showAlert({
          message: "Property created successfully",
          type: AlertType.SUCCESS,
        })
      );
      navigate("/");
    } else {
      dispatch(showAlert({ message: error, type: AlertType.ERROR }));
    }
  };

  useEffect(() => {
    setValue("latitude", lat);
    setValue("longitude", lng);
  }, [lat, lng, setValue]);

  return (
    <div className="w-full md:w-1/2  md:mx-auto">
      {/* Title */}
      <div className="flex flex-row items-center px-4 mt-4">
        <span className=" text-gray-500 text-center text-5xl lg:text-7xl">
          Create Property
        </span>
      </div>
      {/* Rent out form */}
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="flex flex-col px-4 py-2">
          <div className="flex flex-col justify-between my-2">
            <span className="text-sm ">Title</span>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("title", { required: "You must specify a title" })}
            />
            {errors.title && (
              <span className="text-red-500 text-xs">
                {errors.title.message}
              </span>
            )}
          </div>
          <div className="flex flex-col justify-between my-2">
            <span className="text-sm ">Description</span>
            {/* text area */}
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("description", {
                required: "You must specify a description",
              })}
            />
            {errors.description && (
              <span className="text-red-500 text-xs">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="flex flex-col justify-between my-2">
            <span className="text-sm ">Price</span>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("price", {
                required: "You must specify a price",
                pattern: {
                  value: /^\d+$/,
                  message: "Price must be a number",
                },
              })}
            />
            {errors.price && (
              <span className="text-red-500 text-xs">
                {errors.price.message}
              </span>
            )}
          </div>
          <div className="flex flex-row justify-between my-2">
            <div className="flex-1 flex flex-col justify-between mr-1">
              <span className="text-sm ">Email</span>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("email", {
                  required: "You must specify an email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.description?.message && (
                <span className="text-red-500 text-xs">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <span className="text-sm ">Phone Number</span>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("phoneNumber", {
                  required: "You must specify a phone number",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
                placeholder="(555) 555-5555"
              />
              {errors.phoneNumber?.message && (
                <span className="text-red-500 text-xs">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-between my-2">
            <span className="text-sm ">Address</span>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("address", {
                required: "You must specify an address",
              })}
            />
            {errors.address?.message && (
              <span className="text-red-500 text-xs">
                {errors.address.message}
              </span>
            )}
          </div>
          <div className="flex flex-row justify-between my-2">
            <div className="flex-1 flex flex-col justify-between mr-1">
              <span className="text-sm ">Select Location</span>
              <PlacesAutocompleteInput
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Select Location on Map"
                itemsClass="absolute w-full shadow-lg z-50"
                itemClass=" p-2 text-gray-600 font-normal text-base"
              />
              <input
                type="text"
                className="hidden"
                {...register("latitude", {
                  required: "You must specify a location",
                })}
              />
              {errors.latitude && (
                <span className="text-red-500 text-xs">
                  The location you selected is not valid
                </span>
              )}
              <GoogleMap
                mapContainerStyle={{
                  height: "300px",
                  width: "100%",
                  marginTop: "5px",
                }}
                zoom={8}
                center={{
                  lat: watch("latitude") || -34.397,
                  lng: watch("longitude") || 150.644,
                }}
                options={{
                  disableDefaultUI: true,
                }}
                onClick={(e) => {
                  setValue("latitude", e.latLng?.lat() || 0);
                  setValue("longitude", e.latLng?.lng() || 0);
                  if (e.latLng?.lat() && e.latLng?.lng()) {
                    geoCode(
                      e.latLng?.lat().toString(),
                      e.latLng?.lng().toString()
                    ).then((res: any) => {
                      setValue("address", res.address);
                      setValue("city", res.city);
                      setValue("country", res.country);
                      setValue("area", res.area);
                      setValue("state", res.state);
                    });
                  }
                }}
              >
                {watch("latitude") && watch("longitude") && (
                  <Marker
                    position={{
                      lat: watch("latitude"),
                      lng: watch("longitude"),
                    }}
                  />
                )}
              </GoogleMap>
            </div>
          </div>
          {/* property types */}
          <div className="flex flex-col justify-between my-2">
            <span className="text-sm ">Property Type</span>
            <select
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("propertyType", {
                required: "You must specify a property type",
              })}
            >
              <option value="">Select a property type</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Room">Room</option>
              <option value="Cabin">Cabin</option>
            </select>
            {errors.propertyType?.message && (
              <span className="text-red-500 text-xs">
                {errors.propertyType.message}
              </span>
            )}
          </div>
          <div className="flex flex-row justify-between my-2">
            <div className="flex-1 flex flex-col justify-between mr-1 my-2">
              <span className="text-sm ">Zip Code</span>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("zipCode", {
                  required: "You must specify a zip code",
                  pattern: {
                    value: /^[0-9]{5}$/,
                    message: "Invalid zip code",
                  },
                })}
              />
              {errors.zipCode?.message && (
                <span className="text-red-500 text-xs">
                  {errors.zipCode.message}
                </span>
              )}
            </div>
            <div className="flex-1 flex flex-col justify-between my-2">
              <span className="text-sm ">Property Size(m2)</span>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("squareMeters", {
                  required: "You must specify a property size",
                  pattern: {
                    value: /^\d+$/,
                    message: "Property size must be a number",
                  },
                })}
              />
              {errors.squareMeters?.message && (
                <span className="text-red-500 text-xs">
                  {errors.squareMeters.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-between my-2">
            <div className="flex-1 flex flex-col justify-between mr-1">
              <span className="text-sm ">Bedrooms</span>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("bedrooms", {
                  required: "You must specify a number of bedrooms",
                  pattern: {
                    value: /^\d+$/,
                    message: "Bedrooms must be a number",
                  },
                })}
              />
              {errors.bedrooms?.message && (
                <span className="text-red-500 text-xs">
                  {errors.bedrooms.message}
                </span>
              )}
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <span className="text-sm ">Bathrooms</span>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("bathrooms", {
                  required: "You must specify a number of bathrooms",
                  pattern: {
                    value: /^\d+$/,
                    message: "Bathrooms must be a number",
                  },
                })}
              />
              {errors.bathrooms?.message && (
                <span className="text-red-500 text-xs">
                  {errors.bathrooms.message}
                </span>
              )}
            </div>
          </div>
          {/* property rules */}
          <div className="flex flex-col my-2">
            <div className="flex flex-row items-center ">
              <input
                type="checkbox"
                className="w-4 h-4 border border-gray-400 mr-2 p-2"
                {...register("isDogfriendly")}
              />
              <span className="text-sm ">Is dog friendly?</span>
            </div>
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="w-4 h-4 border border-gray-400 mr-2 p-2"
                {...register("isCatfriendly")}
              />
              <span className="text-sm ">Is cat friendly?</span>
            </div>
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="w-4 h-4 border border-gray-400 mr-2 p-2"
                {...register("isSmokingfriendly")}
              />
              <span className="text-sm ">Is smoking allowed?</span>
            </div>
          </div>
          {/*
          <div className="flex flex-col justify-between my-2">
            <span className="text-sm ">Images</span>
            <input
              type="file"
              className="w-full rounded border border-gray-400 p-2"
              {...register("images", {
                required: "You must upload at least one image",
              })}
              name="images"
              multiple
              accept="image/*"
            />
            {errors.images && (
              <span className="text-red-500 text-xs">
                {errors.images[0].message}
              </span>
            )}
          </div>
          
          <div className="flex flex-col justify-between my-2">
            <span className="text-sm ">Floor Plan</span>
            <input
              type="file"
              className="w-full rounded border border-gray-400 p-2"
              {...register("floorPlan", {
                required: "You must upload a floor plan",
              })}
              name="floorPlan"
              accept="image/*"
            />
          </div>
          */}
          <div className="flex flex-col justify-between my-2">
            <button
              type="submit"
              className="w-full rounded bg-tango border text-white font-bold border-gray-400 mt-8 p-2"
            >
              Create
            </button>
          </div>
        </div>
      </form>
      {loading && <Loading />}
    </div>
  );
};

export default CreateProperty;
