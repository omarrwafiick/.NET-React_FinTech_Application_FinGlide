import { HandleError } from "../helpers/errorHandler"; 
import { 
    CompanyBalanceSheet, 
    CompanyCashFlow,
    CompanyIncomeStatement, 
    CompanyKeyRatios, 
    CompanyProfile, 
    CompanySearch } from "../types/types";
import axios from 'axios'; 
 

const apiBase = "https://financialmodelingprep.com/stable/";

const key = process.env.REACT_APP_FIN_API_KEY

export const searchByCompanyName = async (name:string) : Promise<CompanySearch[]|string> =>{
    try { 
       const result = await axios.get<CompanySearch[]>(`${apiBase}search-name?query=${name}&apikey=${key}`);

       return result.data; 
    } catch (error:any) {
        HandleError(error.message);
    }
};

export const getCompanyProfileBySymbol = async (symbol:any) : Promise<CompanyProfile|string> =>{
    try { 
       const result = await axios.get<CompanyProfile>(`${apiBase}profile?symbol=${symbol}&apikey=${key}`); 
        return result.data;
    } catch (error:any) {
        HandleError(error);
    } 
};

export const getCompanyRatiosBySymbol = async (symbol:any) : Promise<CompanyKeyRatios|string> =>{
    try {
       const result = await axios.get<CompanyKeyRatios>(`${apiBase}key-metrics?symbol=${symbol}&apikey=${key}`); 
        return result.data[0];
    } catch (error:any) {
        HandleError(error);
    }
};

export const getCompanyIncomeStatementBySymbol = async (symbol:any) : Promise<CompanyIncomeStatement[]|string> =>{
    try {
       const result = await axios.get<CompanyIncomeStatement[]>(`${apiBase}income-statement?symbol=${symbol}&apikey=${key}`);
        return result.data;
    } catch (error:any) {
        HandleError(error);
    }
};

export const getCompanyBalanceSheetBySymbol = async (symbol:any) : Promise<CompanyBalanceSheet[]|string> =>{
    try {
       const result = await axios.get<CompanyBalanceSheet[]>(`${apiBase}balance-sheet-statement?symbol=${symbol}&apikey=${key}`);
       console.log(result) 
       return result.data;
    } catch (error:any) {
        HandleError(error);
    } 
};

export const getCompanyCashFlowStatementBySymbol = async (symbol:any) : Promise<CompanyCashFlow[]|string> =>{
    try {
       const result = await axios.get<CompanyCashFlow[]>(`${apiBase}cash-flow-statement?symbol=${symbol}&apikey=${key}`);
        return result.data;
    } catch (error:any) {
        HandleError(error);
    } 
};