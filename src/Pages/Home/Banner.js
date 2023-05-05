import React from 'react';
import bannerImg from '../../assets/images/logo1.png'
import bannerBack from '../../assets/images/bannerBackground.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative">
        {/* <img
          src="https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        /> */}
        <div className="relative bg-[#EBC7E6]">
          <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl w-full md:px-24 lg:px-8  lg:py-5">
            <div className="lg:grid w-full grid-cols-12 items-center justify-between xl:flex-row">
              <div className="w-full col-span-4 mb-12 xl:mb-0 text-white">
                <h2 className="mb-6 font-sans lg:text-6xl font-bold tracking-tight sm:text-4xl text-3xl sm:leading-none">
                <span className="lg:-ml-8 -ml-2 font-bold tracking-wide text-black">
                Food<span className='text-[#E32D6F]'>Crunch</span>
              </span><br></br>
                <span className='text-[#E32D6F]'>Home Delivery</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-black  md:text-lg">
                Homemade food is usually prepared with natural ingredients compared to commercially prepared food. Plainly, the food has its taste however those are ready using unprocessed foods that are by no means healthy.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 bg-[#E32D6F] px-10 py-4 rounded-full text-black"
                >
                  Learn more
                </Link>
              </div>
              <div className="w-full col-span-8 xl:px-8 ">
              <img src={bannerImg} alt="bannerImages" className='w-full'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;