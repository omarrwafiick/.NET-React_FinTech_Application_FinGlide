import React from 'react'; 
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

type Props = {}

const Home = (props: Props) => { 
  return (
    <div>
        <Navbar />
        <Hero />
        <Footer />
    </div>
  )
}

export default Home