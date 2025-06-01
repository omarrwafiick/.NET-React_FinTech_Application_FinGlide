import React from 'react'
import Logo from '../../assets/images/logo.png'

type Props = {}

const Footer = (props: Props) => {
  return (  
    <footer className="w-full bg-white rounded-lg m-4">
        <div className=" w-9/12 max-w-screen-xl mx-auto ">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                  <img className='h-12' src={Logo} alt="logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">FinGlide</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                    <li>
                        <a className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-800 lg:my-8" />
            <span className="block text-sm sm:text-center">© 2025 <a className="hover:underline">FinGlide</a>. All Rights Reserved.</span>
        </div>
    </footer>  
  )
}

export default Footer