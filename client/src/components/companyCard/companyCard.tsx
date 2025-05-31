import React from 'react'

type Props = {
    title: string,
    subTitle: string
}

const CompanyCard = ({title, subTitle}: Props) => {
  return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
        <p className="text-base text-gray-800">{subTitle}</p>
      </div>
  )
}

export default CompanyCard