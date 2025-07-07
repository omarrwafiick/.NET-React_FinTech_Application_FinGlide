import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaMoneyBillWave } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { GiCash } from "react-icons/gi";
import { FaHouse } from 'react-icons/fa6';
import { ImProfile } from "react-icons/im";
import Logo from '../../assets/images/logo.png'

type Props = {}
const Sidebar = (props: Props) => {
  const location = useLocation();
  return (
    <nav className='p-4 border-e-2 border-black/5 fixed min-h-screen'>
        <Link to='/' className='flex justify-start items-center p-2.5'>
            <img className='h-12' src={Logo} alt="logo" />
            <h3 className='text-2xl ms-1 font-semibold'>FinGlide</h3>
        </Link> 
        <Link to="/"
          className={`flex justify-start mt-3 hover:bg-[#34AFFB]/30 items-center text-md p-2.5 rounded-md font-semibold capitalize opacity-80 duration-200`}>
            {FaHouse({ size: 20, className: 'me-2' })}home</Link>
            
        <Link
          to="company-profile"
          className={`flex justify-start items-center text-md p-2.5 rounded-md font-semibold capitalize opacity-80 duration-200 ${
            location.pathname.includes('company-profile')
              ? 'bg-[#34AFFB]/90 text-white'
              : 'bg-white hover:bg-[#34AFFB]/30'
          }`}
        >
          {ImProfile({ size: 20, className: 'me-2' })} profile
        </Link>

        <Link
          to="balance-sheet"
          className={`flex justify-start items-center text-md p-2.5 rounded-md font-semibold capitalize opacity-80 duration-200 ${
            location.pathname.includes('balance-sheet')
              ? 'bg-[#34AFFB]/90 text-white'
              : 'bg-white hover:bg-[#34AFFB]/30'
          }`}
        >
          {TbReportAnalytics({size:20, className:'me-2' })}balance sheet
        </Link>

        <Link
          to="income-statement"
          className={`flex justify-start items-center text-md p-2.5 rounded-md font-semibold capitalize opacity-80 duration-200 ${
            location.pathname.includes('income-statement')
              ? 'bg-[#34AFFB]/90 text-white'
              : 'bg-white hover:bg-[#34AFFB]/30'
          }`}
        >
          {FaMoneyBillWave({size:20, className:'me-2' })}income statement
        </Link>

        <Link
          to="cashflow-statement"
          className={`flex justify-start items-center text-md p-2.5 rounded-md font-semibold capitalize opacity-80 duration-200 ${
            location.pathname.includes('cashflow-statement')
              ? 'bg-[#34AFFB]/90 text-white'
              : 'bg-white hover:bg-[#34AFFB]/30'
          }`}
        >
          {GiCash ({size:20, className:'me-2' })}cash flow statement
        </Link>
    </nav>
  )
}

export default Sidebar
