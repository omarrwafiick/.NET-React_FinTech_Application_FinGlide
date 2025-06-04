import React, { useEffect, useState } from 'react'
import RatioList from '../ratioList/ratioList'
import { CompanyKeyRatios } from '../../types/types';
import { getCompanyRatiosBySymbol } from '../../services/fmpApi'; 
import toaster from 'react-hot-toast'; 
import { useOutletContext } from 'react-router-dom';
import Loader from '../loader/loader';
import AddStockComment from '../addStockComment/addStockComment';
import { Comment } from '../../models/comment';
import StockCommentList from '../stockCommentList/stockCommentList';
import { GetCommentsApi } from '../../services/commentApi';
  
const CompanyProfile = () => { 
  const ticker = useOutletContext<string>();
  const [companyData,setCompanyData] = useState<CompanyKeyRatios>();
  //todos: make option to change order in future
  const [commentsOrder,setCommentsOrder] = useState<boolean>(false);
  const [comments,setComments] = useState<Comment[]|null>([]); 

  useEffect(()=>{  
    const commentsData = async ()=>{
    const result = await GetCommentsApi(ticker, commentsOrder);
      if(result.length > 0){ 
        setComments(result);
      }
      else{
        toaster.error(`Error : ${result}`); 
      }
    }
    commentsData(); 
  },[comments])

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
          companyData && comments ?   
          <>
            <RatioList data={companyData} />   
            <StockCommentList comments={comments} />
            <AddStockComment ticker={ticker} />
          </>
          :
          <Loader />
        } 
    </div>
  ) 
}

export default CompanyProfile