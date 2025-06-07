import React, { useContext, useRef, useState } from 'react'
import Input from '../../components/form/input' 
import Button from '../../components/form/button'
import Logo from '../../assets/images/logo.png'
import { UserContext, UserContextType } from '../../context/useAuth'
import { getErrorMessage, isEmailValid } from '../../helpers/validators'
type Props = {}

const ForgetPassword = (props: Props) => {
  const [email, setEmail] = useState(""); 
  const [disable, setDisable] = useState(false);
  const { forgetPassword } = useContext<UserContextType>(UserContext);
  const emailRef = useRef<HTMLSpanElement>(null);

  const handleForgetPassword= async (e) => {
    e.preventDefault();  
    let valid = true;
    setDisable(true);

    if(!isEmailValid(email) && emailRef.current){  
      emailRef.current.innerText = getErrorMessage("email");
      valid = false;
    } else if (emailRef.current) {
      emailRef.current.innerText = "";
    }
    if(valid){
      await forgetPassword(email);
    }
    setDisable(false);
  };

  return ( 
       <div className='min-h-screen w-full flex justify-center items-center'>
        <div className='flex justify-center items-center w-8/12'>
          <form onSubmit={handleForgetPassword} className='flex w-5/12 flex-col justify-center items-center shadow-xl p-14 rounded-md'> 
            <img className='h-20' src={Logo} alt="logo" />
            <h1 className='text-2xl capitalize font-medium mt-4 mb-8 opacity-85'>forget password</h1>

            <Input placeholder='Email' value={email} onChange={(e)=> setEmail((e.target.value))} type='text' /> 
            <span ref={emailRef} className="min-h-[1.25rem] text-red-500 text-sm mt-2 mb-1 w-full"></span>

            <Button disable={disable} type='submit' title='send email' />
           </form>
        </div> 
    </div>
  )
}

export default ForgetPassword