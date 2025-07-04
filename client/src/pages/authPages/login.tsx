import React, { useContext, useRef, useState } from 'react'
import Logo from '../../assets/images/logo.png'
import Input from '../../components/form/input'
import Button from '../../components/form/button'
import { Link } from 'react-router-dom'
import { UserContext, UserContextType } from '../../context/useAuth'
import { getErrorMessage, isEmailValid, isStrongPassword } from '../../helpers/validators'
 
const Login = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext<UserContextType>(UserContext);
  const [disable, setDisable] = useState(false);
  const passwordRef = useRef<HTMLSpanElement>(null);
  const emailRef = useRef<HTMLSpanElement>(null);
  const [valid, setValid] = useState(true);
 
  const handleLogin = async (e) => {
    e.preventDefault();  
    setDisable(true);

    if(!isEmailValid(email) && emailRef.current){  
      emailRef.current.innerText = getErrorMessage("email");
      setValid(false);
    } else if (emailRef.current) {
      emailRef.current.innerText = "";
    }

    if(!isStrongPassword(password) && passwordRef.current){  
      passwordRef.current.innerText = getErrorMessage("password");
      setValid(false);
    }else if (passwordRef.current) {
      passwordRef.current.innerText = "";
    }
    if(valid){ 
      await loginUser(email, password);
    }
    setValid(true);
    setDisable(false);
  };

  return ( 
    <div className='min-h-screen w-full flex justify-center items-center'>
      <div className='flex justify-center items-center w-8/12'>
         <form onSubmit={handleLogin} className='flex w-5/12 flex-col justify-center items-center shadow-xl p-14 rounded-md'> 
          <img className='h-20' src={Logo} alt="logo" />
          <h1 className='text-3xl capitalize font-medium mt-4 mb-8 opacity-85'>login</h1>

          <Input placeholder='Email' value={email} onChange={(e)=> setEmail((e.target.value))} type='text'
            style={!valid ? 'border-[#FF5733]/70' : 'border-[#34AFFB]/70'} /> 
          <span ref={emailRef} className="min-h-[1.25rem] text-red-500 text-sm mt-2 mb-1 w-full"></span>

          <Input placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} type='password'
            style={!valid ? 'border-[#FF5733]/70' : 'border-[#34AFFB]/70'} /> 
          <span ref={passwordRef} className="min-h-[1.25rem] text-red-500 text-sm mt-2 mb-1 w-full"></span>
           
          <Link to='/forget-password' className="capitalize text-sm mb-4 text-start w-full opacity-70">forget password?</Link>
          <Button disable={disable}  type='submit' title='login' />
          <div className="text-sm mt-6 text-center w-full opacity-70">Not a member?<Link to='/signup' className='txt-primary'> signup</Link></div>
        </form> 
      </div> 
    </div>
  )
}

export default Login