import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceItem = ({ serviceItem }) => {
  const { rating, price, service, image, description, _id } = serviceItem;
  const navigate = useNavigate();

  const ratingArray = [];
  for (let i = 0; i < rating; i++) {
    ratingArray.push(<FaStar className="text-[#FC7300] text-[15px]"></FaStar>);
  }

  return (
    <div className="overflow-hidden transition-shadow duration-300 h-[600px] bg-[#F9F9F9] rounded-lg shadow-xl  text-center mb-7">
      <PhotoProvider>
        <PhotoView src={image} className="h-[500px] w-[500px]">
          <img
            src={image}
            className="h-1/2 w-full m-auto rounded cursor-pointer p-5"
            alt=""
          />
        </PhotoView>
      </PhotoProvider>
      <div className="py-5">
        <div className="flex justify-center space-x-1 pb-4">
          {ratingArray.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </div>
        <Link
          to="/"
          aria-label="Article"
          className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          <p className="text-2xl font-bold leading-5 capitalize">{service}</p>
        </Link>
        <p className="mb-4 text-black p-2">
          {description.length > 100
            ? description.slice(0, 100) + "....."
            : description}
        </p>
        <h3 className="text-xl font-semibold">${price}</h3>
        <button
          onClick={() => navigate(`/serviceDetails/${_id}`)}
          className="bg-[#E32D6F] py-3 px-7 font-semibold flex rounded-full items-center mt-5 m-auto text-[15px hover:bg-black transition ease-in-out delay-150 duration-500 hover:text-white"
        >
          View Details{" "}
          <FaArrowRight className="ml-2 text-[12px]"></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default ServiceItem;
