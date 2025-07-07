import React, { useEffect, useState } from 'react'
import { getCompanyProfileBySymbol } from '../../services/fmpApi'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../types/types'
import Sidebar from '../../components/sidebar/sidebar'
import Dashboard from '../../components/dashboard/dashboard'
import CompanyCard from '../../components/companyCard/companyCard' 
import toaster from 'react-hot-toast'; 
import { formatLargeMonetaryNumber } from '../../helpers/formatting'

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
      else{
        toaster.error(`Error : ${data}`); 
      }
    };
    getData();
  },[]);
 
  return ( 
    <div className='flex'>
      <div className='w-2/12'>
        <Sidebar />
      </div>
      <div className='flex w-9/12'>
        <Dashboard ticker={ticker??""}>
          <h1 className='capitalize text-2xl w-full text-start font-semibold pt-6'>company info :</h1>
            {company ? (
              <div className="w-full grid grid-cols-3 gap-4 pt-6">
                <CompanyCard title="Company Name" subTitle={company.companyName} /> 
                <CompanyCard title="Price" subTitle={`${formatLargeMonetaryNumber(company.price)}`} />
                <CompanyCard title="Changes" subTitle={`${company.change >= 0 ? '+' : ''}${company.change}`} /> 
                <CompanyCard title="Sector" subTitle={company.sector} />  
                <CompanyCard
                  title="Address"
                  subTitle={`${company.address}, ${company.city}, ${company.state} ${company.zip}`}
                />
                <CompanyCard
                  title="Website"
                  subTitle={company.website}
                /> 
              </div>
            ) : (
              <p className='w-full pt-12 pb-12 text-center font-bold'>*Nothing was found</p>
            )}
            <div className='border-b-2 bg-black w-full mt-8 mb-8' />
        </Dashboard>
      </div>
    </div>
  )
}

export default Company