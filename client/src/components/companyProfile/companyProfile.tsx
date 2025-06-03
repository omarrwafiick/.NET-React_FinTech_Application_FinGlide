import React, { useEffect, useState } from 'react'
import RatioList from '../ratioList/ratioList'
import { CompanyKeyRatios } from '../../types/types';
import { getCompanyRatiosBySymbol } from '../../services/fmpApi'; 
import toaster from 'react-hot-toast'; 
import { useOutletContext } from 'react-router-dom';
import Loader from '../loader/loader';

type Props = { 
}

const CompanyProfile = (props: Props) => { 
  const ticker = useOutletContext<string>();
  const [companyData,setCompanyData] = useState<CompanyKeyRatios>();

  useEffect(() => {
    const data = async ()=>{
      const result = await getCompanyRatiosBySymbol(ticker);
      if(typeof result !== 'string'){ 
        setCompanyData(result);
      }
      else{
        toaster.error(`Error : ${result}`); 
      }
    }
    data();
  },[]);

  return (
    <div className='w-full'>
        {
          companyData ?   
          <RatioList data={companyData} />
          :
          <Loader />
        }
    </div>
  ) 
}

export default CompanyProfile