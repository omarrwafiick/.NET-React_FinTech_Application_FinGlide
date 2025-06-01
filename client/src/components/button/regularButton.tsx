import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'outline';
  navigateTo?:string
  style?:string
};

const RegularButton = ({ title, onClick, type = 'button', variant = 'primary', navigateTo, style}: Props) => {
  const baseStyles = 'px-4 py-2 rounded-md font-semibold transition duration-300';
  const primaryStyles = 'bg-[#34AFFB] text-white hover:bg-[#219ce3]';
  const outlineStyles = 'border border-[#34AFFB] text-[#34AFFB] hover:bg-[#34AFFB] hover:text-white';

  const buttonClass = `${baseStyles} ${variant === 'outline' ? outlineStyles : primaryStyles}`;

  return (
    <Link to={navigateTo? navigateTo : ""}>
      <button type={type} onClick={onClick} className={`${buttonClass} ${style}`}>
        <a className="capitalize">{title}</a>
      </button>
    </Link>
  );
};

export default RegularButton;
