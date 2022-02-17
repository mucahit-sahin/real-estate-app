import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch } from "../store/hooks";
import { closeSignupModal, openLoginModal } from "../store/slices/ModalSlice";

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  fullname: string;
  aggrement: boolean;
}

const RegisterModal = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col px-4 py-2">
            <div className="flex flex-col justify-between">
              <span className="text-sm ">Full Name</span>
              <input
                type="text"
                className="w-full rounded border border-gray-400 p-2"
                {...register("fullname", {
                  required: "You must specify a password",
                })}
              />
              {errors.fullname && (
                <span className="text-red-500 text-xs">
                  {errors.fullname.message}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-sm ">Email</span>
              <input
                type="email"
                className="w-full rounded border border-gray-400 p-2"
                {...register("email", {
                  required: "You must specify a password",
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-between my-2">
              <span className="text-sm ">Password</span>
              <input
                type="password"
                className="w-full rounded border border-gray-400 p-2"
                {...register("password", {
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-between my-2">
              <span className="text-sm ">Confirm Password</span>
              <input
                type="password"
                className="w-full rounded border border-gray-400 p-2"
                {...register("confirmPassword", {
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                  validate: (value) =>
                    value === watch("password", "") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-xs">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            {/* Aggrement */}
            <div className="flex flex-col  justify-between">
              <span className="text-sm text-gray-400 flex flex-row items-center ">
                <input
                  type="checkbox"
                  className="border border-gray-400 p-2"
                  {...register("aggrement", {
                    required: "You must agree to the terms and conditions",
                  })}
                />
                <span className="ml-2">
                  I agree to the terms and conditions
                </span>
              </span>
              {errors.aggrement && (
                <span className="text-red-500 text-xs">
                  {errors.aggrement.message}
                </span>
              )}
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
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
