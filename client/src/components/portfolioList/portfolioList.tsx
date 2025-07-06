import React from 'react'
import PortfolioCard from '../portfolioCard/portfolioCard'
import { v4 as uuid } from 'uuid'
import { Portfolio } from '../../models/portfolio'

type Props = {
    portfolio: Portfolio[]
    onPortfolioRemove:(value:string) => void
}

const PortfolioList = ({portfolio, onPortfolioRemove}: Props) => {
  return (
    <div className='w-9/12 flex flex-col justify-center items-center p-6'> 
        <h3 className='capitalize text-4xl font-bold mb-4'>my portfolio</h3> 
        <div className='w-full grid grid-cols-4 gap-8 m-12'>
            {portfolio?.length > 0 ?
                portfolio.map((p)=>{
                    let id = uuid();
                    return <PortfolioCard onPortfolioRemove={onPortfolioRemove} portfolio={p} key={id} /> 
                })
                : 
                <h4 className=''>Nothing to show</h4>
            }
        </div> 
        <div className='border-b-2 bg-black w-full' />
    </div> 
  )
}

export default PortfolioList