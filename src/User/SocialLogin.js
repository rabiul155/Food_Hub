import React from 'react';
import { useContext } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import googleImg from '../assets/images/google.png'
import { AuthContext } from '../Context/AuthProvider';
import { jwtToken } from '../JWTToken/JWTToken';

const SocialLogin = () => {
    const {signWithGoogle,setLoading} = useContext(AuthContext)
    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const navigation =()=>{
        navigate(from,{replace:true});
    }

    const signWithGoogleHandle=()=>{
        signWithGoogle()
        .then(result=>{
            toast.success("Login successfull",{autoClose:1000})
            jwtToken(result.user.email,navigation)
        })
        .catch(err=>{
            setLoading(false)
            toast.error(err.message,{autoClose:1500})
        })
    }

    return (
             <div className='relative '>
                <div className='absolute left-4 top-[20%] text-black' >
                    <img src={googleImg} alt="" className='w-[30px]' />
                </div>
                <button
                onClick={signWithGoogleHandle}
                className="py-3 w-full bg-white border border-gray-300 rounded-full shadow-sm flex-grow px-4   font-semibold  outline-none pl-12 bg-none"
                >SignIn With Google</button>
            </div>
    );
};

export default SocialLogin;