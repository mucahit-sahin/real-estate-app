import { Link } from "react-router-dom";
import { Property } from "../types/propertyTypes";

const LastPropertyItem = ({ property }: { property: Property }) => {
  return (
    <Link
      to={"/property/" + property._id}
      className="flex flex-col w-full p-2 shadow shadow-slate-300 hover:shadow-slate-400 transition duration-500 ease-in-out"
    >
      <img
        src="https://bostadsportal-se.imgix.net/fd85dfc6efb6f59f7265d9c4d9884d03?auto=compress,enhance,format&h=590"
        alt="property"
        className="w-full h-64 object-cover"
      />
      {/* location */}
      <div className="flex flex-col">
        <span className="text-base ">{property.city}</span>
        <span className="text-sm ">{property.country}</span>
      </div>
      {/* bedroom and bathroom */}
      <div className="flex flex-row">
        <span className="text-sm ">{property.bedrooms} Bedrooms</span>
        <span className="text-sm ">{property.bathrooms} Bathrooms</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-base font-bold">
          {property.squareMeters} m<sup>2</sup>
        </span>
        <span className="text-base font-bold">$ {property.price}</span>
      </div>
    </Link>
  );
};

export default LastPropertyItem;
