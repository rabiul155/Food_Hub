import React from 'react';
import { FaCamera, FaKey, FaMailBulk, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import SocialLogin from './SocialLogin';
import useTitle from '../Hook/useTitle';

const Register = () => {

  const { createUser, updateUserProfile } = useContext(AuthContext)

  useTitle('Register')

  const navigate = useNavigate()



  // create user
  const createUserHandle = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, photo, password);


    createUser(email, password)
      .then(result => {
        updateProfileHandle(name, photo)
        toast.success("Register successfull,please log in")
        navigate('/')
      })
      .catch(error => {
        toast.error(error.message)
      })

  }

  // update user profile
  const updateProfileHandle = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo
    }
    updateUserProfile(profile)
      .then(result => { })
      .catch(error => toast.error(error.message))
  }


  return (
    <div >
      <div className=" bg-gray-900 bg-opacity-70">
        <div className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <div className="w-full max-w-xl xl:px-8 mx-auto lg:w-5/12">
            <div className="bg-[#E32D6F] rounded shadow-2xl p-8">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Register
              </h3>
              <form onSubmit={createUserHandle}>
                <div className="mb-1 sm:mb-2">
                  <div className='relative  mb-3'>
                    <FaUser className='absolute left-4 top-[30%] text-black '></FaUser>
                    <input

                      placeholder="Username"
                      required
                      type="text"
                      className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                      id="userName"
                      name="name"
                    />
                  </div>
                  <div className='relative  mb-3'>
                    <FaMailBulk className='absolute left-4 top-[30%] text-black '></FaMailBulk>
                    <input

                      placeholder="email"
                      required
                      type="email"
                      className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className='relative mb-3'>
                    <FaCamera className='absolute left-4 top-[30%] text-black '></FaCamera>
                    <input

                      placeholder="photoURL"
                      required
                      type="text"
                      className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                      id="photoURL"
                      name="photoURL"
                    />
                  </div>
                  <div className='relative mb-3'>
                    <FaKey className='absolute left-4 top-[30%] text-black '></FaKey>
                    <input

                      placeholder="password"
                      required
                      type="password"
                      className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4  transition duration-200 placeholder:text-black font-medium  outline-none pl-12 bg-none"
                      id="password"
                      name="password"
                    />
                  </div>
                </div>

                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full py-3 px-6 font-medium hover:bg-gray-700 tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div>
                <h3 className='text-center font-semibold text-xl py-2'>Or</h3>
                <SocialLogin></SocialLogin>
                <p className="text-xs text-[#2b2b2b] sm:text-sm mt-5">
                  Already have an account ? <Link to="/login" className='font-semibold'> Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;