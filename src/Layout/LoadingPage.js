import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const LoadingPage = () => {
    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname
    
    useEffect(()=>{
        if(from){
           navigate(from,{ replace : true })
        }
        if(location.pathname==='/login' || location.pathname==='/register'){
            navigate("/")
        }
    },[])

    return (
        <div className='bg-white min-h-screen flex items-center justify-center'>
         <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin border-[#E32D6F]"></div>
        </div>
    );
};

export default LoadingPage;