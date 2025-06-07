import React, { useContext, useState } from 'react'
import Input from '../../components/form/input'
import Button from '../../components/form/button'
import Logo from '../../assets/images/logo.png'
import { UserContext, UserContextType } from '../../context/useAuth'
import { useParams } from "react-router-dom";
import toaster from 'react-hot-toast';

type Props = {}

const ResetPassword = (props: Props) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const { resetPassword } = useContext<UserContextType>(UserContext);
  const { token } = useParams();
  
  const handleResetPassword= async (e) => {
    e.preventDefault();  
    setDisable(true);
    if(password === confirmPassword){  
      await resetPassword(token, password);
    }
    else{
      toaster.error("Passwords does not match")
    }
    setDisable(false);
  };
  return (
     <div className='min-h-screen w-full flex justify-center items-center'>
        <div className='flex justify-center items-center w-8/12'>
          <form onSubmit={handleResetPassword} className='flex w-5/12 flex-col justify-center items-center shadow-xl p-14 rounded-md'> 
            <img className='h-20' src={Logo} alt="logo" />
            <h1 className='text-2xl capitalize font-medium mt-4 mb-2 opacity-85'>reset password</h1> 
              <Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type='password' /> 
              <Input placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type='password' /> 
              <Button disable={disable} type='submit' title='reset' />
           </form>
         </div> 
      </div>
  )
}

export default ResetPassword