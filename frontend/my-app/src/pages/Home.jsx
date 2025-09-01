import React, { useEffect, useState } from 'react'
import Background from '../component/Background.jsx'
import Hero from '../component/Hero.jsx'
import Product from './Product.jsx'
import OurPolicy from '../component/OurPolicy.jsx'
import NewLetterBox from '../component/NewLetterBox.jsx'
import Footer from '../component/Footer.jsx'


function Home() {

  let heroData=[
    {text1:"30% of Limited Offer",text2:"style That"},
    {text1:"Discover the best of Bold Fashion",text2:"Limited Time Only!"},
    {text1:"Explore our Best Collection", text2:"Shop Now!"},
    {text1:"Choise Your Perfect Fashion Fit",text2:"Now On Sale!"}
  ]

let  [heroCount,setHeroCount] = useState(0)

useEffect(() => {
  let intervalId;

  // Ensure only one interval is set
  if (!intervalId) {
    intervalId = setInterval(() => {
      setHeroCount(prev => (prev === 3 ? 0 : prev + 1));
    }, 3000);
  }

  return () => clearInterval(intervalId);
}, []);


  return (
<div className='overflow-x-hidden relative top-[70px]'>

     <div className='w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh] bg-gradient-to-l '>
  
<Background heroCount={heroCount} />
<Hero heroCount={heroCount} setHeroCount={setHeroCount} heroData={heroData[heroCount]}/>

    </div>
    <Product />
    <OurPolicy />
    <NewLetterBox />
    <Footer />
    </div>
  )
}

export default Home
