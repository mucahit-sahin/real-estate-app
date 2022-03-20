import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPropertiesToList } from "../store/slices/PropertySlice";
import { useQuery } from "../utils/useQuery";
import ListItem from "./ListItem";
import Loading from "./Loading";
import Pagination from "./Pagination";

const List = () => {
  const dispatch = useAppDispatch();
  const query = useQuery();
  const { propertiesList, currentPage, numberofpages, loading } =
    useAppSelector((state) => state.property);
  const { maxBedrooms, maxPrice, minBedrooms, minPrice, propertyType } =
    useAppSelector((state) => state.filters);

  useEffect(() => {
    dispatch(
      getPropertiesToList({
        maxBedrooms,
        minBedrooms,
        maxPrice,
        minPrice,
        propertyType,
        page: query.get("page") ? Number(query.get("page")) : 1,
      })
    );
  }, [
    dispatch,
    maxBedrooms,
    minBedrooms,
    maxPrice,
    minPrice,
    propertyType,
    query,
  ]);

  return (
    <div
      className="overflow-scroll  md:flex-2 "
      style={{
        height: "calc(100vh - 124px)",
      }}
    >
      {propertiesList.map((property) => (
        <ListItem key={property._id} property={property} />
      ))}
      {/* pagination */}
      {numberofpages > 1 && (
        <Pagination
          currentPage={currentPage}
          numberofpages={numberofpages}
          url="rent"
        />
      )}
      {loading && <Loading />}
      {propertiesList.length === 0 && (
        <div className="text-center text-gray-500">No properties found.</div>
      )}
    </div>
  );
};

export default List;
