import React, { useContext, useRef, useState } from 'react'
import Input from '../../components/form/input'
import Button from '../../components/form/button'
import Logo from '../../assets/images/logo.png'
import { UserContext, UserContextType } from '../../context/useAuth'
 import { getErrorMessage, isStrongPassword } from '../../helpers/validators'

type Props = {}

const ResetPassword = (props: Props) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const { resetPassword } = useContext<UserContextType>(UserContext);
  const passwordRef = useRef<HTMLSpanElement>(null);
  const confirmPasswordRef = useRef<HTMLSpanElement>(null); 

  const handleResetPassword= async (e) => {
    e.preventDefault();  
    let valid = true;
    setDisable(true);

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
      await resetPassword(password);
    }
    setDisable(false);
  };
  return (
     <div className='min-h-screen w-full flex justify-center items-center'>
        <div className='flex justify-center items-center w-8/12'>
          <form onSubmit={handleResetPassword} className='flex w-5/12 flex-col justify-center items-center shadow-xl p-14 rounded-md'> 
            <img className='h-20' src={Logo} alt="logo" />
            <h1 className='text-2xl capitalize font-medium mt-4 mb-8 opacity-85'>reset password</h1> 
            
            <Input placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} type='password' /> 
            <span ref={passwordRef} className="min-h-[1.25rem] text-red-500 text-sm mt-2 mb-1 w-full"></span>

            <Input placeholder='Confirm Password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} type='password' /> 
            <span ref={confirmPasswordRef} className="min-h-[1.25rem] text-red-500 text-sm mt-2 mb-1 w-full"></span>

              <Button disable={disable} type='submit' title='reset' />
           </form>
         </div> 
      </div>
  )
}

export default ResetPassword