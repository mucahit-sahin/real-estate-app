import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch } from "../store/hooks";
import { closeLoginModal, openSignupModal } from "../store/slices/ModalSlice";
import { loginFormData } from "../types/authTypes";
import { login } from "../store/slices/UserSlice";

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

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const formdata: loginFormData = {
      email: data.email,
      password: data.password,
    };
    dispatch(login(formdata));
    dispatch(closeLoginModal());
  };

  return (
    <div
      className="fixed w-full h-full bg-white bg-opacity-40 z-20"
      onClick={() => dispatch(closeLoginModal())}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-full sm:w-96 rounded shadow-lg shadow-gray-500 z-30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="px-6 py-4">
            <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
              Real Estate
            </h2>

            {/* errors */}
            <div className="flex flex-col mt-1 text-center text-red-500 dark:text-red-400">
              <span>{errors.email && errors.email.message}</span>
              <span>{errors.password && errors.password.message}</span>
            </div>

            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-800 dark:text-gray-200"
                  >
                    Password
                  </label>
                  <Link
                    to="#"
                    className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Forget Password?
                  </Link>
                </div>

                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>

              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-200">
              Don't have an account?{" "}
            </span>

            <button
              onClick={() => dispatch(openSignupModal())}
              className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
