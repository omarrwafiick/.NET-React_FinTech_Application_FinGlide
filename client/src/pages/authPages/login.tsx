import React from 'react'
import Logo from '../../assets/images/logo.png'
import Input from '../../components/form/input'
import Button from '../../components/form/button'
import { Link } from 'react-router-dom'
type Props = {}

const Login = (props: Props) => { 
  return ( 
    <div className='min-h-screen w-full flex justify-center items-center'>
      <div className='flex justify-center items-center w-8/12'>
         <form className='flex w-5/12 flex-col justify-center items-center shadow-xl p-14 rounded-md'> 
          <img className='h-20' src={Logo} alt="logo" />
          <h1 className='text-3xl capitalize font-medium mt-4 mb-2 opacity-85'>login</h1>
          <Input placeholder='Email' value='' onChange={(e)=>console.log('sd')} type='email' />
          <Input placeholder='Password' value='' onChange={(e)=>console.log('sd')} type='password' />
          <Link to='/forget-password' className="capitalize text-sm mt-4 text-start w-full opacity-70">forget password?</Link>
          <Button type='submit' title='login' onClick={(e)=>console.log('sd')} />
          <div className="text-sm mt-6 text-center w-full opacity-70">Not a member?<Link to='/signup' className='txt-primary'> signup</Link></div>
        </form>
      </div> 
    </div>
  )
}

export default Login