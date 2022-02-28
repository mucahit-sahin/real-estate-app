import { useAppDispatch, useAppSelector } from "../store/hooks";
import { FaUserCircle } from "react-icons/fa";
import ListItem from "./ListItem";
import { useEffect } from "react";
import { getProfileProperties } from "../store/slices/UserSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, profileProperties } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getProfileProperties());
  }, [dispatch]);

  return (
    <div className="flex flex-col md:w-2/3 mx-4 md:mx-auto">
      {/* profilepage */}
      <div className="flex flex-row items-center mt-4">
        <FaUserCircle className="text-tango text-9xl mr-4" />
        <span className=" text-gray-500 text-5xl lg:text-7xl">
          {data?.user.fullname}
        </span>
      </div>
      {/* my properties title */}
      <div className="flex flex-row mt-4">
        <span className=" text-3xl lg:text-7xl">My Properties</span>
        <span className=" text-gray-500 text-3xl lg:text-7xl ml-auto">
          {profileProperties ? profileProperties.length : "0"}{" "}
          {profileProperties?.length === 1 ? "property" : "properties"}
        </span>
      </div>
      {/* my properties*/}
      <div className="flex flex-col my-4">
        {profileProperties?.map((property, index) => (
          <div key={index} className="flex flex-col w-full shadow my-3 px-2">
            <div className="flex flex-row items-center">
              <button
                className="bg-tango text-white text-base font-bold w-48 py-2 px-4 rounded"
                onClick={() => {
                  navigate(`/property/update`);
                }}
              >
                Update
              </button>
              <button className="bg-gray-200 text-gray-500 text-base font-bold w-48 py-2 px-4 rounded ml-4">
                Delete
              </button>
              <button
                className="bg-gray-200 text-gray-500 text-base font-bold w-48 py-2 px-4 rounded ml-4"
                onClick={() => {
                  navigate(`/property/${property._id}`);
                }}
              >
                View
              </button>
            </div>
            <ListItem property={property} />
          </div>
        ))}
        {/*  property not found */}
        {!profileProperties ||
          (profileProperties.length === 0 && (
            <div className="flex flex-col items-center justify-center h-28 shadow my-3 px-2">
              <span className="text-gray-500 sm:text-5xl">
                You have not added any properties yet.
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
