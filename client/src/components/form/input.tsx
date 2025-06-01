import React, { ChangeEvent } from 'react'

type Props = {
  onChange:(e:ChangeEvent<HTMLInputElement>) => void,
  value:string | undefined,
  type: "text" | "email" | "password" | "number" | "file",
  placeholder?: string
  style?:string
}

const Input = ({value, onChange, type, placeholder, style}: Props) => {
  return (
    <input
      className={`text-sm w-full h-10 px-4 mt-6 border-2 border-[#34AFFB]/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37FB34] placeholder-gray-400 transition duration-200 ${style}`}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  ) 
}

export default Input