import { 
    CompanyBalanceSheet, 
    CompanyCashFlow,
    CompanyIncomeStatement, 
    CompanyKeyRatios, 
    CompanyProfile, 
    CompanySearch } from "../types/types";
import axios from 'axios';

export interface SearchResponse {
    data: CompanySearch[];
};

const key = process.env.REACT_APP_FIN_API_KEY

export const searchByCompanyName = async (name:string) : Promise<SearchResponse|string> =>{
    try {
       const result = await axios.get<SearchResponse>(`https://financialmodelingprep.com/stable/search-name?query=${name}&apikey=${key}`);
       return result.data;
    } catch (error:any) {
        console.error(error);
        return error;
    }
};

export const getCompanyProfileBySymbol = async (symbol:any) : Promise<CompanyProfile|string> =>{
    try {
       const result = await axios.get<CompanyProfile>(`https://financialmodelingprep.com/stable/profile?symbol=${symbol}&apikey=${key}`);
        return result.data;
    } catch (error:any) {
        console.error(error);
        return error;
    } 
};

export const getCompanyRatiosBySymbol = async (symbol:any) : Promise<CompanyKeyRatios|string> =>{
    try {
       const result = await axios.get<CompanyKeyRatios>(`https://financialmodelingprep.com/stable/key-metrics?symbo=${symbol}&apikey=${key}`);
        return result.data;
    } catch (error:any) {
        console.error(error); 
        return error;
    }
};

export const getCompanyIncomeStatementBySymbol = async (symbol:any) : Promise<CompanyIncomeStatement[]|string> =>{
    try {
       const result = await axios.get<CompanyIncomeStatement[]>(`https://financialmodelingprep.com/stable/income-statement?symbol${symbol}?limit:40&apikey=${key}`);
        return result.data;
    } catch (error:any) {
        console.error(error); 
        return error;
    }
};

export const getCompanyBalanceSheetBySymbol = async (symbol:any) : Promise<CompanyBalanceSheet[]|string> =>{
    try {
       const result = await axios.get<CompanyBalanceSheet[]>(`https://financialmodelingprep.com/stable/balance-sheet-statement?symbol${symbol}?limit:40&apikey=${key}`);
        return result.data;
    } catch (error:any) {
        console.error(error); 
        return error;
    } 
};

export const getCompanyCashFlowStatementBySymbol = async (symbol:any) : Promise<CompanyCashFlow[]|string> =>{
    try {
       const result = await axios.get<CompanyCashFlow[]>(`https://financialmodelingprep.com/stable/cash-flow-statement?symbol${symbol}?limit:40&apikey=${key}`);
        return result.data;
    } catch (error:any) {
        console.error(error); 
        return error;
    } 
};