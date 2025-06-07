import { HandleError } from "../helpers/errorHandler"; 
import { UserProfileResponse } from "../models/user";
import { sanitizeText } from "./sanitizer";

const apiBase = "http://localhost:5179/api/finglide/auth/";

export const loginApi = async (email: string, password:string): Promise<UserProfileResponse> => {
    try {
        email = sanitizeText(email);
        password = sanitizeText(password);
        const result = await axios.post<UserProfileResponse>(apiBase+"login",{email, password});
        return result.data;
    } catch (error) {
        HandleError(error);
    }
};

export const registerApi = async (userName: string, email: string, password:string) => {
    try {        
        userName = sanitizeText(userName);
        email = sanitizeText(email);
        password = sanitizeText(password);
        const result = await axios.post(apiBase+"register",{userName, email, password});
        return result.status;
    } catch (error) {
        HandleError(error);
    }
};

export const forgetPasswordApi = async (email: string) : Promise<any> => {
    try {
        email = sanitizeText(email);
        const result = await axios.post(apiBase+"forgetpassword",{email});
        return result.status;
    } catch (error) {
        HandleError(error);
    }
};

export const resetPasswordApi = async (password:string) => {
    try { 
        password = sanitizeText(password);
        const result = await axios.post(apiBase+`resetpassword`,{password});
        return result.status;
    } catch (error) {
        HandleError(error);
    }
};