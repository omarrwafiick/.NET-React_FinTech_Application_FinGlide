import { CompanyProfile, CompanySearch } from "../types/types";
import axios from 'axios';

export interface SearchResponse {
    data: CompanySearch[];
}

export const searchByCompanyName = async (name:string) : Promise<SearchResponse|string> =>{
    try {
       const key = process.env.REACT_APP_FIN_API_KEY;
       const result = await axios.get<SearchResponse>(`https://financialmodelingprep.com/stable/search-name?query=${name}&apikey=${key}`);
       return result.data;
    } catch (error:any) {
        console.error(error);
        return error;
    }
}

export const getCompanyProfileBySymbol = async (symbol:any) : Promise<CompanyProfile|string> =>{
    try {
       const key = process.env.REACT_APP_FIN_API_KEY
       const result = await axios.get<CompanyProfile>(`https://financialmodelingprep.com/stable/profile?symbol=${symbol}&apikey=${key}`);
        return result.data;
    } catch (error:any) {
        console.error(error);
        return error;
    }
}