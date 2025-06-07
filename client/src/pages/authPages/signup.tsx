import React, { useContext, useState } from 'react'
import Input from '../../components/form/input'
import { Link } from 'react-router-dom'
import Button from '../../components/form/button'
import Logo from '../../assets/images/logo.png'
import { UserContext, UserContextType } from '../../context/useAuth'
import toaster from 'react-hot-toast';

const Signup = () => { 
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const { registerUser } = useContext<UserContextType>(UserContext);
  
  const handleRegister = async (e) => {
    e.preventDefault();  
    setDisable(true);
    if(password === confirmPassword){ 
      await registerUser(email, userName, password);
    }
    else{
      toaster.error("Passwords does not match")
    }
    setDisable(false);
  };
  
  return (
      <div className='min-h-screen w-full flex justify-center items-center'>
        <div className='flex justify-center items-center w-8/12'>
          <form onSubmit={handleRegister} className='flex w-5/12 flex-col justify-center items-center shadow-xl p-14 rounded-md'> 
            <img className='h-20' src={Logo} alt="logo" />
            <h1 className='text-3xl capitalize font-medium mt-4 mb-2 opacity-85'>signup</h1>
              <Input placeholder='username' value={userName} onChange={(e) => setUserName(e.target.value)} type='text' />
              <Input placeholder='Email' value={email} onChange={(e)=> setEmail((e.target.value))} type='email' /> 
              <Input placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} type='password' /> 
              <Input placeholder='Confirm Password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} type='password' /> 
              <Button disable={disable} type='submit' title='register' />
            <div className="text-sm mt-6 text-center w-full opacity-70">already have an acount?<Link to='/login' className='txt-primary'> login</Link></div>
          </form>
         </div> 
      </div>
  )
}

export default Signup