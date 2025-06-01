import React from 'react'
import RegularButton from '../button/regularButton'
import HeroImage from '../../assets/images/hero.png' 
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex justify-center items-center min-h-96 w-full mt-12 mb-24'>
      <div className='flex justify-center items-start w-9/12 h-full p-10'>
        <div className='flex flex-col justify-center items-center w-6/12 mt-12'>
          <h1 className='text-6xl font-semibold'>Financial data without news.</h1>
          <p className='text-xl mt-7 opacity-75 leading-14'>Searh relevant financial documents without fear mongering and fake news.</p>
          <div className='w-full flex justify-start mt-6'><RegularButton style='px-6!' navigateTo='/signup' title='get started 🡢' /></div> 
        </div>
        <div className='flex justify-center items-center w-6/12 h-full'>
            <img className='h-full' src={HeroImage} alt="hero image" />
        </div>
        {/* <div className='flex justify-center items-center w-6/12 h-full'>
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-[#1877F2] hover:scale-125 transition-transform duration-300">
                <FaFacebook />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer"
                className="text-black hover:scale-125 transition-transform duration-300">
                <FaXTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-[#E1306C] hover:scale-125 transition-transform duration-300">
                <FaInstagram />
              </a>
        </div> */}
      </div>
    </div>
  )
}

export default Hero