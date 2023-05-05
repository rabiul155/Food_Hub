import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";

const UpdateReview = ({ reviewItem }) => {
  const { user, myReviewRefresh, setMyReviewRefresh, logOut } =
    useContext(AuthContext);
  const { _id, serviceName, review, rating } = reviewItem;

  const [reviewData, setReviewData] = useState({
    reviews: review,
    ratings: rating,
  });
  const { ratings, reviews } = reviewData;

  // get input value
  const handleInputData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleUpdateReview = (event) => {
    event.preventDefault();
    const form = event.target;

    const reviewer = {
      review: reviews,
      rating: ratings,
    };

    if (ratings && reviews) {
      fetch(`https://food-crunch-server.vercel.app/myreviews/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("FoodCrunch-Token")}`,
        },
        body: JSON.stringify(reviewer),
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            toast.error("Unauthoroized user", { autoClose: 1000 });
            logOut();
          }
          return res.json();
        })
        .then((data) => {
          if (data.modifiedCount > 0) {
            setMyReviewRefresh(!myReviewRefresh);
            toast.success("Review update successfull", { autoClose: 1000 });
            form.reset();
          }
        })
        .catch((error) => toast.error(error.message, { autoClose: 1000 }));
    } else {
      toast.error("your review not found,Please provide us valid information", {
        autoClose: 1000,
      });
    }
  };

  return (
    <div>
      <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box text-black overflow-y-visible">
          {user ? (
            <div>
              <h3 className="font-bold text-lg mb-3 text-[#E32D6F]">
                {" "}
                Update your review for "{serviceName}"
              </h3>
              <div>
                <form onSubmit={handleUpdateReview}>
                  <div className="mb-1 sm:mb-2">
                    <div className="mb-3">
                      <label
                        htmlFor="rating"
                        className="font-semibold mb-2 inline-block"
                      >
                        Add a Rating :{" "}
                      </label>
                      <input
                        onBlur={handleInputData}
                        placeholder="Ratings"
                        required
                        defaultValue={rating}
                        type="number"
                        className="py-3 w-full bg-white border border-gray-300 rounded-lg shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium outline-none bg-none"
                        id="ratings"
                        name="ratings"
                      />
                    </div>
                    <textarea
                      onBlur={handleInputData}
                      name="reviews"
                      id="reviews"
                      cols="30"
                      rows="3"
                      defaultValue={review}
                      placeholder="Type Review...."
                      className="py-3 w-full bg-white border border-gray-300 rounded-lg shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none bg-none"
                    ></textarea>
                    <div className="flex justify-end items-center">
                      <div className="modal-action">
                        <label htmlFor={`my-modal-${_id}`} className="btn">
                          Cancel
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn mt-5 ml-2 bg-[#E32D6F] border-none"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="font-semibold text-2xl pt-5">
                Please login to add a review
              </h3>
              <Link
                to="/login"
                className="font-semibold text-xl bg-yellow px-10 py-3 rounded-lg mt-5 inline-block"
              >
                Login
              </Link>
              <div className="modal-action mt-10">
                <label htmlFor={`my-modal-${_id}`} className="btn">
                  Cancel
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
