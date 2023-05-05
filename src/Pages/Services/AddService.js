import React from "react";
import Lottie from "lottie-react";
import food from "../../assets/LottieAnimation/food.json";
import { useState } from "react";
import { toast } from "react-toastify";
import useTitle from "../../Hook/useTitle";
import { useEffect } from "react";

const AddService = () => {
  useTitle("AddService");
  const [formData, setFormData] = useState({
    service: "",
    price: 0,
    rating: 0,
    description: "",
    image: "",
  });
  const { service, price, rating, description, image } = formData;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // get input value
  const handleInputData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  // user login
  const serviceAddHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const services = {
      service,
      price,
      rating,
      description,
      image,
    };

    if (service && price && rating && description && image) {
      fetch("https://food-crunch-server.vercel.app/services", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(services),
      })
        .then((res) => res.json())
        .then((data) => {
          form.reset();
          toast.success("Service added successfull", { autoClose: 1000 });
        });
    } else {
      toast.error("Please provide us all valid information", {
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWF0aW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 min-h-screen">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="text-center xl:flex-row">
            <div className="w-full xl:px-8 md:w-10/12 lg:w-8/12 m-auto">
              <div className="bg-[#E32D6F] rounded shadow-2xl p-2 sm:p-10">
                <div className=" w-4/12 m-auto">
                  {<Lottie animationData={food} loop={true}></Lottie>}
                </div>
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Add a Service
                </h3>
                <form onSubmit={serviceAddHandle}>
                  <div className="mb-1 sm:mb-2">
                    <div className="relative  mb-3">
                      <input
                        onBlur={handleInputData}
                        placeholder="Service name"
                        required
                        type="text"
                        className="py-3 w-full bg-white border border-gray-300 rounded-md shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="service"
                        name="service"
                      />
                    </div>
                    <div className="relative  mb-3">
                      <input
                        onBlur={handleInputData}
                        placeholder="Service Image URL"
                        required
                        type="text"
                        className="py-3 w-full bg-white border border-gray-300 rounded-md shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="image"
                        name="image"
                      />
                    </div>
                    <div className="relative mb-3">
                      <input
                        onBlur={handleInputData}
                        placeholder="Price"
                        required
                        type="number"
                        className="py-3 w-full bg-white border border-gray-300 rounded-md shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="price"
                        name="price"
                      />
                    </div>
                    <div className="relative  mb-3">
                      <input
                        onBlur={handleInputData}
                        placeholder="Rating"
                        required
                        type="number"
                        className="py-3 w-full bg-white border border-gray-300 rounded-md shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                        id="rating"
                        name="rating"
                      />
                    </div>
                    <textarea
                      onBlur={handleInputData}
                      name="description"
                      id="description"
                      cols="30"
                      rows="3"
                      placeholder="Description..."
                      className="py-3 w-full bg-white border border-gray-300 rounded-md shadow-sm flex-grow px-10  transition duration-200 placeholder:text-black font-medium  outline-none bg-none"
                    ></textarea>
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full py-4 px-6 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black"
                    >
                      Add Service
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
