import React from 'react'
import Contactus from './Components/Contact-us'
import Facilities from './Components/Facilities'
import Rooms from './Components/Rooms'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'






export default function App() {
  return (
    
    
    
    <div className='bg-[#14274A]/50 w-[1920] h-[1080] '>

      <Navbar/>

      <Routes>
       <Route path="/" element={<Home/>}/> 
     <Route path="Facilities" element={<Facilities />}/>
     <Route path="Rooms" element= {<Rooms/>}/>
     <Route path="Contactus" element={<Contactus/>}/> 



      </Routes>
    
    
    
    
    
    
    
    
    
    
    </div>
 
 
 
 
  )
}

