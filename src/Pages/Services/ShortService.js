import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaServicestack } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Title from "../../Shared/Title";
import ServiceItem from "./ServiceItem";

const ShortService = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://food-crunch-server.vercel.app/services?size=3")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  const content = {
    head: "Quick pick",
    title: "Our services - food",
  };
  return (
    <>
      {services.length > 0 ? (
        <div className="py-6 md:py-16 px-5 md:px-16 xl:px-28 bg-[#F8FFDB]">
          <Title content={content}></Title>
          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <ServiceItem
                key={service._id}
                serviceItem={service}
              ></ServiceItem>
            ))}
          </div>
          <button
            onClick={() => navigate("/allservices")}
            className="bg-[#E32D6F] py-4 px-10 font-semibold flex rounded-full items-center mt-5 m-auto text-lg hover:bg-black hover:text-white transition ease-in-out delay-150 duration-300 "
          >
            See All{" "}
            <FaServicestack className="text-[13px] ml-2"></FaServicestack>
          </button>
        </div>
      ) : (
        <div className="min-h-[90vh] flex justify-center items-center">
          <div className="w-20 h-20 m-auto border-8 border-dashed rounded-full animate-spin border-[#E32D6F]"></div>
        </div>
      )}
    </>
  );
};

export default ShortService;
