import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { CompanyCashFlow } from '../../types/types';
import { getCompanyCashFlowStatementBySymbol } from '../../services/fmpApi';
import toaster from 'react-hot-toast';  
import Loader from '../loader/loader';
import Table from '../table/table';
type Props = {}

const CashFlowStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData,setCompanyData] = useState<CompanyCashFlow[]>();

  useEffect(() => {
    const data = async ()=>{
      const result = await getCompanyCashFlowStatementBySymbol(ticker);
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
export default CashFlowStatement