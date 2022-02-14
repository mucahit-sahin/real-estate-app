import React from "react";
import { useAppDispatch } from "../store/hooks";
import { closeSignupModal, openLoginModal } from "../store/slices/ModalSlice";

const RegisterModal = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="absolute w-full h-full bg-white bg-opacity-40 z-20"
      onClick={() => dispatch(closeSignupModal())}
    >
      <div
        className="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-96 rounded shadow-lg shadow-gray-500 z-30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <div className="flex flex-row items-center justify-between px-4 py-2">
          <span className="text-2xl font-bold ">Register</span>
          <span
            className="text-2xl font-bold cursor-pointer w-8 h-8 flex items-center justify-center rounded hover:bg-gray-500 hover:bg-opacity-10"
            onClick={() => dispatch(closeSignupModal())}
          >
            &times;
          </span>
        </div>
        {/* Form */}
        <div className="flex flex-col px-4 py-2">
          <div className="flex flex-col justify-between">
            <span className="text-sm ">Full Name</span>
            <input
              type="text"
              className="w-full rounded border border-gray-400 p-2"
            />
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-sm ">Email</span>
            <input
              type="email"
              className="w-full rounded border border-gray-400 p-2"
            />
          </div>
          <div className="flex flex-col justify-between my-2">
            <span className="text-sm ">Password</span>
            <input
              type="password"
              className="w-full rounded border border-gray-400 p-2"
            />
          </div>
          {/* Aggrement */}
          <div className="flex flex-row items-center justify-between">
            <span className="text-sm text-gray-400 flex items-center ">
              <input type="checkbox" className="border border-gray-400 p-2" />
              <span className="ml-2">I agree to the terms and conditions</span>
            </span>
          </div>
          <div className="mt-4 flex flex-row items-center justify-between">
            <button className="bg-tango w-full text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </div>
          {/* Signup Link */}
          <div className="flex flex-row items-center justify-between mt-4">
            <span className="text-base text-gray-400">
              Already have an account?
            </span>
            <button
              className="text-base text-gray-400"
              onClick={() => dispatch(openLoginModal())}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
