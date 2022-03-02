import React from "react";
import { useAppSelector } from "../store/hooks";
import ListItem from "./ListItem";

const List = () => {
  const { properties } = useAppSelector((state) => state.property);
  return (
    <div
      className="overflow-scroll  md:flex-2 "
      style={{
        height: "calc(100vh - 124px)",
      }}
    >
      {properties.map((property) => (
        <ListItem key={property._id} property={property} />
      ))}
      {properties.length === 0 && (
        <div className="text-center text-gray-500">No properties found.</div>
      )}
    </div>
  );
};

export default List;
