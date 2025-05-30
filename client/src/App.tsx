import './index.css';  
import CardList from './components/cardlist/cardlist';
import Search from './components/search/search';
import { searchByCompanyName } from './services/api';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { CompanySearch } from './types/types';
import toaster,{ Toaster } from 'react-hot-toast';

function App() {
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[] | string>([]);

  const onPortfolioCreate = (e:SyntheticEvent)=>{
    e.preventDefault();
  }

  const hitSearchInput = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    await getCompany();
  }; 

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
    <div className="w-full h-screen">
      <Search onChange={hitSearchInput} value={search} />
      {error && <>{error}</>}
      <CardList onPortfolioCreate={onPortfolioCreate} companies={typeof searchResult !== 'string'? searchResult : []} />
      <Toaster />
    </div>
  );
}

export default App;
