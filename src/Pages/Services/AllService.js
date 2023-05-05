import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useTitle from "../../Hook/useTitle";
import Title from "../../Shared/Title";
import ServiceItem from "./ServiceItem";

const AllService = () => {
  const [services, setServices] = useState([]);
  const [status, setStatus] = useState(false);
  const [size, setSize] = useState(6);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);

  useTitle("Services");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(
      `https://food-crunch-server.vercel.app/services?productSize=${size}&pageSize=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCount(data.count);
        setServices(data.data);
        window.scrollTo(0, 0);
      })
      .catch((err) => console.log(err.message));
  }, [size, page]);

  const pages = Math.ceil(count / size);

  const content = {
    head: "Quick pick",
    title: "Choose Your Favourite Food",
  };
  return (
    <>
      {status ? (
        <div className="py-6 md:py-16 px-5 md:px-16 xl:px-28 bg-[#F8FFDB]">
          <Title content={content}></Title>
          {services.length > 0 ? (
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
              {services.map((service) => (
                <ServiceItem
                  key={service._id}
                  serviceItem={service}
                ></ServiceItem>
              ))}
            </div>
          ) : (
            <div className="bg-[#E32D6F] py-20 px-5 md:px-16 xl:px-28 text-center rounded-xl mb-10">
              <h3 className="font-semibold text-2xl capitalize">
                No Service found ,search another page
              </h3>
            </div>
          )}
          <p className="text-center mb-4 text-gray-400">
            current page {page + 1} and size {size}
          </p>
          <div className="flex justify-center space-x-1 dark:text-gray-100">
            {[...Array(pages).keys()].map((number, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setPage(number)}
                  type="button"
                  title="Page 1"
                  className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md outline-none ${
                    page === number ? "bg-[#E32D6F]" : undefined
                  }`}
                >
                  {number + 1}
                </button>
              );
            })}
            <select
              onChange={(event) => setSize(event.target.value)}
              defaultValue={size}
              className="inline-flex items-center justify-center px-4 h-8 text-sm font-semibold border rounded shadow-md outline-none"
            >
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="min-h-[90vh] flex justify-center items-center">
          <div className="w-20 h-20 m-auto border-8 border-dashed rounded-full animate-spin border-[#E32D6F]"></div>
        </div>
      )}
    </>
  );
};

export default AllService;
