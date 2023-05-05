import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar'
import LoadingPage from './LoadingPage';

const Main = () => {
  const {loading} = useContext(AuthContext)
 
    return (
        <div className='font-heebo'>
          {
            loading ? 
             <LoadingPage></LoadingPage> : 
             <>
             <Navbar></Navbar>
             <Outlet></Outlet>
             <Footer></Footer>
             </>
          }
        </div>
    );
};

export default Main;