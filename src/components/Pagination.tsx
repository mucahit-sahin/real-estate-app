import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Pagination = ({
  numberofpages,
  currentPage,
  url,
}: {
  numberofpages: number;
  currentPage: number;
  url: string;
}) => {
  const navigate = useNavigate();

  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= numberofpages; i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <Link
          key={number}
          to={"/" + url + "?page=" + number}
          className={`px-4 py-2 mx-1  transition-colors duration-200 transform ${
            currentPage === number
              ? "bg-tango text-white"
              : "bg-white text-gray-500"
          } rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-opacity-70 hover:text-gray-700 dark:hover:text-white`}
        >
          {number}
        </Link>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    if (currentPage < numberofpages) {
      navigate(`/${url}?page=${Number(currentPage) + 1}`);

      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  };

  const handlePrevbtn = () => {
    if (currentPage > 1) {
      navigate(`/${url}?page=${currentPage - 1}`);

      if ((currentPage - 1) % pageNumberLimit === 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handlePrevbtn}
        className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-900 dark:text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {minPageNumberLimit >= 1 && (
        <span className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-tango dark:hover:bg-tango hover:text-white dark:hover:text-gray-200">
          ...
        </span>
      )}
      {renderPageNumbers}
      {numberofpages > maxPageNumberLimit && (
        <span className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:bg-tango dark:hover:bg-tango hover:text-white dark:hover:text-gray-200">
          ...
        </span>
      )}
      <button
        onClick={handleNextbtn}
        className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-900 dark:text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
