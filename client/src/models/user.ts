export type UserProfileResponse = {
    user :{ 
        userName:string;
        email:string;
    }
    token: string;
}

export type UserProfile = {
    userName:string;
    email:string;
}