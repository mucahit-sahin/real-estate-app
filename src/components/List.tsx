import React from "react";
import ListItem from "./ListItem";

const List = () => {
  return (
    <div
      className="overflow-scroll  md:flex-2 "
      style={{
        height: "calc(100vh - 124px)",
      }}
    >
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default List;
