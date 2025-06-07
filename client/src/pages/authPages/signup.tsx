import React, { useContext, useRef, useState } from 'react'
import Input from '../../components/form/input'
import { Link } from 'react-router-dom'
import Button from '../../components/form/button'
import Logo from '../../assets/images/logo.png'
import { UserContext, UserContextType } from '../../context/useAuth' 
import { getErrorMessage, isEmailValid, isLengthBetween, isStrongPassword } from '../../helpers/validators'

const Signup = () => { 
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const { registerUser } = useContext<UserContextType>(UserContext);
  const usernameRef = useRef<HTMLSpanElement>(null);
  const passwordRef = useRef<HTMLSpanElement>(null);
  const emailRef = useRef<HTMLSpanElement>(null);
  const confirmPasswordRef = useRef<HTMLSpanElement>(null); 

  const handleRegister = async (e) => {
    e.preventDefault();  
    let valid = true;
    setDisable(true);

    if(!isLengthBetween(userName, 3, 30) && usernameRef.current){  
      usernameRef.current.innerText = getErrorMessage("userName");
      valid = false;
    }else if (usernameRef.current) {
    usernameRef.current.innerText = "";
    }

    if(!isEmailValid(email) && emailRef.current){  
      emailRef.current.innerText = getErrorMessage("email");
      valid = false;
    } else if (emailRef.current) {
      emailRef.current.innerText = "";
    }

    if(!isStrongPassword(password) && passwordRef.current){  
      passwordRef.current.innerText = getErrorMessage("password");
      valid = false;
    }else if (passwordRef.current) {
      passwordRef.current.innerText = "";
    }

    if(password !== confirmPassword && confirmPasswordRef.current){  
      confirmPasswordRef.current.innerText = getErrorMessage("confirmPassword");
      valid = false;
    } else if (confirmPasswordRef.current) {
      confirmPasswordRef.current.innerText = "";
    }

    if(valid){
      await registerUser(email, userName, password);
    } 
    setDisable(false);
  };
  
  return (
      <div className='min-h-screen w-full flex justify-center items-center'>
        <div className='flex justify-center items-center w-8/12'>
          <form onSubmit={handleRegister} className='flex w-5/12 flex-col justify-center items-center shadow-xl p-14 rounded-md'> 
            <img className='h-20' src={Logo} alt="logo" />
            <h1 className='text-3xl capitalize font-medium mt-4 mb-8 opacity-85'>signup</h1>
              <Input placeholder='username' value={userName} onChange={(e) => setUserName(e.target.value)} type='text' />
              <span ref={usernameRef} className="min-h-[1.25rem] text-red-500 text-sm mt-2 mb-1 w-full"></span>

              <Input placeholder='Email' value={email} onChange={(e)=> setEmail((e.target.value))} type='text' /> 
              <span ref={emailRef} className="min-h-[1.25rem] text-red-500 text-sm mt-2 mb-1 w-full"></span>

              <Input placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} type='password' /> 
              <span ref={passwordRef} className="min-h-[1.25rem] text-red-500 text-sm mt-2 mb-1 w-full"></span>

              <Input placeholder='Confirm Password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} type='password' /> 
              <span ref={confirmPasswordRef} className="min-h-[1.25rem] text-red-500 text-sm mt-2 mb-1 w-full"></span>

              <Button disable={disable} type='submit' title='register' />
            <div className="text-sm mt-6 text-center w-full opacity-70">already have an acount?<Link to='/login' className='txt-primary'> login</Link></div>
          </form>
         </div> 
      </div>
  )
}

export default Signup