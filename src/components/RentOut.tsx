import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { openLoginModal } from "../store/slices/ModalSlice";

const RentOut = () => {
  const { data } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen bg-slate-700">
      <div className="flex-1 flex flex-row items-center">
        <div className="flex-1 flex flex-col mx-10 md:mx-20">
          <span className="text-white text-5xl lg:text-7xl">
            Rent out and find a new tenant - for free
          </span>
          <button
            className="bg-tango text-white text-base font-bold w-48 mt-4 py-2 px-4 rounded"
            onClick={() => {
              data ? navigate("/create-property") : dispatch(openLoginModal());
            }}
          >
            Rent Out
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex flex-col ">
          <img
            className="h-96 object-contain shadow"
            src="https://bostadsportal.se/static/images/landing_page/renting_out/AdPropertyPicture.jpg"
            alt="Rent Out"
          />
        </div>
      </div>
    </div>
  );
};

export default RentOut;
