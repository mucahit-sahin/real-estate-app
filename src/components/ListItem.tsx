import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { Property } from "../types/propertyTypes";

const ListItem = ({ property }: { property: Property }) => {
  const {
    title,
    price,
    phoneNumber,
    address,
    isCatfriendly,
    isDogfriendly,
    isSmokingfriendly,
  } = property;

  const catFriendly = isCatfriendly ? "Cat friendly" : "";
  const dogFriendly = isDogfriendly ? "Dog friendly" : "";
  const smokingFriendly = isSmokingfriendly ? "Smoking friendly" : "";

  return (
    <div className="flex flex-col m-2 rounded shadow ">
      <div className="flex flex-row p-2 border-b-2">
        <div className="flex flex-col">
          <span className="font-bold text-base">{title}</span>
          <span className=" text-sm">{address}</span>
        </div>
        <div className="flex flex-col justify-center ml-auto">
          {/* Favorite */}
          <AiOutlineHeart size={24} />
        </div>
      </div>
      <div className="flex flex-row h-64 p-2">
        {/* Images */}
        <Swiper
          className="flex-2 flex flex-col items-center justify-center "
          modules={[Pagination]}
          pagination={true}
        >
          <SwiperSlide className="w-full h-full">
            <img
              className="w-full h-full object-contain"
              src="https://bostadsportal-se.imgix.net/fd85dfc6efb6f59f7265d9c4d9884d03?auto=compress,enhance,format&h=590"
              alt="place"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img
              className="w-full h-full object-contain"
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
              alt="place"
            />
          </SwiperSlide>
        </Swiper>
        {/* Content */}
        <div className=" flex-1  flex flex-col p-2">
          <h3 className="flex-1 text-xl font-bold">${price}</h3>
          <span className="flex-1 text-tango text-base">
            {property.bedrooms + " Bedrooms"}
          </span>
          <span className="flex-2 text-tango text-sm">
            {catFriendly} {dogFriendly} {smokingFriendly}
          </span>
          <span className="flex-1 flex flex-row items-center text-tango text-base">
            <FiPhoneCall className="mr-1" />
            {phoneNumber}
          </span>
          <button className="bg-tango text-white py-2 px-4 mt-auto  rounded">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
