import React from 'react'
import RatioCard from '../ratioCard/ratioCard'
import { CompanyKeyRatios } from '../../types/types'

type Props = {
  data: CompanyKeyRatios | any
}

const RatioList = ({data}: Props) => {
  return (
    <div className='grid grid-cols-4 gap-6 w-full'>
     {
      Object.entries(data).map(([key, value], i) => ( 
        <RatioCard key={i} title={key} subTitle={value} />
      ))
     }
    </div>
  )
}

export default RatioList