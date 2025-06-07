import React from 'react'
import { Link } from 'react-router-dom'
import { FaMoneyBillWave } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { GiCash } from "react-icons/gi";
import { FaHouse } from 'react-icons/fa6';

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <nav className='p-4 border-e-2 border-black/5 fixed min-h-screen'>
        <Link to='company-profile'><h6 className='flex mt-20 justify-start items-center text-md p-2.5 rounded-md hover:bg-gray-200 duration-200 font-semibold capitalize opacity-80'>{FaHouse({ size: 20, className: 'me-2' })}profile</h6></Link>
        <Link to='balance-sheet'><h6 className='flex justify-start items-center text-md p-2.5 rounded-md hover:bg-gray-200 duration-200 font-semibold capitalize opacity-80'>{TbReportAnalytics({size:20, className:'me-2' })}balance sheet</h6></Link> 
        <Link to='income-statement'><h6 className='flex justify-start items-center text-md p-2.5 rounded-md hover:bg-gray-200 duration-200 font-semibold capitalize opacity-80'>{FaMoneyBillWave({size:20, className:'me-2' })}income statement</h6></Link> 
        <Link to='cashflow-statement'><h6 className='flex justify-start items-center text-md p-2.5 rounded-md hover:bg-gray-200 duration-200 font-semibold capitalize opacity-80'>{GiCash ({size:20, className:'me-2' })}cash flow statement</h6></Link> 
    </nav>
  )
}

export default Sidebar
