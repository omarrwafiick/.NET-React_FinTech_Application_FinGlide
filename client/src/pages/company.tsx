import React, { useEffect, useState } from 'react'
import { getCompanyProfileBySymbol } from '../services/api'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../types/types'

type Props = {}

const Company = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(()=>{
    const getData = async () => {
      const data = await getCompanyProfileBySymbol(ticker);
      if(typeof data !== 'string'){
        setCompany(data);
      }
    };
    getData();
  },[]);

  return ( 
    <div>
      {
        company ? 
         <div className="p-6 bg-white rounded-lg shadow-md">
          <img src={company.image} alt={`${company.companyName} logo`} className="w-20 h-20 mb-4" />
          <h1 className="text-2xl font-bold">{company.companyName} ({company.symbol})</h1>
          <p className="text-sm text-gray-600 mb-2">{company.industry} | {company.sector}</p>
          <p>📈 Price: ${company.price} ({company.changes >= 0 ? "+" : ""}{company.changes})</p>
          <p>Market Cap: ${company.mktCap.toLocaleString()}</p>
          <p>Beta: {company.beta}</p>
          <p>Vol Avg: {company.volAvg.toLocaleString()}</p>
          <p>Dividend: ${company.lastDiv}</p>
          <p>Range: {company.range}</p>
          <p>CEO: {company.ceo}</p>
          <p>Employees: {company.fullTimeEmployees}</p>
          <p>📍 {company.address}, {company.city}, {company.state} {company.zip}</p>
          <p>Phone: {company.phone}</p>
          <p>Website: <a href={company.website} className="text-blue-600 underline" target="_blank">{company.website}</a></p>
          <p className="mt-4 text-sm text-gray-700">{company.description}</p>
        </div>
        :
        <>Nothing was found</>
      }
    </div>
  )
}

export default Company