import React from 'react'

type Props = {
    title:string
    type: 'submit' | 'reset' | 'button'
    onClick: React.MouseEventHandler<HTMLButtonElement>
    style?:string
}

const Button = ({type, onClick, title, style}: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-[#34AFFB] capitalize hover:bg-[#2a96d9] flex justify-center items-center text-white mt-6 w-full font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-200 ${style}`}
    >
      {title}
    </button>
  )
}

export default Button