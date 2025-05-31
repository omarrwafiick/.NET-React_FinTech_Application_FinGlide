import React, { JSX, SyntheticEvent } from 'react'
import { CompanySearch } from '../../types/types';
import AddPortfolio from '../portfolio/addPortfolio';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  searchResult: CompanySearch,
  onPortfolioCreate: (e:SyntheticEvent) => void,
}; 

const Card : React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props) : JSX.Element => {
   
  return (
    <Link to={`company/${searchResult.symbol}/company-profile`} className="bg-white shadow-md rounded-2xl p-4 max-w-sm border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">   
        <div>
          <h2 className="text-xl font-bold text-gray-800">{searchResult.name}</h2>
          <p className="text-sm text-gray-500">{searchResult.symbol.toUpperCase()}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl font-semibold text-gray-800">${searchResult.currency}-{searchResult.stockExchange}</p>
      </div>

      <p className="text-sm text-gray-600">{searchResult.exchangeShortName}</p>

      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
    </Link>
  );
};

export default Card