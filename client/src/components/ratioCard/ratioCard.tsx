import React from 'react'
import { formatRatio } from '../../helpers/formatting'

type Props = {
    title:string,
    subTitle:any
} 

const RatioCard = ({title, subTitle}: Props) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-sm capitalize text-gray-800 mb-1">{title}</h3>
      <p className="text-base capitalize text-gray-900">{formatRatio(subTitle)}</p>
    </div>
  )
}

export default RatioCard