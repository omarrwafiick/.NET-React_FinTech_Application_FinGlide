import React, { SyntheticEvent } from 'react'
import Button from '../form/button'
import { Link } from 'react-router-dom'
import { Portfolio } from '../../models/portfolio'

type Props = {
    portfolio:Portfolio
    onPortfolioRemove:(value:string) => void
}

const PortfolioCard = ({portfolio, onPortfolioRemove}: Props) => {
  return (
    <div className='shadow-xl p-6 rounded-lg'>
        <Link to={`/company/${portfolio.Symbol}/company-profile`}><h3 className='text-xl'>{portfolio.Symbol}</h3></Link>
        <Button onClick={()=>onPortfolioRemove(portfolio.Symbol)} title='delete' type='button'/>
    </div>
  ) 
}

export default PortfolioCard