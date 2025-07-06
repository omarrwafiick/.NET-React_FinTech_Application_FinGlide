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
  const [companyData,setCompanyData] = useState<CompanyKeyRatios>(null);
  //todos: make option to change order in future
  const [commentsOrder,setCommentsOrder] = useState<boolean>(false);
  const [comments,setComments] = useState<Comment[]>([]); 

  const commentsResult = async () =>{
    const result = await GetCommentsApi(ticker, commentsOrder); 
    if(result?.length > 0){ 
        setComments(result);
      }
  } 

  useEffect(()=>{  
    const commentsData = async ()=>{
      await commentsResult(); 
    }
    commentsData(); 
  },[])

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
    <div className='flex flex-col justify-center items-center'>
        { 
          companyData  ?   
          <>
            <RatioList data={Object.fromEntries(Object.entries(companyData).slice(0, 12))} />   
            <div className='border-b-2 bg-black w-full mt-6 mb-6' />
            <div className='w-full flex'>  
              <StockCommentList comments={comments} />
              <AddStockComment getComments={commentsResult} ticker={ticker} />
            </div>
          </>
          : 
          <Loader />
        } 
    </div>
  ) 
}

export default CompanyProfile