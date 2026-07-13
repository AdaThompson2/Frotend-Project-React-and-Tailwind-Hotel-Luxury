import React from 'react'
import imagrr from '../assets/Gym.png'
import pool from '../assets/poolside.jpg'
import spa from '../assets/Spar.jpg'
import swim from '../assets/Swimming.jpg'
import resta from '../assets/Restaurant.jpg'
import laundry from '../assets/Laundry.jpg'
import Testti from './Testti'

export default function Fac() {
  return (
    <div>

        <div className=' text-center pt-10 flex-col gap-7 flex'>

            <h1 className='text-3xl text- text-[#14274A] font-Adobe Garamond Pro font-bold '>FACILITIES</h1>

            <p className='text-[#14274A] font-Montserrat'>We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so <br />
that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure <br />
and our modern luxury resort facilities will help you enjoy the best of all.</p>
        </div>

        <nav>
        <section className='relative '>
            {/* Gym */}
       <div className='h-150 w-200  flex flex-col justify-center ml-70 '><img src={imagrr} alt="" /></div>

       <div>
        <button className='rounded-none bg-[#FFFFFF] absolute bottom-8 ml-130 h-10 w-70 text-3xl font-bold text-[#14274A] '>THE GYM</button>
       </div>
        </section>


       {/* poolside */}
       <section className='relative'>

        <div className='h-150 w-200  flex flex-col justify-center ml-70 '><img src={pool} alt="" /></div>

        <div>
        <button className='rounded-none bg-[#FFFFFF] absolute bottom-13 ml-130 h-10 w-70 text-3xl font-bold 
        text-[#14274A
        ] '>POOL SIDE BAR</button>
       </div>
       </section>
       
       
       
       {/* The spar */}
       <section className='relative'>
       <div className='h-150 w-200  flex flex-col justify-center ml-70 '><img src={spa} alt="" /></div>

       <div>
        <button className='rounded-none bg-[#FFFFFF] absolute bottom-8 ml-130 h-10 w-70 text-3xl 
        font-bold
         text-[#14274A] '>THE SPA</button>
       </div>


       </section>
       {/* swimming pool */}
       <section className='relative'>

      <div className='h-150 w-200  flex flex-col justify-center ml-70 '><img src={swim} alt="" /></div>

       <div>
        <button className='rounded-none bg-[#FFFFFF] absolute bottom-18 ml-130 h-10 w-70 text-3xl 
        font-bold text-[#14274A] '>SWIMMING POOL</button>
       </div>

       </section>
       {/* restaurant */}
       <section className='relative'>

        <div className='h-150 w-200  flex flex-col justify-center ml-70 '><img src={resta} alt="" /></div>

       <div>
        <button className='rounded-none bg-[#FFFFFF] absolute bottom-8 ml-130 h-10 w-70 text-3xl 
        font-bold text-[#14274A] '>RESTAURANT</button>
       </div>
       </section>
       {/* Laundry */}
       <section className='relative'>

        <div className='h-150 w-200  flex flex-col justify-center ml-70 '><img src={laundry} alt="" /></div>
       <div>
        <button className='rounded-none bg-[#FFFFFF] absolute bottom-8 ml-130 h-10 w-70 text-3xl 
        font-bold text-[#14274A] '>LAUNDRY</button>
       </div>
       </section>
       </nav>


         <Testti/>


    </div>
  )
}
