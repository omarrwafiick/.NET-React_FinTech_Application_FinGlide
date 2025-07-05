import React, { useContext } from 'react'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import RegularButton from '../button/regularButton'
import { UserContext, UserContextType } from '../../context/useAuth'
import { useLocation } from 'react-router-dom' 

const Navbar = () => {
  const { isLoggedIn, logoutUser, user } = useContext<UserContextType>(UserContext);
  const location = useLocation();

  return (
    <>
      {(["/", "/search"].includes(location.pathname) || location.pathname.startsWith("/company")) && (
        <nav className='flex fixed bg-white z-10 justify-center items-center w-full min-h-14 p-4'> 
          <div className='flex justify-between w-9/12'>
            <div className='flex justify-center items-center'>
              <Link to='/' className='flex justify-center items-center'>
                <img className='h-12' src={Logo} alt="logo" />
                <h3 className='text-2xl ms-1 font-semibold'>FinGlide</h3>
              </Link> 
              <Link to='/' className='ms-12 capitalize text-md font-medium opacity-80'>home</Link>
              <Link to='/search' className='ms-6 capitalize text-md font-medium opacity-80'>search</Link>
            </div> 
            <div>
              {isLoggedIn() ? (
                <> 
                  <span className='text-lg opacity-90 me-8'>
                    <a className='capitalize'>welcome : </a> <span className='font-semibold opacity-85'>{user.userName}</span>
                  </span>
                  <RegularButton onClick={logoutUser} navigateTo='/login' title="logout" variant='outline' />
                </>
              ) : (
                <>
                  <RegularButton navigateTo='/login' title="login" variant='outline' />
                  <span className='m-1'></span>
                  <RegularButton navigateTo='/signup' title="signup" />
                </>
              )}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar
