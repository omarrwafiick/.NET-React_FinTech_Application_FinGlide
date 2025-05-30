import React from 'react'

type Props = {
    title:string
    type: 'submit' | 'reset' | 'button'
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({type, onClick, title}: Props) => {
  return (
    <button onClick={onClick} type={type}>{title}</button>
  )
}

export default Button