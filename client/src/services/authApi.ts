import { HandleError } from "../helpers/errorHandler"; 
import { UserProfileResponse } from "../models/user";

const apiBase = "http://localhost:5167/api/finglide/";

export const loginApi = async (email: string, password:string): Promise<UserProfileResponse> => {
    try {
        const result = await axios.post<UserProfileResponse>(apiBase+"auth/login",{email, password});
        return result.data;
    } catch (error) {
        HandleError(error);
    }
};

export const registerApi = async (userName: string, email: string, password:string) => {
    try {
        const result = await axios.post(apiBase+"auth/register",{userName, email, password});
        return result.status;
    } catch (error) {
        HandleError(error);
    }
};

export const forgetPasswordApi = async (email: string) : Promise<any> => {
    try {
        const result = await axios.post(apiBase+"auth/forgetpassword",{email});
        return result.data;
    } catch (error) {
        HandleError(error);
    }
};

export const resetPasswordApi = async (resetToken: string, password:string) => {
    try {
        const result = await axios.post(apiBase+`auth/resetpassword/${resetToken}`,{password});
        return result.status;
    } catch (error) {
        HandleError(error);
    }
};