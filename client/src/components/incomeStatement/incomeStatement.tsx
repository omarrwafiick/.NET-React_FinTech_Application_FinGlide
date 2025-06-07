import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { CompanyIncomeStatement } from '../../types/types';
import { getCompanyIncomeStatementBySymbol } from '../../services/fmpApi';
import toaster from 'react-hot-toast';  
import Loader from '../loader/loader';
import Table from '../table/table';

type Props = {}

const IncomeStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData,setCompanyData] = useState<CompanyIncomeStatement[]>();

  useEffect(() => {
    const data = async ()=>{
      const result = await getCompanyIncomeStatementBySymbol(ticker);
      if(typeof result !== 'string'){ 
        setCompanyData(result);
      }
      else{
        toaster.error(`Error : ${result}`); 
      }
    }
    data();
  },[]);

  // const dataArray = Object.entries(companyData!).map(([key, value]) => ({
  //   key,
  //   value
  // }));
  
  return (
    <div className='overflow-auto'> 
      {  
        companyData?.length > 0  ? 
        <Table data={companyData} />
        :
        <Loader />
      }
    </div>
  )
}

export default IncomeStatement