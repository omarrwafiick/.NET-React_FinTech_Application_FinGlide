import React, { FormEvent, SyntheticEvent, useContext } from 'react'
import Input from '../form/input';
import Button from '../form/button'; 

type Props = {
  onPortfolioCreate: (e:SyntheticEvent, symbol:string) => void,
  symbol: string
}

const AddPortfolio = ({ onPortfolioCreate, symbol}: Props) => {

  const submit = async (e:FormEvent)=>{  
    onPortfolioCreate(e, symbol); 
  }

  return (
    <div>
      {/* <Input value='s' onChange={()=>console.log()} type='text'/> */}
      <Button style='mt-4' onClick={(e)=>submit(e)} title='Add' type='submit' />
    </div>
  )
}

export default AddPortfolio