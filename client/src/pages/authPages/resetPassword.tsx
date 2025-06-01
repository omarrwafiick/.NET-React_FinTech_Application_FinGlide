import React from 'react'
import Input from '../../components/form/input'
import Button from '../../components/form/button'
import Logo from '../../assets/images/logo.png'

type Props = {}

const ResetPassword = (props: Props) => {
  return (
     <div className='min-h-screen w-full flex justify-center items-center'>
        <div className='flex justify-center items-center w-8/12'>
          <form className='flex w-5/12 flex-col justify-center items-center shadow-xl p-14 rounded-md'> 
            <img className='h-20' src={Logo} alt="logo" />
            <h1 className='text-2xl capitalize font-medium mt-4 mb-2 opacity-85'>reset password</h1> 
              <Input placeholder='Password' value='' onChange={(e)=>console.log('sd')} type='password' /> 
              <Input placeholder='Confirm Password' value='' onChange={(e)=>console.log('sd')} type='password' /> 
              <Button type='submit' title='reset' onClick={(e)=>console.log('sd')} />
           </form>
         </div> 
      </div>
  )
}

export default ResetPassword