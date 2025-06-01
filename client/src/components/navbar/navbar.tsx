import React from 'react'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import RegularButton from '../button/regularButton'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='flex justify-center items-center w-full min-h-14 p-4'> 
      <div className='flex justify-between w-9/12'>
        <div className='flex justify-center items-center'>
          <Link to='/' className='flex justify-center items-center'>
            <img className='h-12' src={Logo} alt="logo" />
            <h3 className='text-2xl ms-1 font-semibold'>FinGlide</h3>
          </Link>
          <Link to='/portfolio' className='ms-12 capitalize text-md font-medium opacity-85'><a>portfolio</a></Link>
          <Link to='/search' className='ms-6 capitalize text-md font-medium opacity-85'><a>search</a></Link>
        </div> 
        <div>
           <RegularButton navigateTo='/login' title="login" variant='outline' />
           <a className='m-1'></a>
           <RegularButton navigateTo='/signup' title="signup" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar