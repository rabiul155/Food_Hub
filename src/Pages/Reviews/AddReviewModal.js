import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import DateObject from "react-date-object";

const AddReviewModal = ({ services }) => {
  const { user, reviewRefresh, setReviewRefresh } = useContext(AuthContext);
  const { service, _id, image } = services;

  const date = new DateObject();
  const [reviewData, setReviewData] = useState({
    ratings: 5,
  });
  const { ratings, review } = reviewData;

  // get input value
  const handleInputData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleReviewData = (event) => {
    event.preventDefault();
    const form = event.target;

    const reviewer = {
      serviceId: _id,
      review,
      rating: ratings,
      serviceName: service,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      date: date.format("YYYY/MM/DD hh:mm a"),
      serviceImg: image,
    };

    if (ratings && review) {
      fetch("https://food-crunch-server.vercel.app/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviewer),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setReviewRefresh(!reviewRefresh);
            toast.success("Review added successfull", { autoClose: 1000 });
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
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box text-black">
          {user ? (
            <div>
              <h3 className="font-bold text-lg mb-3 text-[#E32D6F]">
                Give a Review
              </h3>
              <div>
                <form onSubmit={handleReviewData}>
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
                        defaultValue={5}
                        type="number"
                        className="py-3 w-full bg-white border border-gray-300 rounded-lg shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium outline-none bg-none"
                        id="ratings"
                        name="ratings"
                      />
                    </div>
                    <textarea
                      onBlur={handleInputData}
                      name="review"
                      id="review"
                      cols="30"
                      rows="3"
                      placeholder="Type Review...."
                      className="py-3 w-full bg-white border border-gray-300 rounded-lg shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none bg-none"
                    ></textarea>
                    <div className="flex justify-end items-center">
                      <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">
                          Cancel
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn mt-5 ml-2 bg-[#E32D6F] border-none"
                      >
                        Submit
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
                className="font-semibold text-xl bg-[#E32D6F] px-10 py-3 rounded-lg mt-5 inline-block"
              >
                Login
              </Link>
              <div className="modal-action mt-10">
                <label htmlFor="my-modal" className="btn">
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

export default AddReviewModal;
