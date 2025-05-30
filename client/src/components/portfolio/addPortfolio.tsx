import React, { FormEvent, SyntheticEvent } from 'react'
import Input from '../form/input';
import Button from '../form/button';

type Props = {
  onPortfolioCreate: (e:SyntheticEvent) => void,
  symbol: string
}

const AddPortfolio = ({ onPortfolioCreate, symbol}: Props) => {

  const submit = (e:FormEvent)=>{ 
    onPortfolioCreate(e);
  }

  return (
    <form onSubmit={submit}>
      <Input value='s' onChange={()=>console.log()} type='text'/>
      <Button type='submit' />
    </form>
  )
}

export default AddPortfolio