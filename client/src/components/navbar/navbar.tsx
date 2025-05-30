import React from 'react'
import Logo from './header.png'
import { Link } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav>
      <div>
        <div>
          <Link to='/'><img className='h-12' src={Logo} alt="logo" /></Link>
        </div>
        <div>
          <Link to='/search'><a>search</a></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar