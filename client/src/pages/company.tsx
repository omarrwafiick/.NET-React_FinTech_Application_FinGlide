import React, { useEffect, useState } from 'react'
import { getCompanyProfileBySymbol } from '../services/api'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../types/types'
import Sidebar from '../components/sidebar/sidebar'
import Dashboard from '../components/dashboard/dashboard'
import CompanyCard from '../components/companyCard/companyCard' 
import toaster from 'react-hot-toast'; 
import { formatLargeMonetaryNumber } from '../helpers/formatting'

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
    <div className=''>
      <div>
        <Sidebar />
      </div>
      <div>
        <Dashboard ticker={ticker??""}>
            {company ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="col-span-full flex justify-center">
                  <img src={company.image} alt="Logo" className="w-24 h-24 rounded-full" />
                </div> 
                <CompanyCard title="Company Name" subTitle={company.companyName} /> 
                <CompanyCard title="Price" subTitle={`$${formatLargeMonetaryNumber(company.price)}`} />
                <CompanyCard title="Changes" subTitle={`${company.changes >= 0 ? '+' : ''}${company.changes}`} /> 
                <CompanyCard title="Sector" subTitle={company.sector} /> 
                <div>
                  <p>{company.description}</p>
                </div> 
                <CompanyCard
                  title="Address"
                  subTitle={`${company.address}, ${company.city}, ${company.state} ${company.zip}`}
                />
                <CompanyCard
                  title="Website"
                  subTitle={company.website}
                />
                <CompanyCard title="Description" subTitle={company.description} />
              </div>
            ) : (
              <>*Nothing was found</>
            )}
        </Dashboard>
      </div>
    </div>
  )
}

export default Company