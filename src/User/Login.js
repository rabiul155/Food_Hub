import React from 'react';
import { FaKey, FaMailBulk } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import SocialLogin from './SocialLogin';
import useTitle from '../Hook/useTitle';


const Login = () => {
  const { userSignIn } = useContext(AuthContext)

  useTitle('Login')

  let navigate = useNavigate()

  let location = useLocation()

  let from = location.state?.from?.pathname || "/";



  // user login

  const userSignInHandle = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (email && password) {
      userSignIn(email, password)
        .then(result => {
          navigate(from, { replace: true });
          toast.success("Login successfull")
          form.reset()

        })
        .catch(error => {
          toast.error(error.message)
        })
    }
  }

  return (
    <div >

      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="p-4 mx-auto sm:max-w-xl md:max-w-full  ">
          <div className="flex flex-col-reverse items-center justify-start lg:flex-row ">
            <div className="w-full max-w-xl xl:px-8  mx-auto lg:w-5/12">
              <div className="bg-[#E32D6F] rounded shadow-2xl p-8">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Login
                </h3>
                <form onSubmit={userSignInHandle}>
                  <div className="mb-1 sm:mb-2">
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
                      className="inline-flex items-center justify-center w-full py-3 px-6 font-semibold tracking-wide text-white transition duration-200 rounded-full shadow-md outline-none bg-black hover:bg-gray-700 "
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div>
                  <h3 className='text-center font-semibold text-xl py-2'>Or</h3>
                  <SocialLogin></SocialLogin>
                  <p className="text-xs text-[#2b2b2b] sm:text-sm mt-5">
                    Create an account? <Link to="/register" className='font-semibold'> Register Now</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;