import React from 'react'
import { formatRatio } from '../../helpers/formatting'

type Props = {
    title:string,
    subTitle:any
} 

const RatioCard = ({title, subTitle}: Props) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
      <p className="text-base text-gray-800">{formatRatio(subTitle)}</p>
    </div>
  )
}

export default RatioCard