import React, { useContext, useEffect } from 'react';
import CardList from '../../components/cardlist/cardlist';
import SearchSection from '../../components/searchSection/searchSection';
import { searchByCompanyName } from '../../services/fmpApi';
import { ChangeEvent, useState } from 'react';  
import toaster from 'react-hot-toast'; 
import PortfolioList from '../../components/portfolioList/portfolioList';
import { Portfolio } from '../../models/portfolio';
import { CreatePortfolioApi, DeletePortfolioApi, GetPortfolioApi } from '../../services/portfolio';
import { UserContext, UserContextType } from '../../context/useAuth'; 

const Search = () => {
  const { user } = useContext<UserContextType>(UserContext);
  const [search, setSearch] = useState<string>("");
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
  const [error, setError] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any[]>([]);

  useEffect(()=>{
    const portfolioData = async ()=>{
    const result = await GetPortfolioApi();
      if(result?.length > 0){ 
        setPortfolio(result);
      }
      // else{
      //   toaster.error(`Error : ${result}`); 
      // }
    }
    portfolioData(); 
  },[])

  const onPortfolioCreate = async (e:any, symbol:string)=>{
    e.preventDefault();
    const result = await CreatePortfolioApi(symbol, user.email);
    if(result <= 204){
      toaster.success("Portfolio was added successfully");  
      const val = e.target.value;
      const exists = portfolio.find(x=> x === val);
      if(!exists){
        const updatedPortfolio = [...portfolio, val]
        setPortfolio(updatedPortfolio);
        const result = await GetPortfolioApi(); 
        setPortfolio(result)
      }
    }
    else{
        toaster.error("Stock in not stable at the moment")
    }
  }

  const onPortfolioRemove = async (symbol:string)=>{  
    const result = await DeletePortfolioApi(symbol);
    if(result >= 200){ 
      toaster.success("Deleted successfully")
      const exists = portfolio.find(x=> x.symbol === symbol);
      if(exists){
        const updatedPortfolio = portfolio.filter(x=>x.symbol !== symbol)
        setPortfolio(updatedPortfolio); 
      }
    }
    else{ 
      toaster.error("Network error")
    }
  }

  const hitSearchInput = async (e: ChangeEvent<HTMLInputElement>) => { 
    setSearch(e.target.value);
  }; 

  const hitSearchButton = async ()=>{ 
    if(search.length <= 0) {
      return;
    }
    const result = await searchByCompanyName(search);
    if(typeof result === 'string'){
      setError(result) 
      toaster.error(`Error : ${error}`); 
    }
    else{ 
      console.log(result[0])
      setSearchResult(result); 
    }
  }
 

  return (
    <div className='w-full flex flex-col justify-center mt-12 items-center'> 
        <SearchSection onClick={hitSearchButton} onChange={hitSearchInput} value={search} />
        {error && <>{error}</>}
        <PortfolioList onPortfolioRemove={onPortfolioRemove} portfolio={portfolio} />
        <CardList onPortfolioCreate={onPortfolioCreate} companies={typeof searchResult !== 'string'? searchResult : []} />
    </div>
  ) 
}

export default Search