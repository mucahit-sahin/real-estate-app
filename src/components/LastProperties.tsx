import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getLastProperties } from "../store/slices/PropertySlice";
import LastPropertyItem from "./LastPropertyItem";

const LastProperties = () => {
  const dispatch = useAppDispatch();
  const { lastProperties } = useAppSelector((state) => state.property);

  useEffect(() => {
    dispatch(getLastProperties());
  }, [dispatch]);

  if (!lastProperties) {
    return null;
  }

  return (
    <div className="flex flex-col max-w-5xl mx-3 sm:mx-auto my-4">
      {/* title */}
      <div className="flex mb-3">
        <span className="text-3xl font-bold">Popular Properties</span>
      </div>
      {/* Border */}
      <div className="bg-tango h-1 w-20 mb-3"></div>
      {/* list */}
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        {/* list item */}
        {lastProperties.map((property, index) => (
          <LastPropertyItem key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default LastProperties;
