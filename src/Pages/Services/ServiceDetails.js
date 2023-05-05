import React from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hook/useTitle";
import Title from "../../Shared/Title";
import AddReviewModal from "../Reviews/AddReviewModal";
import ServiceReviews from "../Reviews/ServiceReviews";

const ServiceDetails = () => {
  const services = useLoaderData().data;
  const { price, rating, image, service, _id, description } = services;

  useTitle("ServiceDetails");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ratingArray = [];
  for (let i = 0; i < rating; i++) {
    ratingArray.push(<FaStar className="text-[#FC7300] text-[18px]"></FaStar>);
  }
  const content = {
    head: "Quick pick",
    title: "Reviews",
  };

  return (
    <div className="px-5 md:px-16 xl:px-28 bg-[#F8FFDB]">
      <div className=" text-gray-700 py-16">
        <div className="container sm:grid grid-cols-12 gap-10 mx-auto">
          <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover  md:col-span-5 lg:h-auto">
            <img src={image} alt="" className="w-full" />
          </div>
          <div className="flex flex-col col-span-12 py-6 divide-y md:col-span-7 lg:p-10 ">
            <div className="pt-6 pb-4 space-y-2">
              <h2 className="text-3xl font-bold capitalize">{service}</h2>
              <h3 className="text-xl font-bold">${price}</h3>
              <div className="flex space-x-1 pb-4">
                {ratingArray.map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      {/* review secition */}
      <section>
        <Title content={content}></Title>
        <div className="text-center m-auto pb-10">
          <label htmlFor="my-modal" className="btn px-16">
            Add a Review
          </label>
        </div>
        <ServiceReviews servicesId={_id}></ServiceReviews>
      </section>
      <AddReviewModal services={services}></AddReviewModal>
    </div>
  );
};

export default ServiceDetails;
