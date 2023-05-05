import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Hook/useTitle";
import SingleMyReview from "./SingleMyReview";

const MyReviews = () => {
  const { user, myReviewRefresh, logOut } = useContext(AuthContext);
  const [status, setStatus] = useState(false);
  const [reviews, setReviews] = useState([]);

  useTitle("MyReview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(
      `https://food-crunch-server.vercel.app/myreviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("FoodCrunch-Token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          toast.error("Unauthoroized user", { autoClose: 1000 });
          logOut();
        }
        return res.json();
      })
      .then((data) => {
        setStatus(data.status);
        setReviews(data.data);
      });
  }, [myReviewRefresh]);

  return (
    <>
      {status ? (
        <div className="py-6 md:py-16 px-5 md:px-16 xl:px-28 bg-[#F8FFDB]">
          {reviews.length > 0 ? (
            <div className="md:grid grid-cols-2 gap-10 ">
              {reviews.map((review, index) => (
                <SingleMyReview
                  key={index}
                  reviewItem={review}
                ></SingleMyReview>
              ))}
            </div>
          ) : (
            <div className="bg-[#E32D6F] py-20 px-5 md:px-16 xl:px-28 text-center rounded-xl">
              <h3 className="font-semibold text-2xl capitalize">
                No reviews were added
              </h3>
            </div>
          )}
        </div>
      ) : (
        <div className="min-h-[90vh] flex justify-center items-center">
          <div className="w-20 h-20 m-auto border-8 border-dashed rounded-full animate-spin border-[#E32D6F]"></div>
        </div>
      )}
    </>
  );
};

export default MyReviews;
