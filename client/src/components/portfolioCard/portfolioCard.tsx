import React from 'react'
import Button from '../form/button'
import { Link } from 'react-router-dom'
import { Portfolio } from '../../models/portfolio'

type Props = {
    portfolio:Portfolio
    onPortfolioRemove:(value:string) => void
}

const PortfolioCard = ({portfolio, onPortfolioRemove}: Props) => {
  return (
    <div className='flex flex-col justify-between items-start shadow-xl p-6 rounded-lg'> 
        <Link to={`/company/${portfolio.symbol}/company-profile`}><h3 className='text-lg text-black'>Symbol : {portfolio.symbol}</h3></Link>
        <Link to={`/company/${portfolio.symbol}/company-profile`}><h3 className='text-md mt-2 mb-4 text-black'>Company Name : {portfolio.companyName}</h3></Link>
        <Button onClick={()=>onPortfolioRemove(portfolio.symbol)} title='delete' type='button'/>
    </div>
  ) 
}

export default PortfolioCard