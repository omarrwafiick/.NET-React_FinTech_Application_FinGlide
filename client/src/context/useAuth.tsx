import React, { useEffect, useState } from "react";
import { UserProfile } from "../models/user"
import { createContext } from "react";  
import { useNavigate } from "react-router-dom";
import { forgetPasswordApi, loginApi, registerApi, resetPasswordApi } from "../services/authApi";
import toaster from 'react-hot-toast';

export type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser:(email:string, userName:string, password:string) => void;
    loginUser:(email:string, password:string) => void;
    forgetPassword:(email:string) => void;
    resetPassword:(password:string) => void;
    logoutUser:() => void;
    isLoggedIn:() => boolean;
    isConfirmed:() => boolean;
}

type Props = {children :React.ReactNode}

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }:Props) =>{
    const navigate = useNavigate();
    const [token, setToken] = useState<string|null>(null);
    const [user, setUser] = useState<UserProfile|null>(null);
    const [isReady, setIsReady] = useState<boolean>(false);
    const [confirmed, setConfirmed] = useState<boolean>(false);

    useEffect(()=>{
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if(user&&token){
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = "Bearer "+ token
        }
        setIsReady(true);
    },[]);

    const registerUser = async (email:string, userName:string, password:string)=>{
        await registerApi(userName, email, password).then((res)=>{
            if(res){
                toaster.success("Account was created successfully");
                navigate("/login");
            }
        }).catch(()=>toaster.error("Network error occured"));
    }

    const loginUser = async (email:string, password:string)=>{
        await loginApi(email, password).then((res)=>{
            if(res){
                localStorage.setItem("token", res.token); 
                const user = {
                    email :res.userDto.email,
                    userName: res.userDto.userName
                }
                localStorage.setItem("user", JSON.stringify(user));
                setToken(res.token);
                setUser(user);
                toaster.success("Logged in successfully");
                navigate("/search");
            }
        }).catch(()=>toaster.error("Network error occured"));
    }

    const forgetPassword = async (email:string)=>{
        await forgetPasswordApi(email).then((res)=>{
            if(res >= 200){ 
                setConfirmed(true);
                toaster.success("Logged in successfully");
                navigate(`/reset-password/${res.result}`);
            }
        }).catch(()=>toaster.error("Network error occured"));
    }

    const resetPassword = async (password:string)=>{
        await resetPasswordApi(password).then((res)=>{
            if(res >= 200){ 
                setConfirmed(false);
                toaster.success("Password was reseted successfully");
                navigate("/login");
            }
        }).catch(()=>toaster.error("Network error occured"));
    }

    const isLoggedIn = ()=> !!user;

    const isConfirmed = ()=> confirmed;

    const logoutUser = ()=> {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken("");
        setUser(null);
        navigate("/");
    }
    return (
    <UserContext.Provider value={{registerUser, loginUser, user, token, logoutUser,isLoggedIn, forgetPassword, resetPassword, isConfirmed}}>
        {isReady ? children : null}
    </UserContext.Provider>)
}
  