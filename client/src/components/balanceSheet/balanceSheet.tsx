import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { CompanyBalanceSheet } from '../../types/types';
import { getCompanyBalanceSheetBySymbol } from '../../services/api';
import toaster from 'react-hot-toast';  
import Loader from '../loader/loader';
import Table from '../table/table';

type Props = {}

const BalanceSheet = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData,setCompanyData] = useState<CompanyBalanceSheet[]>();

  useEffect(() => {
    const data = async ()=>{
      const result = await getCompanyBalanceSheetBySymbol(ticker);
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
    <div> 
      { 
        companyData ? 
        <Table data={companyData} />
        :
        <Loader />
      }
    </div>
  )
}
export default BalanceSheet