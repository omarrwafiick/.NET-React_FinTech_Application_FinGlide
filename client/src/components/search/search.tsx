import React, { ChangeEvent, JSX, SyntheticEvent, useState } from 'react'
import Input from '../form/input'

type Props = {
    onChange:(e:ChangeEvent<HTMLInputElement>) => void
    value:string | undefined
}

const Search : React.FC<Props> = ({onChange, value}: Props) : JSX.Element => { 
  return (
    <div className='w-full h-32'>
        <Input value={value} onChange={(e)=> onChange(e)} type="text" />
     </div>
  )
}

export default Search