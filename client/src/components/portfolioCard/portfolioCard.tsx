import React, { SyntheticEvent } from 'react'
import Button from '../form/button'
import { Link } from 'react-router-dom'

type Props = {
    value:string
    onPortfolioRemove:(value:string) => void
}

const PortfolioCard = ({value, onPortfolioRemove}: Props) => {
  return (
    <div className='shadow-xl p-6 rounded-lg'>
        <Link to={`/company/${value}/company-profile`}><h3 className='text-xl'>{value}</h3></Link>
        <Button onClick={()=>onPortfolioRemove(value)} title='delete' type='button'/>
    </div>
  )
}

export default PortfolioCard