import React, { JSX, SyntheticEvent } from 'react'
import Card from '../card/card' 
import { CompanySearch } from '../../types/types'
import { v4 as uuid } from 'uuid'

type Props = {
  companies:CompanySearch[],
  onPortfolioCreate: (e:SyntheticEvent, symbol:string) => void,
}

const CardList : React.FC<Props> = ({companies, onPortfolioCreate}: Props) : JSX.Element => {
  return (
    <div className='grid grid-cols-4 gap-12 w-9/12'> 
        {
          companies?.map((c:CompanySearch)=>{
            let id = uuid();
            return <Card
                onPortfolioCreate={onPortfolioCreate}
                key={id}
                id={id}
                searchResult={c}
            /> 

          })
        }
    </div>
  )
}

export default CardList