import React from 'react'
import { formatRatio } from '../../helpers/formatting'

type Props = {
    title:string,
    subTitle:any
} 

const RatioCard = ({title, subTitle}: Props) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md m-2 flex flex-col overflow-hidden">
      <h3 className={`capitalize text-gray-800 mb-1 ${title?.length > 45 ? 'text-xs ':'text-sm' }`}>{title}</h3>
      <p className="text-base capitalize text-gray-900 mt-1">{!Number.isNaN(subTitle) ? subTitle : formatRatio(subTitle)}</p>
    </div>
  )
}

export default RatioCard