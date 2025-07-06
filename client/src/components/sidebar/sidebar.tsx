import React from 'react'
import { Link } from 'react-router-dom'
import { FaMoneyBillWave } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { GiCash } from "react-icons/gi";
import { FaHouse } from 'react-icons/fa6';
import { ImProfile } from "react-icons/im";
import Logo from '../../assets/images/logo.png'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <nav className='p-4 border-e-2 border-black/5 fixed min-h-screen'>
        <Link to='/' className='flex justify-start items-center mt-4 p-2.5'>
            <img className='h-12' src={Logo} alt="logo" />
            <h3 className='text-2xl ms-1 font-semibold'>FinGlide</h3>
        </Link> 
        <Link to='/'><h6 className='flex mt-6 justify-start items-center text-md p-2.5 rounded-md hover:bg-gray-200 duration-200 font-semibold capitalize opacity-80'>{FaHouse({ size: 20, className: 'me-2' })}home</h6></Link>
        <Link to='company-profile'><h6 className='flex justify-start items-center text-md p-2.5 rounded-md hover:bg-gray-200 duration-200 font-semibold capitalize opacity-80'>{ImProfile({ size: 20, className: 'me-2' })}profile</h6></Link>
        <Link to='balance-sheet'><h6 className='flex justify-start items-center text-md p-2.5 rounded-md hover:bg-gray-200 duration-200 font-semibold capitalize opacity-80'>{TbReportAnalytics({size:20, className:'me-2' })}balance sheet</h6></Link> 
        <Link to='income-statement'><h6 className='flex justify-start items-center text-md p-2.5 rounded-md hover:bg-gray-200 duration-200 font-semibold capitalize opacity-80'>{FaMoneyBillWave({size:20, className:'me-2' })}income statement</h6></Link> 
        <Link to='cashflow-statement'><h6 className='flex justify-start items-center text-md p-2.5 rounded-md hover:bg-gray-200 duration-200 font-semibold capitalize opacity-80'>{GiCash ({size:20, className:'me-2' })}cash flow statement</h6></Link> 
    </nav>
  )
}

export default Sidebar
