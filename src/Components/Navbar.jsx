import React from 'react'
import image from '../assets/Group 2.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    
    
    
    
    
    
    <div className='fixed top-0 left-0 right-0  z-50'>

      <nav className='flex justify-center gap-150 '>

       <div className='w-30 h-20'><img src={image} alt="" /></div>
        
        <ul className='flex justify-center gap-10 text-[#FFFFFF] pt-2'>
       <li className='hover:underline'><Link to="/">Home</Link></li>
       <li className='hover:underline'><Link to="/Facilities">Facilities</Link></li>
       <li className='hover:underline'><Link to='/Rooms'>Rooms</Link></li>
       <li className='hover:underline'><Link to='Contact-us'>Contact-us</Link></li>
       </ul>
      </nav>




    </div>
  )
}
