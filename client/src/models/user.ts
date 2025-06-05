export type UserProfileResponse = {
    userDto :{ 
        userName:string;
        email:string;
    }
    token: string;
}

export type UserProfile = {
    userName:string;
    email:string;
}