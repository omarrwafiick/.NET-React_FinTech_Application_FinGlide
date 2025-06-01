import React from 'react'
import { Link } from 'react-router-dom'
import { FaHouseMedical, FaMoneyBillWave } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { GiCash } from "react-icons/gi";

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <nav className='p-6 shadow-2xl fixed min-h-screen'>
        <Link to='company-profile'><h6 className='flex justify-start items-center text-md pb-4 font-semibold capitalize opacity-80'><FaHouseMedical size={20} className='me-2' />home</h6></Link>
        <Link to='income-statement'><h6 className='flex justify-start items-center text-md pb-4 font-semibold capitalize opacity-80'><FaMoneyBillWave size={20} className='me-2'/>income statement</h6></Link> 
        <Link to='balance-sheet'><h6 className='flex justify-start items-centertext-md pb-4 font-semibold capitalize opacity-80'><TbReportAnalytics size={20} className='me-2'/>balance sheet</h6></Link> 
        <Link to='cashflow-statement'><h6 className='flex justify-start items-center text-md pb-4 font-semibold capitalize opacity-80'><GiCash size={20} className='me-2'/>cash flow statement</h6></Link> 
    </nav>
  )
}

export default Sidebar
