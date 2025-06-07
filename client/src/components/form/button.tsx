import React from 'react'

type Props = {
    title:string
    type: 'submit' | 'reset' | 'button'
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    style?:string
    disable?: boolean
}

const Button = ({type, onClick, title, style, disable}: Props) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      type={type}
      className={`bg-[#34AFFB] capitalize hover:bg-[#2a96d9] flex justify-center items-center text-white w-full font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-200 ${style}`}
    >
      {title}
    </button>
  )
}

export default Button