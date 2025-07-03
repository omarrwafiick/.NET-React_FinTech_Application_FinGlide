import React from 'react'
import RegularButton from '../button/regularButton'
import HeroImage from '../../assets/images/hero.png' 
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div className='flex justify-center items-start w-9/12 h-full'>
        <div className='flex flex-col justify-center items-start w-6/12 mt-12'>
          <h1 className='text-7xl font-semibold mt-6'>Financial data without news.</h1>
          <p className='text-lg mt-7 w-10/12 opacity-75 leading-7'>Searh relevant financial documents without fear mongering and fake news.</p>
          <div className='w-full flex justify-start mt-6'><RegularButton style='px-6!' navigateTo='/signup' title='get started 🡢' /></div> 
          <div className="flex justify-start items-center w-full space-x-6 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:scale-125 transition-transform duration-300"
            >
              {FaFacebook({size:25})}
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:scale-125 transition-transform duration-300"
            >
              {FaXTwitter({size:25})}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] hover:scale-125 transition-transform duration-300"
            >
              {FaInstagram({size:25})}
            </a>
          </div>
        </div>
        <div className='flex justify-center items-center w-6/12 h-full'>
            <img className='h-full' src={HeroImage} alt="hero image" />
        </div> 
      </div>
    </div>
  )
}

export default Hero