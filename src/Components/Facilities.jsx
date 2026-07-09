import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Homesecond from './Homesecond';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Fac from './Fac';


export default function Facilities() {
  return (
    <div>

     
      <div className='relative h-screen bg-[url(/palm-tree.png)] bg-contain bg-center bg-cover bg-no-repeat text-[#FFFFFF] '>
      <nav>
      
      <div className='ml-30  gap-10 pt-40 '>
      <h1 className='font-Montserrat text-4xl '>WELCOME TO</h1>
      <h1 className='font-Adobe Garamond pro text-9xl  font-extrabold gap-5 '>LUXURY</h1>
      <h2 className='font-Adobe Garamond Pro text-4xl font-bold'>HOTELS</h2>
      <p className=''>Book your stay and enjoy Luxury <br />
      redefined at the most affordable rates</p>
      
      
      </div>
      
      
      </nav>
      <section className=''>
      <div className=' ml-140  '><button className=' flex items-center rounded-md 
      bg-[#E0B973] pl-3 pr-3 pt-3 pb-3 gap-3 absolute mt-15'>
        
        <HomeIcon className=' rounded-md  text-[#E0B973] bg-[#FFFFFF]'/>
        BOOK NOW</button></div>
      </section>
      
      <div  className=' items-center ml-150 absolute bottom-1 '>
      
        <h3 className='text-2xl text-[#FFFFFF] '>scroll</h3>
      
        <ExpandCircleDownIcon className='item text-center  !text-6xl'/>
      
      
      </div>
      
      
      
      </div>



<Fac/>







</div>
  )
}
