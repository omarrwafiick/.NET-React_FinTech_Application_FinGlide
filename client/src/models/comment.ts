 
export type Comment = {
    id:number;
    title:string;
    content:string;
    createdAt:Date;
    userDto:{
        userName: string,
        email: string
    }
}
 