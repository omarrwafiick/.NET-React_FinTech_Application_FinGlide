import React, { ChangeEvent } from 'react'

type Props = {
   onChange:(e:ChangeEvent<HTMLInputElement>) => void,
   value:string | undefined,
   type: "text" | "email" | "password" | "number" | "file"

}

const Input = ({value, onChange, type}: Props) => {
  return (
    <input className='w-full h-12 border-2' value={value} onChange={onChange} type={type} ></input>
  )
}

export default Input