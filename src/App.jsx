import React from 'react'
import Contactus from './Components/Contact-us'
import Facilities from './Components/Facilities'
import Rooms from './Components/Rooms'
import Homes from './Components/Homes'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'






export default function App() {
  return (
    
    
    
    <div className='bg-white'>

      <Navbar/>

      <Routes>
       <Route path="/" element={<Homes />}/> 
     <Route path="Facilities" element={<Facilities />}/>
     <Route path="Rooms" element= {<Rooms/>}/>
     <Route path="Contactus" element={<Contactus/>}/> 



      </Routes>
    
    
    
    
    
    
    
    
    
    
    </div>
 
 
 
 
  )
}

