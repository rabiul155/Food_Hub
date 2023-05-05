import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import SingleReview from "./SingleReview";

const ServiceReviews = ({ servicesId }) => {
  const [status, setStatus] = useState(false);
  const { reviewRefresh } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://food-crunch-server.vercel.app/reviews?serviceId=${servicesId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setReviews(data.data);
      });
  }, [reviewRefresh]);

  return (
    <div className="py-3 md:py-7 lg:py-12">
      {status ? (
        <div>
          {reviews.length > 0 ? (
            <div className="md:grid grid-cols-2 gap-5 pb-10">
              {reviews.map((review, index) => (
                <SingleReview key={index} reviewItem={review}></SingleReview>
              ))}
            </div>
          ) : (
            <div className="bg-[#E32D6F] py-20 text-center mb-10 rounded-xl">
              <h3 className="font-semibold text-2xl capitalize">
                No reviews found
              </h3>
            </div>
          )}
        </div>
      ) : (
        <div className="w-16 h-16 m-auto border-4 border-dashed rounded-full animate-spin border-black"></div>
      )}
    </div>
  );
};

export default ServiceReviews;
