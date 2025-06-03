import React from 'react';
import CardList from '../../components/cardlist/cardlist';
import SearchSection from '../../components/searchSection/searchSection';
import { searchByCompanyName } from '../../services/fmpApi';
import { ChangeEvent, useState } from 'react';
import { CompanySearch } from '../../types/types';
import toaster from 'react-hot-toast'; 
import PortfolioList from '../../components/portfolioList/portfolioList';

type Props = {}

const Search = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [portfolio, setPortfolio] = useState<string[]>(["oasasas", "asasasa","oasasas", "asasasa"]);
  const [error, setError] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[] | string>([]);

  const onPortfolioCreate = (e:any)=>{
    e.preventDefault();
    const val = e.target.value;
    const exists = portfolio.find(x=> x === val);
    if(!exists){
      const updatedPortfolio = [...portfolio, val]
      setPortfolio(updatedPortfolio); 
    }
  }

  const onPortfolioRemove= (value:string)=>{  
    const exists = portfolio.find(x=> x === value);
    if(exists){
      const updatedPortfolio = portfolio.filter(x=>x !== value)
      setPortfolio(updatedPortfolio); 
    }
  }

  const hitSearchInput = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }; 

  const hitSearchButton = async ()=>{ 
    await getCompany();
  }
  const getCompany = async ()=>{
    const result = await searchByCompanyName(search);
    if(typeof result === 'string'){
      setError(result) 
      toaster.error(`Error : ${error}`); 
    }
    else{
     setSearchResult(result?.data); 
    }
  }
  return (
    <div className='w-full flex flex-col justify-center items-center'> 
        <SearchSection onClick={hitSearchButton} onChange={hitSearchInput} value={search} />
        {error && <>{error}</>}
        <PortfolioList onPortfolioRemove={onPortfolioRemove} portfolio={portfolio} />
        <CardList onPortfolioCreate={onPortfolioCreate} companies={typeof searchResult !== 'string'? searchResult : []} />
    </div>
  )
}

export default Search