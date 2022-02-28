import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch } from "../store/hooks";
import { closeSignupModal, openLoginModal } from "../store/slices/ModalSlice";
import { signup } from "../store/slices/UserSlice";
import { registerFormData } from "../types/authTypes";

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
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const formdata: registerFormData = {
      email: data.email,
      password: data.password,
      phoneNumber: data.phoneNumber,
      fullname: data.fullname,
    };
    dispatch(signup(formdata));
    dispatch(closeSignupModal());
  };

  return (
    <div
      className="absolute w-full h-full bg-white bg-opacity-40 z-20"
      onClick={() => dispatch(closeSignupModal())}
    >
      <div
        className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-96 rounded shadow-lg shadow-gray-500 z-30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="px-6 py-4">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
              Register
            </h2>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <div className="flex flex-col justify-between my-2">
                  <span className="block text-sm text-gray-800 dark:text-gray-200">
                    Full Name
                  </span>
                  <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                <div className="flex flex-col justify-between my-2">
                  <span className="block text-sm text-gray-800 dark:text-gray-200">
                    Email
                  </span>
                  <input
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                  <span className="block text-sm text-gray-800 dark:text-gray-200">
                    Password
                  </span>
                  <input
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                  <span className="block text-sm text-gray-800 dark:text-gray-200">
                    Confirm Password
                  </span>
                  <input
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("confirmPassword", {
                      required: "You must specify a password",
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters",
                      },
                      validate: (value) =>
                        value === watch("password", "") ||
                        "Passwords do not match",
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
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Signup Link */}
          <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-200">
              Already have an account?
            </span>

            <button
              onClick={() => dispatch(openLoginModal())}
              className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
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
