import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { AlertType, hideAlert } from "../store/slices/AlertSlice";

const Alert = () => {
  const [cls, setCls] = useState<string>("");
  const [cls2, setCls2] = useState<string>("");

  const { message, show, type } = useAppSelector((state) => state.alert);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (type === AlertType.SUCCESS) {
      setCls("bg-emerald-500");
      setCls2("text-emerald-500 dark:text-emerald-400");
    } else if (type === AlertType.ERROR) {
      setCls("bg-red-500");
      setCls2("text-red-500 dark:text-red-400");
    } else if (type === AlertType.INFO) {
      setCls("bg-blue-500");
      setCls2("text-blue-500 dark:text-blue-400");
    } else if (type === AlertType.WARNING) {
      setCls("bg-orange-500");
      setCls2("text-orange-500 dark:text-orange-400");
    }
  }, [type]);

  if (!show) return null;

  setTimeout(() => {
    dispatch(hideAlert());
  }, 3000);

  return (
    <div className="fixed top-4 right-2 z-50 flex w-96 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className={`flex items-center justify-center w-12 ${cls}`}>
        <svg
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
        </svg>
      </div>

      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
          <span className={`font-semibold ${cls2}`}>{type}</span>
          <p className="text-sm text-gray-600 dark:text-gray-200">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
