import { HandleError } from "../helpers/errorHandler";   
import { Comment } from "../models/comment";
import { sanitizeText } from "./sanitizer";
import axios from "axios";

const apiBase = "http://localhost:5179/api/finglide/comments";

export const CreateCommentApi = async (title:string , content:string, symbol:string, email:string) => {
    try {
        title = sanitizeText(title);
        content = sanitizeText(content);
        const result = await axios.post(apiBase+`/${symbol}`,{title, content, email});
        return result.status;
    } catch (error) {
        HandleError(error);
    }
};

export const GetCommentsApi = async (symbol:string, isDesc:boolean) : Promise<Comment[]>=>{
    try {
        const result = await axios.get<Comment[]>(apiBase+`/${symbol}/${isDesc}`);
        return result.data;
    } catch (error) {
        HandleError(error);
    }
};
