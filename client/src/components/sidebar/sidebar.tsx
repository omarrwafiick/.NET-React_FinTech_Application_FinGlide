import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { GiCash } from "react-icons/gi";
import { TbReportAnalytics } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <nav>
        <Link to='/company-profile'><FaHome /><h6>home</h6></Link>
        <Link to='/income-statement'><FaMoneyBillTransfer /><h6>income statement</h6></Link> 
        <Link to='/balance-sheet'><TbReportAnalytics /><h6>balance sheet</h6></Link> 
        <Link to='/cashflow-statement'><GiCash /><h6>cash flow statement</h6></Link> 
    </nav>
  )
}

export default Sidebar
