import React, { ChangeEvent, JSX, MouseEventHandler, SyntheticEvent, useState } from 'react'
import Input from '../form/input'
import Button from '../form/button'

type Props = {
    onClick:MouseEventHandler<HTMLButtonElement>
    onChange:(e:ChangeEvent<HTMLInputElement>) => void
    value:string | undefined
}

const SearchSection : React.FC<Props> = ({onClick, onChange, value}: Props) : JSX.Element => { 
  return (
    <div className='w-full flex justify-center items-center'> 
      <div className='w-6/12 h-32 flex justify-center items-center p-20 rounded-lg bg-gray-300/30 m-12 shadow-md'>
        <Input style='mt-0 p-0!' value={value} onChange={(e)=> onChange(e)} type="text" />
        <Button style='h-10 w-2 ms-2 mt-0' type='button' title='Go' onClick={onClick} />
      </div>
    </div>
  )
}

export default SearchSection