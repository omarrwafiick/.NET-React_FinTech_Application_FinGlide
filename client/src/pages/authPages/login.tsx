import React, { useContext, useState } from 'react'
import Logo from '../../assets/images/logo.png'
import Input from '../../components/form/input'
import Button from '../../components/form/button'
import { Link } from 'react-router-dom'
import { UserContext, UserContextType } from '../../context/useAuth'
 
const Login = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext<UserContextType>(UserContext);
  const [disable, setDisable] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();  
    setDisable(true);
    await loginUser(email, password);
    setDisable(false);
  };

  return ( 
    <div className='min-h-screen w-full flex justify-center items-center'>
      <div className='flex justify-center items-center w-8/12'>
         <form onSubmit={handleLogin} className='flex w-5/12 flex-col justify-center items-center shadow-xl p-14 rounded-md'> 
          <img className='h-20' src={Logo} alt="logo" />
          <h1 className='text-3xl capitalize font-medium mt-4 mb-2 opacity-85'>login</h1>
          <Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
          <Input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
          <Link to='/forget-password' className="capitalize text-sm mt-4 text-start w-full opacity-70">forget password?</Link>
          <Button disable={disable}  type='submit' title='login' />
          <div className="text-sm mt-6 text-center w-full opacity-70">Not a member?<Link to='/signup' className='txt-primary'> signup</Link></div>
        </form> 
      </div> 
    </div>
  )
}

export default Login