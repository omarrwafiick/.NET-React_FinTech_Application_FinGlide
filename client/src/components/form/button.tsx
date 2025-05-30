import React from 'react'

type Props = {
    type: 'submit' | 'reset' | 'button'
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({type, onClick}: Props) => {
  return (
    <button onClick={onClick} type={type}></button>
  )
}

export default Button