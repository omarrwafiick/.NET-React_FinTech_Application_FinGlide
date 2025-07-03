import { HandleError } from "../helpers/errorHandler";    
import { Portfolio } from "../models/portfolio";
import axios from "axios";
const apiBase = "http://localhost:5179/api/finglide/portfolios";

export const CreatePortfolioApi = async (symbol:string, email:string) => {
    try {
        const result = await axios.post(apiBase,{symbol, email});
        return result.status;
    } catch (error) {
        HandleError(error);
    }
};

export const GetPortfolioApi = async () : Promise<Portfolio[]> => {
    try {
        const result = await axios.get<Portfolio[]>(apiBase);
        return result.data;
    } catch (error) {
        HandleError(error);
    }
};

export const DeletePortfolioApi = async (symbol:string) => {
    try {
        const result = await axios.delete(apiBase+`/${symbol}`);
        return result.status;
    } catch (error) {
        HandleError(error);
    }
};