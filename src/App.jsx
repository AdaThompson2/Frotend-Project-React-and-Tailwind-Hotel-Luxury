import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contactus from './Components/Contact-us'
import Facilities from './Components/Facilities'
import Rooms from './Components/Rooms'
import { Route, Routes } from 'react-router-dom'






export default function App() {
  return (
    
    
    
    <div className=' '>

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

