import React from 'react'; 
import Hero from '../../components/hero/hero';

type Props = {}

const Home = (props: Props) => { 
  return (
    <div className='flex justify-center items-center w-full min-h-screen'> 
        <Hero /> 
    </div>
  )
}

export default Home