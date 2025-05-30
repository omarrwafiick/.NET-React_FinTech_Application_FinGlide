import React, { SyntheticEvent } from 'react'
import PortfolioCard from '../portfolioCard/portfolioCard'
import { v4 as uuid } from 'uuid'

type Props = {
    portfolio: string[]
    onPortfolioRemove:(value:string) => void
}

const PortfolioList = ({portfolio, onPortfolioRemove}: Props) => {
  return (
    <div>
        <h3>my portfolio</h3> 
        {portfolio.length > 0 ?
            portfolio.map((p)=>{
                let id = uuid();
                return <PortfolioCard onPortfolioRemove={onPortfolioRemove} value={p} key={id} /> 
            })
            : 
            <>nothing to show</>
        }
    </div>
  )
}

export default PortfolioList