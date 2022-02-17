import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch } from "../store/hooks";
import { closeLoginModal, openSignupModal } from "../store/slices/ModalSlice";

type IFormInput = {
  email: string;
  password: string;
};

const LoginModal = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div
      className="fixed w-full h-full bg-white bg-opacity-40 z-20"
      onClick={() => dispatch(closeLoginModal())}
    >
      <div
        className="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-full sm:w-96 rounded shadow-lg shadow-gray-500 z-30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <div className="flex flex-row items-center justify-between px-4 py-2">
          <span className="text-2xl font-bold ">Login</span>
          <span
            className="text-2xl font-bold cursor-pointer w-8 h-8 flex items-center justify-center rounded hover:bg-gray-500 hover:bg-opacity-10 "
            onClick={() => dispatch(closeLoginModal())}
          >
            &times;
          </span>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col px-4 py-2">
            <div className="flex flex-col justify-between">
              <span className="text-sm ">Email</span>
              <input
                type="email"
                className="w-full rounded border border-gray-400 p-2"
                {...register("email", { required: "You must specify a email" })}
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
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="flex flex-row items-center justify-between">
              <span className="text-base text-gray-400 flex items-center ">
                <input type="checkbox" className="border border-gray-400 p-2" />
                <span className="ml-2">Remember me</span>
              </span>
              <Link to="" className="text-base text-gray-400">
                Forgot password?
              </Link>
            </div>
            <div className="mt-4 flex flex-row items-center justify-between">
              <input
                type="submit"
                value="Login"
                className="bg-tango w-full text-white font-bold py-2 px-4 rounded"
              />
            </div>

            {/* Signup Link */}
            <div className="flex flex-row items-center justify-between mt-4">
              <span className="text-base text-gray-400">
                Don't have an account?
              </span>
              <button
                className="text-base text-gray-400"
                onClick={() => dispatch(openSignupModal())}
              >
                Signup
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
