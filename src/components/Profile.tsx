import { useAppDispatch, useAppSelector } from "../store/hooks";
import { FaEdit, FaUserCircle } from "react-icons/fa";
import ListItem from "./ListItem";
import { useEffect } from "react";
import { getProfileProperties } from "../store/slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { openRemoveModal } from "../store/slices/ModalSlice";
import RemoveModal from "./RemoveModal";
import { AiFillDelete, AiOutlineFolderView } from "react-icons/ai";
import Pagination from "./Pagination";
import { useQuery } from "../utils/useQuery";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const { data, profileProperties, numberofpages, currentPage } =
    useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(
      getProfileProperties(query.get("page") ? Number(query.get("page")) : 1)
    );
  }, [dispatch, query]);

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
                className="flex flex-row justify-between items-center bg-blue-500 text-white text-base font-bold w-48 py-2 px-4 rounded"
                onClick={() => {
                  navigate(`/property/${property._id}`);
                }}
              >
                <AiOutlineFolderView />
                <span>View</span>
              </button>
              <button
                className="flex flex-row justify-between items-center bg-tango text-white text-base font-bold w-48 py-2 px-4 rounded ml-4"
                onClick={() => {
                  navigate(`/property/${property._id}/edit`);
                }}
              >
                <FaEdit />
                <span>Edit</span>
              </button>
              <button
                className="flex flex-row justify-between items-center bg-red-500 text-white text-base font-bold w-48 py-2 px-4 rounded ml-4"
                onClick={() => dispatch(openRemoveModal(property._id))}
              >
                <AiFillDelete />
                <span>Delete</span>
              </button>
            </div>
            <ListItem property={property} />
          </div>
        ))}
        {/* pagination */}
        <Pagination
          numberofpages={numberofpages}
          currentPage={currentPage}
          url="profile"
        />
        {/* delete modal */}
        <RemoveModal />
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
