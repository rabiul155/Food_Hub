import React from "react";

const About = () => {
  return (
    <div className="text-gray-50 px-5 bg-[#F8FFDB]">
      <div className="grid grid-cols-12 mx-auto">
        <div className="flex flex-col justify-center col-span-12 align-middle  lg:col-span-6 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1632911943189-bdcecf8b1fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-4xl text-black lg:text-5xl mb-10 font-bold lg:leading-[60px]">
              Sit at Home <br></br>
              <span className="text-[#E32D6F]"> We Will Take Care</span>
            </h1>
            <div className="sm:grid sm:grid-cols-2  xl:grid-cols-4  gap-5 bg-[#E32D6F] justify-between p-10 my-16 rounded-xl text-black text-center mb-10">
              <div className="py-5">
                <img
                  src="https://i.ibb.co/W6jSxbC/fast-delivery.png"
                  alt=""
                  className="w-[60px] m-auto"
                />
                <div className="font-bold  mt-5">
                  <p>Fast Delivery</p>
                  <p>in 1 Hour</p>
                </div>
              </div>
              <div className="py-5">
                <img
                  src="https://i.ibb.co/3YnWgQ9/booking.png"
                  alt=""
                  className="w-[60px] m-auto"
                />
                <div className="font-bold  mt-5">
                  <p>Amazing</p>
                  <p>Mobile App</p>
                </div>
              </div>
              <div className="py-5">
                <img
                  src="https://i.ibb.co/Fb8fFrv/pin.png"
                  alt=""
                  className="w-[60px] m-auto"
                />
                <div className="font-bold  mt-5">
                  <p>Wide</p>
                  <p>Coverage Map</p>
                </div>
              </div>
              <div className="py-5">
                <img
                  src="https://i.ibb.co/THKGJkr/fast-delivery-1.png"
                  alt=""
                  className="w-[60px] m-auto"
                />
                <div className="font-bold  mt-5">
                  <p>More Than</p>
                  <p>150 Couriers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
