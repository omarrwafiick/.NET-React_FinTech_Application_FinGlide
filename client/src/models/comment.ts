 
export type Comment = {
    id:number;
    title:string;
    content:string;
    createdAt:Date;
    user:{
        userName: string,
        email: string
    }
}
 