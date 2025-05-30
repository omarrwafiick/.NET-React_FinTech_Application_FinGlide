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
    <div className='w-full h-32'>
        <Input value={value} onChange={(e)=> onChange(e)} type="text" />
        <Button type='button' title='search' onClick={onClick} />
     </div>
  )
}

export default SearchSection